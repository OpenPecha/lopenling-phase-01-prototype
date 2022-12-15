import _ from "lodash";
import { getUserSession } from "~/services/session.server";
import { ActionFunction, json, MetaFunction, redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { getText, getTextList } from "~/services/getText.server";
import { getAnnotations } from "~/services/getAnnotations.server";
import { getSources } from "~/services/getSources.server";
import Editor from "~/components/Editor";
export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await getUserSession(request);
  let userInfo;
  if (user?.email) {
    try {
      let findUserInDatabase = await db.user.findUnique({
        where: { email: user.email },
      });
      userInfo = findUserInDatabase;
    } catch (e) {
      console.log(e);
    }
  }
  const text = await getText(params);
  const sources = await getSources();
  const { v_annotations, p_annotations }: any = await getAnnotations(params);
  const questionlist = await db.question.findMany({
    include: {
      createrUser: true,
      likes: true,
      dislikes: true,
    },
  });
  let filteredQuestionList = questionlist.filter((question) => {
    return question.textId === parseInt(text?.id);
  });
  const textList = await getTextList();
  let content = "";
  const data = {
    user: userInfo,
    text,
    questionlist: filteredQuestionList,
    textList,
    annotations: v_annotations,
    pageBreakers: p_annotations,
    sources,
    content,
  };
  if (!data) throw new Error("data value is not good");
  return json(data);
};

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let changeText = formData.get("changeText");
  if (changeText) {
    return redirect("/texts/" + changeText);
  }
  return null;
};
export const meta: MetaFunction = ({ data }) => {
  return {
    title: data.text.name,
  };
};
export default function () {
  return (
    <>
      <main>
        <section style={{ flex: 1, border: "1px solid grey", padding: 5 }}>
          <h1 style={{ textAlign: "center" }}>Text Viewer</h1>
          <Editor />
        </section>
      </main>
    </>
  );
}
