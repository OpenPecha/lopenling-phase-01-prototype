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
        let annotationContainer = document.querySelector(".annotationOptions");
        while (annotationContainer.hasChildNodes()) {
          annotationContainer.removeChild(annotationContainer.firstChild);
        }
        let createElement = document.createElement("span");
        createElement.classList.add("annotationList");
        createElement.innerHTML = "<h4>annotation in different versions</h4>";
        selectedAnnotation.map((l) => {
          let appendElement = `<div>${
            l.creator_witness + "-" + l.content
          }</div>`;
          createElement.innerHTML += appendElement;
        });
        annotationContainer?.append(createElement);
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
