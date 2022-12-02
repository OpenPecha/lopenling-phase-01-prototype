import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import React from "react";
import { getUserSession } from "../services/session.server";
import { getTextList } from "~/services/getText.server";
import QuestionList from "~/components/QuestionList";
type dataType = {
  user: any;
  message: string;
  textList: { id: number; name: string }[] | undefined;
  questionList: any;
};
export const loader: LoaderFunction = async ({
  request,
}): Promise<dataType | undefined> => {
  let textList: { id: number; name: string }[] | undefined;
  let userinFo: any;
  let message: string = "";
  let questionList;
  const user = await getUserSession(request);
  if (user?.email) {
    try {
      let findUserInDatabase = await db.user.findUnique({
        where: { email: user.email },
      });
      userinFo = findUserInDatabase;
    } catch (e) {
      if (e) message = JSON.stringify(e);
    }
  }
  textList = await getTextList();
  questionList = await db.question.findMany({
    include: {
      user: true,
    },
  });

  return { user: userinFo, message, textList, questionList };
};

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let questionId = formData.get("questionId");

  if (questionId) {
    const deleted = await db.question.delete({
      where: {
        id: questionId.toString(),
      },
    });
    return json({ message: "question deleted", deleted });
  }
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <p>Welcome {data.user?.username}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 20,
        }}
      >
        <div
          className="textList"
          style={{ maxHeight: 600, overflowY: "scroll" }}
        >
          {data.textList.map((list: { id: number; name: string }) => {
            return (
              <p key={"textList-" + list.id}>
                <strong>{list.id}</strong>
                <Link to={"/texts/" + list.id} key={list.id} prefetch="intent">
                  {list.name}
                </Link>
              </p>
            );
          })}
        </div>
        <div className="questionList">
          <QuestionList
            list={data.questionList}
            QuestionTitle={"recent Questions"}
          />
        </div>
      </div>
    </div>
  );
}
