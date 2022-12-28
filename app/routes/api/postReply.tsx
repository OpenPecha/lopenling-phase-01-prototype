import { ActionFunction } from "@remix-run/node";
import { createPost } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";

export const action: ActionFunction = async ({ request }) => {
  const user = await getUserSession(request);

  const formData = await request.formData();
  const topicId = formData.get("topicId");
  const postString = formData.get("postString");
  try {
    await createPost(topicId, postString, user.username);

    return {
      post: "success",
    };
  } catch (e) {
    return {
      post: "error",
    };
  }
};
