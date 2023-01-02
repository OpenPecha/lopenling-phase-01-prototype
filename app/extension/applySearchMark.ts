import { Extension } from "@tiptap/core";

const applySearchMark = (searchLocation: any) =>
  Extension.create({
    name: "search",
    onCreate(this: { editor: any }) {},
  });

export default applySearchMark;
