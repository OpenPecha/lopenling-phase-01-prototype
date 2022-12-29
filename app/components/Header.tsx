import React from "react";
import { Form, Link, useLoaderData, useLocation } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
export const handle = {
  // In the handle export, we could add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  i18n: ["common"],
};

export default function Header({ user }: any) {
  const location = useLocation();
  let { i18n } = useTranslation("common");
  let locale = i18n.language;
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
      <div className="flex gap-10 items-end">
        <img
          src="https://parkhang.lopenling.org/static/bundles/ea9a1cd4d17aad5a9c5bdfde6acaad2e.png"
          alt="logo"
          style={{ objectFit: "contain", maxHeight: 30 }}
        />
        <Link to="/">Home</Link>
        <Link to="/questions">Questions</Link>
      </div>
      <center>
        <button
          style={{ fontWeight: locale !== "bo" ? "normal" : "bold" }}
          onClick={() => changeLanguage("bo")}
        >
          bo
        </button>
        /
        <button
          style={{ fontWeight: locale !== "en" ? "normal" : "bold" }}
          onClick={() => changeLanguage("en")}
        >
          en
        </button>
      </center>
      {user ? (
        <div style={{ display: "flex", gap: 3 }}>
          <div className="relative">
            {user.avatarUrl ? (
              <img
                className="w-10 h-10 rounded-full "
                src={user.avatarUrl}
                alt="Rounded avatar"
                title={user.name}
              ></img>
            ) : (
              <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {user.name
                    .split(/\s/)
                    .reduce(
                      (response, word) => (response += word.slice(0, 1)),
                      ""
                    )}
                </span>
              </div>
            )}
            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
          <Form method="post" action="/sso/login">
            <input type="hidden" name="logout" defaultValue={"logout"} />
            <input
              type="hidden"
              name="redirectTo"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              defaultValue={location.pathname}
            />
            <button
              className="text-white bg-gradient-to-r from-red-900 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="submit"
              name="_action"
              value="auth"
            >
              logout
            </button>
          </Form>
        </div>
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
            <button
              type="submit"
              name="_action"
              value="auth"
              className="text-white bg-gradient-to-r from-green-900 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              login{" "}
            </button>
            {/* <a href="https://lopenling.org/signup">/signup</a> */}
          </Form>
        </>
      )}
    </div>
  );
}
