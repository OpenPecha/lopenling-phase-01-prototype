import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import React from "react";
import { getUserSession } from "../services/session.server";
// import env from "~/services/discourse_sso";

export const loader: LoaderFunction = async ({ request }) => {
  type dataType = {
    user: any;
    message: string;
  };
  let data: dataType = { user: { name: "User" }, message: "" };
  const user = await getUserSession(request);

  if (user?.email) {
    try {
      let findUserInDatabase = await db.user.findUnique({
        where: { email: user.email },
      });
      data.user = findUserInDatabase;
    } catch (e) {
      data.message = e.message;
    }
  }
  return data;
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <p>Welcome {data.user.username}</p>
      <Link to="/text-viewer"> text viewer</Link>
    </div>
  );
}
