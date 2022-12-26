import { Mark, mergeAttributes } from "@tiptap/core";

export const annotationMark = (data: any, fetchAnnotation: any) =>
  Mark.create({
    name: "annotations",

    addOptions() {
      return {
        HTMLAttributes: {
          class: "v_annotations",
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
      elem.addEventListener("click", () => {
        fetchAnnotation(elem.id);
      });

      return elem;
    },
    addCommands(): any {
      return {
        setAnnotation:
          (start: number) =>
          ({ commands }: any) => {
            return commands.setMark(this.name);
          },
        toggleAnnotaion:
          () =>
          ({ commands }: any) => {
            return commands.toggleMark(this.name);
          },
        unsetAnnotation:
          () =>
          ({ commands }: any) => {
            return commands.unsetMark(this.name);
          },
      };
    },
  });
