import {
  StatusButton
} from "/build/_shared/chunk-4XWLGYB5.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  useIsPending,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import {
  Form
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

// app/core/components/providers/connections.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/core/components/providers/connections.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/providers/connections.tsx"
  );
  import.meta.hot.lastModified = "1706588338057.0981";
}
var GITHUB_PROVIDER_NAME = "github";
var providerNames = [GITHUB_PROVIDER_NAME];
var ProviderNameSchema = z.enum(providerNames);
var providerLabels = {
  [GITHUB_PROVIDER_NAME]: "GitHub"
};
var providerIcons = {
  [GITHUB_PROVIDER_NAME]: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "github-logo" }, void 0, false, {
    fileName: "app/core/components/providers/connections.tsx",
    lineNumber: 35,
    columnNumber: 27
  }, this)
};
function ProviderConnectionForm({
  type,
  providerName,
  redirectTo
}) {
  _s();
  const label = providerLabels[providerName];
  const formAction = `/auth/${providerName}`;
  const isPending = useIsPending({
    formAction
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex items-center justify-center gap-2", action: formAction, method: "POST", children: [
    redirectTo ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
      fileName: "app/core/components/providers/connections.tsx",
      lineNumber: 49,
      columnNumber: 18
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { type: "submit", className: "w-full", status: isPending ? "pending" : "idle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center gap-1.5", children: [
      providerIcons[providerName],
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        type,
        " with ",
        label
      ] }, void 0, true, {
        fileName: "app/core/components/providers/connections.tsx",
        lineNumber: 54,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/core/components/providers/connections.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/core/components/providers/connections.tsx",
      lineNumber: 51,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/core/components/providers/connections.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s(ProviderConnectionForm, "JnlFCv26QAup6Xc6GVGrzVOlibc=", false, function() {
  return [useIsPending];
});
_c = ProviderConnectionForm;
var _c;
$RefreshReg$(_c, "ProviderConnectionForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/core/components/providers/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/providers/index.ts"
  );
  import.meta.hot.lastModified = "1706588338057.174";
}

export {
  providerNames,
  providerIcons,
  ProviderConnectionForm
};
//# sourceMappingURL=/build/_shared/chunk-IAFLELVB.js.map
