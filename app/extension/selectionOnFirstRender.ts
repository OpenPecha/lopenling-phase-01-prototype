import { redirect } from "@remix-run/node";
import { Extension } from "@tiptap/core";

const SelectTextOnRender = Extension.create({
  async onCreate(this) {
    let urlhref = window.location.href;
    const url = new URL(urlhref);
    let end = url.searchParams.get("end");
    let start = url.searchParams.get("start");
    if (start && end) {
      setTimeout(() => {
        this.editor
          ?.chain()
          .focus()
          .setTextSelection({
            from: parseInt(start),
            to: parseInt(++end),
          })
          .scrollIntoView()
          .run();
      }, 300);
      url.searchParams.delete("start");
      url.searchParams.delete("end");

      if (window.history.replaceState) {
        //prevents browser from storing history with each change:
        window.history.replaceState({}, "", url);
      }
    }
  },
});

export default SelectTextOnRender;
