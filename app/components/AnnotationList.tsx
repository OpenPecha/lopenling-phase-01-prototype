import { useLoaderData } from "@remix-run/react";
import TogglePrivate from "./TogglePrivate";
// import Vote from "./Vote";

export default function AnnotationList({ selectedId, editor }: any) {
  const data = useLoaderData();
  const user = data.user;
  const annotation = data.annotations[selectedId];
  if (!annotation) return null;
  const from = annotation[0]?.start;
  const length = annotation[0]?.length;
  const to = from + length;
  const handleSelectionClick = () => {
    var doc = window.document,
      sel,
      range;
    let select = document.getElementById(from);
    sel = window.getSelection();
    range = doc.createRange();
    range.selectNodeContents(select);
    sel.removeAllRanges();
    sel.addRange(range);
  };
  if (!annotation) return <div>please refresh the page</div>;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <center>
        <h3>Annotations</h3>
      </center>
      {annotation?.map((l) => {
        let creator = l.creator_user?.name;
        const sources = data.sources;
        if (!creator) {
          let SourceId = data.text.witness.find(
            (w) => w.id === l.creator_witness
          ).source;
          creator = sources.find((s) => s.id === SourceId).name;
        }
        let content = l.content === "" ? "deleted" : l.content;
        return (
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            key={l.id}
          >
            {creator === user?.name && <TogglePrivate />}
            <div onClick={handleSelectionClick} style={{ cursor: "pointer" }}>
              {creator + "  ->  " + content}
            </div>
            {content !== "deleted" && (
              <div style={{ display: "flex", gap: 5 }}>
                <button
                  name="_action"
                  value="likeVote"
                  disabled={true}
                  type="submit"
                  className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {0} 👍
                </button>
                <button
                  name="_action"
                  value="dislikeVote"
                  type="submit"
                  disabled={true}
                  className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {0}👎
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
