import {
  Button
} from "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-CHQ4BA76.js";
import {
  useOptionalUser
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  Link
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

// app/routes/_layout+/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/_index.tsx"
  );
  import.meta.hot.lastModified = "1706962574083.642";
}
var meta = () => {
  return [{
    title: "GeekConsole"
  }];
};
function Index() {
  _s();
  const maybeUser = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-40", src: "images/giphy.gif", alt: "GeekConsole Logo" }, void 0, false, {
      fileName: "app/routes/_layout+/_index.tsx",
      lineNumber: 34,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mb-3 text-xl text-primary", children: "Welcome to GeekConsole" }, void 0, false, {
        fileName: "app/routes/_layout+/_index.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-2/3 text-center text-6xl font-bold tracking-tight", children: "Take full control of your material and digital stuff" }, void 0, false, {
        fileName: "app/routes/_layout+/_index.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-5 max-w-xl text-xl", children: "Start saving your essentials with zero effort." }, void 0, false, {
        fileName: "app/routes/_layout+/_index.tsx",
        lineNumber: 40,
        columnNumber: 5
      }, this),
      maybeUser && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "dashboard", children: "Dashboard" }, void 0, false, {
        fileName: "app/routes/_layout+/_index.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/_index.tsx",
        lineNumber: 43,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_index.tsx",
      lineNumber: 35,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_index.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(Index, "C6ptttSbCh0EGdm4KZpO/iw9gQg=", false, function() {
  return [useOptionalUser];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_layout+/_index-N7HIQV2W.js.map
