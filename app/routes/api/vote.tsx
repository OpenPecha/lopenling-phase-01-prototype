import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { getUserSession } from "~/services/session.server";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const questionId = params.annotation;
  let user = await getUserSession(request);

  let likes = await db.Likes.findMany();
  let dislikes = await db.DisLikes.findMany();
  return {
    user,
    questionId,
    likeCount: likes.length,
    dislikeCount: dislikes.length,
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");
  const questionId = formData.get("questionId");
  const redirectTo = formData.get("redirectTo");

  let { username } = await getUserSession(request);
  let user = await db.user.findUnique({
    where: {
      username,
    },
  });
  if (actionType === "likeVote") {
    try {
      const likes = await db.Likes.create({
        data: {
          userId: user?.id,
          questionId,
        },
      });
    } catch (e) {
      await db.likes.delete({
        where: {
          userId: user?.id,
        },
      });
    }
  }
  if (actionType === "dislikeVote") {
    try {
      const dislike = await db.disLikes.create({
        data: {
          userId: user?.id,
          questionId,
        },
      });
    } catch (e) {
      await db.disLikes.delete({
        where: {
          userId: user?.id,
        },
      });
    }
  }
  return redirect(redirectTo);
};
