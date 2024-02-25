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
  useDoubleCheck
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import "/build/_shared/chunk-PVP4W74X.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  useFetcher
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

// app/routes/_layout+/settings+/profile.two-factor.disable.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/settings+/profile.two-factor.disable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/settings+/profile.two-factor.disable.tsx"
  );
  import.meta.hot.lastModified = "1706588338073.2244";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "lock-open-1", children: "Disable" }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.two-factor.disable.tsx",
    lineNumber: 31,
    columnNumber: 15
  }, this),
  getSitemapEntries: () => null
};
function TwoFactorDisableRoute() {
  _s();
  const disable2FAFetcher = useFetcher();
  const dc = useDoubleCheck();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(disable2FAFetcher.Form, { method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.disable.tsx",
      lineNumber: 65,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Disabling two factor authentication is not recommended. However, if you would like to do so, click here:" }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.disable.tsx",
      lineNumber: 66,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { variant: "destructive", status: disable2FAFetcher.state === "loading" ? "pending" : "idle", ...dc.getButtonProps({
      className: "mx-auto",
      name: "intent",
      value: "disable",
      type: "submit"
    }), children: dc.doubleCheck ? "Are you sure?" : "Disable 2FA" }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.two-factor.disable.tsx",
      lineNumber: 70,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.two-factor.disable.tsx",
    lineNumber: 64,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.two-factor.disable.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s(TwoFactorDisableRoute, "AovRxqD2axCh0khrBhmC7lIcx4g=", false, function() {
  return [useFetcher, useDoubleCheck];
});
_c = TwoFactorDisableRoute;
var _c;
$RefreshReg$(_c, "TwoFactorDisableRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TwoFactorDisableRoute as default,
  handle
};
//# sourceMappingURL=/build/routes/_layout+/settings+/profile.two-factor.disable-7KPDTPAV.js.map
