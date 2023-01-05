import { json, LoaderFunction } from "@remix-run/node";
import en from "~/file/i18n/en.json";
export const loader: LoaderFunction = () => {
  return json(en);
};
