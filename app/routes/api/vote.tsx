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

  let likes = await db.likes.findMany();
  let dislikes = await db.disLikes.findMany();

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
  const questionId = formData.get("questionId")?.toString();
  const redirectTo = formData.get("redirectTo")?.toString();

  let usersession = await getUserSession(request);
  if (!usersession || !redirectTo) return redirect("/");
  let username = usersession.username;
  let user = await db.user.findUnique({
    where: {
      username,
    },
  });
  try {
    const like = await db.likes.findFirst({
      where: {
        userId: user?.id,
        questionId: questionId,
      },
    });
    const dislike = await db.disLikes.findFirst({
      where: {
        userId: user?.id,
        questionId: questionId,
      },
    });
    if (actionType === "likeVote") {
      if (!like) {
        await db.likes.create({
          data: {
            userId: user?.id,
            questionId,
          },
        });
        if (dislike)
          await db.disLikes.delete({
            where: {
              id: dislike.id,
            },
          });
      } else {
        await db.likes.delete({
          where: {
            id: like.id,
          },
        });
      }
    }
    if (actionType === "dislikeVote") {
      if (!dislike) {
        await db.disLikes.create({
          data: {
            userId: user?.id,
            questionId,
          },
        });
        if (like)
          await db.likes.delete({
            where: {
              id: like.id,
            },
          });
      } else {
        await db.disLikes.delete({
          where: {
            id: dislike.id,
          },
        });
      }
    }
  } catch (e) {
    console.log(e);
  }

  return redirect(redirectTo);
};
