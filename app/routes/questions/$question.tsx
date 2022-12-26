import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import DiscourseForum from "~/components/discourse-forum";

export const loader: LoaderFunction = async ({ params, request }) => {
  const questionId = params.question;
  return questionId;
};

export default function Question() {
  const loaderData = useLoaderData();
  let Discourse = React.useMemo(
    () => <DiscourseForum topicId={loaderData} />,
    [loaderData]
  );
  return <div>{Discourse}</div>;
}
