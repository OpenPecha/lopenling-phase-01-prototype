import React from "react";
import styles from "~/styles/tailwind.css";
import globalstyles from "~/styles/global.css";
import type { MetaFunction } from "@remix-run/node"; // or cloudflare/deno

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
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
export const action: ActionFunction = async ({ request }) => {
  const user = await getUserSession(request);
  if (request.method === "POST") {
    const body = await request.formData();
    let redirectTo = body.get("redirectTo")?.toString();
    if (!redirectTo) {
      throw new Error("no redirect in form");
    }
    if (body.get("logout") === "logout") {
      return redirect(redirectTo, {
        headers: {
          "set-cookie": await destroyUserSession(request),
        },
      });
    }
    if (body.get("login") === "login") {
      if (!user) {
        let requireSession = await login(
          request,
          (session: any) => {
            return session;
          },
          redirectTo
        );
        return requireSession;
      }
      return redirect(redirectTo);
    }
  }
};

export default function App() {
  let { user } = useLoaderData();
  let { state } = useTransition();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Headers user={user} />
        {state === "loading" ? <div>loading</div> : <Outlet />}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer>parkhang</footer>
      </body>
    </html>
  );
}
