import { useLoaderData } from "@remix-run/react";

export default function AnnotationList({ selectedId }: any) {
  const data = useLoaderData();
  const annotation = data.annotations[selectedId];
  return (
    <div>
      <h3>Default Annotations</h3>
      {annotation?.map((l) => {
        let creator = l.creator_user;
        const sources = data.sources;
        if (!creator) {
          let SourceId = data.text.witness.find(
            (w) => w.id === l.creator_witness
          ).source;
          creator = sources.find((s) => s.id === SourceId).name;
        }
        let content = l.content === "" ? "deleted" : l.content;
        return <li key={l.id}>{creator + "  ->  " + content}</li>;
      })}
    </div>
  );
}
