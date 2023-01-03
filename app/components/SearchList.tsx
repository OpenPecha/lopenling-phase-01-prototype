import { Editor } from "@tiptap/react";

export default function SearchList({
  list,
  editor,
}: {
  list: any;
  editor: Editor;
}) {
  function handleClick(start, text) {
    editor.chain().focus().setTextSelection(start).run();
  }
  function getHighlightedText(text, highlight) {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    let search = parts.map((part, index) => (
      <span key={"single" + index}>
        {part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part}
      </span>
    ));

    return <span>{search}</span>;
  }
  return (
    <div>
      {list.map((searchItem, index) => {
        return (
          <div
            key={"searchtext_" + index}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(searchItem.start, searchItem.text)}
          >
            {getHighlightedText(searchItem.text, searchItem.searchString)}
          </div>
        );
      })}
    </div>
  );
}
