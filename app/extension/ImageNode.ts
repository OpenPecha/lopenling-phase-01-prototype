import Image from "@tiptap/extension-image";

const CustomImage = Image.extend({
  name: "image",
  addAttributes() {
    return {
      src: {
        parseHTML: (element) => element.getAttribute("src"),
      },
      class: {
        parseHTML: (el) => el.getAttribute("class"),
      },
    };
  },
  addNodeView() {
    return (props) => {
      const { node } = props;
      const src = node.attrs.src;
      const container = document.createElement("img");
      container.setAttribute("src", src);
      container.setAttribute("class", "Text-Image");

      const toggleButton = document.createElement("div");
      toggleButton.append("toggle");
      return {
        dom: container,
        contentDOM: toggleButton,
      };
    };
  },
});

export default CustomImage;
