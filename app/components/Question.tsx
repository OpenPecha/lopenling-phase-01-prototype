import { useActionData, useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React from "react";
import QuestionList, { EachQuestion } from "./QuestionList";

type QuestionFormProps = {
  openQuestionPortal: boolean;
  editor: Editor;
  questionArea: string;
};

const Question = (
  { editor, questionArea, openQuestionPortal }: QuestionFormProps,
  ref: any
) => {
  const data = useLoaderData();
  const createQuestion = useFetcher();
  const inputRef = React.useRef(null);
  React.useLayoutEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [openQuestionPortal]);
  React.useEffect(() => {
    if (inputRef.current) inputRef.current.value = "";
  }, [createQuestion.submission]);
  return (
    <section>
      {data.user ? (
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
      <center>
        <h2 className="text-1xl font-bold">
          Questions for text {data.text.name}
        </h2>
      </center>

      {createQuestion.submission && (
        <EachQuestion
          l={Object.fromEntries(createQuestion.submission?.formData)}
          props={{ editor: editor }}
          linkReady={false}
        />
      )}
      <QuestionList
        list={
          editor.isFocused &&
          editor.state.selection.from !== editor.state.selection.to
            ? data.questionlist.filter(
                (l: any) =>
                  l.start >= editor.state.selection.from &&
                  l.end <= editor.state.selection.to
              )
            : data.questionlist
        }
        editor={editor}
      />
    </section>
  );
};

export default React.forwardRef(Question);
