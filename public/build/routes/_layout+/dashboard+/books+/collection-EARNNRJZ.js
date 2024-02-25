import {
  Badge
} from "/build/_shared/chunk-RNGSMI55.js";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "/build/_shared/chunk-RZVSLDRN.js";
import {
  StatusButton
} from "/build/_shared/chunk-4XWLGYB5.js";
import "/build/_shared/chunk-BZBQSHJ3.js";
import "/build/_shared/chunk-IATUL5VE.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_dist
} from "/build/_shared/chunk-3FDTPL7P.js";
import {
  ErrorList,
  Input,
  Label
} from "/build/_shared/chunk-JBR5K2OT.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  Button,
  cva
} from "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-HVEEJRFY.js";
import "/build/_shared/chunk-LQQW5RSX.js";
import "/build/_shared/chunk-RO4OX7CY.js";
import "/build/_shared/chunk-CHQ4BA76.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  useDebounce,
  useIsPending,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import {
  cn,
  getBookImgSrc
} from "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  Link,
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_layout+/dashboard+/books+/collection.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);

// app/shared/lib/hooks/useDelayedIsPending/useDelayedIsPending.tsx
var import_spin_delay = __toESM(require_dist(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/lib/hooks/useDelayedIsPending/useDelayedIsPending.tsx"
  );
  import.meta.hot.lastModified = "1706588338075.0234";
}
function useDelayedIsPending({
  formAction,
  formMethod,
  delay = 400,
  minDuration = 300
} = {}) {
  const isPending = useIsPending({ formAction, formMethod });
  const delayedIsPending = (0, import_spin_delay.useSpinDelay)(isPending, {
    delay,
    minDuration
  });
  return delayedIsPending;
}

// app/shared/ui/Alert/Alert.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Alert/Alert.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Alert/Alert.tsx"
  );
  import.meta.hot.lastModified = "1706588338079.7122";
}
var alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Alert = React.forwardRef(_c = ({
  className,
  variant,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, role: "alert", className: cn(alertVariants({
  variant
}), className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Alert/Alert.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c2 = Alert;
Alert.displayName = "Alert";
var AlertTitle = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Alert/Alert.tsx",
  lineNumber: 47,
  columnNumber: 12
}, this));
_c4 = AlertTitle;
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Alert/Alert.tsx",
  lineNumber: 53,
  columnNumber: 12
}, this));
_c6 = AlertDescription;
AlertDescription.displayName = "AlertDescription";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "Alert$React.forwardRef");
$RefreshReg$(_c2, "Alert");
$RefreshReg$(_c3, "AlertTitle$React.forwardRef");
$RefreshReg$(_c4, "AlertTitle");
$RefreshReg$(_c5, "AlertDescription$React.forwardRef");
$RefreshReg$(_c6, "AlertDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_layout+/dashboard+/books+/collection.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/dashboard+/books+/collection.tsx"' + id);
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
    "app/routes/_layout+/dashboard+/books+/collection.tsx"
  );
  import.meta.hot.lastModified = "1707022165575.2527";
}
var meta = () => {
  return [{
    title: "Books collection | GeekConsole"
  }, {
    name: "description",
    content: "Your books collection"
  }];
};
var handle = {
  breadcrumb: "Collection",
  getSitemapEntries: () => null
};
var BooksSearchResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  statusId: z.string(),
  statusName: z.string(),
  imageId: z.string().nullable()
});
var BooksSearchResultsSchema = z.array(BooksSearchResultSchema);
_c7 = BooksSearchResultsSchema;
function BooksCollectionRoute() {
  _s();
  const data = useLoaderData();
  const isPending = useDelayedIsPending();
  if (data.status === "error")
    console.error(data.error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full flex-col gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchBooksBar, { status: data.status, autoFocus: true, autoSubmit: true }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 155,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "w-full", children: data.status === "idle" ? data.usersBooks.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("grid w-full grid-cols-4 gap-4 delay-200", {
      "opacity-50": isPending
    }), children: data.usersBooks.map((book) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BookCard, { book }, book.id, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 161,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 158,
      columnNumber: 56
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "No books found" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 162,
      columnNumber: 16
    }, this) : data.status === "error" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { errors: ["There was an error parsing the results"] }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 162,
      columnNumber: 66
    }, this) : null }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 157,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
    lineNumber: 154,
    columnNumber: 10
  }, this);
}
_s(BooksCollectionRoute, "X4KRWZR4FN6itrOq+aVkJ8n94s8=", false, function() {
  return [useLoaderData, useDelayedIsPending];
});
_c22 = BooksCollectionRoute;
function SearchBooksBar({
  status,
  autoFocus = false,
  autoSubmit = false
}) {
  _s2();
  const id = (0, import_react2.useId)();
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const isSubmitting = useIsPending();
  const searchTerm = searchParams.get("search");
  const handleFormChange = useDebounce((form) => {
    submit(form);
  }, 400);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { className: "flex flex-wrap items-center justify-center gap-2", onChange: (e) => autoSubmit && handleFormChange(e.currentTarget), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: id, className: "sr-only", children: "Search" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
        lineNumber: 186,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { type: "search", name: "search", id, defaultValue: searchTerm ?? "", placeholder: "Search by title or author", className: "w-full", autoFocus }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
        lineNumber: 189,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 185,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StatusButton, { type: "submit", status: isSubmitting ? "pending" : status, className: "flex w-full items-center justify-center", size: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: "magnifying-glass", size: "sm" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
        lineNumber: 193,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Search" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
        lineNumber: 194,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 192,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 191,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
    lineNumber: 184,
    columnNumber: 10
  }, this);
}
_s2(SearchBooksBar, "67w/u/H51SOczxnmNINjhY9bY4o=", false, function() {
  return [import_react2.useId, useSearchParams, useSubmit, useIsPending, useDebounce];
});
_c32 = SearchBooksBar;
var BookCard = ({
  book
}) => {
  const {
    id,
    title,
    status,
    imageId
  } = book;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { className: "flex-row items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: title }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 214,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 213,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "size-40 max-w-full rounded-xl align-middle", src: getBookImgSrc(imageId), alt: book.title }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
        lineNumber: 217,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { variant: "outline", children: status.name }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
        lineNumber: 218,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 216,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardFooter, { className: "flex flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/dashboard/books/${id}`, prefetch: "intent", children: "See more" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 222,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 221,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 220,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
    lineNumber: 212,
    columnNumber: 10
  }, this);
};
_c42 = BookCard;
var ErrorBoundary = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    401: () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { variant: "destructive", className: "w-2/4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Unauthorized" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
        lineNumber: 233,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: [
        "You must be logged in to view your books.",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/auth?type=signin", children: "Login" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
          lineNumber: 237,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
          lineNumber: 236,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
        lineNumber: 234,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 232,
      columnNumber: 16
    }, this),
    403: () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "You are not allowed to do that" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 241,
      columnNumber: 16
    }, this),
    500: () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { variant: "destructive", className: "w-2/4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Server error" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
        lineNumber: 243,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: "Looks like something bad happened on our server. Already fixing!" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
        lineNumber: 244,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
      lineNumber: 242,
      columnNumber: 16
    }, this)
  }, unexpectedErrorHandler: () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "Something unexpected happened. Sorry about that." }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
    lineNumber: 248,
    columnNumber: 36
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/collection.tsx",
    lineNumber: 231,
    columnNumber: 10
  }, this);
};
_c52 = ErrorBoundary;
var _c7;
var _c22;
var _c32;
var _c42;
var _c52;
$RefreshReg$(_c7, "BooksSearchResultsSchema");
$RefreshReg$(_c22, "BooksCollectionRoute");
$RefreshReg$(_c32, "SearchBooksBar");
$RefreshReg$(_c42, "BookCard");
$RefreshReg$(_c52, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  BooksCollectionRoute as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/_layout+/dashboard+/books+/collection-EARNNRJZ.js.map
