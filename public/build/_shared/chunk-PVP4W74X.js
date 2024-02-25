import {
  getErrorMessage
} from "/build/_shared/chunk-J754EQNG.js";
import {
  isRouteErrorResponse,
  useParams,
  useRouteError
} from "/build/_shared/chunk-HCJ6L7J4.js";
import {
  createHotContext
} from "/build/_shared/chunk-OC2Z5MX2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/shared/ui/GeneralErrorBoundary/GeneralErrorBoundary.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/GeneralErrorBoundary/GeneralErrorBoundary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/GeneralErrorBoundary/GeneralErrorBoundary.tsx"
  );
  import.meta.hot.lastModified = "1706962583489.351";
}
function GeneralErrorBoundary({
  defaultStatusHandler = ({
    error
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
    error.status,
    " ",
    error.data
  ] }, void 0, true, {
    fileName: "app/shared/ui/GeneralErrorBoundary/GeneralErrorBoundary.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this),
  statusHandlers,
  unexpectedErrorHandler = (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: getErrorMessage(error) }, void 0, false, {
    fileName: "app/shared/ui/GeneralErrorBoundary/GeneralErrorBoundary.tsx",
    lineNumber: 31,
    columnNumber: 37
  }, this)
}) {
  _s();
  const error = useRouteError();
  const params = useParams();
  if (typeof document !== "undefined")
    console.error(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto flex size-full items-center justify-center p-20 text-h2", children: isRouteErrorResponse(error) ? (statusHandlers?.[error.status] ?? defaultStatusHandler)({
    error,
    params
  }) : unexpectedErrorHandler(error) }, void 0, false, {
    fileName: "app/shared/ui/GeneralErrorBoundary/GeneralErrorBoundary.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(GeneralErrorBoundary, "6EFrFbtadsJk9+AfSjNnBBmTVkA=", false, function() {
  return [useRouteError, useParams];
});
_c = GeneralErrorBoundary;
var _c;
$RefreshReg$(_c, "GeneralErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  GeneralErrorBoundary
};
//# sourceMappingURL=/build/_shared/chunk-PVP4W74X.js.map
