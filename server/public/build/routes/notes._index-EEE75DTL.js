import {
  Link
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

// app/routes/notes._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/notes._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes._index.tsx"
  );
  import.meta.hot.lastModified = "1715025966819.0474";
}
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "No note selected. Select a note on the left, or",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." }, void 0, false, {
        fileName: "app/routes/notes._index.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes._index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { width: "480", height: "270", controls: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", { src: "https://d3mt0suz5yizkp.cloudfront.net/Devena_Testimonial_30sec.mp4", type: "video/mp4" }, void 0, false, {
        fileName: "app/routes/notes._index.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      "Your browser does not support the video tag."
    ] }, void 0, true, {
      fileName: "app/routes/notes._index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes._index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = NoteIndexPage;
var _c;
$RefreshReg$(_c, "NoteIndexPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NoteIndexPage as default
};
//# sourceMappingURL=/_static/build/routes/notes._index-EEE75DTL.js.map
