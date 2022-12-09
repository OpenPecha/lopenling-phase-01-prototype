import { LoaderFunction } from "@remix-run/node";
import { Form, useFetcher, useLocation } from "@remix-run/react";
import { getUserSession } from "~/services/session.server";
import { db } from "~/utils/db.server";

export default function Vote({ questionDetail }) {
  let questionId = questionDetail.id;
  let likeCount = questionDetail.likes.length || 0;
  let dislikeCount = questionDetail.dislikes.length || 0;

  const location = useLocation();
  return (
    <>
      <Form
        action="/api/vote"
        method="post"
        style={{ display: "flex", gap: 10 }}
      >
        <input
          type="hidden"
          name="redirectTo"
          value={location.pathname}
        ></input>
        <input type="hidden" name="questionId" value={questionId}></input>
        <button
          name="_action"
          value="likeVote"
          type="submit"
          className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {likeCount}
        </button>
        <button
          name="_action"
          value="dislikeVote"
          type="submit"
          className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {dislikeCount}
        </button>
      </Form>
    </>
  );
}
