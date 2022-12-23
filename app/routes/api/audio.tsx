import {
  ActionFunction,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import fs from "fs";
import { uploadFile } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const user = await getUserSession(request);
  let data = await request.formData();
  const base64 = data.get("binary");
  const start = data.get("start");
  const length = data.get("length");
  const textId = data.get("textId");
  const userId = data.get("userId");
  // let filename = `comment-${textId}-${start}-${end}.wav`;
  const _action = data.get("action");
  const id = data.get("id");

  if (_action === "create") {
    try {
      let res = await db.audio.create({
        data: {
          userId: userId,
          witnessId: parseInt(textId),
          start: parseInt(start),
          length: parseInt(length),
          base64: base64,
        },
      });

      uploadFile(user.username, base64);

      return { res };
    } catch (e) {
      console.log(e);
      return { e };
    }
  }
  if (_action === "delete") {
    try {
      let res = await db.audio.delete({
        where: { id: parseInt(id) },
      });
      return { res };
    } catch (e) {
      console.log(e);
      return { e };
    }
  }
};
