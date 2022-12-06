import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { redirectDiscourse } from "~/services/discourse_sso";
// let secret = process.env.COOKIE_SECRET;

// if (!secret) {
//   throw new Error("set a COOKIE_SECRET in env");
// }

let { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "parkhang_userSession",
    secrets: ["fasd"],
    sameSite: "lax",
    maxAge: 1000,
  },
});

export async function getUserSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  let user = session.get("user");
  return user;
}
export async function destroyUserSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  return await destroySession(session);
}

export async function login(request: Request, next: any, redirectTo: string) {
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
