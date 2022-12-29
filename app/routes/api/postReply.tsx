import { ActionFunction } from "@remix-run/node";
import { createPost, deletePost } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";

export const action: ActionFunction = async ({ request }) => {
  const user = await getUserSession(request);
  const formData = await request.formData();
  const topicId = formData.get("topicId");
  try {
    if (request.method === "DELETE") {
      const postId = formData.get("postId");
      await deletePost(postId, user.username);
    }
    if (request.method === "POST") {
      const postString = formData.get("postString");
      await createPost(topicId, postString, user.username);
    }
  } catch (e) {
    return {
      post: e.message,
    };
  }

  return {
    posts: "ok",
  };
};
