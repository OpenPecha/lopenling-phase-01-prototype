import {
  QuestionList,
  require_getText
} from "/build/_shared/chunk-ECRG5UZC.js";
import {
  require_db
} from "/build/_shared/chunk-XHAVEHDY.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-64ZQY7LL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// empty-module:../services/session.server
var require_session = __commonJS({
  "empty-module:../services/session.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/index.tsx
var import_db = __toESM(require_db());
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_getText = __toESM(require_getText());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  var _a;
  const data = useLoaderData();
  const searchedText = useFetcher();
  const list = (0, import_react2.useMemo)(
    () => searchedText.data || data.textList,
    [data.textList, searchedText.data]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        style: { display: "flex", justifyContent: "center" },
        children: [
          "Welcome ",
          (_a = data.user) == null ? void 0 : _a.username
        ]
      }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        style: {
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          padding: 20
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "textList",
            style: { maxHeight: 600, overflowY: "scroll" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                children: "Available Text"
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 79,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(searchedText.Form, {
                method: "get",
                action: "/api/text-search",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "text",
                    name: "textSearch",
                    placeholder: "search text"
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 81,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    style: {
                      background: searchedText.state === "idle" ? "#eee" : "#ccc",
                      padding: 4
                    },
                    children: "search"
                  }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 86,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/index.tsx",
                lineNumber: 80,
                columnNumber: 11
              }, this),
              list.map((list2) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: list2.id
                    }, void 0, false, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 99,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                      to: "/texts/" + list2.id,
                      prefetch: "intent",
                      children: list2.name
                    }, list2.id, false, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 100,
                      columnNumber: 17
                    }, this)
                  ]
                }, "textList-" + list2.id, true, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 98,
                  columnNumber: 15
                }, this);
              })
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "questionList",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuestionList, {
              list: data.questionList,
              QuestionTitle: "recent Questions"
            }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 108,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-4FUICAXG.js.map
