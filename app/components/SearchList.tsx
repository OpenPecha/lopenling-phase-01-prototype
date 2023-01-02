import { Editor } from "@tiptap/react";

export default function SearchList({
  list,
  editor,
}: {
  list: any;
  editor: Editor;
}) {
  function handleClick(start, text) {
    editor
      .chain()
      .focus()
      .setTextSelection({ from: start, to: start + text.length })
      .run();
  }

  return (
    <div>
      {list.map((searchItem) => {
        return (
          <div
            key={searchItem.id}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(searchItem.start, searchItem.text)}
          >
            {searchItem.text}
          </div>
        );
      })}
    </div>
  );
}
