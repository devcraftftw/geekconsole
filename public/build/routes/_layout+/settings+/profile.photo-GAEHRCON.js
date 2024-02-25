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
  getZodConstraint,
  parseWithZod,
  useDoubleCheck,
  useIsPending,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  getUserImgSrc
} from "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-HCJ6L7J4.js";
import "/build/_shared/chunk-GIAAE3CH.js";
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_layout+/settings+/profile.photo.tsx
var import_node = __toESM(require_node(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/settings+/profile.photo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/settings+/profile.photo.tsx"
  );
  import.meta.hot.lastModified = "1706962583487.7925";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "avatar", children: "Photo" }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
    lineNumber: 35,
    columnNumber: 15
  }, this),
  getSitemapEntries: () => null
};
var MAX_SIZE = 1024 * 1024 * 3;
var DeleteImageSchema = z.object({
  intent: z.literal("delete")
});
var NewImageSchema = z.object({
  intent: z.literal("submit"),
  photoFile: z.instanceof(File).refine((file) => file.size > 0, "Image is required").refine((file) => file.size <= MAX_SIZE, "Image size must be less than 3MB")
});
var PhotoFormSchema = z.discriminatedUnion("intent", [DeleteImageSchema, NewImageSchema]);
function PhotoRoute() {
  _s();
  const data = useLoaderData();
  const doubleCheckDeleteImage = useDoubleCheck();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [form, fields] = useForm({
    id: "profile-photo",
    constraint: getZodConstraint(PhotoFormSchema),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: PhotoFormSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  const isPending = useIsPending();
  const pendingIntent = isPending ? navigation.formData?.get("intent") : null;
  const lastSubmissionIntent = fields.intent.value;
  const [newImageSrc, setNewImageSrc] = (0, import_react3.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", encType: "multipart/form-data", className: "flex flex-col items-center justify-center gap-10", onReset: () => setNewImageSrc(null), ...getFormProps(form), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
      lineNumber: 158,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: newImageSrc ?? (data.user ? getUserImgSrc(data.user.image?.id) : ""), className: "size-52 rounded-full object-cover", alt: data.user?.name ?? data.user?.username }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
      lineNumber: 160,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: fields.photoFile.errors, id: fields.photoFile.id }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
      lineNumber: 162,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(fields.photoFile, {
        type: "file"
      }), accept: "image/*", className: "peer sr-only", required: true, tabIndex: newImageSrc ? -1 : 0, onChange: (e) => {
        const file = e.currentTarget.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setNewImageSrc(event.target?.result?.toString() ?? null);
          };
          reader.readAsDataURL(file);
        }
      } }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
        lineNumber: 171,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, className: "cursor-pointer peer-valid:hidden peer-focus-within:ring-4 peer-focus-visible:ring-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: fields.photoFile.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "pencil-1", children: "Change" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
        lineNumber: 185,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
        lineNumber: 184,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
        lineNumber: 183,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { name: "intent", value: "submit", type: "submit", className: "peer-invalid:hidden", status: pendingIntent === "submit" ? "pending" : lastSubmissionIntent === "submit" ? form.status ?? "idle" : "idle", children: "Save Photo" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
        lineNumber: 188,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "reset", variant: "destructive", className: "peer-invalid:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "trash", children: "Reset" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
        lineNumber: 192,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
        lineNumber: 191,
        columnNumber: 6
      }, this),
      data.user.image?.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "peer-valid:hidden", variant: "destructive", ...doubleCheckDeleteImage.getButtonProps({
        type: "submit",
        name: "intent",
        value: "delete"
      }), status: pendingIntent === "delete" ? "pending" : lastSubmissionIntent === "delete" ? form.status ?? "idle" : "idle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "trash", children: doubleCheckDeleteImage.doubleCheck ? "Are you sure?" : "Delete" }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
        lineNumber: 199,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
        lineNumber: 194,
        columnNumber: 29
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
      lineNumber: 164,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors }, void 0, false, {
      fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
      lineNumber: 204,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
    lineNumber: 157,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/settings+/profile.photo.tsx",
    lineNumber: 156,
    columnNumber: 10
  }, this);
}
_s(PhotoRoute, "iHeSpgIHVoJLphdT2VOeEhrdia8=", false, function() {
  return [useLoaderData, useDoubleCheck, useActionData, useNavigation, useForm, useIsPending];
});
_c = PhotoRoute;
var _c;
$RefreshReg$(_c, "PhotoRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PhotoRoute as default,
  handle
};
//# sourceMappingURL=/build/routes/_layout+/settings+/profile.photo-GAEHRCON.js.map
