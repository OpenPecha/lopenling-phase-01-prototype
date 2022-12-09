import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";
import Vote from "./Vote";
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
  if (!props.list) return null;
  return (
    <div>
      <h2 className="text-1xl font-bold underline">{props.QuestionTitle}</h2>
      {props.list
        .sort((a, b) => b.topicId - a.topicId)
        .map((l) => (
          <div key={l.id}>
            <EachQuestion props={props} l={l} />
          </div>
        ))}
    </div>
  );
}

function EachQuestion({ l, props, key }: any) {
  const { user } = useLoaderData();
  const deleteQuestion = useFetcher();
  let deleting = deleteQuestion.state !== "idle";

  let showDeleteButton =
    user?.isAdmin || user?.username === l?.createrUser?.username;

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
  return (
    <div
      style={{
        border: "3px solid black",
        borderRadius: "10px",
        background: "#eee",
        marginBlock: 4,
        padding: 4,
        opacity: deleting ? 0.4 : 1,
      }}
      onMouseEnter={() => handleMouseOver(l.start, l.end)}
    >
      {l.topic} - {l.start} - {l.end}
      <br />
      <p>{l?.createrUser?.username}</p>
      <a
        style={{
          textDecoration: "none",
          cursor: "pointer",
          width: "100%",
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white px-2 rounded-full"
        target=" _blank"
        href={`https://lopenling.org/t/${l.topicId}`}
      >
        visit discussion
      </a>
      <Vote questionDetail={l} />
      {showDeleteButton && (
        <deleteQuestion.Form method="post" action="/api/question">
          <input type="hidden" value={l.id} name="questionId"></input>

          <button
            type="submit"
            name="_action"
            value="deleteQuestion"
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
            disabled={deleting}
          >
            {deleting ? "deleting" : "delete"}
          </button>
        </deleteQuestion.Form>
      )}
    </div>
  );
}
