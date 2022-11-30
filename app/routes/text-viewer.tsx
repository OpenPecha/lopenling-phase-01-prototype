import {
  Form,
  useActionData,
  useLoaderData,
  useSearchParams,
  useTransition,
} from "@remix-run/react";
import _ from "lodash";
import * as React from "react";
import DiscourseApi from "~/services/discourseApi";
import Document from "@tiptap/extension-document";
import Highlight from "@tiptap/extension-highlight";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor, BubbleMenu } from "@tiptap/react";
import { getSession, getUserSession } from "~/services/session.server";
import { ActionFunction, json, redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { QuestionMark } from "~/extension/questionTag";
import QuestionList from "~/components/Question";
import { db } from "~/utils/db.server";
import SelectTextOnRender from "~/extension/selectionOnFirstRender";
export const loader: LoaderFunction = async ({ request }) => {
  // const text = await fetch("https://raw.githubusercontent.com/OpenPecha-Data/P000001/master/P000001.opf/base/v001.txt")
  const session = await getSession(request.headers.get("Cookie"));
  const { user } = session.data;
  const text =
    "༄༅། །འདུལ་བ་ཀ་བཞུགས་སོ། ། ༄༅༅། །རྒྱ་གར་སྐད་དུ། བི་ན་ཡ་བསྟུ། བོད་སྐད་དུ། འདུལ་བ་གཞི། བམ་པོ་དང་པོ། དཀོན་མཆོག་གསུམ་ལ་ཕྱག་འཚལ་ལོ། །གང་གིས་འཆིང་ རྣམས་ཡང་དག་རབ་བཅད་ཅིང་། །མུ་སྟེགས་ཚོགས་རྣམས་ཐམས་ཅད་རབ་བཅོམ་སྟེ། །སྡེ་དང་བཅས་པའི་བདུད་རྣམས་ངེས་བཅོམ་ནས། །བྱང་ཆུབ་འདི་བརྙེས་དེ་ལ་ ཕྱག་འཚལ་ལོ། །ཁྱིམ་དོན་ཆེ་ཆུང་སྤངས་ཏེ་དང་པོར་རབ་འབྱུང་དཀའ། །རབ་བྱུང་ཐོབ་ནས་ཡུལ་སྤྱད་དག་གིས་དགའ་ཐོབ་དཀའ། །མངོན་དགའ་ཇི་བཞིན་དོན་བསྐྱེད་ཡང་ དག་བྱེད་པ་དཀའ། །ངུར་སྨྲིག་གོས་འཆང་མཁས་པ་ཚུལ་ལས་ཉམས་པ་དཀའ། །གཞི་རྣམས་ཀྱི་སྤྱི་སྡོམ་ལ། རབ་འབྱུང་གསོ་སྦྱོང་གཞི་དང་ནི། །དགག་དབྱེ་དབྱར་དང་ཀོ་ ལྤགས་གཞི། །སྨན་དང་གོས་དང་སྲ་བརྐྱང་དང་། །ཀཽ་ཤཱམ་བཱི་དང་ལས་ཀྱི་གཞི། །དམར་སེར་ཅན་དང་གང་ཟག་དང་། །སྤོ་དང་གསོ་སྦྱོང་བཞག་པ་དང་། །གནས་མལ་དང་ནི་ རྩོད་པ་དང་། །དགེ་འདུན་དབྱེན་རྣམས་བསྡུས་པ་ཡིན། །རབ་ཏུ་འབྱུང་བའི་གཞིའི་སྤྱི་སྡོམ་ལ། ཤཱ་རིའི་བུ་དང་མུ་སྟེགས་ཅན། །དགེ་ཚུལ་གཉིས་དང་བྱ་རོག་སྐྲོད། །དགྲ་བཅོམ་བསད་དང་ལག་རྡུམ་གྱི། །སྡེ་ཚན་ ཡང་དག་བསྡུས་པ་ཡིན། །སྡོམ་ལ། ཤཱ་རིའི་བུ་དང་རབ་འབྱུང་དང་། །བསྙེན་པར་རྫོགས་པར་གནང་བ་དང་། །ཉེ་སྡེས་ཚོགས་ནི་བསྡུས་པ་དང་། །ལྔ་པའི་སྡེ་ཚན་བསྡུས་པ་ཡིན། །བྱང་ཆུབ་སེམས་དཔའ་དགའ་ལྡན་གྱི་གནས་ན་བཞུགས་པ་ན། ཡུལ་ཨང་ག་དག་ན་ཨང་གའི་རྒྱལ་པོ་ཞེས་བྱ་བས་རྒྱལ་སྲིད་འབྱོར་པ། རྒྱས་པ་བདེ་བ་ལོ་ལེགས་པ་སྐྱེ་བོ་དང་མི་མང་པོས་གང་བ་བྱེད་དུ་བཅུག་གོ། །ཡུལ་མ་ག་དྷཱ་དག་ན་ཡང་རྒྱལ་པོ་པད་མ་ཆེན་པོ་ཞེས་བྱ་བས། རྒྱལ་སྲིད་འབྱོར་པ་རྒྱས་པ་བདེ་བ་ལོ་ ལེགས་པ་སྐྱེ་བོ་དང་མི་མང་པོས་གང་བ་བྱེད་དུ་བཅུག་གོ། །རེས་འགའ་ནི་ཨང་གའི་རྒྱལ་པོ་དཔུང་དང་མཐུ་ཆེ་བ་ཡིན་ལ། རེས་འགའ་ནི་རྒྱལ་པོ་པད་མ་ཆེན་པོ་དཔུང་དང་མཐུ་ཆེ་བ་ཡིན་ནོ། །གང་གི་ཚེ་ཨང་གའི་རྒྱལ་པོ་དཔུང་དང་མཐུ་ཆེ་བ་དེའི་ཚེ་ ན། དེས་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ། གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཡུལ་མ་ག་དྷཱ་རྒྱལ་པོའི་ཁབ་མ་གཏོགས་པ་བཅོམ་ནས་ཕྱིར་ལྡོག་པར་ བྱེད་དོ། །གང་གི་ཚེ་རྒྱལ་པོ་པད་མ་ཆེན་པོ་དཔུང་དང་མཐུ་ཆེ་བ་དེའི་ཚེ་ན། དེས་ཀྱང་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ། གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཡུལ་ཨང་ག་ཙམ་པ་མ་གཏོགས་པ་བཅོམ་ནས་ཕྱིར་ལྡོག་པར་བྱེད་དོ། །དེ་ནས་དུས་གཞན་ཞིག་ན་ཨང་གའི་རྒྱལ་པོ་དཔུང་དང་མཐུ་ཆེ་བར་གྱུར་ནས། དེས་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ་གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་ བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཡུལ་མ་ག་དྷཱ་གཞོམ་པར་བརྩམས་པ་དང་། མ་ག་དྷཱ་ན་གནས་པའི་སྐྱེ་བོའི་ཚོགས་ཀྱིས་རྒྱལ་པོ་པད་མ་ཆེན་པོ་ལ་ལྷ་ཨང་གའི་རྒྱལ་པོས་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ་གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཡུལ་མ་ག་དྷཱ་འཇོམས་པར་བགྱིད་དོ་ཞེས་སྦྲོན་པ་དག་བཏང་ངོ་། །རྒྱལ་པོ་པད་མ་ཆེན་པོས་ཀྱང་ཐོས་ནས་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ་གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཨང་གའི་རྒྱལ་པོ་དང་གཡུལ་སྤྲད་པའི་ཕྱིར་འཕགས་སོ། །དེ་ནས་ཨང་གའི་རྒྱལ་པོས་རྒྱལ་པོ་པད་མ་ཆེན་པོའི་གླང་པོ་ཆེ་པའི་ཚོགས་ཐམས་ཅད་ཕྲོགས་ཤིང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ ";
  const questionlist = await db.question.findMany({
    include: {
      user: true,
    },
  });
  const data = { user, text, questionlist };
  return json(data);
};

function createQuestion(
  username: string,
  category_id: number,
  topic_name: FormDataEntryValue | null,
  QuestionArea: FormDataEntryValue | null,
  bodyContent: FormDataEntryValue | null,
  start: FormDataEntryValue | null,
  end: FormDataEntryValue | null
) {
  let url = process.env.DISCOURSE_SITE;
  let api = process.env.DISCOURSE_API_KEY;
  if (!url || !api) {
    throw new Error("set a DISCOURSE_SITE/DISCOURSE_API_KEY in env");
  }
  if (!start || !end) {
    throw new Error("start and end values not available");
  }
  if (!topic_name || !QuestionArea || !bodyContent)
    throw new Error("failed to access Topic Id");
  const apiObj: DiscourseApi = new DiscourseApi(url, api);
  return apiObj.addTopic(
    username,
    category_id,
    topic_name,
    parseInt(start.toString()),
    parseInt(end.toString()),
    QuestionArea,
    bodyContent
  );
}
function addLinktoQuestion(question: string, url: string) {
  return `<a href="${url}" target='_blank'>${question}</a>`;
}
export const action: ActionFunction = async ({ request }) => {
  const user = await getUserSession(request);
  let formData = await request.formData();
  let topic_name = formData.get("topic");
  let bodyContent = formData.get("body");
  let QuestionArea = formData.get("textTopic");
  let start = formData.get("start");
  let end = formData.get("end");
  let questionId = formData.get("questionId");

  if (questionId) {
    const deleted = await db.question.delete({
      where: {
        id: questionId.toString(),
      },
    });
    return json({ message: "question deleted" });
  }
  let url =
    process.env.ORIGIN_LOCATION + `/text-viewer?start=${start}&end=${end}`;
  await createQuestion(
    user.username,
    55,
    topic_name,
    QuestionArea,
    addLinktoQuestion(bodyContent, url),
    start,
    end
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
  const actionData = useActionData();
  const formRef = React.useRef<any>(null);
  const [selectionSpan, setSelectionSpan] = React.useState<selectionType>(null);
  let isAdding =
    transition.state === "submitting" &&
    transition.submission.formData.get("start");
  React.useEffect(() => {
    if (selectionSpan?.start === selectionSpan?.end) {
      setQuestionRange(null);
    } else {
      var debounce_fun = _.debounce(function () {
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
    }
  }, [isAdding]);

  const [questionRange, setQuestionRange] = React.useState(null);
  const [QuestionArea, setQuestionArea] = React.useState("");
  const [openQuestionPortal, setOpenQuestionPortal] = React.useState(false);

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Highlight.configure({ multicolor: true }),
      QuestionMark,
      SelectTextOnRender,
    ],
    content: `<p>${data.text}</p>`,
    editable: true,
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
      `/text-viewer?start=${selectionSpan.start}&end=${selectionSpan.end}`;
    navigator.clipboard.writeText(url);
    alert("Copied the text: " + url);
  };
  const toggleQuestion = () => {
    setOpenQuestionPortal((prev) => !prev);
  };
  document.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });

  return (
    <>
      <main
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <div style={{ overflow: "hidden", flex: 1 }}>
          <QuestionList
            list={
              questionRange
                ? data.questionlist.filter(
                    (l) =>
                      l.start > questionRange?.start &&
                      l.end < questionRange?.end
                  )
                : data.questionlist
            }
          />
          <section>
            {openQuestionPortal && (
              <Form
                ref={formRef}
                method="post"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#eee",
                  alignItems: "center",
                }}
              >
                ask question here: {QuestionArea}
                <input
                  type="hidden"
                  defaultValue={editor.state.selection.from}
                  name="start"
                ></input>
                <input
                  type="hidden"
                  defaultValue={editor.state.selection.to}
                  name="end"
                ></input>
                <input
                  type="text"
                  name="textTopic"
                  hidden
                  defaultValue={QuestionArea}
                ></input>
                <input
                  placeholder="topic"
                  type="text"
                  name="topic"
                  hidden
                  defaultValue={"text-" + Math.random()}
                ></input>
                <textarea
                  style={{ width: 400, height: 100 }}
                  name="body"
                ></textarea>
                <button type="submit">click to question</button>
              </Form>
            )}
            {actionData?.message && <div>{actionData.message}</div>}
          </section>
        </div>

        <section style={{ flex: 1, border: "1px solid grey", padding: 10 }}>
          <h1 style={{ textAlign: "center" }}>Text Viewer</h1>
          <EditorContent editor={editor} />
          {editor && (
            <BubbleMenu
              className="BubbleMenu"
              editor={editor}
              tippyOptions={{ duration: 100 }}
            >
              <button
                onClick={toggleQuestion}
                className={editor?.isActive("bold") ? "is-active" : ""}
              >
                Question
              </button>

              <button onClick={shareSelectedText}>Share</button>
            </BubbleMenu>
          )}
        </section>
      </main>
    </>
  );
}
