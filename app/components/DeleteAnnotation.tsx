import { useFetcher } from "@remix-run/react";

export default function DeleteAnnotation({ id }: { id: number }) {
  const deleteFetcher = useFetcher();
  return (
    <>
      <deleteFetcher.Form action="/api/delete-user-annotation" method="delete">
        <input hidden value={id} name="annotationId" readOnly></input>
        <button title="delete" type="submit">
          {deleteFetcher.state !== "idle" ? "deleting" : "❌"}
        </button>
      </deleteFetcher.Form>
    </>
  );
}
