import { Mark, mergeAttributes } from "@tiptap/core";

export const annotationMark = (annotations) =>
  Mark.create({
    name: "annotation",

    addOptions() {
      return {
        HTMLAttributes: {
          class: "annotations",
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: "span",
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

      elem.addEventListener("click", (e) => {
        let startId = elem.id;
        let selectedAnnotation = annotations[startId];
        console.log(selectedAnnotation);
        selectedAnnotation.map((l) => console.log(l.content));
      });

      return elem;
    },
    addCommands(): any {
      return {
        setAnnotation:
          () =>
          ({ commands }) => {
            return commands.setMark(this.name);
          },
        toggleAnnotaion:
          () =>
          ({ commands }) => {
            return commands.toggleMark(this.name);
          },
        unsetAnnotation:
          () =>
          ({ commands }) => {
            return commands.unsetMark(this.name);
          },
      };
    },
    // Your code goes here.
  });
