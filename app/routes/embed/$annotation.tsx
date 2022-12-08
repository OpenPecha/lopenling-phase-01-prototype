import {
  ActionFunction,
  FormData,
  json,
  LoaderFunction,
} from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const loader: LoaderFunction = () => {
  return "";
};

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let type = formData.get("_action");

  if (type === "increaseVote") {
  }
  if (type === "decreaseVote") {
  }
  return json({
    message: type,
  });
};

export default function embed() {
  let actionData = useActionData();
  return (
    <>
      {actionData && <p>{actionData.message}</p>}
      <Form method="post" style={{ display: "flex", gap: 10 }}>
        <button
          name="_action"
          value="increaseVote"
          type="submit"
          className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          +1
        </button>
        <button
          name="_action"
          value="decreaseVote"
          type="submit"
          className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          -1
        </button>
      </Form>
    </>
  );
}
