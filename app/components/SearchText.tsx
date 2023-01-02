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
  const split = data.content.split(" ").map((l, index) => {
    if (index === data.content.split(" ").length - 1) return l;
    return l + " ";
  });
  const [searchString, SetSearchString] = React.useState("");

  let start = 0;
  const jsonList = split.map((l, index) => {
    if (index !== 0) start = start + split[index - 1].length;
    return {
      start,
      length: searchString.length,
      text: l,
      searchedText: searchString,
    };
  });

  function handleSearch() {
    let results = jsonList.filter((l) => l.text.includes(searchString));
    setSearchLocation(results);
  }
  return (
    <div style={{ border: "1px solid #eee", display: "flex" }}>
      <input
        type="text"
        placeholder="type here"
        style={{ borderRight: "2px solid black", flex: 1 }}
        onChange={(e) => SetSearchString(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
