import { Extension } from "@tiptap/core";

const applyAnnotation = (annotation: {}, pageBreaker: any) =>
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
      let allPageBreakerStart: string[] = [];
      for (const [key, value] of Object.entries(annotations)) {
        allkeys.push(key);
      }
      for (let startid of pageBreaker) {
        allPageBreakerStart.push(startid.start);
      }

      let skiplength: any = [];
      [...content].forEach((c, i: number) => {
        if (allPageBreakerStart.includes(i) && i !== 0) html += "</p><p>";
        if (allkeys.includes(i.toString()) && !skiplength.includes(i)) {
          html += `<span id="` + i + `">`;
          let annotate = annotations[i];
          let length = annotate[0].length;
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
      this.editor.commands.setContent(html);
      html = "";
    },
  });

export default applyAnnotation;
