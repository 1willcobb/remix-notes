import { Readable } from 'stream'
import type { UploadHandler } from '@remix-run/node'
import { S3Client } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'

const {
  AWS_BUCKET,
  AWS_REGION,
  AWS_ENDPOINT,
  AWS_ACCESS,
  AWS_SECRET,
} = process.env

if (!AWS_BUCKET) {
  throw new Error(`Storage is missing required configuration.`)
}

if (!AWS_REGION) {
  throw new Error(`Storage is missing required configuration.`)
}

if (!AWS_ACCESS) {
  throw new Error(`Storage is missing required configuration.`)
}

if (!AWS_ENDPOINT) {
  throw new Error(`Storage is missing required configuration.`)
}

if (!AWS_SECRET) {
  throw new Error(`Storage is missing required configuration.`)
}

const storage = new S3Client({
  endpoint: AWS_ENDPOINT,
  credentials: {
    accessKeyId: AWS_ACCESS,
    secretAccessKey: AWS_SECRET,
  },
  region: AWS_REGION,
})

export async function uploadToS3(stream: Readable, filename: string) {
  return new Upload({
    client: storage,
    leavePartsOnError: false,
    params: {
      Bucket: AWS_BUCKET,
      Key: filename,
      Body: stream,
    },
  }).done()
}

export const uploadHandler: UploadHandler = async ({ data, filename }) => {
  if (!filename) {
    return ''
  }

  const stream = Readable.from(data)
  const upload = await uploadToS3(stream, filename)

  if (upload.$metadata.httpStatusCode === 200) {
    return filename
  }

  return ''
}