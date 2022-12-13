import { redirect } from "@remix-run/node";
import { Form, Link, useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";
import { Fetcher } from "react-router";

type TextListProps = {
  selectedText: {
    name: string;
    id: number;
  };
  setTextLoading: () => void;
};
export default function TextList({
  selectedText,
  setTextLoading,
}: TextListProps) {
  const fetcher = useFetcher();
  const { textList } = useLoaderData();
  React.useEffect(() => {
    if (fetcher.state === "submitting") {
      setTextLoading(true);
    }

    if (fetcher.state === "idle") {
      setTextLoading(false);
    }
  }, [fetcher.state]);
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
