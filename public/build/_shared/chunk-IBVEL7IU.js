import {
  ProviderConnectionForm
} from "/build/_shared/chunk-IAFLELVB.js";
import {
  Spacer
} from "/build/_shared/chunk-3YUGB6UL.js";
import {
  StatusButton
} from "/build/_shared/chunk-4XWLGYB5.js";
import {
  HoneypotInputs
} from "/build/_shared/chunk-6NMOG26R.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  CheckboxField,
  ErrorList,
  Field,
  getFormProps,
  getInputProps,
  useForm
} from "/build/_shared/chunk-JBR5K2OT.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  AuthenticityTokenInput
} from "/build/_shared/chunk-6LMWWETO.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  EmailSchema,
  PasswordSchema,
  UsernameSchema,
  getZodConstraint,
  parseWithZod,
  useIsPending,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useSearchParams
} from "/build/_shared/chunk-HCJ6L7J4.js";
import {
  createHotContext
} from "/build/_shared/chunk-OC2Z5MX2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@react-email/container/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Container = (_a) => {
  var _b = _a, {
    children,
    style
  } = _b, props = __objRest(_b, [
    "children",
    "style"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "table",
    __spreadProps(__spreadValues({
      align: "center",
      width: "100%"
    }, props), {
      border: 0,
      cellPadding: "0",
      cellSpacing: "0",
      role: "presentation",
      style: __spreadValues({ maxWidth: "37.5em" }, style),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children }) }) })
    })
  );
};

// node_modules/@react-email/html/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Html = (_a) => {
  var _b = _a, {
    children,
    lang = "en",
    dir = "ltr"
  } = _b, props = __objRest2(_b, [
    "children",
    "lang",
    "dir"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("html", __spreadProps2(__spreadValues2({}, props), { dir, lang, children }));
};

// node_modules/@react-email/link/dist/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var __defProp3 = Object.defineProperty;
var __defProps3 = Object.defineProperties;
var __getOwnPropDescs3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp3.call(b, prop))
      __defNormalProp3(a, prop, b[prop]);
  if (__getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(b)) {
      if (__propIsEnum3.call(b, prop))
        __defNormalProp3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps3 = (a, b) => __defProps3(a, __getOwnPropDescs3(b));
var __objRest3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Link2 = (_a) => {
  var _b = _a, {
    target = "_blank",
    style
  } = _b, props = __objRest3(_b, [
    "target",
    "style"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "a",
    __spreadProps3(__spreadValues3({}, props), {
      style: __spreadValues3({
        color: "#067df7",
        textDecoration: "none"
      }, style),
      target,
      children: props.children
    })
  );
};

// node_modules/@react-email/text/dist/index.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var __defProp4 = Object.defineProperty;
var __defProps4 = Object.defineProperties;
var __getOwnPropDescs4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols4 = Object.getOwnPropertySymbols;
var __hasOwnProp4 = Object.prototype.hasOwnProperty;
var __propIsEnum4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp4 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp4.call(b, prop))
      __defNormalProp4(a, prop, b[prop]);
  if (__getOwnPropSymbols4)
    for (var prop of __getOwnPropSymbols4(b)) {
      if (__propIsEnum4.call(b, prop))
        __defNormalProp4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps4 = (a, b) => __defProps4(a, __getOwnPropDescs4(b));
var __objRest4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols4)
    for (var prop of __getOwnPropSymbols4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Text = (_a) => {
  var _b = _a, { style } = _b, props = __objRest4(_b, ["style"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "p",
    __spreadProps4(__spreadValues4({}, props), {
      style: __spreadValues4({
        fontSize: "14px",
        lineHeight: "24px",
        margin: "16px 0"
      }, style)
    })
  );
};

// app/routes/_layout+/settings+/profile.change-email.tsx
var import_node3 = __toESM(require_node(), 1);

// app/routes/_layout+/_auth+/verify.tsx
var import_node2 = __toESM(require_node(), 1);

// app/routes/_layout+/_auth+/login.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/_auth+/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/_auth+/login.tsx"
  );
  import.meta.hot.lastModified = "1706962583481.4805";
}
var LoginFormSchema = z.object({
  usernameOrEmail: z.union([EmailSchema, UsernameSchema]),
  password: PasswordSchema,
  redirectTo: z.string().optional(),
  remember: z.boolean().optional()
});
function LoginPage() {
  _s();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const [form, fields] = useForm({
    id: "login-form",
    constraint: getZodConstraint(LoginFormSchema),
    defaultValue: {
      redirectTo
    },
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: LoginFormSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center pb-32 pt-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: "Welcome back!" }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/login.tsx",
        lineNumber: 239,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-body-md text-muted-foreground", children: "Please enter your details." }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/login.tsx",
        lineNumber: 240,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/login.tsx",
      lineNumber: 238,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "xs" }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/login.tsx",
      lineNumber: 245,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 250,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoneypotInputs, {}, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 251,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
          htmlFor: fields.usernameOrEmail.id,
          children: "Username or Email"
        }, inputProps: {
          autoFocus: true,
          ...getInputProps(fields.usernameOrEmail, {
            type: "text"
          })
        }, errors: fields.usernameOrEmail.errors }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 253,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
          children: "Password"
        }, inputProps: {
          ...getInputProps(fields.password, {
            type: "password"
          }),
          autoComplete: "current-password"
        }, errors: fields.password.errors }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 263,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxField, { labelProps: {
            htmlFor: fields.remember.id,
            children: "Remember me"
          }, buttonProps: getInputProps(fields.remember, {
            type: "checkbox"
          }), errors: fields.remember.errors }, void 0, false, {
            fileName: "app/routes/_layout+/_auth+/login.tsx",
            lineNumber: 273,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/forgot-password", className: "text-body-xs font-semibold", children: "Forgot password?" }, void 0, false, {
            fileName: "app/routes/_layout+/_auth+/login.tsx",
            lineNumber: 280,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/routes/_layout+/_auth+/login.tsx",
            lineNumber: 279,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 272,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(fields.redirectTo, {
          type: "hidden"
        }) }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 286,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 290,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-6 pt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", status: isPending ? "pending" : form.status ?? "idle", type: "submit", disabled: isPending, children: "Log in" }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 293,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 292,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/_auth+/login.tsx",
        lineNumber: 249,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 flex flex-col gap-5 border-y-2 border-border py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProviderConnectionForm, { type: "Login", providerName: "github", redirectTo }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/login.tsx",
        lineNumber: 299,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/login.tsx",
        lineNumber: 298,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center gap-2 pt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-muted-foreground", children: "New here?" }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 302,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: redirectTo ? `/signup?${encodeURIComponent(redirectTo)}` : "/signup", children: "Create an account" }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/login.tsx",
          lineNumber: 303,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/_auth+/login.tsx",
        lineNumber: 301,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/login.tsx",
      lineNumber: 248,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/login.tsx",
      lineNumber: 247,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_auth+/login.tsx",
    lineNumber: 237,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/_auth+/login.tsx",
    lineNumber: 236,
    columnNumber: 10
  }, this);
}
_s(LoginPage, "pOytQzQfSlfERSUoCdV/IF0+RIo=", false, function() {
  return [useActionData, useIsPending, useSearchParams, useForm];
});
_c = LoginPage;
var meta = () => {
  return [{
    title: "Login to GeekConsole"
  }];
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/_layout+/_auth+/login.tsx",
    lineNumber: 322,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "LoginPage");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_layout+/_auth+/verify.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/_auth+/verify.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/_auth+/verify.tsx"
  );
  import.meta.hot.lastModified = "1706962583483.1372";
}
var codeQueryParam = "code";
var targetQueryParam = "target";
var typeQueryParam = "type";
var redirectToQueryParam = "redirectTo";
var types = ["onboarding", "reset-password", "change-email", "2fa"];
var VerificationTypeSchema = z.enum(types);
var VerifySchema = z.object({
  [codeQueryParam]: z.string().min(6).max(6),
  [typeQueryParam]: VerificationTypeSchema,
  [targetQueryParam]: z.string(),
  [redirectToQueryParam]: z.string().optional()
});
function VerifyRoute() {
  _s2();
  const [searchParams] = useSearchParams();
  const isPending = useIsPending();
  const actionData = useActionData();
  const parseWithZoddType = VerificationTypeSchema.safeParse(searchParams.get(typeQueryParam));
  const type = parseWithZoddType.success ? parseWithZoddType.data : null;
  const checkEmail = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-h1", children: "Check your email" }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/verify.tsx",
      lineNumber: 258,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 text-body-md text-muted-foreground", children: "We've sent you a code to verify your email address." }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/verify.tsx",
      lineNumber: 259,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_auth+/verify.tsx",
    lineNumber: 257,
    columnNumber: 22
  }, this);
  const headings = {
    onboarding: checkEmail,
    "reset-password": checkEmail,
    "change-email": checkEmail,
    "2fa": /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-h1", children: "Check your 2FA app" }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/verify.tsx",
        lineNumber: 268,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 text-body-md text-muted-foreground", children: "Please enter your 2FA code to verify your identity." }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/verify.tsx",
        lineNumber: 269,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/verify.tsx",
      lineNumber: 267,
      columnNumber: 12
    }, this)
  };
  const [form, fields] = useForm({
    id: "verify-form",
    constraint: getZodConstraint(VerifySchema),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: VerifySchema
      });
    },
    defaultValue: {
      code: searchParams.get(codeQueryParam),
      type,
      target: searchParams.get(targetQueryParam),
      redirectTo: searchParams.get(redirectToQueryParam)
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "container flex flex-col justify-center pb-32 pt-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center", children: type ? headings[type] : "Invalid Verification Type" }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/verify.tsx",
      lineNumber: 293,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Spacer, { size: "xs" }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/verify.tsx",
      lineNumber: 297,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto flex w-72 max-w-full flex-col justify-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/verify.tsx",
        lineNumber: 301,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/verify.tsx",
        lineNumber: 300,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "POST", ...getFormProps(form), className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/verify.tsx",
          lineNumber: 306,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HoneypotInputs, {}, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/verify.tsx",
          lineNumber: 307,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { labelProps: {
          htmlFor: fields[codeQueryParam].id,
          children: "Code"
        }, inputProps: {
          ...getInputProps(fields[codeQueryParam], {
            type: "text"
          }),
          autoComplete: "one-time-code"
        }, errors: fields[codeQueryParam].errors }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/verify.tsx",
          lineNumber: 309,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ...getInputProps(fields[typeQueryParam], {
          type: "hidden"
        }) }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/verify.tsx",
          lineNumber: 319,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ...getInputProps(fields[targetQueryParam], {
          type: "hidden"
        }) }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/verify.tsx",
          lineNumber: 322,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ...getInputProps(fields[redirectToQueryParam], {
          type: "hidden"
        }) }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/verify.tsx",
          lineNumber: 325,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StatusButton, { className: "w-full", status: isPending ? "pending" : form.status ?? "idle", type: "submit", disabled: isPending, children: "Submit" }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/verify.tsx",
          lineNumber: 329,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/_auth+/verify.tsx",
        lineNumber: 305,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/verify.tsx",
        lineNumber: 304,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/verify.tsx",
      lineNumber: 299,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_auth+/verify.tsx",
    lineNumber: 292,
    columnNumber: 10
  }, this);
}
_s2(VerifyRoute, "mdQnfHSnsVqWxr+aBh52a6+GYjY=", false, function() {
  return [useSearchParams, useIsPending, useActionData, useForm];
});
_c3 = VerifyRoute;
var _c3;
$RefreshReg$(_c3, "VerifyRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_layout+/settings+/profile.change-email.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/settings+/profile.change-email.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/settings+/profile.change-email.tsx"
  );
  import.meta.hot.lastModified = "1706962583486.3362";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { name: "envelope-closed", children: "Change Email" }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
    lineNumber: 36,
    columnNumber: 15
  }, this),
  getSitemapEntries: () => null
};
var ChangeEmailSchema = z.object({
  email: EmailSchema
});
function EmailChangeEmail({
  verifyUrl,
  otp
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Html, { lang: "en", dir: "ltr", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: "GeekConsole Email Change" }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 189,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 188,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: [
      "Here's your verification code: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: otp }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
        lineNumber: 193,
        columnNumber: 38
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 192,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 191,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: "Or click the link:" }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 197,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 196,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link2, { href: verifyUrl, children: verifyUrl }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 199,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
    lineNumber: 187,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
    lineNumber: 186,
    columnNumber: 10
  }, this);
}
_c4 = EmailChangeEmail;
function EmailChangeNoticeEmail({
  userId
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Html, { lang: "en", dir: "ltr", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: "Your GeekConsole email has been changed" }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 210,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 209,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: "We're writing to let you know that your GeekConsole email has been changed." }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 213,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 212,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: "If you changed your email address, then you can safely ignore this. But if you did not change your email address, then please contact support immediately." }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 219,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 218,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: [
      "Your Account ID: ",
      userId
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 226,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 225,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
    lineNumber: 208,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
    lineNumber: 207,
    columnNumber: 10
  }, this);
}
_c22 = EmailChangeNoticeEmail;
function ChangeEmailRoute() {
  _s3();
  const data = useLoaderData();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form, fields] = useForm({
    id: "change-email-form",
    constraint: getZodConstraint(ChangeEmailSchema),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: ChangeEmailSchema
      });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-h1", children: "Change Email" }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 250,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "You will receive an email at the new email address to confirm." }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 251,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "An email notice will also be sent to your old address ",
      data.user.email,
      "."
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 252,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto mt-5 max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "POST", ...getFormProps(form), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
        lineNumber: 257,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Field, { labelProps: {
        children: "New Email"
      }, inputProps: {
        ...getInputProps(fields.email, {
          type: "email"
        }),
        autoComplete: "email"
      }, errors: fields.email.errors }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
        lineNumber: 259,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ErrorList, { id: form.errorId, errors: form.errors }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
        lineNumber: 268,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StatusButton, { status: isPending ? "pending" : form.status ?? "idle", children: "Send Confirmation" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
        lineNumber: 271,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
        lineNumber: 270,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 256,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
      lineNumber: 255,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.change-email.tsx",
    lineNumber: 249,
    columnNumber: 10
  }, this);
}
_s3(ChangeEmailRoute, "LlpdpXx3F0DiRi9p4RwyMUO3ZDI=", false, function() {
  return [useLoaderData, useActionData, useIsPending, useForm];
});
_c32 = ChangeEmailRoute;
var _c4;
var _c22;
var _c32;
$RefreshReg$(_c4, "EmailChangeEmail");
$RefreshReg$(_c22, "EmailChangeNoticeEmail");
$RefreshReg$(_c32, "ChangeEmailRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Container,
  Html,
  Link2 as Link,
  Text,
  handle,
  ChangeEmailRoute,
  LoginPage,
  meta,
  ErrorBoundary,
  VerifyRoute
};
//# sourceMappingURL=/build/_shared/chunk-IBVEL7IU.js.map
