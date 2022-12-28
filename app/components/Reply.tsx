import { useFetcher } from "@remix-run/react";
import React from "react";
export default function Reply({ topicId }) {
  const replyToPost = useFetcher();
  const [replyPostlist, setReplyPostList] = React.useState();
  const inputRef = React.useRef();
  if (replyToPost.state !== "idle") {
    inputRef.current.value = "";
  }
  React.useEffect(() => {
    fetch(`https://lopenling.org/t/${topicId}.json`)
      .then((res) => res.json())
      .then((data) => setReplyPostList(data.post_stream.posts));
  }, []);
  console.log(replyPostlist);
  return (
    <>
      {replyPostlist?.map((reply, index) => {
        return (
          <div key={reply.id}>
            <p dangerouslySetInnerHTML={{ __html: reply.cooked }}></p>
          </div>
        );
      })}
      <replyToPost.Form action="/api/postReply" method="post">
        <input hidden defaultValue={topicId} name="topicId" />
        <input type="text" name="postString" ref={inputRef} />
        <button type="submit" disabled={replyToPost.state !== "idle"}>
          reply
        </button>
      </replyToPost.Form>
    </>
  );
}
