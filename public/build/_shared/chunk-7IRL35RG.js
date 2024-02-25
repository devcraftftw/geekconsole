import {
  StatusButton
} from "/build/_shared/chunk-4XWLGYB5.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  ErrorList,
  Field,
  getFormProps,
  getInputProps,
  useForm
} from "/build/_shared/chunk-JBR5K2OT.js";
import {
  PasswordAndConfirmPasswordSchema,
  getZodConstraint,
  parseWithZod,
  useIsPending
} from "/build/_shared/chunk-O6I6CHNL.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import {
  Form,
  useActionData,
  useLoaderData
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

// app/routes/_layout+/_auth+/reset-password.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/_auth+/reset-password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/_auth+/reset-password.tsx"
  );
  import.meta.hot.lastModified = "1706962583482.4053";
}
var ResetPasswordSchema = PasswordAndConfirmPasswordSchema;
function ResetPasswordRoute() {
  _s();
  const data = useLoaderData();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form, fields] = useForm({
    id: "reset-password",
    constraint: getZodConstraint(ResetPasswordSchema),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: ResetPasswordSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center pb-32 pt-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: "Password Reset" }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
        lineNumber: 139,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-body-md text-muted-foreground", children: [
        "Hi, ",
        data.resetPasswordUsername,
        ". No worries. It happens all the time."
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
        lineNumber: 140,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
      lineNumber: 138,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 min-w-[368px] max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
        htmlFor: fields.password.id,
        children: "New Password"
      }, inputProps: {
        ...getInputProps(fields.password, {
          type: "password"
        }),
        autoComplete: "new-password",
        autoFocus: true
      }, errors: fields.password.errors }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
        lineNumber: 146,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
        htmlFor: fields.confirmPassword.id,
        children: "Confirm Password"
      }, inputProps: {
        ...getInputProps(fields.confirmPassword, {
          type: "password"
        }),
        autoComplete: "new-password"
      }, errors: fields.confirmPassword.errors }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
        lineNumber: 156,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
        lineNumber: 166,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", status: isPending ? "pending" : form.status ?? "idle", type: "submit", disabled: isPending, children: "Reset password" }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
        lineNumber: 168,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
      lineNumber: 145,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
      lineNumber: 144,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
    lineNumber: 137,
    columnNumber: 10
  }, this);
}
_s(ResetPasswordRoute, "LlpdpXx3F0DiRi9p4RwyMUO3ZDI=", false, function() {
  return [useLoaderData, useActionData, useIsPending, useForm];
});
_c = ResetPasswordRoute;
var meta = () => {
  return [{
    title: "Reset Password | GeekConsole"
  }];
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/_layout+/_auth+/reset-password.tsx",
    lineNumber: 185,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "ResetPasswordRoute");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ResetPasswordRoute,
  meta,
  ErrorBoundary
};
//# sourceMappingURL=/build/_shared/chunk-7IRL35RG.js.map
