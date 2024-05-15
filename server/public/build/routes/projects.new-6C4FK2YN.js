import {
  require_project
} from "/_static/build/_shared/chunk-AVGOZJEC.js";
import {
  require_session
} from "/_static/build/_shared/chunk-NNIK6ZRY.js";
import {
  require_node
} from "/_static/build/_shared/chunk-NGMGOBMD.js";
import {
  Form,
  useActionData
} from "/_static/build/_shared/chunk-4BBPB5NM.js";
import {
  createHotContext
} from "/_static/build/_shared/chunk-UM4DV2L4.js";
import "/_static/build/_shared/chunk-VDD37JSE.js";
import "/_static/build/_shared/chunk-LPPYD6HP.js";
import {
  require_jsx_dev_runtime
} from "/_static/build/_shared/chunk-6FZTSJIS.js";
import {
  require_react
} from "/_static/build/_shared/chunk-IZ2HZTBT.js";
import {
  __toESM
} from "/_static/build/_shared/chunk-WN4IQK2U.js";

// app/routes/projects.new.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_project = __toESM(require_project(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/projects.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/projects.new.tsx"
  );
  import.meta.hot.lastModified = "1714711603470.062";
}
function NewProjectPage() {
  _s();
  const actionData = useActionData();
  const titleRef = (0, import_react2.useRef)(null);
  const descriptionRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.description) {
      descriptionRef.current?.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: "100%"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Title: " }, void 0, false, {
          fileName: "app/routes/projects.new.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: titleRef, name: "title", className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose", "aria-invalid": actionData?.errors?.title ? true : void 0, "aria-errormessage": actionData?.errors?.title ? "title-error" : void 0 }, void 0, false, {
          fileName: "app/routes/projects.new.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects.new.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      actionData?.errors?.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, false, {
        fileName: "app/routes/projects.new.tsx",
        lineNumber: 83,
        columnNumber: 38
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/projects.new.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "description: " }, void 0, false, {
          fileName: "app/routes/projects.new.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: descriptionRef, name: "description", rows: 8, className: "w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6", "aria-invalid": actionData?.errors?.description ? true : void 0, "aria-errormessage": actionData?.errors?.description ? "description-error" : void 0 }, void 0, false, {
          fileName: "app/routes/projects.new.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects.new.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      actionData?.errors?.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "description-error", children: actionData.errors.description }, void 0, false, {
        fileName: "app/routes/projects.new.tsx",
        lineNumber: 93,
        columnNumber: 44
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/projects.new.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400", children: "Save" }, void 0, false, {
      fileName: "app/routes/projects.new.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/projects.new.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.new.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(NewProjectPage, "uh87LxQAveToNBQA4DuNRYuSQyM=", false, function() {
  return [useActionData];
});
_c = NewProjectPage;
var _c;
$RefreshReg$(_c, "NewProjectPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewProjectPage as default
};
//# sourceMappingURL=/_static/build/routes/projects.new-6C4FK2YN.js.map
