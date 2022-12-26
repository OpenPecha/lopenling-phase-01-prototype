import { useFetcher, useLoaderData } from "@remix-run/react";
import { computeParagraphIndex } from "~/utils/computeParagraphIndex";
import React from "react";
import { Editor } from "@tiptap/react";
type PropsType = {
  selectionSpan: {
    start: number;
    end: number;
  } | null;
  selectedText: string;
  editor: Editor;
  setSelectedAnnotation: (id: number) => void;
};

export default function AddAnnotation(props: PropsType) {
  const data = useLoaderData();
  const userAnnotationFetcher = useFetcher();
  const { selectionSpan, selectedText } = props;
  const [offset, setOffset] = React.useState<number>(0);

  const userannotationRef = React.useRef(null);
  const fetcherData = userAnnotationFetcher.data;
  React.useEffect(() => {
    if (fetcherData) {
      props.setSelectedAnnotation(fetcherData.createAnnotation.start);
    }
  }, [fetcherData]);
  React.useEffect(() => {
    let actualStartData = computeParagraphIndex(
      selectionSpan.start,
      data.pageBreakers
    );
    setOffset(actualStartData + 1); // actual start neglecting paragraph
  }, [selectionSpan.end]);

  if (userAnnotationFetcher.state !== "idle")
    userannotationRef.current.value = "";

  return (
    <>
      {/* <div>
        Edit details {selectedText}
        <br />
        start: {selectionSpan?.start}
        <br />
        end: {selectionSpan?.end}
        <br />
        length:
        {selectedText.length}
        <br />
        offset - {offset}
      </div> */}
      <userAnnotationFetcher.Form
        method="post"
        action="/api/create-user-annotation"
      >
        <input
          hidden
          name="textId"
          defaultValue={data.text.id}
          readOnly
        ></input>
        <input
          readOnly
          hidden
          name="start"
          value={selectionSpan?.start - offset}
        ></input>
        <input
          hidden
          readOnly
          name="length"
          value={selectedText.length}
        ></input>
        <input hidden readOnly name="original" value={selectedText}></input>
        <input
          type="text"
          name="content"
          style={{ border: "1px solid gray" }}
          required
          placeholder="type edit here"
          ref={userannotationRef}
        ></input>
        <input
          hidden
          readOnly
          name="redirectTo"
          defaultValue={window.location.pathname}
        ></input>
        <button
          disabled={userAnnotationFetcher.state !== "idle"}
          type="submit"
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          annotate
        </button>
      </userAnnotationFetcher.Form>
    </>
  );
}
