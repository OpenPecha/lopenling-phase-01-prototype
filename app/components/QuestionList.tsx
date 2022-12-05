import { Form, useLoaderData } from "@remix-run/react";
import React from "react";

type QuestionProps = {
  list: [
    {
      id: number;
      topic: string;
      topicId: number;
      start: number;
      end: number;
      user: {
        username: string;
      };
    }
  ];
  QuestionTitle: string;
  editor: any;
};

export default function QuestionList(props: QuestionProps) {
  const { user } = useLoaderData();
  const handleMouseOver = (start: number, end: number) => {
    if (props.editor) {
      props.editor
        .chain()
        .focus()
        .setTextSelection(start)
        .scrollIntoView()
        .run();
    }
  };
  if (!props.list) return null;
  return (
    <div>
      <h2 className="text-1xl font-bold underline">{props.QuestionTitle}</h2>
      {props.list
        .sort((a, b) => b.topicId - a.topicId)
        .map((l) => {
          let showDeleteButton =
            user?.isAdmin || user?.username === l.user.username;
          return (
            <div
              key={"question-" + l.id}
              style={{
                border: "3px solid black",
                borderRadius: "10px",
                background: "#eee",
                marginBlock: 4,
                padding: 4,
              }}
              onMouseEnter={() => handleMouseOver(l.start, l.end)}
            >
              {l.topic} - {l.start} - {l.end}
              <br />
              <p>{l.user.username}</p>
              <a
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                target=" _blank"
                href={`https://lopenling.org/t/${l.topicId}`}
              >
                visit discussion
              </a>
              {showDeleteButton && (
                <Form method="post">
                  <input type="hidden" value={l.id} name="questionId"></input>
                  <button
                    type="submit"
                    className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                  >
                    delete
                  </button>
                </Form>
              )}
            </div>
          );
        })}
    </div>
  );
}
