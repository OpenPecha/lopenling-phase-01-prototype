import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {
  getSession,
  getUserSession,
  destroySession,
  login,
  commitSession,
} from "./services/session.server";
import { json, redirect } from "@remix-run/node";
import Headers from "~/components/Header";

export async function loader({ request }) {
  let user = await getUserSession(request);
  return json({ user });
}
export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (request.method === "POST") {
    const body = await request.formData();
    let redirectTo = body.get("redirectTo");
    if (body.get("logout") === "logout") {
      return redirect(redirectTo, {
        headers: {
          "set-cookie": await destroySession(request),
        },
      });
    }
    if (body.get("login") === "login") {
      if (!session.get("user")) {
        let requireSession = await login(
          request,
          (session) => {
            return session;
          },
          redirectTo
        );
        return requireSession;
      }
      return redirect(redirectTo);
    }
  }
  return redirect("/");
};

export default function App() {
  let { user } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Headers user={user} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
