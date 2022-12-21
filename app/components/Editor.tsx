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
import Question from "./Question";
import _ from "lodash";
import AnnotationList from "./AnnotationList";
import { FontSize } from "~/extension/fontSize";
import TextStyle from "@tiptap/extension-text-style";
import { computeParagraphIndex } from "~/utils/computeParagraphIndex";
import CustomImage from "~/extension/ImageNode";
type selectionType = {
  start: number;
  end: number;
};
const DefaultFontSize = 20;
export default function Editor() {
  const [questionArea, setQuestionArea] = React.useState("");
  const [paragraphIndex, setParagraphIndex] = React.useState<number>(0);
  const [openQuestionPortal, setOpenQuestionPortal] =
    React.useState<boolean>(false);
  const [selectedAnnotation, setSelectedAnnotation] = React.useState<number>(0);
  const [selectionSpan, setSelectionSpan] =
    React.useState<selectionType | null>(null);
  const [fontSize, setFontSize] = React.useState<number>(DefaultFontSize);
  const data = useLoaderData();
  const userAnnotationFetcher = useFetcher();
  const transition = useTransition();
  const formRef = React.useRef<any>(null);
  const userannotationRef = React.useRef(null);
  let isAdding =
    transition.state === "submitting" &&
    transition.submission.formData.get("start");
  const fetchAnnotation = (id: number) => {
    setSelectedAnnotation(id);
  };

  const shareSelectedText = () => {
    const url =
      window.location.origin +
      `/texts/${data.text.id}?start=${selectionSpan?.start}&end=${selectionSpan?.end}`;
    navigator.clipboard.writeText(url);
    alert("Copied the url with selection: " + url);
  };
  React.useEffect(() => {
    if (!isAdding) {
      formRef?.current?.reset();
      setOpenQuestionPortal(false);
    }
  }, [isAdding, data.questionlist]);

  const editor = useEditor(
    {
      extensions: [
        Document,
        Paragraph,
        Text,
        Highlight.configure({ multicolor: true }),
        CustomImage.configure({
          inline: true,
          allowBase64: true,
        }),
        annotationMark(data, fetchAnnotation),
        applyAnnotation(data.annotations, data.pageBreakers),
        TextStyle,
        FontSize,
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
        let from = editor.state.selection.from;
        let to = editor.state.selection.to;
        console.log(to - from, from, to);
        setSelectionSpan({
          start: from,
          end: to,
        });
        let actualStartData = computeParagraphIndex(from, data.pageBreakers);
        let dif = actualStartData * 2; //offset due to image and p tag

        setParagraphIndex(dif);
        setOpenQuestionPortal(false);
        setQuestionArea(editor?.state.doc.textBetween(from, to, ""));
      },
    },
    [data.annotations]
  );
  if (userAnnotationFetcher.state !== "idle")
    userannotationRef.current.value = "";
  if (!editor) return null;

  return (
    <div className="editorPage">
      <div
        style={{
          flex: 1,
        }}
      >
        {/* <TextList selectedText={data.text} setTextLoading={setTextLoading} /> */}
        <label>fontsize</label>
        <select
          onChange={(e) => setFontSize(parseInt(e.target.value))}
          defaultValue={DefaultFontSize}
        >
          <option value={16}>16</option>
          <option value={18}>18</option>
          <option value={20}>20</option>
          <option value={22}>22</option>
        </select>
        <label htmlFor="showImage">show image</label>
        <input
          id="showImage"
          type="checkbox"
          defaultChecked={true}
          onChange={(e) => {
            editor?.setOptions({
              editorProps: {
                attributes: {
                  class: !e.target.checked ? "hideImage" : "",
                },
              },
            });
          }}
        ></input>
        <div
          style={{
            maxHeight: "100vh",
            minHeight: "60vh",
            height: "80vh",
            overflow: "scroll",
            fontSize: fontSize,
            transform: "all ease-in 2s",
          }}
        >
          <EditorContent
            editor={editor}
            style={{ transition: "all ease 0.3s" }}
          />
          {editor && (
            <BubbleMenu
              className="BubbleMenu"
              editor={editor}
              tippyOptions={{ duration: 800 }}
            >
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenQuestionPortal((prev) => !prev)}
              >
                Question
              </button>
              <button
                onClick={shareSelectedText}
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Share
              </button>
              {data.user && (
                <userAnnotationFetcher.Form
                  method="post"
                  action="/api/create-user-annotation"
                >
                  <input
                    hidden
                    name="textId"
                    defaultValue={data.text.id}
                    readOnly
                  ></input>
                  <input
                    readOnly
                    hidden
                    name="start"
                    value={selectionSpan?.start - paragraphIndex}
                  ></input>
                  <input
                    hidden
                    readOnly
                    name="length"
                    value={selectionSpan?.end - selectionSpan?.start}
                  ></input>
                  <input
                    hidden
                    readOnly
                    name="original"
                    value={editor.state.doc.textBetween(
                      selectionSpan?.start,
                      selectionSpan?.end
                    )}
                  ></input>
                  <input
                    type="text"
                    name="content"
                    style={{ border: "1px solid gray" }}
                    required
                    placeholder="type edit here"
                    ref={userannotationRef}
                  ></input>
                  <input
                    hidden
                    readOnly
                    name="redirectTo"
                    defaultValue={window.location.pathname}
                  ></input>
                  <button
                    disabled={userAnnotationFetcher.state !== "idle"}
                    type="submit"
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    annotate
                  </button>
                </userAnnotationFetcher.Form>
              )}
            </BubbleMenu>
          )}
        </div>
      </div>
      <div style={{ overflow: "hidden", flex: 1 }}>
        <AnnotationList selectedId={selectedAnnotation} editor={editor} />
        <Question
          openQuestionPortal={openQuestionPortal}
          editor={editor}
          questionArea={questionArea}
          ref={formRef}
        />
      </div>
    </div>
  );
}
