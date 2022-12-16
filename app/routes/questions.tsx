import { LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import QuestionList from "~/components/QuestionList";
import { getUserSession } from "~/services/session.server";
import { db } from "~/utils/db.server";
import React from "react";

export const loader: LoaderFunction = async ({ params, request }) => {
  const user = await getUserSession(request);
  let questionId = params.question;
  const questionlist = await db.question.findMany({
    include: {
      createrUser: true,
      likes: true,
      dislikes: true,
    },
  });
  return { questionId, questionlist, user };
};

export default function Question() {
  const loaderData = useLoaderData();
  const [selectQuestion, setSelectQuestion] = React.useState(1);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <QuestionList
        selectQuestion={selectQuestion}
        list={loaderData.questionlist}
        editor={null}
      />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
