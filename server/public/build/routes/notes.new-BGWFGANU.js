import {
  require_node
} from "/_static/build/_shared/chunk-NGMGOBMD.js";
import "/_static/build/_shared/chunk-4BBPB5NM.js";
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

// app/routes/notes.new.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/notes.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes.new.tsx"
  );
  import.meta.hot.lastModified = "1715109691254.9329";
}
function FileUploader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", id: "file-upload-input", name: "file-upload", accept: "image/*" }, void 0, false, {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 37,
      columnNumber: 2
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Upload File" }, void 0, false, {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 38,
      columnNumber: 2
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.new.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c = FileUploader;
var _c;
$RefreshReg$(_c, "FileUploader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FileUploader as default
};
//# sourceMappingURL=/_static/build/routes/notes.new-BGWFGANU.js.map
