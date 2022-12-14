import { useActionData, useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React from "react";
import QuestionList, { EachQuestion } from "./QuestionList";

type QuestionFormProps = {
  openQuestionPortal: boolean;
  questionRange:
    | {
        start: number;
        end: number;
      }
    | null
    | undefined;
  editor: Editor;
  questionArea: string;
};

const Question = (
  {
    editor,
    questionArea,
    questionRange,
    openQuestionPortal,
  }: QuestionFormProps,
  ref: any
) => {
  const data = useLoaderData();
  const createQuestion = useFetcher();
  const inputRef = React.useRef(null);
  React.useLayoutEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [openQuestionPortal]);

  return (
    <section>
      {createQuestion.submission ? (
        <EachQuestion
          l={Object.fromEntries(createQuestion.submission?.formData)}
          props={{ editor: editor }}
          linkReady={false}
        />
      ) : data.user ? (
        openQuestionPortal && (
          <createQuestion.Form
            ref={ref}
            method="post"
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#eee",
              alignItems: "center",
            }}
            action="/api/question"
          >
            ask question here: {questionArea}
            <input
              hidden
              defaultValue={editor.state.selection.from}
              name="start"
            ></input>
            <input
              hidden
              defaultValue={editor.state.selection.to}
              name="end"
            ></input>
            <input
              name="QuestionArea"
              hidden
              defaultValue={questionArea}
            ></input>
            <input name="textId" hidden defaultValue={data.text.id}></input>
            <input name="topic" hidden defaultValue={data.text.name}></input>
            <input name="body" ref={inputRef}></input>
            <button type="submit" name="_action" value="createQuestion">
              {createQuestion.submission ? "posting" : "post"}
            </button>
          </createQuestion.Form>
        )
      ) : (
        <div style={{ color: "red" }}>u must login first</div>
      )}

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
    </section>
  );
};

export default React.forwardRef(Question);
