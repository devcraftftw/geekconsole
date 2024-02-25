import {
  HoneypotProvider
} from "/build/_shared/chunk-6NMOG26R.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  AuthenticityTokenProvider
} from "/build/_shared/chunk-6LMWWETO.js";
import {
  sprite_default
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  ClientHintCheck,
  useNonce,
  useTheme
} from "/build/_shared/chunk-O6I6CHNL.js";
import {
  withSentry
} from "/build/_shared/chunk-WAALZXNF.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// app/root.tsx
var import_node = __toESM(require_node(), 1);

// app/core/styles/fonts.css
var fonts_default = "/build/_assets/fonts-7DOLWHIY.css";

// app/core/styles/twStyles.css
var twStyles_default = "/build/_assets/twStyles-KUECQ6G2.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [
  // Preload svg sprite as a resource to avoid render blocking
  {
    rel: "preload",
    href: sprite_default,
    as: "image"
  },
  // Preload CSS as a resource to avoid render blocking
  {
    rel: "preload",
    href: twStyles_default,
    as: "style"
  },
  {
    rel: "preload",
    href: fonts_default,
    as: "style"
  },
  cssBundleHref ? {
    rel: "preload",
    href: cssBundleHref,
    as: "style"
  } : null,
  {
    rel: "icon",
    type: "image/svg+xml",
    href: "favicons/favicon_bl.svg"
  },
  {
    rel: "stylesheet",
    href: twStyles_default
  },
  {
    rel: "stylesheet",
    href: fonts_default
  },
  cssBundleHref ? {
    rel: "stylesheet",
    href: cssBundleHref
  } : null
].filter(Boolean);
var root_default = _c = withSentry(AppWithProviders);
function AppWithProviders() {
  _s();
  const {
    honeyProps,
    csrfToken
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenProvider, { token: csrfToken, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoneypotProvider, { ...honeyProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(App, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 82,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_s(AppWithProviders, "ARPiMJKWJp5QFBg8fUrEz1wvOV8=", false, function() {
  return [useLoaderData];
});
_c2 = AppWithProviders;
function App() {
  _s2();
  const {
    ENV
  } = useLoaderData();
  const theme = useTheme();
  const nonce = useNonce();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { nonce, theme, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 99,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { nonce, dangerouslySetInnerHTML: {
      __html: `window.ENV = ${JSON.stringify(ENV)}`
    } }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 101,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_s2(App, "Gww09Jh8C1CYiO0R9KlLMUgEL8k=", false, function() {
  return [useLoaderData, useTheme, useNonce];
});
_c3 = App;
function Document({
  children,
  nonce,
  theme
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { className: `${theme}`, lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientHintCheck, { nonce }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 118,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 120,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "description", content: "Your favourite geek storage" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 123,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 124,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 117,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: "flex min-h-screen flex-col items-center bg-background text-foreground", children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, { nonce }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, { nonce }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 130,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, { nonce }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 131,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 126,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 116,
    columnNumber: 10
  }, this);
}
_c4 = Document;
var meta = ({
  data
}) => {
  return [{
    title: data ? "GeekConsole" : "Error | GeekConsole"
  }, {
    name: "description",
    content: `Your favourite geek storage`
  }];
};
function ErrorBoundary() {
  _s3();
  const nonce = useNonce();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { nonce, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 271,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 270,
    columnNumber: 10
  }, this);
}
_s3(ErrorBoundary, "fTu1PJvfUhwKAAPh1vkoJap6Hoo=", false, function() {
  return [useNonce];
});
_c5 = ErrorBoundary;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "%default%");
$RefreshReg$(_c2, "AppWithProviders");
$RefreshReg$(_c3, "App");
$RefreshReg$(_c4, "Document");
$RefreshReg$(_c5, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  root_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-KWW7KMKU.js.map
