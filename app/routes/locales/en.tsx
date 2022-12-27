import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  return {
    greeting: "hi",
    fontSize: "fontSize",
  };
};
