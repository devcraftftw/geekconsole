import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "/build/_shared/chunk-2BPJYSIY.js";
import {
  $5d3850c4d0b4e6c7$export$393edc798c47379d,
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$69b62a49393917d6,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41,
  $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
  $5d3850c4d0b4e6c7$export$f99233281efd08a0
} from "/build/_shared/chunk-BZVVIC5O.js";
import {
  BigLogo
} from "/build/_shared/chunk-W6LYXVSI.js";
import "/build/_shared/chunk-2TJRRPFX.js";
import "/build/_shared/chunk-54LKDAMD.js";
import {
  require_dist
} from "/build/_shared/chunk-3FDTPL7P.js";
import {
  ErrorList,
  getFormProps,
  useForm
} from "/build/_shared/chunk-JBR5K2OT.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  Button,
  buttonVariants
} from "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-HVEEJRFY.js";
import "/build/_shared/chunk-LQQW5RSX.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "/build/_shared/chunk-RO4OX7CY.js";
import {
  $5e63c961fc1ce211$export$d9f1ccf0bdb05d45,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  _extends
} from "/build/_shared/chunk-CHQ4BA76.js";
import {
  AuthenticityTokenInput
} from "/build/_shared/chunk-6LMWWETO.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  useOptimisticThemeMode,
  useOptionalUser,
  useTheme,
  useUser,
  userHasRole
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  cn,
  getUserImgSrc
} from "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  Link,
  Outlet,
  useFetcher,
  useLocation,
  useNavigation,
  useRouteLoaderData,
  useSubmit
} from "/build/_shared/chunk-HCJ6L7J4.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/tween-functions/index.js
var require_tween_functions = __commonJS({
  "node_modules/tween-functions/index.js"(exports, module) {
    "use strict";
    var tweenFunctions = {
      linear: function(t, b, _c26, d) {
        var c = _c26 - b;
        return c * t / d + b;
      },
      easeInQuad: function(t, b, _c26, d) {
        var c = _c26 - b;
        return c * (t /= d) * t + b;
      },
      easeOutQuad: function(t, b, _c26, d) {
        var c = _c26 - b;
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOutQuad: function(t, b, _c26, d) {
        var c = _c26 - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t + b;
        } else {
          return -c / 2 * (--t * (t - 2) - 1) + b;
        }
      },
      easeInCubic: function(t, b, _c26, d) {
        var c = _c26 - b;
        return c * (t /= d) * t * t + b;
      },
      easeOutCubic: function(t, b, _c26, d) {
        var c = _c26 - b;
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOutCubic: function(t, b, _c26, d) {
        var c = _c26 - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
      },
      easeInQuart: function(t, b, _c26, d) {
        var c = _c26 - b;
        return c * (t /= d) * t * t * t + b;
      },
      easeOutQuart: function(t, b, _c26, d) {
        var c = _c26 - b;
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOutQuart: function(t, b, _c26, d) {
        var c = _c26 - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t + b;
        } else {
          return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
      },
      easeInQuint: function(t, b, _c26, d) {
        var c = _c26 - b;
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOutQuint: function(t, b, _c26, d) {
        var c = _c26 - b;
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOutQuint: function(t, b, _c26, d) {
        var c = _c26 - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
      },
      easeInSine: function(t, b, _c26, d) {
        var c = _c26 - b;
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },
      easeOutSine: function(t, b, _c26, d) {
        var c = _c26 - b;
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },
      easeInOutSine: function(t, b, _c26, d) {
        var c = _c26 - b;
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      },
      easeInExpo: function(t, b, _c26, d) {
        var c = _c26 - b;
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOutExpo: function(t, b, _c26, d) {
        var c = _c26 - b;
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      },
      easeInOutExpo: function(t, b, _c26, d) {
        var c = _c26 - b;
        if (t === 0) {
          return b;
        }
        if (t === d) {
          return b + c;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        } else {
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
      },
      easeInCirc: function(t, b, _c26, d) {
        var c = _c26 - b;
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOutCirc: function(t, b, _c26, d) {
        var c = _c26 - b;
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOutCirc: function(t, b, _c26, d) {
        var c = _c26 - b;
        if ((t /= d / 2) < 1) {
          return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        } else {
          return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
      },
      easeInElastic: function(t, b, _c26, d) {
        var c = _c26 - b;
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
          return b;
        } else if ((t /= d) === 1) {
          return b + c;
        }
        if (!p) {
          p = d * 0.3;
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      },
      easeOutElastic: function(t, b, _c26, d) {
        var c = _c26 - b;
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
          return b;
        } else if ((t /= d) === 1) {
          return b + c;
        }
        if (!p) {
          p = d * 0.3;
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      },
      easeInOutElastic: function(t, b, _c26, d) {
        var c = _c26 - b;
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
          return b;
        } else if ((t /= d / 2) === 2) {
          return b + c;
        }
        if (!p) {
          p = d * (0.3 * 1.5);
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
          return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        } else {
          return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        }
      },
      easeInBack: function(t, b, _c26, d, s) {
        var c = _c26 - b;
        if (s === void 0) {
          s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOutBack: function(t, b, _c26, d, s) {
        var c = _c26 - b;
        if (s === void 0) {
          s = 1.70158;
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOutBack: function(t, b, _c26, d, s) {
        var c = _c26 - b;
        if (s === void 0) {
          s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        } else {
          return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        }
      },
      easeInBounce: function(t, b, _c26, d) {
        var c = _c26 - b;
        var v;
        v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
        return c - v + b;
      },
      easeOutBounce: function(t, b, _c26, d) {
        var c = _c26 - b;
        if ((t /= d) < 1 / 2.75) {
          return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        } else if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
      },
      easeInOutBounce: function(t, b, _c26, d) {
        var c = _c26 - b;
        var v;
        if (t < d / 2) {
          v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
          return v * 0.5 + b;
        } else {
          v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
          return v * 0.5 + c * 0.5 + b;
        }
      }
    };
    module.exports = tweenFunctions;
  }
});

// app/core/components/layoutComponents/Header/Header.tsx
var import_react12 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $905f4ae918aab1aa$var$ROOT_NAME = "AlertDialog";
var [$905f4ae918aab1aa$var$createAlertDialogContext, $905f4ae918aab1aa$export$b8891880751c2c5b] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($905f4ae918aab1aa$var$ROOT_NAME, [
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41
]);
var $905f4ae918aab1aa$var$useDialogScope = $5d3850c4d0b4e6c7$export$cc702773b8ea3e41();
var $905f4ae918aab1aa$export$de466dd8317b0b75 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, _extends({}, dialogScope, alertDialogProps, {
    modal: true
  }));
};
var $905f4ae918aab1aa$export$660f2bfdb986706c = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$602eac185826482c, _extends({}, dialogScope, portalProps));
};
var $905f4ae918aab1aa$export$a707a4895ce23256 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...overlayProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, _extends({}, dialogScope, overlayProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$var$CONTENT_NAME = "AlertDialogContent";
var [$905f4ae918aab1aa$var$AlertDialogContentProvider, $905f4ae918aab1aa$var$useAlertDialogContentContext] = $905f4ae918aab1aa$var$createAlertDialogContext($905f4ae918aab1aa$var$CONTENT_NAME);
var $905f4ae918aab1aa$export$94e6af45f0af4efd = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, children, ...contentProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const contentRef = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const cancelRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$69b62a49393917d6, {
    contentName: $905f4ae918aab1aa$var$CONTENT_NAME,
    titleName: $905f4ae918aab1aa$var$TITLE_NAME,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ (0, import_react.createElement)($905f4ae918aab1aa$var$AlertDialogContentProvider, {
    scope: __scopeAlertDialog,
    cancelRef
  }, /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, _extends({
    role: "alertdialog"
  }, dialogScope, contentProps, {
    ref: composedRefs,
    onOpenAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onOpenAutoFocus, (event) => {
      var _cancelRef$current;
      event.preventDefault();
      (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
        preventScroll: true
      });
    }),
    onPointerDownOutside: (event) => event.preventDefault(),
    onInteractOutside: (event) => event.preventDefault()
  }), /* @__PURE__ */ (0, import_react.createElement)($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), false)));
});
var $905f4ae918aab1aa$var$TITLE_NAME = "AlertDialogTitle";
var $905f4ae918aab1aa$export$225e0da62d314b7 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...titleProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$f99233281efd08a0, _extends({}, dialogScope, titleProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$a23b55cde55ad9a5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$393edc798c47379d, _extends({}, dialogScope, descriptionProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$b454f818c58ee85d = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...actionProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, actionProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$var$CANCEL_NAME = "AlertDialogCancel";
var $905f4ae918aab1aa$export$2f67a923571aaea0 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...cancelProps } = props;
  const { cancelRef } = $905f4ae918aab1aa$var$useAlertDialogContentContext($905f4ae918aab1aa$var$CANCEL_NAME, __scopeAlertDialog);
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const ref2 = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, cancelRef);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, cancelProps, {
    ref: ref2
  }));
});
var $905f4ae918aab1aa$export$be92b6f5f03c0fe9 = $905f4ae918aab1aa$export$de466dd8317b0b75;
var $905f4ae918aab1aa$export$602eac185826482c = $905f4ae918aab1aa$export$660f2bfdb986706c;
var $905f4ae918aab1aa$export$c6fdb837b070b4ff = $905f4ae918aab1aa$export$a707a4895ce23256;
var $905f4ae918aab1aa$export$7c6e2c02157bb7d2 = $905f4ae918aab1aa$export$94e6af45f0af4efd;
var $905f4ae918aab1aa$export$e19cd5f9376f8cee = $905f4ae918aab1aa$export$b454f818c58ee85d;
var $905f4ae918aab1aa$export$848c9b7ead0df967 = $905f4ae918aab1aa$export$2f67a923571aaea0;
var $905f4ae918aab1aa$export$f99233281efd08a0 = $905f4ae918aab1aa$export$225e0da62d314b7;
var $905f4ae918aab1aa$export$393edc798c47379d = $905f4ae918aab1aa$export$a23b55cde55ad9a5;

// app/shared/ui/AlertDialog/AlertDialog.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/AlertDialog/AlertDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/AlertDialog/AlertDialog.tsx"
  );
  import.meta.hot.lastModified = "1706588338079.8933";
}
var AlertDialog = $905f4ae918aab1aa$export$be92b6f5f03c0fe9;
var AlertDialogPortal = $905f4ae918aab1aa$export$602eac185826482c;
var AlertDialogOverlay = React.forwardRef(_c = ({
  className,
  ...props
}, ref2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$c6fdb837b070b4ff, { className: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref: ref2 }, void 0, false, {
  fileName: "app/shared/ui/AlertDialog/AlertDialog.tsx",
  lineNumber: 31,
  columnNumber: 12
}, this));
_c2 = AlertDialogOverlay;
AlertDialogOverlay.displayName = $905f4ae918aab1aa$export$c6fdb837b070b4ff.displayName;
var AlertDialogContent = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogOverlay, {}, void 0, false, {
    fileName: "app/shared/ui/AlertDialog/AlertDialog.tsx",
    lineNumber: 38,
    columnNumber: 3
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$7c6e2c02157bb7d2, { ref: ref2, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", className), ...props }, void 0, false, {
    fileName: "app/shared/ui/AlertDialog/AlertDialog.tsx",
    lineNumber: 39,
    columnNumber: 3
  }, this)
] }, void 0, true, {
  fileName: "app/shared/ui/AlertDialog/AlertDialog.tsx",
  lineNumber: 37,
  columnNumber: 12
}, this));
_c4 = AlertDialogContent;
AlertDialogContent.displayName = $905f4ae918aab1aa$export$7c6e2c02157bb7d2.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/AlertDialog/AlertDialog.tsx",
  lineNumber: 46,
  columnNumber: 7
}, this);
_c5 = AlertDialogHeader;
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/AlertDialog/AlertDialog.tsx",
  lineNumber: 52,
  columnNumber: 7
}, this);
_c6 = AlertDialogFooter;
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$f99233281efd08a0, { ref: ref2, className: cn("text-lg font-semibold", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/AlertDialog/AlertDialog.tsx",
  lineNumber: 58,
  columnNumber: 12
}, this));
_c8 = AlertDialogTitle;
AlertDialogTitle.displayName = $905f4ae918aab1aa$export$f99233281efd08a0.displayName;
var AlertDialogDescription = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$393edc798c47379d, { ref: ref2, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/AlertDialog/AlertDialog.tsx",
  lineNumber: 64,
  columnNumber: 12
}, this));
_c10 = AlertDialogDescription;
AlertDialogDescription.displayName = $905f4ae918aab1aa$export$393edc798c47379d.displayName;
var AlertDialogAction = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$e19cd5f9376f8cee, { ref: ref2, className: cn(buttonVariants(), className), ...props }, void 0, false, {
  fileName: "app/shared/ui/AlertDialog/AlertDialog.tsx",
  lineNumber: 70,
  columnNumber: 12
}, this));
_c12 = AlertDialogAction;
AlertDialogAction.displayName = $905f4ae918aab1aa$export$e19cd5f9376f8cee.displayName;
var AlertDialogCancel = React.forwardRef(_c13 = ({
  className,
  ...props
}, ref2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$848c9b7ead0df967, { ref: ref2, className: cn(buttonVariants({
  variant: "outline"
}), "mt-2 sm:mt-0", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/AlertDialog/AlertDialog.tsx",
  lineNumber: 76,
  columnNumber: 12
}, this));
_c14 = AlertDialogCancel;
AlertDialogCancel.displayName = $905f4ae918aab1aa$export$848c9b7ead0df967.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
$RefreshReg$(_c, "AlertDialogOverlay$React.forwardRef");
$RefreshReg$(_c2, "AlertDialogOverlay");
$RefreshReg$(_c3, "AlertDialogContent$React.forwardRef");
$RefreshReg$(_c4, "AlertDialogContent");
$RefreshReg$(_c5, "AlertDialogHeader");
$RefreshReg$(_c6, "AlertDialogFooter");
$RefreshReg$(_c7, "AlertDialogTitle$React.forwardRef");
$RefreshReg$(_c8, "AlertDialogTitle");
$RefreshReg$(_c9, "AlertDialogDescription$React.forwardRef");
$RefreshReg$(_c10, "AlertDialogDescription");
$RefreshReg$(_c11, "AlertDialogAction$React.forwardRef");
$RefreshReg$(_c12, "AlertDialogAction");
$RefreshReg$(_c13, "AlertDialogCancel$React.forwardRef");
$RefreshReg$(_c14, "AlertDialogCancel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@radix-ui/react-avatar/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var $cddcb0b647441e34$var$AVATAR_NAME = "Avatar";
var [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cddcb0b647441e34$var$AVATAR_NAME);
var [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);
var $cddcb0b647441e34$export$e2255cf6045e8d47 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, ...avatarProps } = props;
  const [imageLoadingStatus, setImageLoadingStatus] = (0, import_react2.useState)("idle");
  return /* @__PURE__ */ (0, import_react2.createElement)($cddcb0b647441e34$var$AvatarProvider, {
    scope: __scopeAvatar,
    imageLoadingStatus,
    onImageLoadingStatusChange: setImageLoadingStatus
  }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, avatarProps, {
    ref: forwardedRef
  })));
});
var $cddcb0b647441e34$var$IMAGE_NAME = "AvatarImage";
var $cddcb0b647441e34$export$2cd8ae1985206fe8 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, src, onLoadingStatusChange = () => {
  }, ...imageProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);
  const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);
  const handleLoadingStatusChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a((status) => {
    onLoadingStatusChange(status);
    context.onImageLoadingStatusChange(status);
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (imageLoadingStatus !== "idle")
      handleLoadingStatusChange(imageLoadingStatus);
  }, [
    imageLoadingStatus,
    handleLoadingStatusChange
  ]);
  return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.img, _extends({}, imageProps, {
    ref: forwardedRef,
    src
  })) : null;
});
var $cddcb0b647441e34$var$FALLBACK_NAME = "AvatarFallback";
var $cddcb0b647441e34$export$69fffb6a9571fbfe = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, delayMs, ...fallbackProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);
  const [canRender, setCanRender] = (0, import_react2.useState)(delayMs === void 0);
  (0, import_react2.useEffect)(() => {
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(
        () => setCanRender(true),
        delayMs
      );
      return () => window.clearTimeout(timerId);
    }
  }, [
    delayMs
  ]);
  return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, fallbackProps, {
    ref: forwardedRef
  })) : null;
});
function $cddcb0b647441e34$var$useImageLoadingStatus(src) {
  const [loadingStatus, setLoadingStatus] = (0, import_react2.useState)("idle");
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted)
        return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [
    src
  ]);
  return loadingStatus;
}
var $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;
var $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;
var $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;

// app/shared/ui/Avatar/Avatar.tsx
var React2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Avatar/Avatar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Avatar/Avatar.tsx"
  );
  import.meta.hot.lastModified = "1706588338080.0435";
}
var Avatar = React2.forwardRef(_c15 = ({
  className,
  ...props
}, ref2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($cddcb0b647441e34$export$be92b6f5f03c0fe9, { ref: ref2, className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Avatar/Avatar.tsx",
  lineNumber: 27,
  columnNumber: 12
}, this));
_c22 = Avatar;
Avatar.displayName = $cddcb0b647441e34$export$be92b6f5f03c0fe9.displayName;
var AvatarImage = React2.forwardRef(_c32 = ({
  className,
  ...props
}, ref2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($cddcb0b647441e34$export$3e431a229df88919, { ref: ref2, className: cn("aspect-square h-full w-full", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Avatar/Avatar.tsx",
  lineNumber: 33,
  columnNumber: 12
}, this));
_c42 = AvatarImage;
AvatarImage.displayName = $cddcb0b647441e34$export$3e431a229df88919.displayName;
var AvatarFallback = React2.forwardRef(_c52 = ({
  className,
  ...props
}, ref2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($cddcb0b647441e34$export$fb8d7f40caaeea67, { ref: ref2, className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Avatar/Avatar.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c62 = AvatarFallback;
AvatarFallback.displayName = $cddcb0b647441e34$export$fb8d7f40caaeea67.displayName;
var _c15;
var _c22;
var _c32;
var _c42;
var _c52;
var _c62;
$RefreshReg$(_c15, "Avatar$React.forwardRef");
$RefreshReg$(_c22, "Avatar");
$RefreshReg$(_c32, "AvatarImage$React.forwardRef");
$RefreshReg$(_c42, "AvatarImage");
$RefreshReg$(_c52, "AvatarFallback$React.forwardRef");
$RefreshReg$(_c62, "AvatarFallback");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/sonner/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
"use client";
function lt(c, { insertAt: a } = {}) {
  if (!c || typeof document == "undefined")
    return;
  let t = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
  s.type = "text/css", a === "top" && t.firstChild ? t.insertBefore(s, t.firstChild) : t.appendChild(s), s.styleSheet ? s.styleSheet.cssText = c : s.appendChild(document.createTextNode(c));
}
lt(`html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
var St = (c) => {
  switch (c) {
    case "success":
      return zt;
    case "info":
      return Yt;
    case "warning":
      return At;
    case "error":
      return jt;
    default:
      return null;
  }
};
var Lt = Array(12).fill(0);
var kt = ({ visible: c }) => import_react4.default.createElement("div", { className: "sonner-loading-wrapper", "data-visible": c }, import_react4.default.createElement("div", { className: "sonner-spinner" }, Lt.map((a, t) => import_react4.default.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${t}` }))));
var zt = import_react4.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react4.default.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" }));
var At = import_react4.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, import_react4.default.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" }));
var Yt = import_react4.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react4.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" }));
var jt = import_react4.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react4.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }));
var Bt = () => {
  let [c, a] = import_react5.default.useState(false);
  return import_react5.default.useEffect(() => {
    let t = () => {
      a(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), c;
};
var dt = 1;
var ct = class {
  constructor() {
    this.subscribe = (a) => (this.subscribers.push(a), () => {
      let t = this.subscribers.indexOf(a);
      this.subscribers.splice(t, 1);
    });
    this.publish = (a) => {
      this.subscribers.forEach((t) => t(a));
    };
    this.addToast = (a) => {
      this.publish(a), this.toasts = [...this.toasts, a];
    };
    this.create = (a) => {
      var m;
      let { message: t, ...s } = a, y = typeof (a == null ? void 0 : a.id) == "number" || ((m = a.id) == null ? void 0 : m.length) > 0 ? a.id : dt++, g = this.toasts.find((r) => r.id === y), f = a.dismissible === void 0 ? true : a.dismissible;
      return g ? this.toasts = this.toasts.map((r) => r.id === y ? (this.publish({ ...r, ...a, id: y, title: t }), { ...r, ...a, id: y, dismissible: f, title: t }) : r) : this.addToast({ title: t, ...s, dismissible: f, id: y }), y;
    };
    this.dismiss = (a) => (a || this.toasts.forEach((t) => {
      this.subscribers.forEach((s) => s({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: a, dismiss: true })), a);
    this.message = (a, t) => this.create({ ...t, message: a });
    this.error = (a, t) => this.create({ ...t, message: a, type: "error" });
    this.success = (a, t) => this.create({ ...t, type: "success", message: a });
    this.info = (a, t) => this.create({ ...t, type: "info", message: a });
    this.warning = (a, t) => this.create({ ...t, type: "warning", message: a });
    this.loading = (a, t) => this.create({ ...t, type: "loading", message: a });
    this.promise = (a, t) => {
      if (!t)
        return;
      let s;
      t.loading !== void 0 && (s = this.create({ ...t, promise: a, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let y = a instanceof Promise ? a : a(), g = s !== void 0;
      return y.then((f) => {
        if (f && typeof f.ok == "boolean" && !f.ok) {
          g = false;
          let m = typeof t.error == "function" ? t.error(`HTTP error! status: ${f.status}`) : t.error, r = typeof t.description == "function" ? t.description(`HTTP error! status: ${f.status}`) : t.description;
          this.create({ id: s, type: "error", message: m, description: r });
        } else if (t.success !== void 0) {
          g = false;
          let m = typeof t.success == "function" ? t.success(f) : t.success, r = typeof t.description == "function" ? t.description(f) : t.description;
          this.create({ id: s, type: "success", message: m, description: r });
        }
      }).catch((f) => {
        if (t.error !== void 0) {
          g = false;
          let m = typeof t.error == "function" ? t.error(f) : t.error, r = typeof t.description == "function" ? t.description(f) : t.description;
          this.create({ id: s, type: "error", message: m, description: r });
        }
      }).finally(() => {
        var f;
        g && (this.dismiss(s), s = void 0), (f = t.finally) == null || f.call(t);
      }), s;
    };
    this.custom = (a, t) => {
      let s = (t == null ? void 0 : t.id) || dt++;
      return this.create({ jsx: a(s), id: s, ...t }), s;
    };
    this.subscribers = [], this.toasts = [];
  }
};
var T = new ct();
var Ft = (c, a) => {
  let t = (a == null ? void 0 : a.id) || dt++;
  return T.addToast({ title: c, ...a, id: t }), t;
};
var $t = Ft;
var Ut = Object.assign($t, { success: T.success, info: T.info, warning: T.warning, error: T.error, custom: T.custom, message: T.message, promise: T.promise, dismiss: T.dismiss, loading: T.loading });
var _t = 3;
var Vt = "32px";
var Kt = 4e3;
var Xt = 356;
var Nt = 14;
var Jt = 20;
var Gt = 200;
function j(...c) {
  return c.filter(Boolean).join(" ");
}
var qt = (c) => {
  var ht, bt, yt, vt, xt, Tt, wt;
  let { invert: a, toast: t, unstyled: s, interacting: y, setHeights: g, visibleToasts: f, heights: m, index: r, toasts: Z, expanded: F, removeToast: _, closeButton: V, style: n, cancelButtonStyle: K, actionButtonStyle: tt, className: et = "", descriptionClassName: at = "", duration: X, position: B, gap: $ = Nt, loadingIcon: J, expandByDefault: z, classNames: l, closeButtonAriaLabel: ot = "Close toast", pauseWhenPageIsHidden: M } = c, [H, G] = import_react3.default.useState(false), [q, R] = import_react3.default.useState(false), [P, O] = import_react3.default.useState(false), [S, L] = import_react3.default.useState(false), [st, i] = import_react3.default.useState(0), [p, h] = import_react3.default.useState(0), N = import_react3.default.useRef(null), x = import_react3.default.useRef(null), u = r === 0, U = r + 1 <= f, v = t.type, D = t.dismissible !== false, W = t.className || "", Dt = t.descriptionClassName || "", Q = import_react3.default.useMemo(() => m.findIndex((o) => o.toastId === t.id) || 0, [m, t.id]), Pt = import_react3.default.useMemo(() => {
    var o;
    return (o = t.closeButton) != null ? o : V;
  }, [t.closeButton, V]), ut = import_react3.default.useMemo(() => t.duration || X || Kt, [t.duration, X]), nt = import_react3.default.useRef(0), A = import_react3.default.useRef(0), ft = import_react3.default.useRef(0), Y = import_react3.default.useRef(null), [mt, Ct] = B.split("-"), pt = import_react3.default.useMemo(() => m.reduce((o, d, b) => b >= Q ? o : o + d.height, 0), [m, Q]), gt = Bt(), Ht = t.invert || a, rt = v === "loading";
  A.current = import_react3.default.useMemo(() => Q * $ + pt, [Q, pt]), import_react3.default.useEffect(() => {
    G(true);
  }, []), import_react3.default.useLayoutEffect(() => {
    if (!H)
      return;
    let o = x.current, d = o.style.height;
    o.style.height = "auto";
    let b = o.getBoundingClientRect().height;
    o.style.height = d, h(b), g((k) => k.find((w) => w.toastId === t.id) ? k.map((w) => w.toastId === t.id ? { ...w, height: b } : w) : [{ toastId: t.id, height: b, position: t.position }, ...k]);
  }, [H, t.title, t.description, g, t.id]);
  let C = import_react3.default.useCallback(() => {
    R(true), i(A.current), g((o) => o.filter((d) => d.toastId !== t.id)), setTimeout(() => {
      _(t);
    }, Gt);
  }, [t, _, g, A]);
  import_react3.default.useEffect(() => {
    if (t.promise && v === "loading" || t.duration === 1 / 0 || t.type === "loading")
      return;
    let o, d = ut;
    return F || y || M && gt ? (() => {
      if (ft.current < nt.current) {
        let I = (/* @__PURE__ */ new Date()).getTime() - nt.current;
        d = d - I;
      }
      ft.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      nt.current = (/* @__PURE__ */ new Date()).getTime(), o = setTimeout(() => {
        var I;
        (I = t.onAutoClose) == null || I.call(t, t), C();
      }, d);
    })(), () => clearTimeout(o);
  }, [F, y, z, t, ut, C, t.promise, v, M, gt]), import_react3.default.useEffect(() => {
    let o = x.current;
    if (o) {
      let d = o.getBoundingClientRect().height;
      return h(d), g((b) => [{ toastId: t.id, height: d, position: t.position }, ...b]), () => g((b) => b.filter((k) => k.toastId !== t.id));
    }
  }, [g, t.id]), import_react3.default.useEffect(() => {
    t.delete && C();
  }, [C, t.delete]);
  function Rt() {
    return J ? import_react3.default.createElement("div", { className: "sonner-loader", "data-visible": v === "loading" }, J) : import_react3.default.createElement(kt, { visible: v === "loading" });
  }
  return import_react3.default.createElement("li", { "aria-live": t.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: x, className: j(et, W, l == null ? void 0 : l.toast, (ht = t == null ? void 0 : t.classNames) == null ? void 0 : ht.toast, l == null ? void 0 : l[v], (bt = t == null ? void 0 : t.classNames) == null ? void 0 : bt[v]), "data-sonner-toast": "", "data-styled": !(t.jsx || t.unstyled || s), "data-mounted": H, "data-promise": !!t.promise, "data-removed": q, "data-visible": U, "data-y-position": mt, "data-x-position": Ct, "data-index": r, "data-front": u, "data-swiping": P, "data-dismissible": D, "data-type": v, "data-invert": Ht, "data-swipe-out": S, "data-expanded": !!(F || z && H), style: { "--index": r, "--toasts-before": r, "--z-index": Z.length - r, "--offset": `${q ? st : A.current}px`, "--initial-height": z ? "auto" : `${p}px`, ...n, ...t.style }, onPointerDown: (o) => {
    rt || !D || (N.current = /* @__PURE__ */ new Date(), i(A.current), o.target.setPointerCapture(o.pointerId), o.target.tagName !== "BUTTON" && (O(true), Y.current = { x: o.clientX, y: o.clientY }));
  }, onPointerUp: () => {
    var k, I, w, it;
    if (S || !D)
      return;
    Y.current = null;
    let o = Number(((k = x.current) == null ? void 0 : k.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), d = (/* @__PURE__ */ new Date()).getTime() - ((I = N.current) == null ? void 0 : I.getTime()), b = Math.abs(o) / d;
    if (Math.abs(o) >= Jt || b > 0.11) {
      i(A.current), (w = t.onDismiss) == null || w.call(t, t), C(), L(true);
      return;
    }
    (it = x.current) == null || it.style.setProperty("--swipe-amount", "0px"), O(false);
  }, onPointerMove: (o) => {
    var Et;
    if (!Y.current || !D)
      return;
    let d = o.clientY - Y.current.y, b = o.clientX - Y.current.x, I = (mt === "top" ? Math.min : Math.max)(0, d), w = o.pointerType === "touch" ? 10 : 2;
    Math.abs(I) > w ? (Et = x.current) == null || Et.style.setProperty("--swipe-amount", `${d}px`) : Math.abs(b) > w && (Y.current = null);
  } }, Pt && !t.jsx ? import_react3.default.createElement("button", { "aria-label": ot, "data-disabled": rt, "data-close-button": true, onClick: rt || !D ? () => {
  } : () => {
    var o;
    C(), (o = t.onDismiss) == null || o.call(t, t);
  }, className: j(l == null ? void 0 : l.closeButton, (yt = t == null ? void 0 : t.classNames) == null ? void 0 : yt.closeButton) }, import_react3.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, import_react3.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), import_react3.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, t.jsx || import_react3.default.isValidElement(t.title) ? t.jsx || t.title : import_react3.default.createElement(import_react3.default.Fragment, null, v || t.icon || t.promise ? import_react3.default.createElement("div", { "data-icon": "" }, (t.promise || t.type === "loading") && !t.icon ? Rt() : null, t.icon || St(v)) : null, import_react3.default.createElement("div", { "data-content": "" }, import_react3.default.createElement("div", { "data-title": "", className: j(l == null ? void 0 : l.title, (vt = t == null ? void 0 : t.classNames) == null ? void 0 : vt.title) }, t.title), t.description ? import_react3.default.createElement("div", { "data-description": "", className: j(at, Dt, l == null ? void 0 : l.description, (xt = t == null ? void 0 : t.classNames) == null ? void 0 : xt.description) }, t.description) : null), t.cancel ? import_react3.default.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || K, onClick: (o) => {
    var d;
    D && (C(), (d = t.cancel) != null && d.onClick && t.cancel.onClick(o));
  }, className: j(l == null ? void 0 : l.cancelButton, (Tt = t == null ? void 0 : t.classNames) == null ? void 0 : Tt.cancelButton) }, t.cancel.label) : null, t.action ? import_react3.default.createElement("button", { "data-button": "", style: t.actionButtonStyle || tt, onClick: (o) => {
    var d;
    (d = t.action) == null || d.onClick(o), !o.defaultPrevented && C();
  }, className: j(l == null ? void 0 : l.actionButton, (wt = t == null ? void 0 : t.classNames) == null ? void 0 : wt.actionButton) }, t.action.label) : null));
};
function Mt() {
  if (typeof window == "undefined" || typeof document == "undefined")
    return "ltr";
  let c = document.documentElement.getAttribute("dir");
  return c === "auto" || !c ? window.getComputedStyle(document.documentElement).direction : c;
}
var ce = (c) => {
  let { invert: a, position: t = "bottom-right", hotkey: s = ["altKey", "KeyT"], expand: y, closeButton: g, className: f, offset: m, theme: r = "light", richColors: Z, duration: F, style: _, visibleToasts: V = _t, toastOptions: n, dir: K = Mt(), gap: tt, loadingIcon: et, containerAriaLabel: at = "Notifications", pauseWhenPageIsHidden: X } = c, [B, $] = import_react3.default.useState([]), J = import_react3.default.useMemo(() => Array.from(new Set([t].concat(B.filter((i) => i.position).map((i) => i.position)))), [B, t]), [z, l] = import_react3.default.useState([]), [ot, M] = import_react3.default.useState(false), [H, G] = import_react3.default.useState(false), [q, R] = import_react3.default.useState(r !== "system" ? r : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), P = import_react3.default.useRef(null), O = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), S = import_react3.default.useRef(null), L = import_react3.default.useRef(false), st = import_react3.default.useCallback((i) => $((p) => p.filter(({ id: h }) => h !== i.id)), []);
  return import_react3.default.useEffect(() => T.subscribe((i) => {
    if (i.dismiss) {
      $((p) => p.map((h) => h.id === i.id ? { ...h, delete: true } : h));
      return;
    }
    setTimeout(() => {
      import_react_dom.default.flushSync(() => {
        $((p) => {
          let h = p.findIndex((N) => N.id === i.id);
          return h !== -1 ? [...p.slice(0, h), { ...p[h], ...i }, ...p.slice(h + 1)] : [i, ...p];
        });
      });
    });
  }), []), import_react3.default.useEffect(() => {
    if (r !== "system") {
      R(r);
      return;
    }
    r === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? R("dark") : R("light")), typeof window != "undefined" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: i }) => {
      R(i ? "dark" : "light");
    });
  }, [r]), import_react3.default.useEffect(() => {
    B.length <= 1 && M(false);
  }, [B]), import_react3.default.useEffect(() => {
    let i = (p) => {
      var N, x;
      s.every((u) => p[u] || p.code === u) && (M(true), (N = P.current) == null || N.focus()), p.code === "Escape" && (document.activeElement === P.current || (x = P.current) != null && x.contains(document.activeElement)) && M(false);
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [s]), import_react3.default.useEffect(() => {
    if (P.current)
      return () => {
        S.current && (S.current.focus({ preventScroll: true }), S.current = null, L.current = false);
      };
  }, [P.current]), B.length ? import_react3.default.createElement("section", { "aria-label": `${at} ${O}`, tabIndex: -1 }, J.map((i, p) => {
    var x;
    let [h, N] = i.split("-");
    return import_react3.default.createElement("ol", { key: i, dir: K === "auto" ? Mt() : K, tabIndex: -1, ref: P, className: f, "data-sonner-toaster": true, "data-theme": q, "data-rich-colors": Z, "data-y-position": h, "data-x-position": N, style: { "--front-toast-height": `${(x = z[0]) == null ? void 0 : x.height}px`, "--offset": typeof m == "number" ? `${m}px` : m || Vt, "--width": `${Xt}px`, "--gap": `${Nt}px`, ..._ }, onBlur: (u) => {
      L.current && !u.currentTarget.contains(u.relatedTarget) && (L.current = false, S.current && (S.current.focus({ preventScroll: true }), S.current = null));
    }, onFocus: (u) => {
      u.target instanceof HTMLElement && u.target.dataset.dismissible === "false" || L.current || (L.current = true, S.current = u.relatedTarget);
    }, onMouseEnter: () => M(true), onMouseMove: () => M(true), onMouseLeave: () => {
      H || M(false);
    }, onPointerDown: (u) => {
      u.target instanceof HTMLElement && u.target.dataset.dismissible === "false" || G(true);
    }, onPointerUp: () => G(false) }, B.filter((u) => !u.position && p === 0 || u.position === i).map((u, U) => {
      var v, D;
      return import_react3.default.createElement(qt, { key: u.id, index: U, toast: u, duration: (v = n == null ? void 0 : n.duration) != null ? v : F, className: n == null ? void 0 : n.className, descriptionClassName: n == null ? void 0 : n.descriptionClassName, invert: a, visibleToasts: V, closeButton: (D = n == null ? void 0 : n.closeButton) != null ? D : g, interacting: H, position: i, style: n == null ? void 0 : n.style, unstyled: n == null ? void 0 : n.unstyled, classNames: n == null ? void 0 : n.classNames, cancelButtonStyle: n == null ? void 0 : n.cancelButtonStyle, actionButtonStyle: n == null ? void 0 : n.actionButtonStyle, removeToast: st, toasts: B.filter((W) => W.position == u.position), heights: z.filter((W) => W.position == u.position), setHeights: l, expandByDefault: y, gap: tt, loadingIcon: et, expanded: ot, pauseWhenPageIsHidden: X });
    }));
  })) : null;
};

// app/shared/ui/Sonner/Sonner.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Sonner/Sonner.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Sonner/Sonner.tsx"
  );
  import.meta.hot.lastModified = "1706588338083.5908";
}
var GeekToaster = ({
  theme,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ce, { theme, className: "toaster group", toastOptions: {
    classNames: {
      toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
      description: "group-[.toast]:text-muted-foreground",
      actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
      cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
    }
  }, ...props }, void 0, false, {
    fileName: "app/shared/ui/Sonner/Sonner.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c16 = GeekToaster;
var _c16;
$RefreshReg$(_c16, "GeekToaster");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx"
  );
  import.meta.hot.lastModified = "1706962583479.044";
}
function ThemeSwitcher({
  userPreference
}) {
  _s();
  const fetcher = useFetcher();
  const [form] = useForm({
    id: "theme-switch",
    lastResult: fetcher.data?.result
  });
  const optimisticMode = useOptimisticThemeMode();
  const mode = optimisticMode ?? userPreference ?? "system";
  const nextMode = mode === "system" ? "light" : mode === "light" ? "dark" : "system";
  const modeLabel = {
    light: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "sun", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Light" }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
      lineNumber: 39,
      columnNumber: 12
    }, this),
    dark: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "moon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Dark" }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
      lineNumber: 43,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    system: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "laptop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "System" }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(fetcher.Form, { method: "POST", ...getFormProps(form), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "theme", value: nextMode }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
      lineNumber: 50,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", className: "flex size-8 cursor-pointer items-center justify-center", children: modeLabel[mode] }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
      lineNumber: 51,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
      lineNumber: 56,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/core/components/layoutComponents/Header/components/ThemeSwitcher.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(ThemeSwitcher, "uagBKBd+jjGPlAeXi0p1Kt1UeRY=", false, function() {
  return [useFetcher, useForm, useOptimisticThemeMode];
});
_c17 = ThemeSwitcher;
var _c17;
$RefreshReg$(_c17, "ThemeSwitcher");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/core/components/layoutComponents/Header/components/UserNav.tsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/core/components/layoutComponents/Header/components/UserNav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/Header/components/UserNav.tsx"
  );
  import.meta.hot.lastModified = "1706962574078.8452";
}
var UserNav = () => {
  _s2();
  const user = useUser();
  const submit = useSubmit();
  const formRef = (0, import_react9.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuTrigger, { asChild: true, className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Link,
      {
        to: "/settings/profile",
        onClick: (e2) => e2.preventDefault(),
        className: "flex items-center gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Avatar, { className: "size-12", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AvatarImage, { src: getUserImgSrc(user.image?.id), alt: user.name ?? user.username }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
              lineNumber: 40,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AvatarFallback, {}, void 0, false, {
              fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
              lineNumber: 41,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
            lineNumber: 39,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-body-sm font-bold", children: user.name ?? user.username }, void 0, false, {
            fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
            lineNumber: 43,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
        lineNumber: 36,
        columnNumber: 6
      },
      this
    ) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
      lineNumber: 34,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: user.username }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs leading-none text-muted-foreground", children: user.email }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
        lineNumber: 51,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
        lineNumber: 50,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/profile/${user.username}`, prefetch: "intent", children: "Profile" }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
          lineNumber: 61,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
          lineNumber: 60,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/dashboard", prefetch: "intent", children: "Dashboard" }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
          lineNumber: 65,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/settings/profile", prefetch: "intent", children: "Settings" }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
          lineNumber: 70,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
        lineNumber: 59,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
        lineNumber: 76,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        DropdownMenuItem,
        {
          asChild: true,
          onSelect: (event) => {
            event.preventDefault();
            submit(formRef.current);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { action: "/logout", method: "POST", ref: formRef, className: "mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
              fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
              lineNumber: 84,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { type: "submit", variant: "link", size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: "exit", className: "scale-125 max-md:scale-150", children: "Logout" }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
              lineNumber: 86,
              columnNumber: 8
            }, this) }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
              lineNumber: 85,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
            lineNumber: 83,
            columnNumber: 6
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
          lineNumber: 77,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
      lineNumber: 49,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/core/components/layoutComponents/Header/components/UserNav.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_s2(UserNav, "GiYd3mw2i4e4eBV25q+8c1DvoZc=", false, function() {
  return [useUser, useSubmit];
});
_c18 = UserNav;
var _c18;
$RefreshReg$(_c18, "UserNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/core/components/layoutComponents/Header/components/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/Header/components/index.ts"
  );
  import.meta.hot.lastModified = "1706588338056.4055";
}

// app/core/components/layoutComponents/Header/Header.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/core/components/layoutComponents/Header/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/Header/Header.tsx"
  );
  import.meta.hot.lastModified = "1707186887131.276";
}
var SCROLL_OFFSET = 50;
var DEFAULT_HEADER_CLASSES = "sticky inset-x-0 top-0 z-30 w-full transition-all";
var SCROLLED_HEADER_CLASSES = "border-b border-foreground/40 backdrop-blur-lg";
var Header = () => {
  _s3();
  const maybeUser = useOptionalUser();
  const data = useRouteLoaderData("root");
  const userIsAdmin = userHasRole(maybeUser, "admin");
  const theme = useTheme();
  const isDark = theme === "dark";
  const [hasScrolled, setHasScrolled] = (0, import_react12.useState)(false);
  (0, import_react12.useEffect)(() => {
    if (window.scrollY > SCROLL_OFFSET)
      setHasScrolled(true);
    const handleScroll = () => {
      const offset = window.scrollY;
      setHasScrolled(offset > SCROLL_OFFSET);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { className: cn(DEFAULT_HEADER_CLASSES, hasScrolled && SCROLLED_HEADER_CLASSES), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { className: "relative py-3", "aria-label": "Top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto w-full px-4 pt-0 lg:px-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: "/", prefetch: "intent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BigLogo, { isDark }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/Header.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/Header.tsx",
      lineNumber: 54,
      columnNumber: 8
    }, this) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Header/Header.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center justify-center gap-4", children: [
      maybeUser !== null ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(UserNav, {}, void 0, false, {
        fileName: "app/core/components/layoutComponents/Header/Header.tsx",
        lineNumber: 59,
        columnNumber: 30
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-10 hidden space-x-4 lg:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: "/login", children: "Log in" }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/Header.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/Header.tsx",
          lineNumber: 60,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: "/signup", children: "Get started today" }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/Header.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Header/Header.tsx",
          lineNumber: 63,
          columnNumber: 10
        }, this)
      ] }, void 0, true, {
        fileName: "app/core/components/layoutComponents/Header/Header.tsx",
        lineNumber: 59,
        columnNumber: 44
      }, this),
      userIsAdmin ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { asChild: true, variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: "/admin/cache", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { name: "backpack", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "hidden sm:block", children: "Admin" }, void 0, false, {
        fileName: "app/core/components/layoutComponents/Header/Header.tsx",
        lineNumber: 70,
        columnNumber: 12
      }, this) }, void 0, false, {
        fileName: "app/core/components/layoutComponents/Header/Header.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/core/components/layoutComponents/Header/Header.tsx",
        lineNumber: 68,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/core/components/layoutComponents/Header/Header.tsx",
        lineNumber: 67,
        columnNumber: 23
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ThemeSwitcher, { userPreference: data?.requestInfo.userPrefs.theme }, void 0, false, {
        fileName: "app/core/components/layoutComponents/Header/Header.tsx",
        lineNumber: 74,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/core/components/layoutComponents/Header/Header.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/core/components/layoutComponents/Header/Header.tsx",
    lineNumber: 52,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/core/components/layoutComponents/Header/Header.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/core/components/layoutComponents/Header/Header.tsx",
    lineNumber: 50,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/core/components/layoutComponents/Header/Header.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
_s3(Header, "WvOSSIwEo5znBLEYaIplaFNqt+8=", false, function() {
  return [useOptionalUser, useRouteLoaderData, useTheme];
});
_c19 = Header;
var _c19;
$RefreshReg$(_c19, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/core/components/layoutComponents/Header/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/Header/index.ts"
  );
  import.meta.hot.lastModified = "1706588338056.484";
}

// app/core/components/layoutComponents/Footer/ui/Footer.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/core/components/layoutComponents/Footer/ui/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/Footer/ui/Footer.tsx"
  );
  import.meta.hot.lastModified = "1707187348790.8662";
}
var Footer = () => {
  _s4();
  const theme = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("footer", { className: "w-full border-t border-foreground/10 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto w-full px-4 pt-6 lg:px-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "xl:grid xl:grid-cols-5 xl:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-6 xl:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BigLogo, { className: "w-72", isDark }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
          lineNumber: 34,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "max-w-xs text-sm", children: "Stay organized or whatever" }, void 0, false, {
          fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
          lineNumber: 37,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-sm font-semibold", children: "About app" }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 42,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { className: "pl-0 text-sm", to: "/about", children: "About" }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 46,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 45,
                columnNumber: 12
              }, this) }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 44,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "pl-0", href: "https://roadmap.geekconsole.app", target: "_blank", rel: "noopener noreferrer", children: "Roadmap" }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 53,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 52,
                columnNumber: 12
              }, this) }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 51,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "pl-0", href: "https://github.com/devcraftftw/geekconsole", target: "_blank", rel: "noopener noreferrer", children: "Github" }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 60,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 59,
                columnNumber: 12
              }, this) }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 58,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 43,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-sm font-semibold", children: "Company" }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 69,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { className: "pl-0 text-sm", to: "/pricing", children: "Pricing" }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 72,
              columnNumber: 12
            }, this) }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 71,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 70,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
          lineNumber: 40,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-sm font-semibold", children: "Support" }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 84,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { className: "pl-0 text-sm", to: "mailto:vvolodya.evseev@gmail.com", children: "Contact Us" }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 87,
              columnNumber: 12
            }, this) }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 86,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 85,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-sm font-semibold", children: "Legal" }, void 0, false, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 95,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { className: "pl-0 text-sm", to: "/terms-of-service", children: "Terms of Service" }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 99,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 98,
                columnNumber: 12
              }, this) }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 97,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { className: "pl-0 text-sm", to: "/privacy-policy", children: "Privacy Policy" }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 105,
                columnNumber: 12
              }, this) }, void 0, false, {
                fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
                lineNumber: 104,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
              lineNumber: 96,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
          lineNumber: 82,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
      lineNumber: 32,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-16 border-t border-foreground/5 pt-8 sm:mt-20 lg:mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-sm leading-5 text-foreground", children: [
      "Copyright @ ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " GeekConsole. All Rights Reserved."
    ] }, void 0, true, {
      fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
      lineNumber: 117,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
    lineNumber: 30,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/core/components/layoutComponents/Footer/ui/Footer.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s4(Footer, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
  return [useTheme];
});
_c20 = Footer;
var _c20;
$RefreshReg$(_c20, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/core/components/layoutComponents/Footer/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/Footer/index.ts"
  );
  import.meta.hot.lastModified = "1706588338055.5813";
}

// app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx
var import_react15 = __toESM(require_react(), 1);
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx"
  );
  import.meta.hot.lastModified = "1706588338056.6113";
}
var LOGOUT_TIME = 1e3 * 60 * 60 * 24;
var MODAL_TIME = LOGOUT_TIME - 1e3 * 60 * 2;
function LogoutTimer() {
  _s5();
  const [status, setStatus] = (0, import_react15.useState)("idle");
  const location = useLocation();
  const submit = useSubmit();
  const modalTimer = (0, import_react15.useRef)();
  const logoutTimer = (0, import_react15.useRef)();
  const logout = (0, import_react15.useCallback)(() => {
    submit(null, {
      method: "POST",
      action: "/logout"
    });
  }, [submit]);
  const cleanupTimers = (0, import_react15.useCallback)(() => {
    clearTimeout(modalTimer.current);
    clearTimeout(logoutTimer.current);
  }, []);
  const resetTimers = (0, import_react15.useCallback)(() => {
    cleanupTimers();
    modalTimer.current = setTimeout(() => {
      setStatus("show-modal");
    }, MODAL_TIME);
    logoutTimer.current = setTimeout(logout, LOGOUT_TIME);
  }, [cleanupTimers, logout]);
  (0, import_react15.useEffect)(() => resetTimers(), [resetTimers, location.key]);
  (0, import_react15.useEffect)(() => cleanupTimers, [cleanupTimers]);
  function closeModal() {
    setStatus("idle");
    resetTimers();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AlertDialog, { "aria-label": "Pending Logout Notification", open: status === "show-modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AlertDialogContent, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AlertDialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AlertDialogTitle, { children: "Are you still there?" }, void 0, false, {
      fileName: "app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx",
      lineNumber: 60,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx",
      lineNumber: 59,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AlertDialogDescription, { children: "You are going to be logged out due to inactivity. Close this modal to stay logged in." }, void 0, false, {
      fileName: "app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AlertDialogFooter, { className: "flex items-end gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AlertDialogCancel, { onClick: closeModal, children: "Remain Logged In" }, void 0, false, {
        fileName: "app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx",
        lineNumber: 67,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { method: "POST", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AlertDialogAction, { type: "submit", children: "Logout" }, void 0, false, {
        fileName: "app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx",
        lineNumber: 71,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx",
        lineNumber: 70,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx",
      lineNumber: 66,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx",
    lineNumber: 58,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/core/components/layoutComponents/LogoutTimer/LogoutTimer.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s5(LogoutTimer, "QaXg49qOamhWlYL1F5VgcJmTSGA=", false, function() {
  return [useLocation, useSubmit];
});
_c21 = LogoutTimer;
var _c21;
$RefreshReg$(_c21, "LogoutTimer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/core/components/layoutComponents/ProgressBar/ProgressBar.tsx
var import_react17 = __toESM(require_react(), 1);
var import_spin_delay = __toESM(require_dist(), 1);
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/core/components/layoutComponents/ProgressBar/ProgressBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/ProgressBar/ProgressBar.tsx"
  );
  import.meta.hot.lastModified = "1706588338056.7354";
}
function ProgressBar() {
  _s6();
  const transition = useNavigation();
  const busy = transition.state !== "idle";
  const delayedPending = (0, import_spin_delay.useSpinDelay)(busy, {
    delay: 600,
    minDuration: 400
  });
  const ref2 = (0, import_react17.useRef)(null);
  const [animationComplete, setAnimationComplete] = (0, import_react17.useState)(true);
  (0, import_react17.useEffect)(() => {
    if (!ref2.current)
      return;
    if (delayedPending)
      setAnimationComplete(false);
    const animationPromises = ref2.current.getAnimations().map(({
      finished
    }) => finished);
    Promise.allSettled(animationPromises).then(() => {
      if (!delayedPending)
        setAnimationComplete(true);
    });
  }, [delayedPending]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { role: "progressbar", "aria-hidden": delayedPending ? void 0 : true, "aria-valuetext": delayedPending ? "Loading" : void 0, className: "fixed inset-x-0 top-0 z-50 h-[0.20rem] animate-pulse", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { ref: ref2, className: cn("h-full w-0 bg-foreground duration-500 ease-in-out", transition.state === "idle" && (animationComplete ? "transition-none" : "w-full opacity-0 transition-all"), delayedPending && transition.state === "submitting" && "w-5/12", delayedPending && transition.state === "loading" && "w-8/12") }, void 0, false, {
      fileName: "app/core/components/layoutComponents/ProgressBar/ProgressBar.tsx",
      lineNumber: 48,
      columnNumber: 4
    }, this),
    delayedPending && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "absolute flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Icon, { name: "update", size: "md", className: "m-1 animate-spin text-foreground", "aria-hidden": true }, void 0, false, {
      fileName: "app/core/components/layoutComponents/ProgressBar/ProgressBar.tsx",
      lineNumber: 50,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/core/components/layoutComponents/ProgressBar/ProgressBar.tsx",
      lineNumber: 49,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/core/components/layoutComponents/ProgressBar/ProgressBar.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s6(ProgressBar, "RH18mmpAJ2Z/O9llHYG9E/G/F+A=", false, function() {
  return [useNavigation, import_spin_delay.useSpinDelay];
});
_c23 = ProgressBar;
var _c23;
$RefreshReg$(_c23, "ProgressBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/confetti-react/dist/confetti-react.esm.js
var import_react18 = __toESM(require_react());
var import_tween_functions = __toESM(require_tween_functions());
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function degreesToRads(degrees) {
  return degrees * Math.PI / 180;
}
function randomRange(min, max) {
  return min + Math.random() * (max - min);
}
function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
var ParticleShape;
(function(ParticleShape2) {
  ParticleShape2[ParticleShape2["Circle"] = 0] = "Circle";
  ParticleShape2[ParticleShape2["Square"] = 1] = "Square";
  ParticleShape2[ParticleShape2["Strip"] = 2] = "Strip";
})(ParticleShape || (ParticleShape = {}));
var RotationDirection;
(function(RotationDirection2) {
  RotationDirection2[RotationDirection2["Positive"] = 1] = "Positive";
  RotationDirection2[RotationDirection2["Negative"] = -1] = "Negative";
})(RotationDirection || (RotationDirection = {}));
var Particle = /* @__PURE__ */ function() {
  function Particle2(context, getOptions, x, y) {
    this.getOptions = getOptions;
    var _this$getOptions = this.getOptions(), colors = _this$getOptions.colors, initialVelocityX = _this$getOptions.initialVelocityX, initialVelocityY = _this$getOptions.initialVelocityY;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = randomRange(5, 20);
    this.h = randomRange(5, 20);
    this.radius = randomRange(5, 10);
    this.vx = randomRange(-initialVelocityX, initialVelocityX);
    this.vy = randomRange(-initialVelocityY, 0);
    this.shape = randomInt(0, 2);
    this.angle = degreesToRads(randomRange(0, 360));
    this.angularSpin = randomRange(-0.2, 0.2);
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.rotateY = randomRange(0, 1);
    this.rotationDirection = randomRange(0, 1) ? RotationDirection.Positive : RotationDirection.Negative;
  }
  var _proto = Particle2.prototype;
  _proto.update = function update() {
    var _this$getOptions2 = this.getOptions(), gravity = _this$getOptions2.gravity, wind = _this$getOptions2.wind, friction = _this$getOptions2.friction, opacity = _this$getOptions2.opacity, drawShape = _this$getOptions2.drawShape;
    this.x += this.vx;
    this.y += this.vy;
    this.vy += gravity;
    this.vx += wind;
    this.vx *= friction;
    this.vy *= friction;
    if (this.rotateY >= 1 && this.rotationDirection === RotationDirection.Positive) {
      this.rotationDirection = RotationDirection.Negative;
    } else if (this.rotateY <= -1 && this.rotationDirection === RotationDirection.Negative) {
      this.rotationDirection = RotationDirection.Positive;
    }
    var rotateDelta = 0.1 * this.rotationDirection;
    this.rotateY += rotateDelta;
    this.angle += this.angularSpin;
    this.context.save();
    this.context.translate(this.x, this.y);
    this.context.rotate(this.angle);
    this.context.scale(1, this.rotateY);
    this.context.rotate(this.angle);
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.color;
    this.context.globalAlpha = opacity;
    this.context.lineCap = "round";
    this.context.lineWidth = 2;
    if (drawShape && typeof drawShape === "function") {
      drawShape.call(this, this.context);
    } else {
      switch (this.shape) {
        case ParticleShape.Circle: {
          this.context.beginPath();
          this.context.arc(0, 0, this.radius, 0, 2 * Math.PI);
          this.context.fill();
          break;
        }
        case ParticleShape.Square: {
          this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
          break;
        }
        case ParticleShape.Strip: {
          this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
          break;
        }
        default: {
          throw new Error("Unknown type in Particle.ts");
        }
      }
    }
    this.context.closePath();
    this.context.restore();
  };
  return Particle2;
}();
var ParticleGeneratorClass = function ParticleGeneratorClass2(canvas, getOptions) {
  var _this = this;
  this.x = 0;
  this.y = 0;
  this.w = 0;
  this.h = 0;
  this.lastNumberOfPieces = 0;
  this.tweenInitTime = Date.now();
  this.particles = [];
  this.particlesGenerated = 0;
  this.removeParticleAt = function(i) {
    _this.particles.splice(i, 1);
  };
  this.getParticle = function() {
    var newParticleX = randomRange(_this.x, _this.w + _this.x);
    var newParticleY = randomRange(_this.y, _this.h + _this.y);
    return new Particle(_this.context, _this.getOptions, newParticleX, newParticleY);
  };
  this.animate = function() {
    var canvas2 = _this.canvas, context = _this.context, particlesGenerated = _this.particlesGenerated, lastNumberOfPieces = _this.lastNumberOfPieces;
    var _this$getOptions = _this.getOptions(), run = _this$getOptions.run, recycle = _this$getOptions.recycle, numberOfPieces = _this$getOptions.numberOfPieces, debug = _this$getOptions.debug, tweenFunction = _this$getOptions.tweenFunction, tweenDuration = _this$getOptions.tweenDuration;
    if (!run) {
      return false;
    }
    var nP = _this.particles.length;
    var activeCount = recycle ? nP : particlesGenerated;
    var now = Date.now();
    if (activeCount < numberOfPieces) {
      if (lastNumberOfPieces !== numberOfPieces) {
        _this.tweenInitTime = now;
        _this.lastNumberOfPieces = numberOfPieces;
      }
      var tweenInitTime = _this.tweenInitTime;
      var progressTime = now - tweenInitTime > tweenDuration ? tweenDuration : Math.max(0, now - tweenInitTime);
      var tweenedVal = tweenFunction(progressTime, activeCount, numberOfPieces, tweenDuration);
      var numToAdd = Math.round(tweenedVal - activeCount);
      for (var i = 0; i < numToAdd; i += 1) {
        _this.particles.push(_this.getParticle());
      }
      _this.particlesGenerated += numToAdd;
    }
    if (debug) {
      context.font = "12px sans-serif";
      context.fillStyle = "#333";
      context.textAlign = "right";
      context.fillText("Particles: " + nP, canvas2.width - 10, canvas2.height - 20);
    }
    _this.particles.forEach(function(p, i2) {
      p.update();
      if (p.y > canvas2.height || p.y < -100 || p.x > canvas2.width + 100 || p.x < -100) {
        if (recycle && activeCount <= numberOfPieces) {
          _this.particles[i2] = _this.getParticle();
        } else {
          _this.removeParticleAt(i2);
        }
      }
    });
    return nP > 0 || activeCount < numberOfPieces;
  };
  this.canvas = canvas;
  var ctx = this.canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not get canvas context");
  }
  this.context = ctx;
  this.getOptions = getOptions;
};
var confettiDefaults = {
  width: typeof window !== "undefined" ? window.innerWidth : 300,
  height: typeof window !== "undefined" ? window.innerHeight : 200,
  numberOfPieces: 200,
  friction: 0.99,
  wind: 0,
  gravity: 0.1,
  initialVelocityX: 4,
  initialVelocityY: 10,
  colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548"],
  opacity: 1,
  debug: false,
  tweenFunction: import_tween_functions.default.easeInOutQuad,
  tweenDuration: 5e3,
  recycle: true,
  run: true
};
var Confetti = /* @__PURE__ */ function() {
  function Confetti3(canvas, opts) {
    var _this = this;
    this.setOptionsWithDefaults = function(opts2) {
      var computedConfettiDefaults = {
        confettiSource: {
          x: 0,
          y: 0,
          w: _this.canvas.width,
          h: 0
        }
      };
      _this._options = _extends2({}, computedConfettiDefaults, confettiDefaults, opts2);
      Object.assign(_this, opts2.confettiSource);
    };
    this.update = function() {
      var _this$options = _this.options, run = _this$options.run, onConfettiComplete = _this$options.onConfettiComplete, canvas2 = _this.canvas, context = _this.context;
      if (run) {
        context.fillStyle = "white";
        context.clearRect(0, 0, canvas2.width, canvas2.height);
      }
      if (_this.generator.animate()) {
        _this.rafId = requestAnimationFrame(_this.update);
      } else {
        if (onConfettiComplete && typeof onConfettiComplete === "function" && _this.generator.particlesGenerated > 0) {
          onConfettiComplete.call(_this, _this);
        }
        _this._options.run = false;
      }
    };
    this.reset = function() {
      if (_this.generator && _this.generator.particlesGenerated > 0) {
        _this.generator.particlesGenerated = 0;
        _this.generator.particles = [];
        _this.generator.lastNumberOfPieces = 0;
      }
    };
    this.stop = function() {
      _this.options = {
        run: false
      };
      if (_this.rafId) {
        cancelAnimationFrame(_this.rafId);
        _this.rafId = void 0;
      }
    };
    this.canvas = canvas;
    var ctx = this.canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Could not get canvas context");
    }
    this.context = ctx;
    this.generator = new ParticleGeneratorClass(this.canvas, function() {
      return _this.options;
    });
    this.options = opts;
    this.update();
  }
  _createClass(Confetti3, [{
    key: "options",
    get: function get() {
      return this._options;
    },
    set: function set(opts) {
      var lastRunState = this._options && this._options.run;
      var lastRecycleState = this._options && this._options.recycle;
      this.setOptionsWithDefaults(opts);
      if (this.generator) {
        Object.assign(this.generator, this.options.confettiSource);
        if (typeof opts.recycle === "boolean" && opts.recycle && lastRecycleState === false) {
          this.generator.lastNumberOfPieces = this.generator.particles.length;
        }
      }
      if (typeof opts.run === "boolean" && opts.run && lastRunState === false) {
        this.update();
      }
    }
  }]);
  return Confetti3;
}();
var ref = /* @__PURE__ */ import_react18.default.createRef();
function extractCanvasProps(props) {
  var confettiOptions = {};
  var refs = {};
  var rest = {};
  var confettiOptionKeys = [].concat(Object.keys(confettiDefaults), ["confettiSource", "drawShape", "onConfettiComplete"]);
  var refProps = ["canvasRef"];
  Object.keys(props).forEach(function(prop) {
    var val = props[prop];
    if (confettiOptionKeys.includes(prop)) {
      confettiOptions[prop] = val;
    } else if (refProps.includes(prop)) {
      refProps[prop] = val;
    } else {
      rest[prop] = val;
    }
  });
  return [confettiOptions, rest, refs];
}
var ConfettiReactInternal = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(ConfettiReactInternal2, _Component);
  function ConfettiReactInternal2(props) {
    var _this;
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this, props].concat(rest)) || this;
    _this.canvas = import_react18.default.createRef();
    _this.canvas = props.canvasRef || ref;
    return _this;
  }
  var _proto = ConfettiReactInternal2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (this.canvas.current) {
      var opts = extractCanvasProps(this.props)[0];
      this.confetti = new Confetti(this.canvas.current, opts);
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    var confettiOptions = extractCanvasProps(this.props)[0];
    if (this.confetti) {
      this.confetti.options = confettiOptions;
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.confetti) {
      this.confetti.stop();
    }
    this.confetti = void 0;
  };
  _proto.render = function render() {
    var _extractCanvasProps = extractCanvasProps(this.props), confettiOptions = _extractCanvasProps[0], passedProps = _extractCanvasProps[1];
    var canvasStyles = _extends2({
      zIndex: 2,
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }, passedProps.style);
    return import_react18.default.createElement("canvas", Object.assign({
      width: confettiOptions.width,
      height: confettiOptions.height,
      ref: this.canvas
    }, passedProps, {
      style: canvasStyles
    }));
  };
  return ConfettiReactInternal2;
}(import_react18.Component);
ConfettiReactInternal.defaultProps = /* @__PURE__ */ _extends2({}, confettiDefaults);
ConfettiReactInternal.displayName = "ConfettiReact";
var Index = /* @__PURE__ */ import_react18.default.forwardRef(function(props, _ref) {
  return import_react18.default.createElement(ConfettiReactInternal, Object.assign({
    canvasRef: ref
  }, props));
});

// node_modules/remix-utils/build/react/client-only.js
var React4 = __toESM(require_react(), 1);

// node_modules/remix-utils/build/react/use-hydrated.js
var import_react19 = __toESM(require_react(), 1);
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return (0, import_react19.useSyncExternalStore)(subscribe, () => true, () => false);
}

// node_modules/remix-utils/build/react/client-only.js
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? React4.createElement(React4.Fragment, null, children()) : React4.createElement(React4.Fragment, null, fallback);
}

// app/core/components/layoutComponents/Confetti/Confetti.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/core/components/layoutComponents/Confetti/Confetti.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/Confetti/Confetti.tsx"
  );
  import.meta.hot.lastModified = "1706588338055.4546";
}
function Confetti2({
  id
}) {
  if (!id)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Index, { run: Boolean(id), recycle: false, numberOfPieces: 500, width: window.innerWidth, height: window.innerHeight }, id, false, {
    fileName: "app/core/components/layoutComponents/Confetti/Confetti.tsx",
    lineNumber: 28,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/core/components/layoutComponents/Confetti/Confetti.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c24 = Confetti2;
var _c24;
$RefreshReg$(_c24, "Confetti");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/core/components/layoutComponents/Toaster/Toaster.tsx
var import_react20 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/Toaster/Toaster.tsx"
  );
  import.meta.hot.lastModified = "1706588338056.8684";
}
function useToast(toast) {
  (0, import_react20.useEffect)(() => {
    if (toast) {
      setTimeout(() => {
        Ut[toast.type](toast.title, {
          id: toast.id,
          description: toast.description
        });
      }, 0);
    }
  }, [toast]);
}

// app/core/components/layoutComponents/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/core/components/layoutComponents/index.ts"
  );
  import.meta.hot.lastModified = "1706588338056.9614";
}

// app/routes/_layout.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout.tsx"
  );
  import.meta.hot.lastModified = "1706959114451.4136";
}
function Layout() {
  _s7();
  const data = useRouteLoaderData("root");
  const maybeUser = useOptionalUser();
  const theme = useTheme();
  useToast(data?.toast);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex w-full flex-1 flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 33,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "container mx-auto my-16 flex flex-1 flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 34,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 37,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ProgressBar, {}, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 39,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(GeekToaster, { closeButton: true, position: "bottom-right", theme }, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Confetti2, { id: data?.confettiId }, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this),
    maybeUser ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(LogoutTimer, {}, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s7(Layout, "zI2b/QAorMLt+majwqIQC0aZD1A=", false, function() {
  return [useRouteLoaderData, useOptionalUser, useTheme, useToast];
});
_c25 = Layout;
var _c25;
$RefreshReg$(_c25, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout as default
};
//# sourceMappingURL=/build/routes/_layout-KBQ6ANXU.js.map
