import "/build/_shared/chunk-IAFLELVB.js";
import {
  Spacer
} from "/build/_shared/chunk-3YUGB6UL.js";
import {
  StatusButton
} from "/build/_shared/chunk-4XWLGYB5.js";
import "/build/_shared/chunk-BZBQSHJ3.js";
import "/build/_shared/chunk-IATUL5VE.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-3FDTPL7P.js";
import {
  CheckboxField,
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
import "/build/_shared/chunk-YWGK6LNJ.js";
import {
  NameSchema,
  UsernameSchema,
  getZodConstraint,
  parseWithZod,
  useIsPending,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  useActionData,
  useLoaderData,
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

// app/routes/_layout+/_auth+/onboarding_.$provider.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/_auth+/onboarding_.$provider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/_auth+/onboarding_.$provider.tsx"
  );
  import.meta.hot.lastModified = "1706962583482.0137";
}
var SignupFormSchema = z.object({
  imageUrl: z.string().optional(),
  username: UsernameSchema,
  name: NameSchema,
  agreeToTermsOfServiceAndPrivacyPolicy: z.boolean({
    required_error: "You must agree to the terms of service and privacy policy"
  }),
  remember: z.boolean().optional(),
  redirectTo: z.string().optional()
});
function SignupRoute() {
  _s();
  const data = useLoaderData();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const [form, fields] = useForm({
    id: "onboarding-provider-form",
    constraint: getZodConstraint(SignupFormSchema),
    lastResult: actionData?.result ?? data.submission,
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
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 201,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-body-md text-muted-foreground", children: "Please enter your details." }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 202,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
      lineNumber: 200,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "xs" }, void 0, false, {
      fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
      lineNumber: 207,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "mx-auto min-w-[368px] max-w-sm", ...getFormProps(form), children: [
      fields.imageUrl.initialValue ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-col items-center justify-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: fields.imageUrl.initialValue, alt: "Profile", className: "size-24 rounded-full" }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
          lineNumber: 211,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-body-sm text-muted-foreground", children: "You can change your photo later" }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
          lineNumber: 212,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(fields.imageUrl, {
          type: "hidden"
        }) }, void 0, false, {
          fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
          lineNumber: 215,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 210,
        columnNumber: 38
      }, this) : null,
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
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 220,
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
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 231,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxField, { labelProps: {
        htmlFor: fields.agreeToTermsOfServiceAndPrivacyPolicy.id,
        children: "Do you agree to our Terms of Service and Privacy Policy?"
      }, buttonProps: getInputProps(fields.agreeToTermsOfServiceAndPrivacyPolicy, {
        type: "checkbox"
      }), errors: fields.agreeToTermsOfServiceAndPrivacyPolicy.errors }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 241,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxField, { labelProps: {
        htmlFor: fields.remember.id,
        children: "Remember me"
      }, buttonProps: getInputProps(fields.remember, {
        type: "checkbox"
      }), errors: fields.remember.errors }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 248,
        columnNumber: 6
      }, this),
      redirectTo ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 255,
        columnNumber: 20
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 257,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", status: isPending ? "pending" : form.status ?? "idle", type: "submit", disabled: isPending, children: "Create an account" }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 260,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
        lineNumber: 259,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
      lineNumber: 209,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
    lineNumber: 199,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/_auth+/onboarding_.$provider.tsx",
    lineNumber: 198,
    columnNumber: 10
  }, this);
}
_s(SignupRoute, "SbEzVWUNyTwM/qcAIjF6pChQLW8=", false, function() {
  return [useLoaderData, useActionData, useIsPending, useSearchParams, useForm];
});
_c = SignupRoute;
var meta = () => {
  return [{
    title: "Setup GeekConsole Account"
  }];
};
var _c;
$RefreshReg$(_c, "SignupRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignupRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/_layout+/_auth+/onboarding_.$provider-5UJZ7OO7.js.map
