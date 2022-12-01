import { Form, useLoaderData } from "@remix-run/react";
import React from "react";

type QuestionProps = {
  list: [
    {
      id: number;
      topic: string;
      start: number;
      end: number;
      user: {
        username: string;
      };
    }
  ];
};

export default function QuestionList(props: QuestionProps) {
  const { user, text } = useLoaderData();
  if (!props.list) return null;
  return (
    <div>
      <h2 className="text-1xl font-bold underline">Questions</h2>
      {props.list
        .filter((l) => l.textId.toString() === text.id)
        .map((l) => {
          return (
            <div
              key={l.id}
              style={{
                border: "3px solid black",
                borderRadius: "10px",
                background: "#eee",
                marginBlock: 4,
                padding: 4,
              }}
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
              {user?.admin === "true" && (
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
