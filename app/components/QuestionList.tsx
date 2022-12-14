import { useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import Vote from "./Vote";
import { useAutoAnimate } from "@formkit/auto-animate/react";
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
  editor: Editor | null;
};

export default function QuestionList(props: QuestionProps) {
  if (!props.list.length) return null;
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  return (
    <div
      style={{ maxHeight: "60vh", overflow: "scroll", overflowX: "hidden" }}
      ref={parent}
    >
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

export function EachQuestion({ l, props, linkReady = true }: any) {
  const { user } = useLoaderData();
  const deleteFetcher = useFetcher();
  const replyFetcher = useFetcher();
  let deleting = deleteFetcher.state !== "idle";
  let replyPosts = replyFetcher.data;
  let showDeleteButton =
    user?.isAdmin || user?.username === l?.createrUser?.username;

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
      <span
        onClick={() => pointOnEditor(l.start, l.end)}
        style={{ cursor: "pointer" }}
      >
        {l.topic} - {l.start}:{l.end}
      </span>
      <br />
      <p>{l?.createrUser?.username}</p>
      <div style={{ display: "flex", gap: 4 }}>
        <a
          style={{
            textDecoration: "none",
            cursor: "pointer",
            opacity: !linkReady ? 0.3 : 1,
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white px-3 rounded"
          target=" _blank"
          href={`https://lopenling.org/t/${l.topicId}`}
        >
          visit discussion
        </a>
        {linkReady && <Vote questionDetail={l} />}
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
        {replyPosts?.post_stream.posts.slice(1).length && (
          <div>
            <p>post on topic</p>
            {replyPosts.post_stream.posts.slice(1).map((post: any) => {
              return (
                <div key={post.id}>
                  <a href={`https://lopenling.org/p/${post.id}`}>{post.id}</a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
