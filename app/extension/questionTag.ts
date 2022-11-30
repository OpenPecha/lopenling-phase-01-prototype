import { Mark, mergeAttributes } from "@tiptap/core";

export const QuestionMark = Mark.create({
  name: "question",

  addOptions() {
    return {
      HTMLAttributes: {
        class: "question",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span",
      },
      {
        style: "text-decoration",
        getAttrs: (value: any) =>
          /^(underline?|[5-9]\d{2,})$/.test(value) && null,
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    const elem = document.createElement("span");

    Object.entries(
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    ).forEach(([attr, val]) => elem.setAttribute(attr, val));

    elem.addEventListener("click", () => {
      if (document.querySelector(".active") !== null) {
        document
          .querySelectorAll(".active")
          .forEach((l) => l.classList.remove("active"));
      }
      elem.classList.toggle("active");
    });

    return elem;
  },
  addCommands(): any {
    return {
      setQuestion:
        () =>
        ({ commands }) => {
          return commands.setMark(this.name);
        },
      toggleQuestion:
        () =>
        ({ commands }) => {
          return commands.toggleMark(this.name);
        },
      unsetQuestion:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },
  // Your code goes here.
});
