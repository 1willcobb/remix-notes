import {
  useUser
} from "/_static/build/_shared/chunk-HUJF7JCA.js";
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
  Link,
  NavLink,
  Outlet,
  useLoaderData
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

// app/routes/projects.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/projects.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/projects.tsx"
  );
  import.meta.hot.lastModified = "1714712655718.9944";
}
function ProjectsPage() {
  _s();
  const data = useLoaderData();
  const user = useUser();
  console.log("data", data);
  console.log("user", user);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex items-center justify-between bg-slate-800 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: ".", children: "Projects" }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: user.email }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600", children: "Logout" }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Project" }, void 0, false, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        data.projectListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "p-4", children: "No notes yet" }, void 0, false, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 65,
          columnNumber: 49
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: data.projectListItems.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: ({
          isActive
        }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`, to: project.id, children: [
          "\u{1F4DD} ",
          project.title
        ] }, void 0, true, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 67,
          columnNumber: 19
        }, this) }, project.id, false, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 66,
          columnNumber: 53
        }, this)) }, void 0, false, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 65,
          columnNumber: 87
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s(ProjectsPage, "zuwG4n4VrRPUNhOscno+iP1Hrjw=", false, function() {
  return [useLoaderData, useUser];
});
_c = ProjectsPage;
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children }, void 0, false, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_c2 = Layout;
var _c;
var _c2;
$RefreshReg$(_c, "ProjectsPage");
$RefreshReg$(_c2, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProjectsPage as default
};
//# sourceMappingURL=/_static/build/routes/projects-OI2R2PQP.js.map
