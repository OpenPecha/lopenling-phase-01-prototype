import { redirect } from "@remix-run/node";
import { Form, FormProps, useLoaderData } from "@remix-run/react";
import React from "react";

type TextListProps = {
  selectedText: {
    name: string;
    id: number;
  };
};
export default function TextList({ selectedText }: TextListProps) {
  let formRef = React.useRef();
  const { textList } = useLoaderData();
  const handleChangeTextSelect = (e) => {
    formRef.current?.submit();
  };
  return (
    <div>
      <Form ref={formRef} method="post">
        <select
          name="changeText"
          defaultValue={selectedText.id}
          onChange={handleChangeTextSelect}
        >
          {textList.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </Form>
    </div>
  );
}
