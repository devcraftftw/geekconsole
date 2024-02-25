import {
  Button
} from "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-CHQ4BA76.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  Link,
  Outlet,
  useLocation
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

// app/routes/_layout+/dashboard+/books.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/dashboard+/books.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/dashboard+/books.tsx"
  );
  import.meta.hot.lastModified = "1707007433244.7124";
}
var meta = () => {
  return [{
    title: "Books | GeekConsole"
  }, {
    name: "description",
    content: "Your books collection"
  }];
};
var handle = {
  breadcrumb: "Books",
  getSitemapEntries: () => null
};
function Books() {
  _s();
  const {
    pathname
  } = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      pathname !== "/dashboard/books/new" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "new", prefetch: "intent", children: "Add a new book" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books.tsx",
        lineNumber: 46,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books.tsx",
        lineNumber: 45,
        columnNumber: 46
      }, this),
      pathname !== "/dashboard/books/collection" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "collection", prefetch: "intent", children: "Go to Collection" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books.tsx",
        lineNumber: 52,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books.tsx",
        lineNumber: 51,
        columnNumber: 53
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books.tsx",
      lineNumber: 43,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books.tsx",
      lineNumber: 60,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books.tsx",
      lineNumber: 59,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/books.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(Books, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function() {
  return [useLocation];
});
_c = Books;
var _c;
$RefreshReg$(_c, "Books");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Books as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/_layout+/dashboard+/books-VDLKUZW3.js.map
