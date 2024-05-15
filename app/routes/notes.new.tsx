// File: routes/api/upload.js
import { redirect } from "@remix-run/react";
import {
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";

export const action = async ({ request }) => {
  console.log("uploading file");
  const uploadHandler = createMemoryUploadHandler({
    maxPartSize: 1024 * 1024 * 5,
  });
  const formData = await parseMultipartFormData(request, uploadHandler);

  const file = formData.get("file-upload");

  console.log(file);

  return redirect("/notes");
}

export default function FileUploader() {
  return (
<form method="post" encType="multipart/form-data">
	<input type="file" id="file-upload-input" name="file-upload" accept="image/*" />
	<button type="submit">Upload File</button>
</form>
  );
}
