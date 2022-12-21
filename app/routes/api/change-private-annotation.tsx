import { ActionFunction, json } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  let formData = Object.fromEntries(await request.formData());
  let id = formData.annotationId.toString();
  let currentStatus = formData.currentStatus;
  let privated = currentStatus === "true" ? true : false;
  const res = await db.userAnnotation.update({
    where: {
      id,
    },
    data: {
      private: !privated,
    },
  });
  return json({ success: true });
};
