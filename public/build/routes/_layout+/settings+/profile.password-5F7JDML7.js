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
  ErrorList,
  Field,
  getFormProps,
  getInputProps,
  useForm
} from "/build/_shared/chunk-JBR5K2OT.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  Button
} from "/build/_shared/chunk-ZGF5TUXK.js";
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
  PasswordSchema,
  getZodConstraint,
  parseWithZod,
  useIsPending,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  Link,
  useActionData
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

// app/routes/_layout+/settings+/profile.password.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/settings+/profile.password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/settings+/profile.password.tsx"
  );
  import.meta.hot.lastModified = "1706962583487.1465";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "dots-horizontal", children: "Password" }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.password.tsx",
    lineNumber: 33,
    columnNumber: 15
  }, this),
  getSitemapEntries: () => null
};
var ChangePasswordForm = z.object({
  currentPassword: PasswordSchema,
  newPassword: PasswordSchema,
  confirmNewPassword: PasswordSchema
}).superRefine(_c = ({
  confirmNewPassword,
  newPassword
}, ctx) => {
  if (confirmNewPassword !== newPassword) {
    ctx.addIssue({
      path: ["confirmNewPassword"],
      code: "custom",
      message: "The passwords must match"
    });
  }
});
_c2 = ChangePasswordForm;
function ChangePasswordRoute() {
  _s();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form, fields] = useForm({
    id: "password-change-form",
    constraint: getZodConstraint(ChangePasswordForm),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: ChangePasswordForm
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), className: "mx-auto max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.password.tsx",
      lineNumber: 153,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
      children: "Current Password"
    }, inputProps: {
      ...getInputProps(fields.currentPassword, {
        type: "password"
      }),
      autoComplete: "current-password"
    }, errors: fields.currentPassword.errors }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.password.tsx",
      lineNumber: 155,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
      children: "New Password"
    }, inputProps: {
      ...getInputProps(fields.newPassword, {
        type: "password"
      }),
      autoComplete: "new-password"
    }, errors: fields.newPassword.errors }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.password.tsx",
      lineNumber: 163,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
      children: "Confirm New Password"
    }, inputProps: {
      ...getInputProps(fields.confirmNewPassword, {
        type: "password"
      }),
      autoComplete: "new-password"
    }, errors: fields.confirmNewPassword.errors }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.password.tsx",
      lineNumber: 171,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { id: form.errorId, errors: form.errors }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.password.tsx",
      lineNumber: 180,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.password.tsx",
        lineNumber: 184,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.password.tsx",
        lineNumber: 183,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { type: "submit", status: isPending ? "pending" : form.status ?? "idle", children: "Change Password" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.password.tsx",
        lineNumber: 186,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.password.tsx",
      lineNumber: 182,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.password.tsx",
    lineNumber: 152,
    columnNumber: 10
  }, this);
}
_s(ChangePasswordRoute, "qg6D+LQiyyBwoKKZlQs9OeApyZ8=", false, function() {
  return [useActionData, useIsPending, useForm];
});
_c3 = ChangePasswordRoute;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "ChangePasswordForm$z\n	.object({\n		currentPassword: PasswordSchema,\n		newPassword: PasswordSchema,\n		confirmNewPassword: PasswordSchema,\n	})\n	.superRefine");
$RefreshReg$(_c2, "ChangePasswordForm");
$RefreshReg$(_c3, "ChangePasswordRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ChangePasswordRoute as default,
  handle
};
//# sourceMappingURL=/build/routes/_layout+/settings+/profile.password-5F7JDML7.js.map
