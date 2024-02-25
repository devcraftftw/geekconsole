import {
  Spacer
} from "/build/_shared/chunk-3YUGB6UL.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Field
} from "/build/_shared/chunk-JBR5K2OT.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  Button
} from "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-RO4OX7CY.js";
import "/build/_shared/chunk-CHQ4BA76.js";
import "/build/_shared/chunk-YWGK6LNJ.js";
import {
  useDebounce,
  useDoubleCheck
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useSearchParams,
  useSubmit
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

// app/routes/_layout+/admin+/cache.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/admin+/cache.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/admin+/cache.tsx"
  );
  import.meta.hot.lastModified = "1706588338070.0923";
}
var handle = {
  getSitemapEntries: () => null
};
function CacheAdminRoute() {
  _s();
  const data = useLoaderData();
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const query = searchParams.get("query") ?? "";
  const limit = searchParams.get("limit") ?? "100";
  const instance = searchParams.get("instance") ?? data.instance;
  const handleFormChange = useDebounce((form) => {
    submit(form);
  }, 400);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: "Cache Admin" }, void 0, false, {
      fileName: "app/routes/_layout+/admin+/cache.tsx",
      lineNumber: 107,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "2xs" }, void 0, false, {
      fileName: "app/routes/_layout+/admin+/cache.tsx",
      lineNumber: 109,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "flex flex-col gap-4", onChange: (e) => handleFormChange(e.currentTarget), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "flex h-16 items-center justify-center", children: "\u{1F50E}" }, void 0, false, {
          fileName: "app/routes/_layout+/admin+/cache.tsx",
          lineNumber: 114,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { className: "flex-1", labelProps: {
          children: "Search"
        }, inputProps: {
          type: "search",
          name: "query",
          defaultValue: query
        } }, void 0, false, {
          fileName: "app/routes/_layout+/admin+/cache.tsx",
          lineNumber: 117,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-16 w-14 items-center text-lg font-medium text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { title: "Total results shown", children: data.cacheKeys.sqlite.length + data.cacheKeys.lru.length }, void 0, false, {
          fileName: "app/routes/_layout+/admin+/cache.tsx",
          lineNumber: 125,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/admin+/cache.tsx",
          lineNumber: 124,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 113,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 112,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
          children: "Limit"
        }, inputProps: {
          name: "limit",
          defaultValue: limit,
          type: "number",
          step: "1",
          min: "1",
          max: "10000",
          placeholder: "results limit"
        } }, void 0, false, {
          fileName: "app/routes/_layout+/admin+/cache.tsx",
          lineNumber: 132,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "instance", defaultValue: instance, children: Object.entries(data.instances).map(([inst, region]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: inst, children: [inst, `(${region})`, inst === data.currentInstanceInfo.currentInstance ? "(current)" : "", inst === data.currentInstanceInfo.primaryInstance ? " (primary)" : ""].filter(Boolean).join(" ") }, inst, false, {
          fileName: "app/routes/_layout+/admin+/cache.tsx",
          lineNumber: 144,
          columnNumber: 63
        }, this)) }, void 0, false, {
          fileName: "app/routes/_layout+/admin+/cache.tsx",
          lineNumber: 143,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 131,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/admin+/cache.tsx",
      lineNumber: 111,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "2xs" }, void 0, false, {
      fileName: "app/routes/_layout+/admin+/cache.tsx",
      lineNumber: 150,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-h2", children: "LRU Cache:" }, void 0, false, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 152,
        columnNumber: 5
      }, this),
      data.cacheKeys.lru.map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheKeyRow, { cacheKey: key, instance, type: "lru" }, key, false, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 153,
        columnNumber: 36
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/admin+/cache.tsx",
      lineNumber: 151,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "3xs" }, void 0, false, {
      fileName: "app/routes/_layout+/admin+/cache.tsx",
      lineNumber: 155,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-h2", children: "SQLite Cache:" }, void 0, false, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 157,
        columnNumber: 5
      }, this),
      data.cacheKeys.sqlite.map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheKeyRow, { cacheKey: key, instance, type: "sqlite" }, key, false, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 158,
        columnNumber: 39
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/admin+/cache.tsx",
      lineNumber: 156,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/admin+/cache.tsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
}
_s(CacheAdminRoute, "z/M+YsFfBOrSgQCYrdUVeFTlOpA=", false, function() {
  return [useLoaderData, useSearchParams, useSubmit, useDebounce];
});
_c = CacheAdminRoute;
function CacheKeyRow({
  cacheKey,
  instance,
  type
}) {
  _s2();
  const fetcher = useFetcher();
  const dc = useDoubleCheck();
  const encodedKey = encodeURIComponent(cacheKey);
  const valuePage = `/admin/cache/${type}/${encodedKey}?instance=${instance}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 font-mono", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "cacheKey", value: cacheKey }, void 0, false, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 178,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "instance", value: instance }, void 0, false, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 179,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "type", value: type }, void 0, false, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 180,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "sm", variant: "secondary", ...dc.getButtonProps({
        type: "submit"
      }), children: fetcher.state === "idle" ? dc.doubleCheck ? "You sure?" : "Delete" : "Deleting..." }, void 0, false, {
        fileName: "app/routes/_layout+/admin+/cache.tsx",
        lineNumber: 181,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/admin+/cache.tsx",
      lineNumber: 177,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { reloadDocument: true, to: valuePage, children: cacheKey }, void 0, false, {
      fileName: "app/routes/_layout+/admin+/cache.tsx",
      lineNumber: 187,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/admin+/cache.tsx",
    lineNumber: 176,
    columnNumber: 10
  }, this);
}
_s2(CacheKeyRow, "tH208MjkdZi2owGp90tZwDJICNw=", false, function() {
  return [useFetcher, useDoubleCheck];
});
_c2 = CacheKeyRow;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    403: ({
      error
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "You are not allowed to do that: ",
      error?.data.message
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/admin+/cache.tsx",
      lineNumber: 200,
      columnNumber: 11
    }, this)
  } }, void 0, false, {
    fileName: "app/routes/_layout+/admin+/cache.tsx",
    lineNumber: 197,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "CacheAdminRoute");
$RefreshReg$(_c2, "CacheKeyRow");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  CacheAdminRoute as default,
  handle
};
//# sourceMappingURL=/build/routes/_layout+/admin+/cache-44ZL3MGX.js.map
