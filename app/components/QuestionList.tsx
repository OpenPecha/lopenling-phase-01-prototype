import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import Vote from "./Vote";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Reply from "./Reply";
import React from "react";
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
  editor: Editor | null;
  selectQuestion: number | null;
};

export default function QuestionList(props: QuestionProps) {
  if (!props.list.length) return null;
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  return (
    <div
      style={{ maxHeight: "60vh", overflow: "scroll", overflowX: "hidden" }}
      ref={parent}
    >
      {props.list
        .sort((a, b) => b?.topicId - a?.topicId)
        .map((post) => (
          <div key={post.id}>
            <EachQuestion props={props} post={post} />
          </div>
        ))}
    </div>
  );
}

export function EachQuestion({ post, props, linkReady = true }: any) {
  const data = useLoaderData();
  let user = data?.user;
  const deleteFetcher = useFetcher();
  let deleting = deleteFetcher.state !== "idle";
  const [showReply, setShowReply] = React.useState(false);
  let showDeleteButton =
    user?.isAdmin || user?.username === post?.createrUser?.username;
  const pointOnEditor = (start: number, end: number) => {
    if (props.editor) {
      props.editor
        .chain()
        .focus()
        .setTextSelection({ from: start, to: end })
        .scrollIntoView()
        .run();
    }
  };
  if (!post) return <div></div>;
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
    >
      {props.editor ? (
        <span
          onClick={() => pointOnEditor(post.start, post.end)}
          style={{ cursor: "pointer" }}
        >
          {post?.topic} - {post?.start}:{post?.end}
        </span>
      ) : (
        <Link
          to={"/texts/" + post.textId + `?start=${post.start}&end=${post.end}`}
        >
          {post?.topic} - {post?.start}:{post?.end}
        </Link>
      )}
      <br />
      <div style={{ display: "flex", gap: 4 }}>
        {props.selectQuestion ? (
          <Link
            to={"/questions/" + post?.topicId}
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 rounded"
          >
            view Discussion
          </Link>
        ) : (
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              opacity: !linkReady ? 0.3 : 1,
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 rounded"
            target=" _blank"
            href={`https://lopenling.org/t/${post?.topicId}`}
          >
            visit discussion
          </a>
        )}
        {linkReady && <Vote questionDetail={post} />}
        {showDeleteButton && (
          <deleteFetcher.Form method="post" action="/api/question">
            <input type="hidden" value={post.id} name="questionId"></input>
            <input type="hidden" value={post?.topicId} name="topicId"></input>
            <button
              type="submit"
              name="_action"
              value="deleteQuestion"
              className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
              disabled={deleting}
              title="delete"
            >
              {deleting ? "deleting" : "❌"}
            </button>
          </deleteFetcher.Form>
        )}
        <button
          onClick={() => setShowReply((prev) => !prev)}
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
          title="replies"
        >
          🖊️
        </button>
      </div>
      <Reply topicId={post?.topicId} showReply={showReply} />
    </div>
  );
}
