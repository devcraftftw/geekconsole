import {
  Badge
} from "/build/_shared/chunk-RNGSMI55.js";
import {
  require_cuid2
} from "/build/_shared/chunk-FERROO4A.js";
import {
  StatusButton
} from "/build/_shared/chunk-4XWLGYB5.js";
import "/build/_shared/chunk-BZBQSHJ3.js";
import "/build/_shared/chunk-IATUL5VE.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-3FDTPL7P.js";
import {
  ErrorList,
  getFormProps,
  useForm
} from "/build/_shared/chunk-JBR5K2OT.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  Button
} from "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-HVEEJRFY.js";
import "/build/_shared/chunk-LQQW5RSX.js";
import "/build/_shared/chunk-RO4OX7CY.js";
import "/build/_shared/chunk-CHQ4BA76.js";
import {
  AuthenticityTokenInput
} from "/build/_shared/chunk-6LMWWETO.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  DELETE_BOOK_INTENT,
  useIsPending
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import {
  getBookImgSrc
} from "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  Link,
  useActionData,
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

// app/routes/_layout+/dashboard+/books+/$bookId.tsx
var import_cuid2 = __toESM(require_cuid2(), 1);
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/dashboard+/books+/$bookId.tsx"' + id);
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
    "app/routes/_layout+/dashboard+/books+/$bookId.tsx"
  );
  import.meta.hot.lastModified = "1707021261437.3242";
}
var handle = {
  breadcrumb: "Overview",
  getSitemapEntries: () => null
};
function BookOverview() {
  _s();
  const {
    book,
    timeAgo
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "mx-auto flex items-center justify-start space-x-10 rounded-lg border bg-muted p-8 shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto pb-24", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/90 max-[524px]:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "clock", className: "scale-125", children: [
        timeAgo,
        " ago"
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 51,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 49,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-wrap gap-5 py-5", children: book.images.length > 0 ? book.images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: getBookImgSrc(image.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getBookImgSrc(image.id), alt: image.altText ?? `${book.title}/${index + 1}`, className: "size-32 rounded-lg object-cover" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 58,
        columnNumber: 10
      }, this) }, image.id, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 57,
        columnNumber: 67
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getBookImgSrc(null), alt: "Placeholder", className: "w-32 rounded-lg" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 61,
        columnNumber: 18
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 56,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
      lineNumber: 48,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3/4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-4 text-left text-xl font-bold tracking-tight text-foreground lg:text-2xl", children: book.title }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 67,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold", children: "Author" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-3 font-light text-muted-foreground", children: book.author }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 70,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold ", children: "Year" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 77,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-3 font-light text-muted-foreground", children: book.year }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 76,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold", children: "Description" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 81,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-3 font-light text-muted-foreground", children: book.description ? book.description : "Description is not provided." }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 82,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 80,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold", children: "Your comments" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 87,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-3 font-light text-muted-foreground", children: book.comment ? book.comment : "No comments yet. Add one!" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 86,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { className: "mb-3", children: book.status.name }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 93,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteBook, { id: book.id }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 96,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, className: "min-[525px]:max-md:aspect-square min-[525px]:max-md:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "pencil-1", className: "scale-125 max-md:scale-150", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-md:hidden", children: "Edit" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 101,
          columnNumber: 10
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 99,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
          lineNumber: 98,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
        lineNumber: 95,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
      lineNumber: 66,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
    lineNumber: 47,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(BookOverview, "K6rXzravBrYGZbTgc0YjSh+jeVg=", false, function() {
  return [useLoaderData];
});
_c = BookOverview;
function DeleteBook({
  id
}) {
  _s2();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form] = useForm({
    id: "deleteBook",
    lastResult: actionData?.result
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
      lineNumber: 125,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "bookId", value: id }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
      lineNumber: 126,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { type: "submit", name: "intent", value: DELETE_BOOK_INTENT, variant: "destructive", status: isPending ? "pending" : form.status ?? "idle", disabled: isPending, className: "w-full max-md:aspect-square max-md:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "trash", className: "scale-125 max-md:scale-150", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-md:hidden", children: "Delete" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
      lineNumber: 129,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
      lineNumber: 128,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
      lineNumber: 127,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
      lineNumber: 132,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_s2(DeleteBook, "G+LY8oKPtG3PTaudrP2QM73mqkI=", false, function() {
  return [useActionData, useIsPending, useForm];
});
_c2 = DeleteBook;
var meta = ({
  data
}) => {
  const bookName = data?.book.title ?? "Book";
  const bookSummary = data && data.book.description && data.book.description.length > 100 ? data.book.description.slice(0, 97) + "..." : "No description";
  return [{
    title: `${bookName} | GeekConsole`
  }, {
    name: "description",
    content: bookSummary
  }];
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    403: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You are not allowed to do that" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
      lineNumber: 237,
      columnNumber: 16
    }, this),
    404: ({
      params
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      'No book with the id "',
      params.bookId,
      '" exists'
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
      lineNumber: 240,
      columnNumber: 11
    }, this)
  } }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/$bookId.tsx",
    lineNumber: 236,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "BookOverview");
$RefreshReg$(_c2, "DeleteBook");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  BookOverview as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/_layout+/dashboard+/books+/$bookId-VUWZRLR3.js.map
