import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "/build/_shared/chunk-BZBQSHJ3.js";
import {
  require_dist
} from "/build/_shared/chunk-3FDTPL7P.js";
import {
  Button
} from "/build/_shared/chunk-ZGF5TUXK.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
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
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/shared/ui/StatusButton/StatusButton.tsx
var React = __toESM(require_react(), 1);
var import_spin_delay = __toESM(require_dist(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/StatusButton/StatusButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/StatusButton/StatusButton.tsx"
  );
  import.meta.hot.lastModified = "1706962583490.8496";
}
var StatusButton = _s(React.forwardRef(_c = _s(({
  message,
  status,
  className,
  children,
  spinDelay,
  ...props
}, ref) => {
  _s();
  const delayedPending = (0, import_spin_delay.useSpinDelay)(status === "pending", {
    delay: 400,
    minDuration: 300,
    ...spinDelay
  });
  const companion = {
    pending: delayedPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex size-6 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "update", className: "animate-spin" }, void 0, false, {
      fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
      lineNumber: 43,
      columnNumber: 31
    }, this) : null,
    success: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex size-6 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "check" }, void 0, false, {
      fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
      lineNumber: 46,
      columnNumber: 14
    }, this),
    error: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex size-6 items-center justify-center rounded-full bg-destructive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "cross-1", className: "text-foreground" }, void 0, false, {
      fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
      lineNumber: 49,
      columnNumber: 12
    }, this),
    idle: null
  }[status];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { ref, className: cn("flex justify-center gap-4", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children }, void 0, false, {
      fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
      lineNumber: 55,
      columnNumber: 4
    }, this),
    message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipTrigger, { children: companion }, void 0, false, {
        fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipContent, { children: message }, void 0, false, {
        fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
      lineNumber: 58,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
      lineNumber: 57,
      columnNumber: 15
    }, this) : companion
  ] }, void 0, true, {
    fileName: "app/shared/ui/StatusButton/StatusButton.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}, "Fgv3G2YflGpMwNaZZAvVjuZ5pA8=", false, function() {
  return [import_spin_delay.useSpinDelay];
})), "Fgv3G2YflGpMwNaZZAvVjuZ5pA8=", false, function() {
  return [import_spin_delay.useSpinDelay];
});
_c2 = StatusButton;
StatusButton.displayName = "Button";
var _c;
var _c2;
$RefreshReg$(_c, "StatusButton$React.forwardRef");
$RefreshReg$(_c2, "StatusButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  StatusButton
};
//# sourceMappingURL=/build/_shared/chunk-4XWLGYB5.js.map
