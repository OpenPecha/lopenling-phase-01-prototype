import { useFetcher } from "@remix-run/react";
import React from "react";
export default function TogglePrivate({ id, currentStatus }: any) {
  const privateFetcher = useFetcher();

  return (
    <privateFetcher.Form action="/api/change-private-annotation" method="post">
      <input name="annotationId" readOnly value={id} hidden></input>
      <input name="currentStatus" readOnly value={currentStatus} hidden></input>
      <button
        title="public"
        type="submit"
        style={{
          opacity: !currentStatus ? 1 : 0.4,
          cursor: privateFetcher.state === "idle" ? "pointer" : "progress",
        }}
      >
        👀
      </button>
    </privateFetcher.Form>
  );
}
