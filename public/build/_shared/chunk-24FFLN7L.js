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
  AuthenticityTokenInput
} from "/build/_shared/chunk-6LMWWETO.js";
import {
  NameSchema,
  PasswordSchema,
  UsernameSchema,
  getZodConstraint,
  parseWithZod,
  useIsPending,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import {
  Form,
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

// app/routes/_layout+/_auth+/onboarding.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/_auth+/onboarding.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/_auth+/onboarding.tsx"
  );
  import.meta.hot.lastModified = "1706962583481.775";
}
var SignupFormSchema = z.object({
  username: UsernameSchema,
  name: NameSchema,
  password: PasswordSchema,
  confirmPassword: PasswordSchema,
  agreeToTermsOfServiceAndPrivacyPolicy: z.boolean({
    required_error: "You must agree to the terms of service and privacy policy"
  }),
  remember: z.boolean().optional(),
  redirectTo: z.string().optional()
}).superRefine(_c = ({
  confirmPassword,
  password
}, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      path: ["confirmPassword"],
      code: "custom",
      message: "The passwords must match"
    });
  }
});
_c2 = SignupFormSchema;
function OnboardingRoute() {
  _s();
  const data = useLoaderData();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const [form, fields] = useForm({
    id: "signup-form",
    constraint: getZodConstraint(SignupFormSchema),
    defaultValue: {
      redirectTo
    },
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: SignupFormSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center pb-32 pt-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: [
        "Welcome aboard ",
        data.email,
        "!"
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 180,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-body-md text-muted-foreground", children: "Please enter your details." }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 181,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
      lineNumber: 179,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "xs" }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
      lineNumber: 186,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "mx-auto min-w-[368px] max-w-sm", ...getFormProps(form), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 189,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoneypotInputs, {}, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 190,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
        htmlFor: fields.username.id,
        children: "Username"
      }, inputProps: {
        ...getInputProps(fields.username, {
          type: "text"
        }),
        autoComplete: "username",
        className: "lowercase"
      }, errors: fields.username.errors }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 192,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
        htmlFor: fields.name.id,
        children: "Name"
      }, inputProps: {
        ...getInputProps(fields.name, {
          type: "text"
        }),
        autoComplete: "name"
      }, errors: fields.name.errors }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 202,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
        htmlFor: fields.password.id,
        children: "Password"
      }, inputProps: {
        ...getInputProps(fields.password, {
          type: "password"
        }),
        autoComplete: "new-password"
      }, errors: fields.password.errors }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 211,
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
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 221,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxField, { labelProps: {
        htmlFor: fields.agreeToTermsOfServiceAndPrivacyPolicy.id,
        children: "Do you agree to our Terms of Service and Privacy Policy?"
      }, buttonProps: getInputProps(fields.agreeToTermsOfServiceAndPrivacyPolicy, {
        type: "checkbox"
      }), errors: fields.agreeToTermsOfServiceAndPrivacyPolicy.errors }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 231,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxField, { labelProps: {
        htmlFor: fields.remember.id,
        children: "Remember me"
      }, buttonProps: getInputProps(fields.remember, {
        type: "checkbox"
      }), errors: fields.remember.errors }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 237,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(fields.redirectTo, {
        type: "hidden"
      }) }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 244,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 247,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", status: isPending ? "pending" : form.status ?? "idle", type: "submit", disabled: isPending, children: "Create an account" }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 250,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
        lineNumber: 249,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
      lineNumber: 188,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
    lineNumber: 178,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/_auth+/onboarding.tsx",
    lineNumber: 177,
    columnNumber: 10
  }, this);
}
_s(OnboardingRoute, "SbEzVWUNyTwM/qcAIjF6pChQLW8=", false, function() {
  return [useLoaderData, useActionData, useIsPending, useSearchParams, useForm];
});
_c3 = OnboardingRoute;
var meta = () => {
  return [{
    title: "Setup GeekConsole Account"
  }];
};
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "SignupFormSchema$z\n	.object({\n		username: UsernameSchema,\n		name: NameSchema,\n		password: PasswordSchema,\n		confirmPassword: PasswordSchema,\n		agreeToTermsOfServiceAndPrivacyPolicy: z.boolean({\n			required_error:\n				'You must agree to the terms of service and privacy policy',\n		}),\n		remember: z.boolean().optional(),\n		redirectTo: z.string().optional(),\n	})\n	.superRefine");
$RefreshReg$(_c2, "SignupFormSchema");
$RefreshReg$(_c3, "OnboardingRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  OnboardingRoute,
  meta
};
//# sourceMappingURL=/build/_shared/chunk-24FFLN7L.js.map
