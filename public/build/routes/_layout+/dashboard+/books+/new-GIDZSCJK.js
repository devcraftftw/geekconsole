import {
  BookEditor
} from "/build/_shared/chunk-RTVLNJBP.js";
import "/build/_shared/chunk-FERROO4A.js";
import "/build/_shared/chunk-RZVSLDRN.js";
import "/build/_shared/chunk-2TJRRPFX.js";
import "/build/_shared/chunk-54LKDAMD.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-3FDTPL7P.js";
import "/build/_shared/chunk-JBR5K2OT.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-LQQW5RSX.js";
import "/build/_shared/chunk-RO4OX7CY.js";
import "/build/_shared/chunk-CHQ4BA76.js";
import "/build/_shared/chunk-6LMWWETO.js";
import "/build/_shared/chunk-YWGK6LNJ.js";
import "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import "/build/_shared/chunk-PVP4W74X.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
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

// app/routes/_layout+/dashboard+/books+/new.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/dashboard+/books+/new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/dashboard+/books+/new.tsx"
  );
  import.meta.hot.lastModified = "1707011059917.4927";
}
var handle = {
  breadcrumb: "New Book",
  getSitemapEntries: () => null
};
var meta = () => {
  return [{
    title: "New book | GeekConsole"
  }, {
    name: "description",
    content: "Add new book to your collection"
  }];
};
function NewBookRoute() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookEditor, { readingStatuses: data.readingStatuses }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/new.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(NewBookRoute, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = NewBookRoute;
var _c;
$RefreshReg$(_c, "NewBookRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewBookRoute as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/_layout+/dashboard+/books+/new-GIDZSCJK.js.map
