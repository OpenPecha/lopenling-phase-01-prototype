import { json, LoaderFunction } from "@remix-run/node";
import bo from "~/file/i18n/bo.json";
export const loader: LoaderFunction = () => {
  return json(bo);
};
