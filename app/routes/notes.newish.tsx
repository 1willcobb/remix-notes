import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import type { ActionFunctionArgs } from '@remix-run/node'
import { Form, useFetcher, useActionData } from '@remix-run/react'
import {
	unstable_createMemoryUploadHandler as createMemoryUploadHanlder,
	unstable_parseMultipartFormData as parseMultipartFormData,
} from '@remix-run/node'

import { S3Client } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import { useTransition } from 'react'



export const action = async ({ request }: ActionFunctionArgs) => {
  const s3 = new S3Client({ region: 'us-west-2' })
	const Bucket = process.env.AWS_BUCKET
	console.log('hey')

	const uploadHandler = createMemoryUploadHanlder({
		maxPartSize: 1024 * 1024 * 50000,
	})

	const formData = await parseMultipartFormData(request, uploadHandler)
  console.log('formData', JSON.stringify(formData, null, 2))
	const file = formData.get('file-upload')
  console.log(file)

  const Key = "sando6.mp4"
  const Body = file
  
	try {
	  const parallelUploads3 = new Upload({
	    client: s3,
	    params: { Bucket, Key, Body },

	    tags: [
	      /*...*/
	    ], // optional tags
	    queueSize: 4, // optional concurrency configuration
	    partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
	    leavePartsOnError: false, // optional manually handle dropped parts
	  });

	  parallelUploads3.on("httpUploadProgress", (progress) => {
      const percentCompleted = Math.floor((progress.loaded / progress.total) * 100);
      console.log(`Upload Progress: ${percentCompleted}%`);
    });

	  const data = await parallelUploads3.done();
    console.log(data);
    return { location: data.Location, progress: 100 };
	} catch (e) {
	  console.log(e);
	}
	return null
}

export default function FileUploader() {
  const userAction = useActionData()
  const fetcher = useFetcher()

	return (
    <>
    <Form action="/notes/newish" method="post" encType="multipart/form-data">
			<label htmlFor="file-upload-input">Upload File</label>
			<input type="file" id="file-upload-input" name="file-upload" />
			<button type="submit">upload file</button>
		</Form>
    
    {fetcher.state === 'submitting' && <p>Uploading...</p>}
      {userAction ? <video src={userAction.location} controls height={"100px"} width={"100px"} /> : null}
      {userAction === null && <p>Error uploading file. Please try again.</p>}
    </>
		

	)
}


// export function ErrorBoundary(){
//   const error = useRouteError();
//   if (isRouteErrorResponse(error)) {
//     return <div>{error.status}</div>
//   }
//   return <div>{error.status}</div>
// }
