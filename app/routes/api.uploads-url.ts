import { json } from "@remix-run/node";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import invariant from "tiny-invariant";

// Configure the S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const loader = async ({ request }) => {
  // Parse the filename and content type from the request URL
  const url = new URL(request.url);
  const filename = url.searchParams.get("filename");
  const contentType = url.searchParams.get("contentType");
  invariant(filename, "Filename is required");
  invariant(contentType, "Content type is required");

  // Define the S3 bucket name and key
  const Bucket = process.env.AWS_BUCKET;
  const Key = `uploads/${filename}`;

  // Create a presigned URL
  const command = new PutObjectCommand({
    Bucket,
    Key,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

  return json({ uploadUrl });
};
