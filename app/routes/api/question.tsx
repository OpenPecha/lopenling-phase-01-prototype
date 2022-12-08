import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { createQuestion } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = () => {
  return redirect("/");
};

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let { _action, questionId, ...value } = Object.fromEntries(formData);
  if (_action === "deleteQuestion") {
    const deleted = await db.question.delete({
      where: {
        id: questionId?.toString(),
      },
    });
  }

  if (_action === "createQuestion") {
    let DiscourseUrl = process.env.DISCOURSE_SITE;
    let api = process.env.DISCOURSE_API_KEY;
    let parent_category_id = process.env.DISCOURSE_QA_CATEGORY_ID;
    const user = await getUserSession(request);

    if (!DiscourseUrl || !api || !parent_category_id) {
      throw new Error("set a DISCOURSE_SITE/DISCOURSE_API_KEY in env");
    }
    let url =
      process.env.ORIGIN_LOCATION +
      `/texts/${value.textId}?start=${value.start}&end=${value.end}`;
    let bodyContent = value.body?.toString();
    let textId = value.textId?.toString();
    await createQuestion(
      user.username,
      value.topic,
      value.QuestionArea,
      addLinktoQuestion(bodyContent, url),
      value.start,
      value.end,
      DiscourseUrl,
      api,
      parent_category_id,
      parseInt(textId)
    );
    return json({ message: "question created" });
  }
  return json({ message: _action });
};

function addLinktoQuestion(question: string, url: string) {
  return `<a href="${url}" target='_blank'>${question}</a>`;
}
