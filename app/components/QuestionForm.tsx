import { useActionData, useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React, { Ref, useState } from "react";

type QuestionFormProps = {
  editor: Editor;
  QuestionArea: string;
  openQuestionPortal: boolean;
};

const QuestionForm = (
  { editor, QuestionArea, openQuestionPortal }: QuestionFormProps,
  ref
) => {
  const data = useLoaderData();
  const createQuestion = useFetcher();
  const actionData = useActionData();
  const inputRef = React.useRef(null);
  const stateMessage =
    createQuestion.state === "submitting"
      ? "Loading"
      : createQuestion.state === "loading"
      ? "Loaded"
      : null;
  React.useLayoutEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <section>
      {data.user ? (
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
          <input name="QuestionArea" hidden defaultValue={QuestionArea}></input>
          <input name="textId" hidden defaultValue={data.text.id}></input>
          <input
            placeholder="topic"
            name="topic"
            hidden
            defaultValue={data.text.name}
          ></input>
          <input name="body" ref={inputRef}></input>
          <button type="submit" name="_action" value="createQuestion">
            {stateMessage ? stateMessage : "submit"}
          </button>
        </createQuestion.Form>
      ) : (
        <div style={{ color: "red" }}>u must login first</div>
      )}

      {actionData?.message && <div>{actionData.message}</div>}
    </section>
  );
};

export default React.forwardRef(QuestionForm);
