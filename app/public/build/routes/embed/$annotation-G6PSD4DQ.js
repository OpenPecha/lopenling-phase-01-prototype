import {
  require_session
} from "/build/_shared/chunk-N554V62J.js";
import {
  require_db
} from "/build/_shared/chunk-XHAVEHDY.js";
import {
  Form,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-64ZQY7LL.js";
import {
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// app/routes/embed/$annotation.tsx
var import_session = __toESM(require_session());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function embed() {
  let loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
      method: "post",
      style: { display: "flex", gap: 10 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          type: "hidden",
          name: "questionId",
          value: loaderData.questionId
        }, void 0, false, {
          fileName: "app/routes/embed/$annotation.tsx",
          lineNumber: 108,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          name: "_action",
          value: "likeVote",
          type: "submit",
          disabled: !loaderData.user,
          className: "py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          children: [
            loaderData.likeCount,
            "\u{1F44D}"
          ]
        }, void 0, true, {
          fileName: "app/routes/embed/$annotation.tsx",
          lineNumber: 113,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          name: "_action",
          value: "dislikeVote",
          disabled: !loaderData.user,
          type: "submit",
          className: "py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          children: [
            loaderData.dislikeCount,
            "\u{1F44E}"
          ]
        }, void 0, true, {
          fileName: "app/routes/embed/$annotation.tsx",
          lineNumber: 122,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/embed/$annotation.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/embed/$annotation.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}
export {
  embed as default
};
//# sourceMappingURL=/build/routes/embed/$annotation-G6PSD4DQ.js.map
