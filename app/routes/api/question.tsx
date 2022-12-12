import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import {
  createQuestion,
  deleteQuestion,
  getposts,
} from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = () => {
  return redirect("/");
};

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();

  let DiscourseUrl = process.env.DISCOURSE_SITE;
  let api = process.env.DISCOURSE_API_KEY;
  let parent_category_id = process.env.DISCOURSE_QA_CATEGORY_ID;
  const user = await getUserSession(request);
  if (!user) throw new Error("user not logged in");
  if (!DiscourseUrl || !api || !parent_category_id) {
    throw new Error("set a DISCOURSE_SITE/DISCOURSE_API_KEY in env");
  }
  let { _action, questionId, postId, topicId, ...value } =
    Object.fromEntries(formData);
  if (_action === "deleteQuestion") {
    const statusCode = await deleteQuestion(
      DiscourseUrl,
      api,
      user.username,
      parseInt(topicId.toString())
    );
    if (statusCode === 200) {
      await db.question.delete({
        where: {
          id: questionId?.toString(),
        },
      });
    }
  }

  if (_action === "createQuestion") {
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
  if (_action === "fetchReplies") {
    const numberTopicId = parseInt(topicId.toString());
    const reply = await getposts(numberTopicId, DiscourseUrl, api);
    return reply;
  }
  return json({ message: _action });
};

function addLinktoQuestion(question: string, url: string) {
  return `<a href="${url}" target='_blank'>${question}</a>`;
}
