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

  let likes = await db.likes.findMany();
  let dislikes = await db.disLikes.findMany();

  return {
    user,
    questionId,
    likeCount: likes.length,
    dislikeCount: dislikes.length,
  };
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
//   if (actionType === "likeVote") {
//     try {
//       const likes = await db.Likes.create({
//         data: {
//           userId: user?.id,
//           questionId,
//         },
//       });
//     } catch (e) {
//       await db.likes.delete({
//         where: {
//           userId: user?.id,
//         },
//       });
//     }
//   }
//   if (actionType === "dislikeVote") {
//     try {
//       const dislike = await db.disLikes.create({
//         data: {
//           userId: user?.id,
//           questionId,
//         },
//       });
//     } catch (e) {
//       await db.disLikes.delete({
//         where: {
//           userId: user?.id,
//         },
//       });
//     }
//   }
//   return json({
//     message: actionType,
//   });
// };

export default function embed() {
  let loaderData = useLoaderData();
  // if (!loaderData.user)
  //   React.useEffect(
  //     () =>
  //       fetcher.submit(
  //         {
  //           login: "login",
  //           redirectTo: location.pathname,
  //           _action: "auth",
  //         },
  //         { method: "post", action: "/sso/login" }
  //       ),
  //     []
  //   );
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
          className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loaderData.likeCount}
        </button>
        <button
          name="_action"
          value="dislikeVote"
          type="submit"
          className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loaderData.dislikeCount}
        </button>
      </Form>
    </>
  );
}
