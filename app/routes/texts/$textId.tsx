import {
  Form,
  useActionData,
  useLoaderData,
  useSearchParams,
  useTransition,
} from "@remix-run/react";
import _ from "lodash";
import * as React from "react";
import { createQuestion } from "~/services/discourseApi";
import Document from "@tiptap/extension-document";
import Highlight from "@tiptap/extension-highlight";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor, BubbleMenu } from "@tiptap/react";
import { getSession, getUserSession } from "~/services/session.server";
import { ActionFunction, json, redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { annotationMark } from "~/extension/annotationMark";
import QuestionList from "~/components/QuestionList";
import { db } from "~/utils/db.server";
import SelectTextOnRender from "~/extension/selectionOnFirstRender";
import { getText, getTextList } from "~/services/getText.server";
import TextList from "~/components/TextList";
import QuestionForm from "~/components/QuestionForm";
import { getAnnotations } from "~/services/getAnnotations.server";
import applyAnnotation from "~/extension/applyAnnotations";
import { appliedAnnotation } from "~/extension/appliedAnnotation";
import { getSources } from "~/services/getSources.server";
import applyAnnotationFunction from "~/extension/applyAnnotationFunction";
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
      if (e) console.log(e);
    }
  }
  const text = await getText(params);
  const sources = await getSources();
  const annotations = await getAnnotations(params);
  const questionlist = await db.question.findMany({
    include: {
      user: true,
    },
  });
  let filteredQuestionList = questionlist.filter((question) => {
    return question.textId === parseInt(text?.id);
  });
  const textList = await getTextList();
  let content = text?.witness.find((t) => t.is_working === true).content;
  const data = {
    user: userInfo,
    text,
    questionlist: filteredQuestionList,
    textList,
    annotations,
    sources,
    content,
  };
  return json(data);
};

export const action: ActionFunction = async ({ request }) => {
  const user = await getUserSession(request);

  let DiscourseUrl = process.env.DISCOURSE_SITE;
  let api = process.env.DISCOURSE_API_KEY;
  let parent_category_id = process.env.DISCOURSE_QA_CATEGORY_ID;
  let formData = await request.formData();
  let changeText = formData.get("changeText");
  if (changeText) {
    return redirect("/texts/" + changeText);
  }
  let topic_name = formData.get("topic");
  let textId = formData.get("textId");
  let bodyContent = formData.get("body");
  let QuestionArea = formData.get("QuestionArea");
  let start = formData.get("start");
  let end = formData.get("end");
  let questionId = formData.get("questionId");

  if (questionId) {
    const deleted = await db.question.delete({
      where: {
        id: questionId.toString(),
      },
    });
    return json({ message: "question deleted", deleted });
  }
  let url =
    process.env.ORIGIN_LOCATION + `/texts/${textId}?start=${start}&end=${end}`;
  if (!DiscourseUrl || !api || !parent_category_id) {
    throw new Error("set a DISCOURSE_SITE/DISCOURSE_API_KEY in env");
  }
  await createQuestion(
    user.username,
    topic_name,
    QuestionArea,
    addLinktoQuestion(bodyContent, url),
    start,
    end,
    DiscourseUrl,
    api,
    parent_category_id,
    parseInt(textId)
  );
  return json({ message: "question created" });
};

type selectionType = {
  start: number;
  end: number;
};

export default function () {
  const data = useLoaderData();
  const transition = useTransition();
  const formRef = React.useRef<any>(null);
  const indexRef = React.useRef(10000);
  const [selectionSpan, setSelectionSpan] =
    React.useState<selectionType | null>(null);
  const [questionRange, setQuestionRange] = React.useState<{
    start: number;
    end: number;
  } | null>();
  let isAdding =
    transition.state === "submitting" &&
    transition.submission.formData.get("start");
  React.useEffect(() => {
    if (selectionSpan?.start === selectionSpan?.end) {
      setQuestionRange(null);
    } else {
      var debounce_fun = _.debounce(function () {
        if (selectionSpan)
          setQuestionRange({
            start: selectionSpan.start - 1,
            end: selectionSpan.end + 1,
          });
      }, 500);
      debounce_fun();
    }
  }, [selectionSpan?.end]);
  React.useEffect(() => {
    if (!isAdding) {
      formRef?.current?.reset();
      setQuestionRange(null);
    }
  }, [isAdding]);
  const [QuestionArea, setQuestionArea] = React.useState("");
  const [openQuestionPortal, setOpenQuestionPortal] = React.useState(false);

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Highlight.configure({ multicolor: true }),
      annotationMark(data),
      applyAnnotation(data.annotations),
      SelectTextOnRender,
    ],
    content: "<p>" + data?.content?.slice(0, indexRef.current) + "</p>",
    editable: true,
    editorProps: {
      handleDOMEvents: {
        keydown: (value, event) => {
          if (![37, 38, 39, 40].includes(event.keyCode)) {
            event.preventDefault();
          }
        },
      },
    },
    onSelectionUpdate: ({ editor }) => {
      setSelectionSpan({
        start: editor.state.selection.from,
        end: editor.state.selection.to,
      });
      setOpenQuestionPortal(false);
      setQuestionArea(
        editor?.state.doc.textBetween(
          editor.state.selection.from,
          editor.state.selection.to,
          ""
        )
      );
    },
  });
  const loadMore = () => {
    indexRef.current = indexRef.current + 10000;
    let content = data.content.slice(0, indexRef.current);
    applyAnnotationFunction(editor, data.annotations, content);
  };

  if (!editor) {
    return null;
  }
  editor.on("selectionUpdate", ({ editor }) => {
    const { from, to } = editor.state.selection;
    setSelectionSpan({ start: from - 1, end: to - 1 });
  });
  const shareSelectedText = () => {
    const url =
      window.location.origin +
      `/texts/${data.text.id}?start=${selectionSpan?.start}&end=${selectionSpan?.end}`;
    navigator.clipboard.writeText(url);
    alert("Copied the text: " + url);
  };
  const toggleQuestion = () => {
    setOpenQuestionPortal((prev) => !prev);
  };
  document.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
  console.log(data);
  return (
    <>
      <main
        style={{
          marginInline: 40,
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className="annotationOptions" />
          <QuestionList
            QuestionTitle={"Question for text " + data.text.id}
            list={
              questionRange
                ? data.questionlist.filter(
                    (l) =>
                      l.start > questionRange?.start &&
                      l.end < questionRange?.end
                  )
                : data.questionlist
            }
            editor={editor}
          />
          <QuestionForm
            editor={editor}
            QuestionArea={QuestionArea}
            openQuestionPortal={openQuestionPortal}
            ref={formRef}
          />
        </div>

        <section style={{ flex: 1, border: "1px solid grey", padding: 5 }}>
          <h1 style={{ textAlign: "center" }}>Text Viewer</h1>
          <TextList selectedText={data.text} />
          <div
            style={{
              maxHeight: "400px",
              minHeight: "300px",
              overflow: "scroll",
            }}
          >
            <EditorContent editor={editor} />
          </div>
          <button onClick={loadMore}>loadmore</button>
          {editor && (
            <BubbleMenu
              className="BubbleMenu"
              editor={editor}
              tippyOptions={{ duration: 100 }}
            >
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={toggleQuestion}
              >
                Question
              </button>
              <button
                onClick={shareSelectedText}
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Share
              </button>
            </BubbleMenu>
          )}
        </section>
      </main>
    </>
  );
}

function addLinktoQuestion(question: string, url: string) {
  return `<a href="${url}" target='_blank'>${question}</a>`;
}
