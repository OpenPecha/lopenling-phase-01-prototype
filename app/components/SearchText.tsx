import { useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React from "react";
export default function SearchString({
  editor,
  setSearchLocation,
}: {
  editor: Editor;
  setSearchLocation: (list: any) => void;
}) {
  const data = useLoaderData();
  let content = data.text?.witness.find((l) => l.is_working === true).content;

  const split = content?.split(" ").map((l, index) => {
    if (index === content.split(" ").length - 1) return l;
    return l + " ";
  });
  const [searchString, SetSearchString] = React.useState("");
  const inputRef = React.useRef();
  let start = 0;
  const jsonList = split.map((l, index) => {
    if (index !== 0) start = start + split[index - 1].length;
    return {
      start,
      length: l.length,
      text: l,
      searchString: searchString,
    };
  });

  function handleSearch() {
    if (searchString.length === 0) {
      setSearchLocation([]);
    } else {
      let results = jsonList.filter((l) => l.text.includes(searchString));

      setSearchLocation(results);
    }
    SetSearchString("");
    inputRef.current.value = "";
  }
  return (
    <div style={{ border: "1px solid #eee", display: "flex" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="type here"
        style={{ borderRight: "2px solid black", flex: 1 }}
        onChange={(e) => SetSearchString(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
