import { ActionFunction, redirect } from "@remix-run/node";
import { getUserSession } from "~/services/session.server";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  let form = await request.formData();
  let witnessId = form.get("textId")?.toString();
  let start = form.get("start")?.toString();
  let length = form.get("length")?.toString();
  let redirectTo = form.get("redirectTo");
  let content = form.get("content");
  let original = form.get("original");
  let user = await getUserSession(request);
  let userFromDatabase = await db.user.findUnique({
    where: {
      email: user.email,
    },
  });
  if (!userFromDatabase || !witnessId || !start || !length)
    throw new Error("required fields are missing");
  let data = {
    witnessId: parseInt(witnessId),
    userId: userFromDatabase.id,
    start: parseInt(start),
    length: parseInt(length),
    type: "V",
    original,
    content,
  };
  try {
    const createAnnotation = await db.userAnnotation.create({
      data,
    });
    console.log(createAnnotation);
  } catch (e) {
    console.log(e);
  }
  let redirectToUrl = redirectTo?.toString();
  if (!redirectToUrl) throw new Error("redirectUrl error");
  return redirect(redirectToUrl);
};

export default function Sho() {
  return <div>hi</div>;
}
