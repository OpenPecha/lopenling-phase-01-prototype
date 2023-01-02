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
  function getHighlightedText(text, highlight) {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part) =>
          part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part
        )}
      </span>
    );
  }
  return (
    <div>
      {list.map((searchItem) => {
        return (
          <div
            key={searchItem.start}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(searchItem.start, searchItem.text)}
          >
            {getHighlightedText(searchItem.text, searchItem.searchedText)}
          </div>
        );
      })}
    </div>
  );
}
