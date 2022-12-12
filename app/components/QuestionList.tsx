import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";
import Vote from "./Vote";
type QuestionProps = {
  list: [
    {
      id: number;
      topic: string;
      postId: number;
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
  const deleteFetcher = useFetcher();
  const replyFetcher = useFetcher();
  let deleting = deleteFetcher.state !== "idle";
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
        <deleteFetcher.Form method="post" action="/api/question">
          <input type="hidden" value={l.id} name="questionId"></input>
          <input type="hidden" value={l.topicId} name="topicId"></input>

          <button
            type="submit"
            name="_action"
            value="deleteQuestion"
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
            disabled={deleting}
          >
            {deleting ? "deleting" : "delete"}
          </button>
        </deleteFetcher.Form>
      )}
      <replyFetcher.Form method="post" action="/api/question">
        <input hidden name="topicId" defaultValue={l.topicId}></input>
        <button
          type="submit"
          name="_action"
          value="fetchReplies"
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
        >
          replies
        </button>
      </replyFetcher.Form>
      {replyFetcher.data && (
        <div>
          {" "}
          <p>post on topic</p>
          {replyFetcher.data.post_stream.posts.map((post: any) => {
            return (
              <div key={post.id}>
                <a href={`https://lopenling.org/p/${post.id}`}>{post.id}</a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
