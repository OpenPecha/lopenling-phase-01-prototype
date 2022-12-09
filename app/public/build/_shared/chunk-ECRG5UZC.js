import {
  require_jsx_dev_runtime,
  useFetcher,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-64ZQY7LL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// empty-module:~/services/getText.server
var require_getText = __commonJS({
  "empty-module:~/services/getText.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/Vote.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Vote({ questionDetail }) {
  let { user } = useLoaderData();
  let questionId = questionDetail.id;
  let likeCount = questionDetail.likes.length || 0;
  let dislikeCount = questionDetail.dislikes.length || 0;
  let questionFetcher = useFetcher();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(questionFetcher.Form, {
      action: "/api/vote",
      method: "post",
      style: {
        display: "flex",
        gap: 10,
        opacity: questionFetcher.state !== "idle" ? 0.3 : 1
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          type: "hidden",
          name: "redirectTo",
          value: location.pathname
        }, void 0, false, {
          fileName: "app/components/Vote.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          type: "hidden",
          name: "questionId",
          defaultValue: questionId
        }, void 0, false, {
          fileName: "app/components/Vote.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          name: "_action",
          value: "likeVote",
          disabled: !user,
          type: "submit",
          className: "py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          children: [
            likeCount,
            " \u{1F44D}"
          ]
        }, void 0, true, {
          fileName: "app/components/Vote.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          name: "_action",
          value: "dislikeVote",
          type: "submit",
          disabled: !user,
          className: "py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          children: [
            dislikeCount,
            "\u{1F44E}"
          ]
        }, void 0, true, {
          fileName: "app/components/Vote.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/Vote.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/Vote.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/QuestionList.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function QuestionList(props) {
  if (!props.list)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", {
        className: "text-1xl font-bold underline",
        children: props.QuestionTitle
      }, void 0, false, {
        fileName: "app/components/QuestionList.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      props.list.sort((a, b) => b.topicId - a.topicId).map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EachQuestion, {
          props,
          l
        }, void 0, false, {
          fileName: "app/components/QuestionList.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      }, l.id, false, {
        fileName: "app/components/QuestionList.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this))
    ]
  }, void 0, true, {
    fileName: "app/components/QuestionList.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function EachQuestion({ l, props, key }) {
  var _a, _b;
  const { user } = useLoaderData();
  const deleteQuestion = useFetcher();
  let deleting = deleteQuestion.state !== "idle";
  let showDeleteButton = (user == null ? void 0 : user.isAdmin) || (user == null ? void 0 : user.username) === ((_a = l == null ? void 0 : l.createrUser) == null ? void 0 : _a.username);
  const handleMouseOver = (start, end) => {
    if (props.editor) {
      props.editor.chain().focus().setTextSelection(start).scrollIntoView().run();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {
    style: {
      border: "3px solid black",
      borderRadius: "10px",
      background: "#eee",
      marginBlock: 4,
      padding: 4,
      opacity: deleting ? 0.4 : 1
    },
    onMouseEnter: () => handleMouseOver(l.start, l.end),
    children: [
      l.topic,
      " - ",
      l.start,
      " - ",
      l.end,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/QuestionList.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", {
        children: (_b = l == null ? void 0 : l.createrUser) == null ? void 0 : _b.username
      }, void 0, false, {
        fileName: "app/components/QuestionList.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", {
        style: {
          textDecoration: "none",
          cursor: "pointer",
          width: "100%"
        },
        className: "bg-blue-500 hover:bg-blue-700 text-white px-2 rounded-full",
        target: " _blank",
        href: `https://lopenling.org/t/${l.topicId}`,
        children: "visit discussion"
      }, void 0, false, {
        fileName: "app/components/QuestionList.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vote, {
        questionDetail: l
      }, void 0, false, {
        fileName: "app/components/QuestionList.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      showDeleteButton && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(deleteQuestion.Form, {
        method: "post",
        action: "/api/question",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", {
            type: "hidden",
            value: l.id,
            name: "questionId"
          }, void 0, false, {
            fileName: "app/components/QuestionList.tsx",
            lineNumber: 85,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", {
            type: "submit",
            name: "_action",
            value: "deleteQuestion",
            className: "bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded",
            disabled: deleting,
            children: deleting ? "deleting" : "delete"
          }, void 0, false, {
            fileName: "app/components/QuestionList.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/QuestionList.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/QuestionList.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

export {
  QuestionList,
  require_getText
};
//# sourceMappingURL=/build/_shared/chunk-ECRG5UZC.js.map
