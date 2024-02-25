import {
  SmallLogo
} from "/build/_shared/chunk-W6LYXVSI.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  BreadcrumbHandle,
  useTheme,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  cn
} from "/build/_shared/chunk-J754EQNG.js";
import {
  Link,
  NavLink,
  Outlet,
  useMatches
} from "/build/_shared/chunk-HCJ6L7J4.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-OC2Z5MX2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_layout+/dashboard.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1707187632456.713";
}
var meta = () => {
  return [{
    title: "Dashboard | GeekConsole"
  }, {
    name: "description",
    content: "This is your dashboard"
  }];
};
var DASHBOARD_ROUTES = [
  {
    path: "books",
    text: "Books to Read"
  },
  {
    path: "car",
    text: "Car to Maintain"
  }
  // NOTE coming soon
  // {
  // 	path: 'games',
  // 	text: 'Games to Play',
  // },
];
var NAV_LINK_DEFAULT_CN = "flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:text-foreground cursor-pointer";
var NAV_LINK_ACTIVE_CN = "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50";
var handle = {
  breadcrumb: "Dashboard",
  getSitemapEntries: () => null
};
var BreadcrumbHandleMatch = z.object({
  handle: BreadcrumbHandle
});
function DashboardRoute() {
  _s();
  const theme = useTheme();
  const isDark = theme === "dark";
  const matches = useMatches();
  const breadcrumbs = matches.map((m) => {
    const result = BreadcrumbHandleMatch.safeParse(m);
    if (!result.success || !result.data.handle.breadcrumb)
      return null;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: m.pathname, className: "flex items-center", children: result.data.handle.breadcrumb }, m.id, false, {
      fileName: "app/routes/_layout+/dashboard.tsx",
      lineNumber: 67,
      columnNumber: 12
    }, this);
  }).filter(Boolean);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid min-h-[650px] w-full lg:grid-cols-[280px_1fr]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden rounded-md border-r bg-muted lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full max-h-screen flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-[60px] items-center border-b px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "flex items-center gap-2 font-semibold", to: "/dashboard", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SmallLogo, { isDark }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard.tsx",
          lineNumber: 76,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Dashboard" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard.tsx",
          lineNumber: 77,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 74,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 overflow-auto py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "grid items-start px-4 text-sm font-medium", children: DASHBOARD_ROUTES.map((route) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: route.path, className: ({
        isActive
      }) => cn(NAV_LINK_DEFAULT_CN, isActive && NAV_LINK_ACTIVE_CN), children: route.text }, route.path, false, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 82,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 80,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard.tsx",
      lineNumber: 73,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard.tsx",
      lineNumber: 72,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex h-14 items-center gap-4 rounded-md border-b bg-muted px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex gap-3", children: breadcrumbs.map((breadcrumb, i, arr) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: cn("flex items-center gap-3 hover:text-foreground", {
        "text-muted-foreground": i < arr.length - 1
      }), children: [
        breadcrumb,
        i !== arr.length - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "arrow-right" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard.tsx",
          lineNumber: 100,
          columnNumber: 35
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this) }, i, false, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 95,
        columnNumber: 48
      }, this)) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 94,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 93,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-1 flex-wrap gap-4 p-4 md:gap-8 md:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 106,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard.tsx",
        lineNumber: 105,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard.tsx",
      lineNumber: 92,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_s(DashboardRoute, "kU1qT+gweOWUeXThOcCc5ZaGqfk=", false, function() {
  return [useTheme, useMatches];
});
_c = DashboardRoute;
var _c;
$RefreshReg$(_c, "DashboardRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DashboardRoute as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/_layout+/dashboard-FD7WPT7B.js.map
