// writeAsyncIterableToWritable is a Node-only utility
import path from "path";
import fs from "fs";
import {
  ActionFunction,
  LoaderFunction,
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
import { uploadFile } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const user = await getUserSession(request);

  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5_000_000,
      file: ({ filename }) => {
        // setTimeout(() => {
        //   fs.unlink(`file/${filename}.webm`, function (err) {
        //     if (err && err.code == "ENOENT") {
        //       // file doens't exist
        //       console.info("File doesn't exist, won't remove it.");
        //     } else if (err) {
        //       // other errors, e.g. maybe we don't have enough permission
        //       console.error("Error occurred while trying to remove file");
        //     } else {
        //       console.info(`removed`);
        //     }
        //   });
        // }, 4000);
        return `${filename}.webm`;
      },
      directory: `file`,
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler()
  );

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler // <-- we'll look at this deeper next
  );
  let url = await uploadFile(user.username, formData);
  let start = formData.get("start");
  let length = formData.get("length");
  let witnessId = formData.get("witnessId");

  try {
    let dbUser = await db.user.findUnique({
      where: {
        username: user.username,
      },
    });
    if (url)
      await db.audio.create({
        data: {
          userId: dbUser.id,
          url: url,
          start: parseInt(start),
          length: parseInt(length),
          witnessId: parseInt(witnessId),
        },
      });
    return { success: "ok", fileUrl: url };
  } catch (e) {
    throw new Error(e.message);
  }
};

export const loader: LoaderFunction = async ({ params }) => {
  // let textId = params.textId;
  try {
    const audioList = await db.audio.findMany();
    console.log(audioList);
    return audioList;
  } catch (e) {
    console.log(e);
  }
};
