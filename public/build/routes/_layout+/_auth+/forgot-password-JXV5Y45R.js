import {
  Container,
  Html,
  Link as Link2,
  Text
} from "/build/_shared/chunk-IBVEL7IU.js";
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
import {
  HoneypotInputs
} from "/build/_shared/chunk-6NMOG26R.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-3FDTPL7P.js";
import {
  ErrorList,
  Field,
  getFormProps,
  getInputProps,
  useForm
} from "/build/_shared/chunk-JBR5K2OT.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-HVEEJRFY.js";
import "/build/_shared/chunk-LQQW5RSX.js";
import "/build/_shared/chunk-RO4OX7CY.js";
import "/build/_shared/chunk-CHQ4BA76.js";
import {
  AuthenticityTokenInput
} from "/build/_shared/chunk-6LMWWETO.js";
import "/build/_shared/chunk-YWGK6LNJ.js";
import {
  EmailSchema,
  UsernameSchema,
  getZodConstraint,
  parseWithZod,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  Link,
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

// app/routes/_layout+/_auth+/forgot-password.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/_auth+/forgot-password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/_auth+/forgot-password.tsx"
  );
  import.meta.hot.lastModified = "1706962583481.2432";
}
var ForgotPasswordSchema = z.object({
  usernameOrEmail: z.union([EmailSchema, UsernameSchema])
});
function ForgotPasswordEmail({
  onboardingUrl,
  otp
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Html, { lang: "en", dir: "ltr", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "GeekConsole Password Reset" }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
      lineNumber: 125,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
      lineNumber: 124,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "Here's your verification code: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: otp }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
        lineNumber: 129,
        columnNumber: 38
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
      lineNumber: 128,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
      lineNumber: 127,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Or click the link:" }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
      lineNumber: 133,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
      lineNumber: 132,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { href: onboardingUrl, children: onboardingUrl }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
      lineNumber: 135,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
    lineNumber: 123,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
}
_c = ForgotPasswordEmail;
var meta = () => {
  return [{
    title: "Password Recovery for GeekConsole"
  }];
};
function ForgotPasswordRoute() {
  _s();
  const forgotPassword = useFetcher();
  const [form, fields] = useForm({
    id: "forgot-password-form",
    constraint: getZodConstraint(ForgotPasswordSchema),
    lastResult: forgotPassword.data?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: ForgotPasswordSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container pb-32 pt-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: "Forgot Password" }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
        lineNumber: 164,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-body-md text-muted-foreground", children: "No worries, we'll send you reset instructions." }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
        lineNumber: 165,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
      lineNumber: 163,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 min-w-[368px] max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(forgotPassword.Form, { method: "POST", ...getFormProps(form), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
          lineNumber: 171,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoneypotInputs, {}, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
          lineNumber: 172,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
          htmlFor: fields.usernameOrEmail.id,
          children: "Username or Email"
        }, inputProps: {
          autoFocus: true,
          ...getInputProps(fields.usernameOrEmail, {
            type: "text"
          })
        }, errors: fields.usernameOrEmail.errors }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
          lineNumber: 175,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
          lineNumber: 174,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
          lineNumber: 186,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", status: forgotPassword.state === "submitting" ? "pending" : form.status ?? "idle", type: "submit", disabled: forgotPassword.state !== "idle", children: "Recover password" }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
          lineNumber: 189,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
          lineNumber: 188,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
        lineNumber: 170,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "mt-11 text-center text-body-sm font-bold", children: "Back to Login" }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
        lineNumber: 194,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
      lineNumber: 169,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
    lineNumber: 162,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
    lineNumber: 161,
    columnNumber: 10
  }, this);
}
_s(ForgotPasswordRoute, "X2dFhDI9LNT9Wf5zf55NIkNQiO4=", false, function() {
  return [useFetcher, useForm];
});
_c2 = ForgotPasswordRoute;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/_layout+/_auth+/forgot-password.tsx",
    lineNumber: 206,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "ForgotPasswordEmail");
$RefreshReg$(_c2, "ForgotPasswordRoute");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  ForgotPasswordRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/_layout+/_auth+/forgot-password-JXV5Y45R.js.map
