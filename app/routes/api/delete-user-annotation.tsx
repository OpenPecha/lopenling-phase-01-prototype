import { ActionFunction } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let annotationId = formData.get("annotationId")?.toString();
  if (request.method === "DELETE") {
    try {
      await db.userAnnotation.delete({
        where: {
          id: annotationId,
        },
      });
      return { success: true };
    } catch (e) {
      console.log(e);
      return { success: false };
    }
  }
};
