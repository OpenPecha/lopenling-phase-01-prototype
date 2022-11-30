import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { redirectDiscourse } from "~/services/discourse_sso";
let secret = process.env.COOKIE_SECRET;
if (!secret) {
  throw new Error("set a COOKIE_SECRET in env");
}
let { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [secret],
    sameSite: "lax",
    // maxAge: 100,
  },
});

export async function getUserSession(request) {
  const session = await getSession(request.headers.get("Cookie"));
  let user = session.get("user");
  return user;
}
export async function destroyUserSession(request) {
  const session = await getSession(request.headers.get("Cookie"));
  return await destroySession(session);
}

export async function login(request, next, redirectTo) {
  let session = await getSession(request.headers.get("Cookie"));
  if (!session.get("user")) {
    let url = await redirectDiscourse();
    session.set("success-redirect", redirectTo);
    return redirect(url, {
      headers: {
        "set-cookie": await commitSession(session),
      },
    });
  }
  return next(session);
}

export { getSession, commitSession, destroySession };
