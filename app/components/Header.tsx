import React from "react";
import { Form, Link, useLocation } from "@remix-run/react";
export default function Header({ user }: any) {
  const location = useLocation();
  return (
    <div
      className="container flex flex-wrap items-center justify-between mx-auto
      bg-red-200 mb-3 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
    >
      <div style={{ display: "flex", gap: 10 }}>
        <Link to="/">Home</Link>
        <Link to="/questions">Questions</Link>
      </div>
      {user ? (
        <>
          <div>{user.name}</div>
          <Form method="post" action="/sso/login">
            <input type="hidden" name="logout" defaultValue={"logout"} />
            <input
              type="hidden"
              name="redirectTo"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              defaultValue={location.pathname}
            />
            <button type="submit" name="_action" value="auth">
              logout
            </button>
          </Form>
        </>
      ) : (
        <>
          <div></div>
          <Form method="post" action="/sso/login">
            <input type="hidden" name="login" defaultValue={"login"} />
            <input
              type="hidden"
              name="redirectTo"
              defaultValue={location.pathname}
            />
            <button type="submit" name="_action" value="auth">
              login{" "}
            </button>
            {/* <a href="https://lopenling.org/signup">/signup</a> */}
          </Form>
        </>
      )}
    </div>
  );
}
