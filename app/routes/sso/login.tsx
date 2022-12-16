import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import {
  commitSession,
  destroyUserSession,
  getSession,
  getUserSession,
  login,
} from "~/services/session.server";
import { db } from "~/utils/db.server";

export let loader: LoaderFunction = async ({ request }) => {
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
      let avatarUrl = params.get("avatar_url");
      let username = params.get("username");
      if (!email || !name || !username) {
        throw new Error("discourse SSO returned error URL");
      }
      session.set("user", { email, admin, name, username, avatarUrl });
      let findUserInDatabase = await db.user.findUnique({
        where: { username },
      });
      if (!findUserInDatabase) {
        const newUser = await db.user.create({
          data: {
            username: username,
            name: name,
            email: email,
            isAdmin: admin === "true" ? true : false,
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
        console.log(newUser);
      }
    } catch (e) {
      console.log(e);
      session.flash("error", {
        error: e,
      });
    }
  }
  let redirectUrl = session.data["success-redirect"]
    ? session.data["success-redirect"]
    : "/";
  return redirect(redirectUrl, {
    headers: {
      "set-cookie": await commitSession(session),
    },
  });
};

export let action: ActionFunction = async ({ request }) => {
  const user = await getUserSession(request);
  const body = await request.formData();
  let { redirectTo, _action, ...values } = Object.fromEntries(body);
  if (_action === "auth") {
    if (!redirectTo) {
      throw new Error("no redirect in form");
    }
    redirectTo = redirectTo.toString();
    if (values.logout === "logout") {
      return redirect(redirectTo, {
        headers: {
          "set-cookie": await destroyUserSession(request),
        },
      });
    }
    if (values.login === "login") {
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
