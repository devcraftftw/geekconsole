import {
  ProviderConnectionForm,
  providerIcons,
  providerNames
} from "/build/_shared/chunk-IAFLELVB.js";
import {
  StatusButton
} from "/build/_shared/chunk-4XWLGYB5.js";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "/build/_shared/chunk-BZBQSHJ3.js";
import "/build/_shared/chunk-IATUL5VE.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-3FDTPL7P.js";
import "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-HVEEJRFY.js";
import "/build/_shared/chunk-LQQW5RSX.js";
import "/build/_shared/chunk-RO4OX7CY.js";
import "/build/_shared/chunk-CHQ4BA76.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  useFetcher,
  useLoaderData
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

// app/routes/_layout+/settings+/profile.connections.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/settings+/profile.connections.tsx"' + id);
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
    "app/routes/_layout+/settings+/profile.connections.tsx"
  );
  import.meta.hot.lastModified = "1706588338072.4663";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "link-2", children: "Connections" }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
    lineNumber: 31,
    columnNumber: 15
  }, this),
  getSitemapEntries: () => null
};
function Connections() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-md", children: [
    data.connections.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Here are your current connections:" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 129,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col gap-4", children: data.connections.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Connection, { connection: c, canDelete: data.canDeleteConnections }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this) }, c.id, false, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 131,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 130,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
      lineNumber: 128,
      columnNumber: 31
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You don't have any connections yet." }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
      lineNumber: 135,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 flex flex-col gap-5 border-y-2 border-border py-3", children: providerNames.map((providerName) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProviderConnectionForm, { type: "Connect", providerName }, providerName, false, {
      fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
      lineNumber: 137,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
      lineNumber: 136,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
    lineNumber: 127,
    columnNumber: 10
  }, this);
}
_s(Connections, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = Connections;
function Connection({
  connection,
  canDelete
}) {
  _s2();
  const deleteFetcher = useFetcher();
  const [infoOpen, setInfoOpen] = (0, import_react2.useState)(false);
  const icon = providerIcons[connection.providerName];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-flex items-center gap-1.5`, children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        connection.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: connection.link, className: "underline", children: connection.displayName }, void 0, false, {
          fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
          lineNumber: 157,
          columnNumber: 25
        }, this) : connection.displayName,
        " ",
        "(",
        connection.createdAtFormatted,
        ")"
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 156,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
      lineNumber: 154,
      columnNumber: 4
    }, this),
    canDelete ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(deleteFetcher.Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "connectionId", value: connection.id, type: "hidden" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 164,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { name: "intent", value: "delete-connection", variant: "destructive", size: "sm", status: deleteFetcher.state !== "idle" ? "pending" : deleteFetcher.data?.status ?? "idle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "cross-1" }, void 0, false, {
          fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
          lineNumber: 169,
          columnNumber: 10
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
          lineNumber: 168,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
          lineNumber: 167,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipContent, { children: "Disconnect this account" }, void 0, false, {
          fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
          lineNumber: 172,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 166,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 165,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
      lineNumber: 163,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { open: infoOpen, onOpenChange: setInfoOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipTrigger, { onClick: () => setInfoOpen(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "question-mark-circled" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 178,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 177,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipContent, { children: "You cannot delete your last connection unless you have a password." }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
        lineNumber: 180,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
      lineNumber: 176,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
      lineNumber: 175,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.connections.tsx",
    lineNumber: 153,
    columnNumber: 10
  }, this);
}
_s2(Connection, "k2jEgCF0d5m8xX8ShNqKItt8Qeg=", false, function() {
  return [useFetcher];
});
_c2 = Connection;
var _c;
var _c2;
$RefreshReg$(_c, "Connections");
$RefreshReg$(_c2, "Connection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Connections as default,
  handle
};
//# sourceMappingURL=/build/routes/_layout+/settings+/profile.connections-OVC4W43S.js.map
