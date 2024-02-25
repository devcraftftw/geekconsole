import "/build/_shared/chunk-VBLMD53Y.js";
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
  NameSchema,
  UsernameSchema,
  getZodConstraint,
  parseWithZod,
  useDoubleCheck,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  getUserImgSrc
} from "/build/_shared/chunk-J754EQNG.js";
import {
  Link,
  useFetcher,
  useLoaderData
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

// app/routes/_layout+/settings+/profile.index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/settings+/profile.index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/settings+/profile.index.tsx"
  );
  import.meta.hot.lastModified = "1706962583486.751";
}
var handle = {
  getSitemapEntries: () => null
};
var PROFILE_UPDATE_ACTION_INTENT = "update-profile";
var DELETE_DATA_ACTION_INTENT = "delete-data";
var SIGN_OUT_OF_SESSIONS_ACTION_INTENT = "sign-out-of-sessions";
var ProfileFormSchema = z.object({
  name: NameSchema.optional(),
  username: UsernameSchema
});
function EditUserProfile() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative size-52", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getUserImgSrc(data.user.image?.id), alt: data.user.username, className: "size-full rounded-full object-cover" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 150,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, variant: "outline", className: "absolute -right-3 top-3 flex size-10 items-center justify-center rounded-full p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { preventScrollReset: true, to: "photo", title: "Change profile photo", "aria-label": "Change profile photo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "camera", className: "size-4" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 153,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 152,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 151,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 149,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 148,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateProfile, {}, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 159,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-6 my-6 h-1 border-b-[1.5px] border-foreground" }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 161,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full flex flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "change-email", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "envelope-closed", children: [
        "Change email from ",
        data.user.email
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 166,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 165,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 164,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "two-factor", children: data.isTwoFactorEnabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "lock-closed", children: "2FA is enabled" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 174,
        columnNumber: 34
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "lock-open-1", children: "Enable 2FA" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 174,
        columnNumber: 83
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 173,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 172,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: data.hasPassword ? "password" : "password/create", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "dots-horizontal", children: data.hasPassword ? "Change Password" : "Create a Password" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 180,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 179,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 178,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "connections", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "link-2", children: "Manage connections" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 188,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 187,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 186,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { reloadDocument: true, download: "my-geek-console-data.json", to: "/resources/download-user-data", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "download", children: "Download your data" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 194,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 193,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 192,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignOutOfSessions, {}, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 198,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteData, {}, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 199,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 163,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.index.tsx",
    lineNumber: 147,
    columnNumber: 10
  }, this);
}
_s(EditUserProfile, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = EditUserProfile;
function UpdateProfile() {
  _s2();
  const data = useLoaderData();
  const fetcher = useFetcher();
  const [form, fields] = useForm({
    id: "edit-profile",
    constraint: getZodConstraint(ProfileFormSchema),
    lastResult: fetcher.data?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: ProfileFormSchema
      });
    },
    defaultValue: {
      username: data.user.username,
      name: data.user.name ?? ""
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "POST", ...getFormProps(form), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 278,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-6 gap-x-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { className: "col-span-3", labelProps: {
        htmlFor: fields.username.id,
        children: "Username"
      }, inputProps: getInputProps(fields.username, {
        type: "text"
      }), errors: fields.username.errors }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 281,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { className: "col-span-3", labelProps: {
        htmlFor: fields.name.id,
        children: "Name"
      }, inputProps: getInputProps(fields.name, {
        type: "text"
      }), errors: fields.name.errors }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.index.tsx",
        lineNumber: 287,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 280,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 295,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { type: "submit", size: "wide", name: "intent", value: PROFILE_UPDATE_ACTION_INTENT, status: fetcher.state !== "idle" ? "pending" : form.status ?? "idle", children: "Save changes" }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 298,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 297,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.index.tsx",
    lineNumber: 277,
    columnNumber: 10
  }, this);
}
_s2(UpdateProfile, "UzvSjeKCTDMHQRJe2illLbG0AqY=", false, function() {
  return [useLoaderData, useFetcher, useForm];
});
_c2 = UpdateProfile;
function SignOutOfSessions() {
  _s3();
  const data = useLoaderData();
  const dc = useDoubleCheck();
  const fetcher = useFetcher();
  const otherSessionsCount = data.user._count.sessions - 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: otherSessionsCount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 335,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { ...dc.getButtonProps({
      type: "submit",
      name: "intent",
      value: SIGN_OUT_OF_SESSIONS_ACTION_INTENT
    }), variant: dc.doubleCheck ? "destructive" : "default", status: fetcher.state !== "idle" ? "pending" : fetcher.data?.status ?? "idle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "avatar", children: dc.doubleCheck ? `Are you sure?` : `Sign out of ${otherSessionsCount} other sessions` }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 341,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 336,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.index.tsx",
    lineNumber: 334,
    columnNumber: 26
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "avatar", children: "This is your only session" }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.index.tsx",
    lineNumber: 345,
    columnNumber: 23
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.index.tsx",
    lineNumber: 333,
    columnNumber: 10
  }, this);
}
_s3(SignOutOfSessions, "vGqH5veF3P6z3W7E3D5vXZ17b98=", false, function() {
  return [useLoaderData, useDoubleCheck, useFetcher];
});
_c3 = SignOutOfSessions;
function DeleteData() {
  _s4();
  const dc = useDoubleCheck();
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 372,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { ...dc.getButtonProps({
      type: "submit",
      name: "intent",
      value: DELETE_DATA_ACTION_INTENT
    }), variant: dc.doubleCheck ? "destructive" : "default", status: fetcher.state !== "idle" ? "pending" : "idle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "trash", children: dc.doubleCheck ? `Are you sure?` : `Delete all your data` }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 379,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.index.tsx",
      lineNumber: 374,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.index.tsx",
    lineNumber: 371,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.index.tsx",
    lineNumber: 370,
    columnNumber: 10
  }, this);
}
_s4(DeleteData, "vnFydE1DKgFCQD1o3M4b69zjfoU=", false, function() {
  return [useDoubleCheck, useFetcher];
});
_c4 = DeleteData;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "EditUserProfile");
$RefreshReg$(_c2, "UpdateProfile");
$RefreshReg$(_c3, "SignOutOfSessions");
$RefreshReg$(_c4, "DeleteData");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditUserProfile as default,
  handle
};
//# sourceMappingURL=/build/routes/_layout+/settings+/profile.index-ECHIG37N.js.map
