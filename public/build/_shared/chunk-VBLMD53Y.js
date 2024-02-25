import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  Outlet
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

// app/routes/_layout+/settings+/profile.two-factor.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/settings+/profile.two-factor.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/settings+/profile.two-factor.tsx"
  );
  import.meta.hot.lastModified = "1706588338073.4668";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "lock-closed", children: "2FA" }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.two-factor.tsx",
    lineNumber: 24,
    columnNumber: 15
  }, this),
  getSitemapEntries: () => null
};
function TwoFactorRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.two-factor.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = TwoFactorRoute;
var _c;
$RefreshReg$(_c, "TwoFactorRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  handle,
  TwoFactorRoute
};
//# sourceMappingURL=/build/_shared/chunk-VBLMD53Y.js.map
