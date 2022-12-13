import { Editor } from "@tiptap/react";

export default function applyAnnotationFunction(
  annotation: [],
  content: string
) {
  let annotations: any = annotation;
  let _html = "<p>";
  let allkeys: string[] = [];
  for (const [key, value] of Object.entries(annotations)) {
    allkeys.push(key);
  }
  let skiplength: any = [];
  [...content].forEach((c, i) => {
    if (allkeys.includes(i.toString())) {
      _html += `<span id="` + i + `">`;
      let annotate = annotations[i];
      let length = annotate[0].length;
      for (let j = i; j < i + length; j++) {
        if (content[j] !== " ") _html += content[j];
        skiplength.push(j);
      }
      _html += "</span>";
    } else {
      if (!skiplength.includes(i)) {
        _html += c;
      }
    }
  });
  _html += "</p> ";
  return _html;
}
