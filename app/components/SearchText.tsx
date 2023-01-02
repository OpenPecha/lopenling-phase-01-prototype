import { useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React from "react";
import searchText from "~/utils/searchText";
import MiniSearch from "minisearch";
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

  let start = 0;
  const jsonList = split.map((l, index) => {
    if (index !== 0) start = start + split[index - 1].length;
    return {
      start,
      text: l,
    };
  });
  const [searchString, SetSearchString] = React.useState("");
  const searchIndex = new MiniSearch({
    fields: ["text"],
    storeFields: ["text", "start", "length"],
    searchOptions: {
      prefix: true,
    },
    idField: "start",
  });
  function handleSearch() {
    searchIndex.addAll(jsonList);
    let results = searchIndex.search(searchString);

    setSearchLocation(results);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => SetSearchString(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
