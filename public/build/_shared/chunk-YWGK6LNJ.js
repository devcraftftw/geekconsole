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

// app/shared/ui/Icons/sprite.svg
var sprite_default = "/build/_assets/sprite-Q4MQBEYT.svg";

// app/shared/ui/Icons/Icon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Icons/Icon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Icons/Icon.tsx"
  );
  import.meta.hot.lastModified = "1706962583489.6167";
}
var sizeClassName = {
  font: "h-[1em] w-[1em]",
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7"
};
var childrenSizeClassName = {
  font: "gap-1.5",
  xs: "gap-1.5",
  sm: "gap-1.5",
  md: "gap-2",
  lg: "gap-2",
  xl: "gap-3"
};
function Icon({
  name,
  size = "font",
  className,
  children,
  ...props
}) {
  if (children) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-flex items-center ${childrenSizeClassName[size]}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name, size, className, ...props }, void 0, false, {
        fileName: "app/shared/ui/Icons/Icon.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this),
      children
    ] }, void 0, true, {
      fileName: "app/shared/ui/Icons/Icon.tsx",
      lineNumber: 57,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { ...props, className: cn(sizeClassName[size], "inline self-center", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("use", { href: `${sprite_default}#${name}` }, void 0, false, {
    fileName: "app/shared/ui/Icons/Icon.tsx",
    lineNumber: 63,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/Icons/Icon.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_c = Icon;
var _c;
$RefreshReg$(_c, "Icon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  sprite_default,
  Icon
};
//# sourceMappingURL=/build/_shared/chunk-YWGK6LNJ.js.map
