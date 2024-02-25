import {
  Spacer
} from "/build/_shared/chunk-3YUGB6UL.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Button
} from "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-CHQ4BA76.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  useOptionalUser
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import {
  getUserImgSrc
} from "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  Link,
  useLoaderData
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

// app/routes/_layout+/profile.$username.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/profile.$username.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/profile.$username.tsx"
  );
  import.meta.hot.lastModified = "1706962574089.0002";
}
function ProfileRoute() {
  _s();
  const data = useLoaderData();
  const user = data.user;
  const userDisplayName = user.name ?? user.username;
  const loggedInUser = useOptionalUser();
  const isLoggedInUser = data.user.id === loggedInUser?.id;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "4xs" }, void 0, false, {
      fileName: "app/routes/_layout+/profile.$username.tsx",
      lineNumber: 64,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container flex flex-col items-center rounded-3xl bg-muted p-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-52", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getUserImgSrc(data.user.image?.id), alt: userDisplayName, className: "size-52 rounded-full object-cover" }, void 0, false, {
        fileName: "app/routes/_layout+/profile.$username.tsx",
        lineNumber: 70,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/profile.$username.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/profile.$username.tsx",
        lineNumber: 68,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/profile.$username.tsx",
        lineNumber: 67,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "sm" }, void 0, false, {
        fileName: "app/routes/_layout+/profile.$username.tsx",
        lineNumber: 75,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-h2", children: userDisplayName }, void 0, false, {
          fileName: "app/routes/_layout+/profile.$username.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/profile.$username.tsx",
          lineNumber: 78,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-muted-foreground", children: [
          "Joined ",
          data.userJoinedDisplay
        ] }, void 0, true, {
          fileName: "app/routes/_layout+/profile.$username.tsx",
          lineNumber: 81,
          columnNumber: 6
        }, this),
        isLoggedInUser ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", method: "POST", className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "link", size: "pill", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "exit", className: "scale-125 max-md:scale-150", children: "Logout" }, void 0, false, {
          fileName: "app/routes/_layout+/profile.$username.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/profile.$username.tsx",
          lineNumber: 85,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/profile.$username.tsx",
          lineNumber: 84,
          columnNumber: 24
        }, this) : null,
        isLoggedInUser && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", prefetch: "intent", children: "My dashboard" }, void 0, false, {
            fileName: "app/routes/_layout+/profile.$username.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/_layout+/profile.$username.tsx",
            lineNumber: 92,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/settings/profile", prefetch: "intent", children: "Edit profile" }, void 0, false, {
            fileName: "app/routes/_layout+/profile.$username.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/_layout+/profile.$username.tsx",
            lineNumber: 97,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_layout+/profile.$username.tsx",
          lineNumber: 91,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/profile.$username.tsx",
        lineNumber: 77,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/profile.$username.tsx",
      lineNumber: 66,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/profile.$username.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s(ProfileRoute, "WemrhwYXdIHkPFxNeqgcvBbQjZE=", false, function() {
  return [useLoaderData, useOptionalUser];
});
_c = ProfileRoute;
var meta = ({
  data,
  params
}) => {
  const displayName = data?.user.name ?? params.username;
  return [{
    title: `${displayName} | GeekConsole`
  }, {
    name: "description",
    content: `Profile of ${displayName} on GeekConsole`
  }];
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    404: ({
      params
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      'No user with the username "',
      params.username,
      '" exists'
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/profile.$username.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, this)
  } }, void 0, false, {
    fileName: "app/routes/_layout+/profile.$username.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "ProfileRoute");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  ProfileRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/_layout+/profile.$username-O6P4HWKV.js.map
