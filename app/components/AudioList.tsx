import { useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React from "react";

function AudioList({ editor }: { editor: Editor }) {
  const data = useLoaderData();

  return (
    <div>
      {data?.audio.map((file, index) => (
        <div key={file.id}>
          <SingleAudio file={file} editor={editor} />
        </div>
      ))}
    </div>
  );
}
export default AudioList;

function SingleAudio({ file, editor }) {
  const deleteAudio = useFetcher();

  function handleDelete(id: any) {
    deleteAudio.submit({ id: id }, { method: "delete", action: "api/audio" });
  }

  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          editor
            .chain()
            .focus()
            .setTextSelection({
              from: file.start,
              to: file.start + file.length,
            })
            .run()
        }
      >
        {file.start}-{file.start + file.length}
      </div>
      <label>{file.creator_user.name}</label>
      <audio controls>
        <source src={file.url}></source>
      </audio>
      <div onClick={() => handleDelete(file.id)}>delete</div>
    </>
  );
}
