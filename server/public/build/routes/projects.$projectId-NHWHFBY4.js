import "/_static/build/_shared/chunk-J2TRKBBH.js";
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
  isRouteErrorResponse,
  useLoaderData,
  useRouteError
} from "/_static/build/_shared/chunk-4BBPB5NM.js";
import {
  createHotContext
} from "/_static/build/_shared/chunk-UM4DV2L4.js";
import "/_static/build/_shared/chunk-VDD37JSE.js";
import "/_static/build/_shared/chunk-LPPYD6HP.js";
import {
  require_jsx_dev_runtime
} from "/_static/build/_shared/chunk-6FZTSJIS.js";
import "/_static/build/_shared/chunk-IZ2HZTBT.js";
import {
  __toESM
} from "/_static/build/_shared/chunk-WN4IQK2U.js";

// app/routes/projects.$projectId.tsx
var import_node = __toESM(require_node(), 1);
var import_project = __toESM(require_project(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/projects.$projectId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/projects.$projectId.tsx"
  );
  import.meta.hot.lastModified = "1714711381072.0352";
}
function ProjectDetailsPage() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold", children: data.project.title }, void 0, false, {
      fileName: "app/routes/projects.$projectId.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-6", children: data.project.description }, void 0, false, {
      fileName: "app/routes/projects.$projectId.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "my-4" }, void 0, false, {
      fileName: "app/routes/projects.$projectId.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400", children: "Delete" }, void 0, false, {
      fileName: "app/routes/projects.$projectId.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/projects.$projectId.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.$projectId.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(ProjectDetailsPage, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = ProjectDetailsPage;
function ErrorBoundary() {
  _s2();
  const error = useRouteError();
  if (error instanceof Error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      "An unexpected error occurred: ",
      error.message
    ] }, void 0, true, {
      fileName: "app/routes/projects.$projectId.tsx",
      lineNumber: 81,
      columnNumber: 12
    }, this);
  }
  if (!isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Unknown Error" }, void 0, false, {
      fileName: "app/routes/projects.$projectId.tsx",
      lineNumber: 84,
      columnNumber: 12
    }, this);
  }
  if (error.status === 404) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Note not found" }, void 0, false, {
      fileName: "app/routes/projects.$projectId.tsx",
      lineNumber: 87,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, true, {
    fileName: "app/routes/projects.$projectId.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "ProjectDetailsPage");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  ProjectDetailsPage as default
};
//# sourceMappingURL=/_static/build/routes/projects.$projectId-NHWHFBY4.js.map
