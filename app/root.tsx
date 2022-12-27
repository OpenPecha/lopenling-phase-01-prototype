import React, { useEffect } from "react";
import styles from "~/styles/tailwind.css";
import globalstyles from "~/styles/global.css";
import type { MetaFunction } from "@remix-run/node"; // or cloudflare/deno
import { isMobile } from "react-device-detect";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useParams,
} from "@remix-run/react";
import { getUserSession } from "./services/session.server";
import { json, LoaderFunction } from "@remix-run/node";
import Headers from "~/components/Header";
import ErrorPage from "./components/ErrorPage";
import i18next from "./i18next.server";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);
  return json({ user });
};
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  description: "annotation of text and discussion on budhist text",
});

export function links() {
  return [
    { rel: "stylesheet", href: styles, as: "style" },
    { rel: "stylesheet", href: globalstyles, as: "style" },
  ];
}
export let handle = {
  i18n: "common",
};

function Document({ children, title }: any) {
  let data = useLoaderData();
  let user = data?.user;
  let { i18n } = useTranslation();
  let params = useParams();

  return (
    <html lang={i18n.language}>
      <head>
        <Meta />
        <Links />
        <title>{title}</title>
      </head>
      <body>
        {!params.annotation && <Headers user={user} />}

        {children}
        <ScrollRestoration />
        <Scripts />

        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return (
    <>
      <head>
        <Meta />
        <Links />
        <title>Error</title>
      </head>
      <ErrorPage />;
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error);
  return (
    <Document title={"error ooh"}>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        try to go to here <a href="/">click</a>
      </p>
    </Document>
  );
}

function App() {
  if (isMobile)
    return (
      <Document title="mobile device">
        <p>doesnt work on mobile currently</p>
      </Document>
    );
  return (
    <>
      <Document title={"Lopenling Application"}>
        <Outlet />
      </Document>
    </>
  );
}
export default App;
