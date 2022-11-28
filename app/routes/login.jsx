import { redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { commitSession, getSession } from "~/services/session.server";

import { db } from "~/utils/db.server";

export let loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const url = new URL(request.url);
  const sso = url.searchParams.get("sso");
  const sig = url.searchParams.get("sig");
  if (sso && sig) {
    let payload = atob(sso);
    let decoded = unescape(payload);
    let params = new URLSearchParams(decoded);
    if (!params.get("nonce")) {
      throw new Error("lopenling server login problem");
    }
    try {
      let email = params.get("email");
      let admin = params.get("admin");
      let name = params.get("name");
      session.set("user", { email, admin, name });
      console.log(session.data);
    } catch (e) {
      session.flash("error", {
        error: e,
      });
    }
  }
  return redirect("/", {
    headers: {
      "set-cookie": await commitSession(session),
    },
  });
};

export default function Login() {
  return <></>;
}
