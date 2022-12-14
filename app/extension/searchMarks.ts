import { Mark, mergeAttributes } from "@tiptap/core";

export const searchMarks = Mark.create({
  name: "search",

  addOptions() {
    return {
      HTMLAttributes: {
        class: "search",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "search",
      },
    ];
  },
  addAttributes() {
    return {
      id: {
        parseHTML: (element) => element.id,
      },
    };
  },
  renderHTML({ HTMLAttributes }) {
    const elem = document.createElement("span");
    Object.entries(
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    ).forEach(([attr, val]) => elem.setAttribute(attr, val));

    return elem;
  },
});
