import React from "react";
import styles from "~/styles/tailwind.css";
import globalstyles from "~/styles/global.css";
import type { MetaFunction } from "@remix-run/node"; // or cloudflare/deno
import { withSentry } from "@sentry/remix";
import { Audio } from "react-loader-spinner";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useParams,
  useResolvedPath,
  useTransition,
} from "@remix-run/react";
import {
  getSession,
  getUserSession,
  login,
  destroyUserSession,
} from "./services/session.server";
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import Headers from "~/components/Header";
export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);
  return json({ user });
};
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Lopenling-App-Prototype",
  viewport: "width=device-width,initial-scale=1",
  description: "annotation of text and discussion on budhist text",
});

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: globalstyles },
  ];
}

function App() {
  let { user } = useLoaderData();
  let { state } = useTransition();
  let params = useParams();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {!params.annotation && <Headers user={user} />}
        {state !== "idle" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <Outlet />
        )}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
export default withSentry(App);
