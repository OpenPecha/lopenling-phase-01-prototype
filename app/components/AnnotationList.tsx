import { useLoaderData } from "@remix-run/react";
import DeleteAnnotation from "./DeleteAnnotation";
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
    let select = document.getElementById(from) as Node;
    sel = window.getSelection();
    range = doc.createRange();
    range.selectNodeContents(select);
    if (!sel) throw new Error("selection is empty");
    sel.removeAllRanges();
    sel.addRange(range);
  };
  if (!annotation) return <div>please refresh the page</div>;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        background: "#eee",
      }}
    >
      {annotation?.map((l) => {
        let creator = l.creator_user?.name;
        const sources = data.sources;
        if (!creator) {
          let SourceId = data.text.witness.find(
            (w) => w.id === l.creator_witness
          ).source;
          creator = sources.find((s) => s.id === SourceId)?.name;
        }
        let content = l.content === "" ? "deleted" : l.content;
        if (creator !== user?.name && l.private === true) return null;
        return (
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            key={l.id}
          >
            <div onClick={handleSelectionClick} style={{ cursor: "pointer" }}>
              {creator + "  ->  " + content}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {creator === user?.name && (
                <>
                  <TogglePrivate id={l.id} currentStatus={l.private} />
                  <DeleteAnnotation id={l.id} />
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
