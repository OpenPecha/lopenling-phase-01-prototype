import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React from "react";

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
  const actionData = useActionData();
  return (
    <section>
      {openQuestionPortal && (
        <>
          {data.user ? (
            <Form
              ref={ref}
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
                name="QuestionArea"
                hidden
                defaultValue={QuestionArea}
              ></input>
              <input
                type="text"
                name="textId"
                hidden
                defaultValue={data.text.id}
              ></input>
              <input
                placeholder="topic"
                type="text"
                name="topic"
                hidden
                defaultValue={data.text.name}
              ></input>
              <textarea
                style={{ width: 400, height: 100 }}
                name="body"
              ></textarea>
              <button type="submit">click to question</button>
            </Form>
          ) : (
            <div style={{ color: "red" }}>u must login first</div>
          )}
        </>
      )}
      {actionData?.message && <div>{actionData.message}</div>}
    </section>
  );
};

export default React.forwardRef(QuestionForm);
