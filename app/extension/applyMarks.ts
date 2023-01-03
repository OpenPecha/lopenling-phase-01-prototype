import { Extension } from "@tiptap/core";
import { Editor } from "@tiptap/react";

export const applyAnnotationFunction = (
  editor: Editor,
  annotation: any,
  pageBreaker: [],
  searchLocation: [],
  updateContent = null
) => {
  let content: string = `${editor.getText()}`;
  if (updateContent) {
    content = updateContent;
  }
  let annotations: any = annotation;
  let html = "<p>";
  let allkeys: string[] = [];
  let searchKey = [];
  let allPageBreakerStart: string[] = [];
  if (annotations)
    for (const [key, value] of Object.entries(annotations)) {
      allkeys.push(key);
    }
  if (pageBreaker)
    for (let startid of pageBreaker) {
      allPageBreakerStart.push(startid?.start);
    }
  if (searchLocation) {
    searchKey = searchLocation.map((l) => l.start);
  }

  let skiplength: any = [];
  [...content].forEach((c, i: number) => {
    if (searchKey.includes(i)) {
      let s = searchLocation.find((p) => p.start === i);
      html += `<i id="` + i + `">`;
      let search = searchLocation[searchLocation.indexOf(s)];
      let length = s?.length;
      for (let j = i; j < i + length; j++) {
        html += content[j];
        skiplength.push(j);
      }
      html += "</i>";
    }
    if (allPageBreakerStart.includes(i) && i !== 0) html += "<br>";
    if (allkeys.includes(i.toString()) && !skiplength.includes(i)) {
      html += `<span id="` + i + `">`;
      let annotate = annotations[i];
      let length = annotate[0]?.length;
      for (let j = i; j < i + length; j++) {
        html += content[j];
        skiplength.push(j);
      }
      html += "</span>";
    } else {
      if (skiplength.includes(i)) {
        return;
      }
      html += c;
    }
  });
  html += "</p>";
  editor.commands.setContent(html);
  html = "";
};

const applyAnnotation = (
  annotation: [],
  pageBreaker: any,
  searchLocation: any
) =>
  Extension.create({
    name: "v_annotation",
    addStorage() {
      return {
        v_annotation: annotation,
      };
    },
    onCreate(this: { editor: Editor }) {
      applyAnnotationFunction(
        this.editor,
        annotation,
        pageBreaker,
        searchLocation
      );
      if (searchLocation.length) {
        console.log(searchLocation.length);
        this.editor
          .chain()
          .focus()
          .setTextSelection(searchLocation[0].start)
          .run();
      }
    },
  });

export default applyAnnotation;
