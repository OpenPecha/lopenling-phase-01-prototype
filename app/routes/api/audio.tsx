// writeAsyncIterableToWritable is a Node-only utility
import {
  ActionFunction,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
  writeAsyncIterableToWritable,
} from "@remix-run/node";
import type {
  UploadApiOptions,
  UploadApiResponse,
  UploadStream,
} from "cloudinary";
import cloudinary from "cloudinary";
import { getUserSession } from "~/services/session.server";

async function uploadImageToCloudinary(data: AsyncIterable<Uint8Array>) {
  const uploadPromise = new Promise<UploadApiResponse>(
    async (resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          folder: "remix",
        },
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      );
      await writeAsyncIterableToWritable(data, uploadStream);
    }
  );

  return uploadPromise;
}

export const action: ActionFunction = async ({ request }) => {
  const user = await getUserSession(request);

  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5_000_000,
      file: ({ filename }) => `${filename}.webm`,
      directory: `./app/file`,
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler()
  );

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler // <-- we'll look at this deeper next
  );

  const audio = formData.get("audio");

  console.log(audio);
  // ... etc

  return { success: "ok" };
};
