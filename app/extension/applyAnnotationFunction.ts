import { Editor } from "@tiptap/react";

export default function applyAnnotationFunction(
  editor: Editor | null,
  annotation: [],
  content: string
) {
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
  editor?.commands.setContent(html);
}
