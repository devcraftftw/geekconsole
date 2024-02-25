import {
  Container,
  Html,
  Link,
  Text
} from "/build/_shared/chunk-IBVEL7IU.js";
import "/build/_shared/chunk-VBLMD53Y.js";
import "/build/_shared/chunk-24FFLN7L.js";
import {
  ProviderConnectionForm,
  providerNames
} from "/build/_shared/chunk-IAFLELVB.js";
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
  getZodConstraint,
  parseWithZod,
  useIsPending,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  useActionData,
  useSearchParams
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

// app/routes/_layout+/_auth+/signup.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/_auth+/signup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/_auth+/signup.tsx"
  );
  import.meta.hot.lastModified = "1706962583482.7788";
}
var SignupSchema = z.object({
  email: EmailSchema
});
function SignupEmail({
  onboardingUrl,
  otp
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Html, { lang: "en", dir: "ltr", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Welcome to GeekConsole!" }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/signup.tsx",
      lineNumber: 111,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/signup.tsx",
      lineNumber: 110,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "Here's your verification code: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: otp }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/signup.tsx",
        lineNumber: 115,
        columnNumber: 38
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/signup.tsx",
      lineNumber: 114,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/signup.tsx",
      lineNumber: 113,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Or click the link to get started:" }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/signup.tsx",
      lineNumber: 119,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/signup.tsx",
      lineNumber: 118,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: onboardingUrl, children: onboardingUrl }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/signup.tsx",
      lineNumber: 121,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_auth+/signup.tsx",
    lineNumber: 109,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/_auth+/signup.tsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_c = SignupEmail;
function SignupRoute() {
  _s();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const [form, fields] = useForm({
    id: "signup-form",
    constraint: getZodConstraint(SignupSchema),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      const result = parseWithZod(formData, {
        schema: SignupSchema
      });
      return result;
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container flex flex-col justify-center pb-32 pt-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: "Let's start your journey!" }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/signup.tsx",
        lineNumber: 148,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-body-md text-muted-foreground", children: "Please enter your email." }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/signup.tsx",
        lineNumber: 149,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/signup.tsx",
      lineNumber: 147,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 min-w-[368px] max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/signup.tsx",
          lineNumber: 155,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoneypotInputs, {}, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/signup.tsx",
          lineNumber: 156,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
          htmlFor: fields.email.id,
          children: "Email"
        }, inputProps: {
          ...getInputProps(fields.email, {
            type: "email"
          }),
          autoFocus: true,
          autoComplete: "email"
        }, errors: fields.email.errors }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/signup.tsx",
          lineNumber: 158,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/signup.tsx",
          lineNumber: 169,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", status: isPending ? "pending" : form.status ?? "idle", type: "submit", disabled: isPending, children: "Submit" }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/signup.tsx",
          lineNumber: 171,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/_auth+/signup.tsx",
        lineNumber: 154,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mt-5 flex flex-col gap-5 border-y-2 border-border py-3", children: providerNames.map((providerName) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProviderConnectionForm, { type: "Signup", providerName, redirectTo }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/signup.tsx",
        lineNumber: 177,
        columnNumber: 8
      }, this) }, providerName, false, {
        fileName: "app/routes/_layout+/_auth+/signup.tsx",
        lineNumber: 176,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/signup.tsx",
        lineNumber: 175,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/signup.tsx",
      lineNumber: 153,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_auth+/signup.tsx",
    lineNumber: 146,
    columnNumber: 10
  }, this);
}
_s(SignupRoute, "pOytQzQfSlfERSUoCdV/IF0+RIo=", false, function() {
  return [useActionData, useIsPending, useSearchParams, useForm];
});
_c2 = SignupRoute;
var meta = () => {
  return [{
    title: "Sign Up | GeekConsole"
  }];
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/_layout+/_auth+/signup.tsx",
    lineNumber: 193,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "SignupEmail");
$RefreshReg$(_c2, "SignupRoute");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  SignupRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/_layout+/_auth+/signup-JSGFS2FW.js.map
