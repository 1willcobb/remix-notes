import { redirect } from "@remix-run/node";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone-esm";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type FileWithPreview = File & { preview: string };

export default function FileUpload() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [uploadQueue, setUploadQueue] = useState<FileWithPreview[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [activeUploads, setActiveUploads] = useState<number>(0);

  // Helper function to create a video thumbnail
  const createVideoThumbnail = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      video.src = URL.createObjectURL(file);
      video.muted = true;
      video.currentTime = 1; // Capture the thumbnail at 1 second

      video.onloadeddata = () => {
        video.play();
      };

      video.onseeked = () => {
        if (context) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
          const dataURL = canvas.toDataURL();
          resolve(dataURL);
        } else {
          reject(new Error("Failed to get canvas context"));
        }
      };

      video.onerror = (error) => {
        reject(error);
      };
    });
  };

  // Handle file drop event
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFilesPromises = acceptedFiles.map(async (file) => {
      let preview = URL.createObjectURL(file);
      if (file.type.startsWith('video/')) {
        try {
          preview = await createVideoThumbnail(file);
        } catch (error) {
          console.error("Error creating video thumbnail", error);
        }
      }
      return Object.assign(file, { preview });
    });

    Promise.all(newFilesPromises).then((newFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setUploadQueue((prevQueue) => [...prevQueue, ...newFiles]);
    });
  }, []);

  // Handle file upload
  const handleUpload = useCallback(async (file: FileWithPreview) => {
    setActiveUploads(prev => prev + 1);
    console.log("Uploading file:", file);

// https://2s6bzrkd69.execute-api.us-west-2.amazonaws.com/ `http://localhost:3333/api/uploads-url`

    try {
      // Get the presigned URL from the API
      const response = await axios.get(`https://2s6bzrkd69.execute-api.us-west-2.amazonaws.com/api/uploads-url`, { 
        params: {
          filename: file.name,
          contentType: file.type,
        },
      });
      const { uploadUrl } = response.data;

      // Upload the file directly to S3 using the presigned URL
      await axios.put(uploadUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [file.name]: percentCompleted,
          }));
        },
      });

      toast.success(`${file.name} uploaded successfully!`);

      // redirect(`/notes/${file.name}`);


    } catch (error) {
      console.log("Error uploading file:", error);
      toast.error(`Failed to upload ${file.name}`);
    } finally {
      setActiveUploads(prev => prev - 1);
    }
  }, []);

  // Process the upload queue, ensuring no more than 3 active uploads at a time
  useEffect(() => {
    const uploadFiles = async () => {
      while (uploadQueue.length > 0 && activeUploads < 3) {
        const fileToUpload = uploadQueue.shift();
        if (fileToUpload) {
          await handleUpload(fileToUpload);
        }
      }
    };

    uploadFiles();
  }, [uploadQueue, activeUploads, handleUpload]);

  // Setup dropzone hooks
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        {...getRootProps()}
        className={`w-80 p-6 text-center border-2 border-dashed rounded-lg cursor-pointer focus:outline-none ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"
        }`}
      >
        <input {...getInputProps()} className="hidden" />
        {isDragActive ? (
          <p className="text-blue-500">Drop the files here...</p>
        ) : (
          <p className="text-gray-500">Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div className="mt-4 space-y-4">
        {files.map((file) => (
          <div key={file.name} className="w-80">
            <div className="flex items-center space-x-4">
              <img src={file.preview} alt="Preview" className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1">
                <div className="h-2 bg-gray-300 rounded">
                  <div
                    className="h-2 bg-blue-500 rounded"
                    style={{ width: `${uploadProgress[file.name] || 0}%` }}
                  ></div>
                </div>
                <p className="text-center text-gray-500 mt-2">{uploadProgress[file.name] || 0}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
