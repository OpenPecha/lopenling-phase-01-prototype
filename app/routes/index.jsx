import { Link, useLoaderData } from "@remix-run/react";
import { getSession } from "~/services/session.server";
import { db } from "~/utils/db.server";

// import env from "~/services/discourse_sso";

export const loader = async ({ request }) => {
  let data = { user: { name: "User" } };
  const session = await getSession(request.headers.get("Cookie"));
  const { user } = session.data;
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
