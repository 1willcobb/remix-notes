import {
  useUser
} from "/_static/build/_shared/chunk-HUJF7JCA.js";
import {
  require_note
} from "/_static/build/_shared/chunk-UDH2TK3N.js";
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

// app/routes/notes.tsx
var import_node = __toESM(require_node(), 1);
var import_note = __toESM(require_note(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/notes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes.tsx"
  );
  import.meta.hot.lastModified = "1715098755228.814";
}
function NotesPage() {
  _s();
  const data = useLoaderData();
  const user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex items-center justify-between bg-slate-800 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: ".", children: "Notes" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: user.email }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600", children: "Logout" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Note" }, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "p-4", children: "No notes yet" }, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 67,
          columnNumber: 46
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: data.noteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: ({
          isActive
        }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`, to: note.id, children: [
          "\u{1F4DD} ",
          note.title
        ] }, void 0, true, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 69,
          columnNumber: 19
        }, this) }, note.id, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 68,
          columnNumber: 47
        }, this)) }, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 67,
          columnNumber: 84
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(NotesPage, "zuwG4n4VrRPUNhOscno+iP1Hrjw=", false, function() {
  return [useLoaderData, useUser];
});
_c = NotesPage;
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children }, void 0, false, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 94,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 93,
    columnNumber: 10
  }, this);
}
_c2 = Layout;
var _c;
var _c2;
$RefreshReg$(_c, "NotesPage");
$RefreshReg$(_c2, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NotesPage as default
};
//# sourceMappingURL=/_static/build/routes/notes-KHBMKZOJ.js.map
