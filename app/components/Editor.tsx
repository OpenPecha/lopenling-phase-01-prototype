import { Form, useLoaderData, useTransition } from "@remix-run/react";
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

import HardBreak from "@tiptap/extension-hard-break";
import AddAnnotation from "./AddAnnotation";
import AddAudio from "./AddAudio";
// import ReactAudioPlayer from "react-audio-player";
// import AudioList fro./AudioRecorderist";
import { useTranslation } from "react-i18next";
import AudioList from "./AudioList";
import SearchString from "./SearchText";
import { searchMark } from "~/extension/searchMark";
// import { applySearchMark } from "~/extension/applySearchMark";
import SearchList from "./SearchList";
type selectionType = {
  start: number;
  end: number;
};
const DefaultFontSize = 20;
export default function Editor() {
  const [selectedText, setSelectedText] = React.useState("");
  const [allowAnnotation, setAllowedAnnotation] = React.useState(true);
  const [edit, setEdit] = React.useState(false);
  const [editAudio, setEditAudio] = React.useState(false);
  const [searchLocation, setSearchLocation] = React.useState([]);
  const [openQuestionPortal, setOpenQuestionPortal] =
    React.useState<boolean>(false);
  const [selectedAnnotation, setSelectedAnnotation] = React.useState<number>(0);
  const [selectionSpan, setSelectionSpan] =
    React.useState<selectionType | null>(null);
  const [fontSize, setFontSize] = React.useState<number>(DefaultFontSize);
  const data = useLoaderData();
  const transition = useTransition();
  const formRef = React.useRef<any>(null);
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
  const { t } = useTranslation();
  React.useEffect(() => {
    if (!isAdding) {
      formRef?.current?.reset();
      setOpenQuestionPortal(false);
    }
  }, [isAdding, data.questionlist]);
  const annotationReaction = React.useMemo(
    () => data.annotations,
    [data.annotations]
  );
  const editor = useEditor(
    {
      extensions: [
        Document,
        Paragraph,
        Text,
        Highlight.configure({ multicolor: true }),
        HardBreak,
        annotationMark(data, fetchAnnotation),
        applyAnnotation(data.annotations, data.pageBreakers),
        TextStyle,
        FontSize,
        SelectTextOnRender,
        searchMark(),
        // applySearchMark(searchLocation),
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
        let selectionContent = editor.state.selection.content().toJSON()
          ?.content[0]?.content;
        setAllowedAnnotation(selectionContent?.length !== 1 ? false : true);
        setSelectionSpan({
          start: from,
          end: from === to ? to : to - 1,
        });
        setOpenQuestionPortal(false);
        setSelectedText(editor?.state.doc.textBetween(from, to, ""));
        setEdit(false);
        setEditAudio(false);
      },
    },
    [annotationReaction, searchLocation]
  );

  if (!editor) return null;
  return (
    <div className="editorPage">
      <div
        style={{
          flex: 1,
        }}
      >
        {/* <TextList selectedText={data.text} setTextLoading={setTextLoading} /> */}
        <label>{t("fontSize")}</label>
        <select
          onChange={(e) => setFontSize(parseInt(e.target.value))}
          defaultValue={DefaultFontSize}
        >
          <option value={16}>16</option>
          <option value={18}>18</option>
          <option value={20}>20</option>
          <option value={22}>22</option>
        </select>

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
          <SearchString editor={editor} setSearchLocation={setSearchLocation} />
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
                {t("Question")}
              </button>
              <button
                onClick={shareSelectedText}
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Share
              </button>
              {data.user && allowAnnotation && (
                <button
                  onClick={() => setEdit(true)}
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  annotate
                </button>
              )}
              {data.user && (
                <button
                  onClick={() => setEditAudio(true)}
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  audio
                </button>
              )}
            </BubbleMenu>
          )}
        </div>
      </div>

      <div style={{ overflow: "hidden", flex: 1 }}>
        {edit && (
          <AddAnnotation
            selectionSpan={selectionSpan}
            selectedText={selectedText}
            editor={editor}
            setSelectedAnnotation={setSelectedAnnotation}
          />
        )}
        {editAudio && (
          <AddAudio start={selectionSpan?.start} end={selectionSpan?.end} />
        )}
        <SearchList list={searchLocation} editor={editor} />

        <AudioList editor={editor} />
        <AnnotationList selectedId={selectedAnnotation} editor={editor} />
        <Question
          openQuestionPortal={openQuestionPortal}
          editor={editor}
          questionArea={selectedText}
          ref={formRef}
        />
        {/* <AudioList editor={editor} /> */}
      </div>
    </div>
  );
}
