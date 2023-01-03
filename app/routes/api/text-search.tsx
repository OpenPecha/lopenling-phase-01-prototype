import { LoaderFunction } from "@remix-run/node";
import { json } from "react-router";
import { getTextList } from "~/services/getText.server";

export let loader: LoaderFunction = async ({ request }) => {
  const textList = await getTextList();
  const searchText = new URL(request.url).searchParams.get("textSearch") ?? "";
  if (searchText === "") return json([]);
  return json(textList?.filter(({ name }) => name.includes(searchText)));
};
