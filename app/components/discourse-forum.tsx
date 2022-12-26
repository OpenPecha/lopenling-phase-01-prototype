import React, { useEffect } from "react";

export default function DiscourseForum({ topicId }) {
  const discourseIframe = React.useRef();
  useEffect(() => {
    window.DiscourseEmbed = {
      discourseUrl: "https://lopenling.org/",
      topicId: topicId,
    };
    discourseIframe.current.innerHTML = "";
    const d = document.createElement("script");
    d.type = "text/javascript";
    d.async = true;
    d.src = window.DiscourseEmbed.discourseUrl + "javascripts/embed.js";
    discourseIframe.current.appendChild(d);
  }, [topicId]);

  return (
    <div>
      <div id="discourse-comments" ref={discourseIframe}></div>
    </div>
  );
}
