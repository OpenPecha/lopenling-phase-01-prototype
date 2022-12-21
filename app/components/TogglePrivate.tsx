import React from "react";
export default function TogglePrivate() {
  const [privated, setPrivate] = React.useState(false);
  return (
    <div
      title="public"
      onClick={() => setPrivate((prev) => !prev)}
      style={{ opacity: privated ? 0.4 : 1, cursor: "pointer" }}
    >
      👀
    </div>
  );
}
