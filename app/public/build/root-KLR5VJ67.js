import {
  withSentry
} from "/build/_shared/chunk-OQLLILOM.js";
import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  require_jsx_dev_runtime,
  useLoaderData,
  useLocation,
  useParams,
  useTransition
} from "/build/_shared/chunk-64ZQY7LL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// empty-module:./services/session.server
var require_session = __commonJS({
  "empty-module:./services/session.server"(exports, module) {
    module.exports = {};
  }
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-POQYFQQP.css";

// app/styles/global.css
var global_default = "/build/_assets/global-5ICNJAZZ.css";

// app/root.tsx
var import_session = __toESM(require_session());

// app/components/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Header({ user }) {
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container flex flex-wrap items-center justify-between mx-auto\r\n      bg-red-200 mb-3 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: "/",
        children: "Home"
      }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: user.name
          }, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 13,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            method: "post",
            action: "/sso/login",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                name: "logout",
                defaultValue: "logout"
              }, void 0, false, {
                fileName: "app/components/Header.tsx",
                lineNumber: 15,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                name: "redirectTo",
                className: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                defaultValue: location.pathname
              }, void 0, false, {
                fileName: "app/components/Header.tsx",
                lineNumber: 16,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                name: "_action",
                value: "auth",
                children: "logout"
              }, void 0, false, {
                fileName: "app/components/Header.tsx",
                lineNumber: 22,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/Header.tsx",
            lineNumber: 14,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
            fileName: "app/components/Header.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            method: "post",
            action: "/sso/login",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                name: "login",
                defaultValue: "login"
              }, void 0, false, {
                fileName: "app/components/Header.tsx",
                lineNumber: 31,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                name: "redirectTo",
                defaultValue: location.pathname
              }, void 0, false, {
                fileName: "app/components/Header.tsx",
                lineNumber: 32,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                name: "_action",
                value: "auth",
                children: [
                  "login",
                  " "
                ]
              }, void 0, true, {
                fileName: "app/components/Header.tsx",
                lineNumber: 37,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/Header.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "Lopenling-App-Prototype",
  viewport: "width=device-width,initial-scale=1",
  description: "annotation of text and discussion on budhist text"
});
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: global_default }
  ];
}
function App() {
  let { user } = useLoaderData();
  let { state } = useTransition();
  let params = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", {
        children: [
          !params.annotation && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Header, {
            user
          }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 61,
            columnNumber: 32
          }, this),
          state !== "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {
            style: { display: "flex", justifyContent: "center" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", {
              "aria-hidden": "true",
              className: "mr-2 w-4 h-4 text-red-200 animate-spin dark:text-gray-600 fill-blue-600",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor"
                }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 71,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill"
                }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 75,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/root.tsx",
              lineNumber: 64,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 63,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 85,
            columnNumber: 52
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
var root_default = withSentry(App);
export {
  root_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-KLR5VJ67.js.map
