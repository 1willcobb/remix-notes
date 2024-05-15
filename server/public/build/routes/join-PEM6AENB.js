import {
  require_user
} from "/_static/build/_shared/chunk-YAI26XTG.js";
import "/_static/build/_shared/chunk-HUJF7JCA.js";
import {
  require_session
} from "/_static/build/_shared/chunk-NNIK6ZRY.js";
import {
  require_node
} from "/_static/build/_shared/chunk-NGMGOBMD.js";
import {
  Form,
  Link,
  useActionData,
  useSearchParams
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

// app/routes/join.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_user = __toESM(require_user(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/join.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/join.tsx"
  );
  import.meta.hot.lastModified = "1710437112614.28";
}
var meta = () => [{
  title: "Sign Up"
}];
function Join() {
  _s();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? void 0;
  const actionData = useActionData();
  const emailRef = (0, import_react2.useRef)(null);
  const passwordRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email address" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: true,
            autoFocus: true,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": actionData?.errors?.email ? true : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          false,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 116,
            columnNumber: 15
          },
          this
        ),
        actionData?.errors?.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, false, {
          fileName: "app/routes/join.tsx",
          lineNumber: 119,
          columnNumber: 44
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/join.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: "Password" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", ref: passwordRef, name: "password", type: "password", autoComplete: "new-password", "aria-invalid": actionData?.errors?.password ? true : void 0, "aria-describedby": "password-error", className: "w-full rounded border border-gray-500 px-2 py-1 text-lg" }, void 0, false, {
          fileName: "app/routes/join.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this),
        actionData?.errors?.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, false, {
          fileName: "app/routes/join.tsx",
          lineNumber: 131,
          columnNumber: 47
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/join.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join.tsx",
      lineNumber: 125,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
      fileName: "app/routes/join.tsx",
      lineNumber: 137,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400", children: "Create Account" }, void 0, false, {
      fileName: "app/routes/join.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-blue-500 underline", to: {
        pathname: "/login",
        search: searchParams.toString()
      }, children: "Log in" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 144,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join.tsx",
      lineNumber: 142,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/join.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/join.tsx",
    lineNumber: 110,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/join.tsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/join.tsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_s(Join, "RidIhLwFrqAsyRbtfUp5EYY5fes=", false, function() {
  return [useSearchParams, useActionData];
});
_c = Join;
var _c;
$RefreshReg$(_c, "Join");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Join as default,
  meta
};
//# sourceMappingURL=/_static/build/routes/join-PEM6AENB.js.map
