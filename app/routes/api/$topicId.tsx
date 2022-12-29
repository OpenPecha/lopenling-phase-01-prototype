import { LoaderFunction } from "@remix-run/node";
import { json } from "react-router";
import { getposts } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ params, request }) => {
  const user = await getUserSession(request);
  const topicId = params.topicId;
  const data = await getposts(topicId, user?.username);
  const posts = data?.post_stream?.posts;
  return json(posts);
};
