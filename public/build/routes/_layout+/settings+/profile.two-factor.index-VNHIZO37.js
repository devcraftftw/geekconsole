import "/build/_shared/chunk-5MA4PRYV.js";
import "/build/_shared/chunk-IBVEL7IU.js";
import "/build/_shared/chunk-VBLMD53Y.js";
import "/build/_shared/chunk-24FFLN7L.js";
import "/build/_shared/chunk-IAFLELVB.js";
import "/build/_shared/chunk-3YUGB6UL.js";
import "/build/_shared/chunk-7IRL35RG.js";
import {
  StatusButton
} from "/build/_shared/chunk-4XWLGYB5.js";
import "/build/_shared/chunk-BZBQSHJ3.js";
import "/build/_shared/chunk-IATUL5VE.js";
import "/build/_shared/chunk-6NMOG26R.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-3FDTPL7P.js";
import "/build/_shared/chunk-JBR5K2OT.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-ZGF5TUXK.js";
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
  useIsPending
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import "/build/_shared/chunk-PVP4W74X.js";
import "/build/_shared/chunk-J754EQNG.js";
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

// app/routes/_layout+/settings+/profile.two-factor.index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/settings+/profile.two-factor.index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/settings+/profile.two-factor.index.tsx"
  );
  import.meta.hot.lastModified = "1706588338073.3499";
}
function TwoFactorRoute() {
  _s();
  const data = useLoaderData();
  const isPending = useIsPending();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4", children: data.isTwoFAEnabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "check", children: "You have enabled two-factor authentication." }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
      lineNumber: 83,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "disable", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "lock-open-1", children: "Disable 2FA" }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
      lineNumber: 88,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
    lineNumber: 82,
    columnNumber: 27
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "lock-open-1", children: "You have not enabled two-factor authentication yet." }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
      lineNumber: 92,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: [
      "Two factor authentication adds an extra layer of security to your account. You will need to enter a code from an authenticator app like",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "underline", href: "https://1password.com/", children: "1Password" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      " ",
      "to log in."
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
      lineNumber: 97,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { type: "submit", name: "intent", value: "enable", status: isPending ? "pending" : "idle", disabled: isPending, className: "mx-auto", children: "Enable 2FA" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
      lineNumber: 106,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
    lineNumber: 91,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.two-factor.index.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_s(TwoFactorRoute, "GCuWObDMfBijKRrQxqB47a/POH8=", false, function() {
  return [useLoaderData, useIsPending];
});
_c = TwoFactorRoute;
var _c;
$RefreshReg$(_c, "TwoFactorRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TwoFactorRoute as default
};
//# sourceMappingURL=/build/routes/_layout+/settings+/profile.two-factor.index-VNHIZO37.js.map
