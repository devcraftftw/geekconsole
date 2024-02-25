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
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  PasswordAndConfirmPasswordSchema,
  getZodConstraint,
  parseWithZod,
  useIsPending
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

// app/routes/_layout+/settings+/profile.password_.create.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/settings+/profile.password_.create.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/settings+/profile.password_.create.tsx"
  );
  import.meta.hot.lastModified = "1706962583487.3772";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "dots-horizontal", children: "Password" }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.password_.create.tsx",
    lineNumber: 31,
    columnNumber: 15
  }, this),
  getSitemapEntries: () => null
};
var CreatePasswordForm = PasswordAndConfirmPasswordSchema;
function CreatePasswordRoute() {
  _s();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form, fields] = useForm({
    id: "password-create-form",
    constraint: getZodConstraint(CreatePasswordForm),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: CreatePasswordForm
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), className: "mx-auto max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
      children: "New Password"
    }, inputProps: {
      ...getInputProps(fields.password, {
        type: "password"
      }),
      autoComplete: "new-password"
    }, errors: fields.password.errors }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.password_.create.tsx",
      lineNumber: 114,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { labelProps: {
      children: "Confirm New Password"
    }, inputProps: {
      ...getInputProps(fields.confirmPassword, {
        type: "password"
      }),
      autoComplete: "new-password"
    }, errors: fields.confirmPassword.errors }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.password_.create.tsx",
      lineNumber: 122,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { id: form.errorId, errors: form.errors }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.password_.create.tsx",
      lineNumber: 131,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.password_.create.tsx",
        lineNumber: 135,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.password_.create.tsx",
        lineNumber: 134,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { type: "submit", status: isPending ? "pending" : form.status ?? "idle", children: "Create Password" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.password_.create.tsx",
        lineNumber: 137,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.password_.create.tsx",
      lineNumber: 133,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.password_.create.tsx",
    lineNumber: 113,
    columnNumber: 10
  }, this);
}
_s(CreatePasswordRoute, "qg6D+LQiyyBwoKKZlQs9OeApyZ8=", false, function() {
  return [useActionData, useIsPending, useForm];
});
_c = CreatePasswordRoute;
var _c;
$RefreshReg$(_c, "CreatePasswordRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CreatePasswordRoute as default,
  handle
};
//# sourceMappingURL=/build/routes/_layout+/settings+/profile.password_.create-AXMOZPD4.js.map
