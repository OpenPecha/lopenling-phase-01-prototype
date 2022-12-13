import { useFetcher, useLoaderData, useTransition } from "@remix-run/react";
import Document from "@tiptap/extension-document";
import Highlight from "@tiptap/extension-highlight";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import React from "react";
import { annotationMark } from "~/extension/annotationMark";
import applyAnnotation from "~/extension/applyAnnotations";
import SelectTextOnRender from "~/extension/selectionOnFirstRender";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import _ from "lodash";
import applyAnnotationFunction from "~/extension/applyAnnotationFunction";
import AnnotationList from "./AnnotationList";
import TextList from "./TextList";
type selectionType = {
  start: number;
  end: number;
};
export default function Editor() {
  const [QuestionArea, setQuestionArea] = React.useState("");
  const [questionRange, setQuestionRange] = React.useState<{
    start: number;
    end: number;
  } | null>();
  const [openQuestionPortal, setOpenQuestionPortal] = React.useState(false);
  const [selectedAnnotation, setSelectedAnnotation] = React.useState(0);
  const data = useLoaderData();
  const transition = useTransition();
  const [textLoading, setTextLoading] = React.useState<Boolean>(false);
  const formRef = React.useRef<any>(null);
  let isAdding =
    transition.state === "submitting" &&
    transition.submission.formData.get("start");
  const fetchAnnotation = (id: number) => {
    setSelectedAnnotation(id);
  };
  React.useEffect(() => {
    if (!isAdding) {
      formRef?.current?.reset();
      setQuestionRange(null);
      setOpenQuestionPortal(false);
    }
  }, [isAdding, data.questionlist]);
  const toggleQuestion = () => {
    setOpenQuestionPortal((prev) => !prev);
  };
  const [selectionSpan, setSelectionSpan] =
    React.useState<selectionType | null>(null);
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
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Highlight.configure({ multicolor: true }),
      annotationMark(data, fetchAnnotation),
      applyAnnotation(data.annotations),
      SelectTextOnRender,
    ],
    content: data.content,
    editable: true,
    editorProps: {
      handleDOMEvents: {
        keydown: (value, event) => {
          if (![37, 38, 39, 40].includes(event.keyCode)) {
            event.preventDefault();
          }
        },
        drop: (value, e) => {
          e.preventDefault();
        },
        dragstart: (value, e) => {
          e.preventDefault();
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
    onUpdate() {},
  });
  const shareSelectedText = () => {
    const url =
      window.location.origin +
      `/texts/${data.text.id}?start=${selectionSpan?.start}&end=${selectionSpan?.end}`;
    navigator.clipboard.writeText(url);
    alert("Copied the text: " + url);
  };
  React.useEffect(() => {
    if (editor && data.annotations && data.content) {
      let content = applyAnnotationFunction(data.annotations, data.content);
      editor.commands.setContent(content, {
        emitUpdate: true,
      });
    }
  }, [data.content, data.annotation]);
  if (!editor) return null;
  return (
    <div className="editorPage">
      <div
        style={{
          flex: 1,
        }}
      >
        <TextList selectedText={data.text} setTextLoading={setTextLoading} />
        <div
          style={{
            maxHeight: "400px",
            minHeight: "300px",
            overflow: "scroll",
            display: textLoading ? "none" : "block",
          }}
        >
          {textLoading && <div>Loading</div>}
          <EditorContent editor={editor} />
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
              {/* <button
                onClick={() => editor.commands.toggleAnnotaion()}
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Edit
              </button> */}
            </BubbleMenu>
          )}
        </div>
      </div>
      <div style={{ overflow: "hidden", flex: 1 }}>
        <AnnotationList selectedId={selectedAnnotation} />
        <QuestionList
          QuestionTitle={"Question for text " + data.text.id}
          list={
            questionRange
              ? data.questionlist.filter(
                  (l) =>
                    l.start > questionRange?.start && l.end < questionRange?.end
                )
              : data.questionlist
          }
          editor={editor}
        />
        {openQuestionPortal && (
          <QuestionForm
            editor={editor}
            QuestionArea={QuestionArea}
            ref={formRef}
          />
        )}
      </div>
    </div>
  );
}
