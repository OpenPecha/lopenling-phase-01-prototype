import { Link, useLoaderData } from "@remix-run/react";
import { getSession } from "~/services/session.server";
import { db } from "~/utils/db.server";

// import env from "~/services/discourse_sso";

export const loader = async ({ request }) => {
  let data = { user: [] };
  const session = await getSession(request.headers.get("Cookie"));
  const { user } = session.data;
  if (user?.name) {
    data.user = await db.user.findUnique({
      where: { email: user.email },
    });
    if (!data.user) {
      const newUser = await db.user.create({
        data: {
          name: user.name,
          email: user.email,
          isAdmin: user.admin === "true" ? true : false,
          userPreference: {
            create: {
              language: "en",
              fontSize: 14,
              theme: "light",
            },
          },
        },
        select: {
          userPreference: true,
        },
      });
      data.user = newUser;
    }
  }
  return data;
};

export default function Index() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to="/text-viewer"> text viewer</Link>
    </div>
  );
}
