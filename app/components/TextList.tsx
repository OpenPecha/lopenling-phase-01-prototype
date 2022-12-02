import { redirect } from "@remix-run/node";
import { Form, Link, useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";

type TextListProps = {
  selectedText: {
    name: string;
    id: number;
  };
};
export default function TextList({ selectedText }: TextListProps) {
  const { textList } = useLoaderData();
  const fetcher = useFetcher();
  const handleChangeTextSelect = (e) => {
    fetcher.submit({ changeText: e.target.value }, { method: "post" });
  };
  return (
    <div>
      <fetcher.Form method="post">
        <select
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
      </fetcher.Form>
    </div>
  );
}
