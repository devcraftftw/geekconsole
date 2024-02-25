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

// app/routes/_layout+/_marketing+/pricing.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/_marketing+/pricing.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/_marketing+/pricing.tsx"
  );
  import.meta.hot.lastModified = "1706962583483.4001";
}
function PricingRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-1 flex-col items-center justify-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/money.gif", alt: "Money falling" }, void 0, false, {
      fileName: "app/routes/_layout+/_marketing+/pricing.tsx",
      lineNumber: 23,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold", children: "No pricing, bruh. Just have fun." }, void 0, false, {
      fileName: "app/routes/_layout+/_marketing+/pricing.tsx",
      lineNumber: 24,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_marketing+/pricing.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = PricingRoute;
var _c;
$RefreshReg$(_c, "PricingRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PricingRoute as default
};
//# sourceMappingURL=/build/routes/_layout+/_marketing+/pricing-4GXFOE6H.js.map
