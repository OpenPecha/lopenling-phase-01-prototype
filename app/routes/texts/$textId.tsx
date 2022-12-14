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
  // let userAnnotation = [];

  let textPromise = getText(params);
  let textListPromise = getTextList();
  let userAnnotation = user
    ? await db.userAnnotation.findMany({
        where: {
          OR: [{ creator_user: { name: user?.name } }, { private: false }],
          witnessId: parseInt(params.textId),
        },
        include: {
          creator_user: true,
        },
      })
    : [];
  console.log(userAnnotation);
  let annotationPromise = await getAnnotations(params, userAnnotation);
  let sourcesPromise = getSources();

  let [text, sources, textList, annotation] = await Promise.all([
    textPromise,
    sourcesPromise,
    textListPromise,
    annotationPromise,
  ]);

  if (typeof textList === "undefined") throw new Error("textList undefined");
  text.name = textList?.find((l) => l?.id === parseInt(text.id))?.name;
  const questionlist = await db.question.findMany({
    include: {
      createrUser: true,
      likes: true,
      dislikes: true,
    },
  });
  // const audio = await db.audio.findMany({
  //   where: {
  //     witnessId: parseInt(text?.id),
  //   },
  //   include: {
  //     creator_user: true,
  //   },
  // });
  let filteredQuestionList = questionlist.filter((question) => {
    return question.textId === parseInt(text?.id);
  });
  const data = {
    user: userInfo,
    text,
    questionlist: filteredQuestionList,
    annotations: annotation?.v_annotations,
    pageBreakers: annotation?.p_annotations,
    sources,
    userAnnotation,
    // audio,
  };
  return json(data, { status: 200 });
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
  let dataName = data?.text?.name;
  let title = dataName ? dataName : "text";
  return {
    title,
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
