import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { redirectDiscourse } from "~/services/discourse_sso";
// let secret = process.env.COOKIE_SECRET;
// if (!secret) {
//   throw new Error("set a COOKIE_SECRET in env");
// }
let { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [process.env.COOKIE_SECRET],
    sameSite: "lax",
  },
});

export async function getUserSession(request) {
  const session = await getSession(request.headers.get("Cookie"));
  let user = session.get("user");
  return user;
}

export async function login(request, next) {
  let session = await getSession(request.headers.get("Cookie"));
  if (!session.get("user")) {
    let url = await redirectDiscourse();
    return redirect(url);
  }
  return next(session);
}
export async function logout(request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}
export { getSession, commitSession, destroySession };
