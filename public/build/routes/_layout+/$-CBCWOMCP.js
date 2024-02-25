import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  Link,
  useLocation
} from "/build/_shared/chunk-HCJ6L7J4.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-OC2Z5MX2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_layout+/$.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/$.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/$.tsx"
  );
  import.meta.hot.lastModified = "1706588338061.4626";
}
function NotFound() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/_layout+/$.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c = NotFound;
function ErrorBoundary() {
  _s();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    404: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "We can't find this page:" }, void 0, false, {
          fileName: "app/routes/_layout+/$.tsx",
          lineNumber: 48,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "whitespace-pre-wrap break-all text-body-lg", children: location.pathname }, void 0, false, {
          fileName: "app/routes/_layout+/$.tsx",
          lineNumber: 49,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/$.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-body-md underline", children: "Back to home" }, void 0, false, {
        fileName: "app/routes/_layout+/$.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/$.tsx",
      lineNumber: 46,
      columnNumber: 16
    }, this)
  } }, void 0, false, {
    fileName: "app/routes/_layout+/$.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(ErrorBoundary, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "NotFound");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  NotFound as default
};
//# sourceMappingURL=/build/routes/_layout+/$-CBCWOMCP.js.map
