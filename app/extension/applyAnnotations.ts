import { Extension } from "@tiptap/core";

const applyAnnotation = (annotation: {}) =>
  Extension.create({
    name: "v_annotation",
    addStorage() {
      return {
        v_annotation: annotation,
      };
    },
    onCreate(this: { editor: any }) {
      let content: string = `${this.editor.getText()}`;
      let annotations: any = annotation;
      let html = "<p>";
      let allkeys: string[] = [];
      for (const [key, value] of Object.entries(annotations)) {
        allkeys.push(key);
      }
      let skiplength: any = [];
      [...content].forEach((c, i) => {
        if (allkeys.includes(i.toString())) {
          html += `<span id="` + i + `">`;
          let annotate = annotations[i];
          let length = annotate[0].length;
          for (let j = i; j < i + length; j++) {
            if (content[j] !== " ") html += content[j];
            skiplength.push(j);
          }
          html += "</span>";
        } else {
          if (!skiplength.includes(i)) {
            html += c;
          }
        }
      });
      html += "</p>";
      this.editor.commands.setContent(html);
      html = "";
    },
  });

export default applyAnnotation;
