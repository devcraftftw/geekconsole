import {
  cn
} from "/build/_shared/chunk-J754EQNG.js";
import {
  createHotContext
} from "/build/_shared/chunk-OC2Z5MX2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/shared/ui/Logo/logo-big-black.svg
var logo_big_black_default = "/build/_assets/logo-big-black-7TOJ2FF7.svg";

// app/shared/ui/Logo/logo-big-white.svg
var logo_big_white_default = "/build/_assets/logo-big-white-4BFZX6PC.svg";

// app/shared/ui/Logo/logo-black.svg
var logo_black_default = "/build/_assets/logo-black-I5UXNZGK.svg";

// app/shared/ui/Logo/logo-white.svg
var logo_white_default = "/build/_assets/logo-white-NR2YDQRU.svg";

// app/shared/ui/Logo/Logo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Logo/Logo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Logo/Logo.tsx"
  );
  import.meta.hot.lastModified = "1707187588609.3281";
}
var BigLogo = ({
  className,
  isDark
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: isDark ? logo_big_white_default : logo_big_black_default, className: cn("w-96", className), alt: "GeekConsole Big Logo" }, void 0, false, {
    fileName: "app/shared/ui/Logo/Logo.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c = BigLogo;
var SmallLogo = ({
  className,
  isDark
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: isDark ? logo_white_default : logo_black_default, className: cn("w-6", className), alt: "GeekConsole Small Logo" }, void 0, false, {
    fileName: "app/shared/ui/Logo/Logo.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_c2 = SmallLogo;
var _c;
var _c2;
$RefreshReg$(_c, "BigLogo");
$RefreshReg$(_c2, "SmallLogo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  BigLogo,
  SmallLogo
};
//# sourceMappingURL=/build/_shared/chunk-W6LYXVSI.js.map
