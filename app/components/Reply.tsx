import { useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";
export default function Reply({ topicId }) {
  const data = useLoaderData();
  const user = data?.user;
  const postFetcher = useFetcher();
  const postListFetcher = useFetcher();
  const inputRef = React.useRef();
  if (postFetcher.state !== "idle") {
    inputRef.current.value = "";
  }
  React.useEffect(() => {
    postListFetcher.submit({}, { method: "get", action: `/api/${topicId}` });
  }, [postFetcher.state]);

  const handleDelete = (id, TopicId) => {
    postFetcher.submit(
      {
        postId: id,
        topicId: TopicId,
      },
      {
        method: "delete",
        action: "/api/postReply",
      }
    );
  };
  return (
    <>
      {true &&
        postListFetcher.data?.slice(1).map((reply, index) => {
          const innerHtml = () => {
            let html = "";
            if (reply?.cooked) {
              let doc = new DOMParser().parseFromString(
                reply.cooked,
                "text/xml"
              );
              let p = doc.getElementsByTagName("p")[0];
              let audio = p.querySelectorAll("audio");
              if (audio?.length > 0) {
                audio.forEach((l) => {
                  let originalsrc = l
                    .getElementsByTagName("source")[0]
                    .getAttribute("src");
                  let newUrl = "https://lopenling.org" + originalsrc;
                  l.getElementsByTagName("source")[0].setAttribute(
                    "src",
                    newUrl
                  );
                });
              }
              html = p.outerHTML;
            }
            return { __html: html };
          };
          return (
            <div
              key={reply.id + index}
              style={{
                border: "3px solid white",
                marginBlock: "2px",
                fontFamily: "sans-serif",
              }}
            >
              <a
                href={`https://lopenling.org/p/${reply.id}`}
                target="_blank"
                dangerouslySetInnerHTML={innerHtml()}
              ></a>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.6rem",
                }}
              >
                <div>{reply.display_username}</div>
                <div style={{ opacity: 0.3 }}>reply {reply.reply_count}</div>
              </div>
              {user?.username === reply.username && (
                <button
                  onClick={() => {
                    handleDelete(reply.id, topicId);
                  }}
                  disabled={
                    postFetcher.state !== "idle" &&
                    postFetcher.submission?.method === "DELETE" &&
                    postFetcher.submission.formData.get("postId") ===
                      reply.id.toString()
                  }
                >
                  delete
                </button>
              )}
            </div>
          );
        })}
      <postFetcher.Form action="/api/postReply" method="post">
        <input hidden defaultValue={topicId} name="topicId" />
        <input type="text" name="postString" ref={inputRef} />
        <button
          type="submit"
          disabled={
            postFetcher.state !== "idle" &&
            postFetcher.submission?.method === "POST"
          }
        >
          reply
        </button>
      </postFetcher.Form>
    </>
  );
}
