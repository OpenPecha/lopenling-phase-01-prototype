import {
  ActionFunction,
  FormData,
  json,
  LoaderFunction,
} from "@remix-run/node";
import { Form, useFetcher, useLoaderData, useLocation } from "@remix-run/react";
import React from "react";
import { getUserSession } from "~/services/session.server";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const questionId = params.annotation;
  let user = await getUserSession(request);
  try {
    let likes = await db.likes.findMany({
      where: {
        questionId,
      },
    });
    let dislikes = await db.disLikes.findMany({
      where: {
        questionId,
      },
    });
    return {
      user,
      questionId,
      likeCount: likes.length,
      dislikeCount: dislikes.length,
    };
  } catch (e) {
    throw new Error("couldnt load vote data");
  }
};

// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.formData();
//   const actionType = formData.get("_action");
//   const questionId = formData.get("questionId");

//   let { username } = await getUserSession(request);
//   let user = await db.user.findUnique({
//     where: {
//       username,
//     },
//   });
//  if (actionType === "likeVote") {
//   try {
//     const like = await db.likes.findFirst({
//       where: {
//         userId: user?.id,
//       },
//     });
//     if (!like) {
//       await db.likes.create({
//         data: {
//           userId: user?.id,
//           questionId,
//         },
//       });
//     } else {
//       await db.likes.delete({
//         where: {
//           userId: user?.id,
//         },
//       });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }
// if (actionType === "dislikeVote") {
//   try {
//     const dislike = await db.disLikes.findFirst({
//       where: {
//         userId: user?.id,
//       },
//     });
//     if (!dislike) {
//       await db.disLikes.create({
//         data: {
//           userId: user?.id,
//           questionId,
//         },
//       });
//     } else {
//       await db.disLikes.delete({
//         where: {
//           userId: user?.id,
//         },
//       });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }
//   return json({
//     message: actionType,
//   });
// };

export default function embed() {
  let loaderData = useLoaderData();
  return (
    <>
      <Form method="post" style={{ display: "flex", gap: 10 }}>
        <input
          type="hidden"
          name="questionId"
          value={loaderData.questionId}
        ></input>
        <button
          name="_action"
          value="likeVote"
          type="submit"
          disabled={!loaderData.user}
          className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loaderData.likeCount}👍
        </button>
        <button
          name="_action"
          value="dislikeVote"
          disabled={!loaderData.user}
          type="submit"
          className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loaderData.dislikeCount}👎
        </button>
      </Form>
    </>
  );
}
