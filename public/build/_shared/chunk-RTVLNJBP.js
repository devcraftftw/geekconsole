import {
  require_cuid2
} from "/build/_shared/chunk-FERROO4A.js";
import {
  Card,
  CardContent
} from "/build/_shared/chunk-RZVSLDRN.js";
import {
  $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2,
  $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
} from "/build/_shared/chunk-2TJRRPFX.js";
import {
  $f631663db3294ace$export$b39126d51d94e6f3
} from "/build/_shared/chunk-54LKDAMD.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_dist
} from "/build/_shared/chunk-3FDTPL7P.js";
import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  ErrorList,
  FormProvider,
  Input,
  Label,
  getCollectionProps,
  getFieldsetProps,
  getFormProps,
  getInputProps,
  useForm,
  useInputControl
} from "/build/_shared/chunk-JBR5K2OT.js";
import {
  Button
} from "/build/_shared/chunk-ZGF5TUXK.js";
import {
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $db6c3485150b8e66$export$1ab7ae714698c4b8,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "/build/_shared/chunk-RO4OX7CY.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  _extends
} from "/build/_shared/chunk-CHQ4BA76.js";
import {
  AuthenticityTokenInput
} from "/build/_shared/chunk-6LMWWETO.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  getZodConstraint,
  parseWithZod,
  useSubmitting,
  z
} from "/build/_shared/chunk-O6I6CHNL.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import {
  cn,
  getBookImgSrc
} from "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-HCJ6L7J4.js";
import {
  createHotContext
} from "/build/_shared/chunk-OC2Z5MX2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_layout+/dashboard+/books+/__book-editor.tsx
var import_cuid2 = __toESM(require_cuid2(), 1);
var import_node = __toESM(require_node(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_spin_delay = __toESM(require_dist(), 1);

// node_modules/@radix-ui/react-radio-group/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $ce77a8961b41be9e$var$RADIO_NAME = "Radio";
var [$ce77a8961b41be9e$var$createRadioContext, $ce77a8961b41be9e$export$67d2296460f1b002] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($ce77a8961b41be9e$var$RADIO_NAME);
var [$ce77a8961b41be9e$var$RadioProvider, $ce77a8961b41be9e$var$useRadioContext] = $ce77a8961b41be9e$var$createRadioContext($ce77a8961b41be9e$var$RADIO_NAME);
var $ce77a8961b41be9e$export$d7b12c4107be0d61 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, ...radioProps } = props;
  const [button, setButton] = (0, import_react.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  return /* @__PURE__ */ (0, import_react.createElement)($ce77a8961b41be9e$var$RadioProvider, {
    scope: __scopeRadio,
    checked,
    disabled
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "radio",
    "aria-checked": checked,
    "data-state": $ce77a8961b41be9e$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, radioProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      if (!checked)
        onCheck === null || onCheck === void 0 || onCheck();
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ (0, import_react.createElement)($ce77a8961b41be9e$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
var $ce77a8961b41be9e$var$INDICATOR_NAME = "RadioIndicator";
var $ce77a8961b41be9e$export$d35a9ffa9a04f9e7 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeRadio, forceMount, ...indicatorProps } = props;
  const context = $ce77a8961b41be9e$var$useRadioContext($ce77a8961b41be9e$var$INDICATOR_NAME, __scopeRadio);
  return /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.checked
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $ce77a8961b41be9e$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef
  })));
});
var $ce77a8961b41be9e$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ (0, import_react.createElement)("input", _extends({
    type: "radio",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $ce77a8961b41be9e$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
var $f99a8c78507165f7$var$ARROW_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
];
var $f99a8c78507165f7$var$RADIO_GROUP_NAME = "RadioGroup";
var [$f99a8c78507165f7$var$createRadioGroupContext, $f99a8c78507165f7$export$c547093f11b76da2] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($f99a8c78507165f7$var$RADIO_GROUP_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4,
  $ce77a8961b41be9e$export$67d2296460f1b002
]);
var $f99a8c78507165f7$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var $f99a8c78507165f7$var$useRadioScope = $ce77a8961b41be9e$export$67d2296460f1b002();
var [$f99a8c78507165f7$var$RadioGroupProvider, $f99a8c78507165f7$var$useRadioGroupContext] = $f99a8c78507165f7$var$createRadioGroupContext($f99a8c78507165f7$var$RADIO_GROUP_NAME);
var $f99a8c78507165f7$export$a98f0dcb43a68a25 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ (0, import_react.createElement)($f99a8c78507165f7$var$RadioGroupProvider, {
    scope: __scopeRadioGroup,
    name,
    required,
    disabled,
    value,
    onValueChange: setValue
  }, /* @__PURE__ */ (0, import_react.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation,
    dir: direction,
    loop
  }), /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "radiogroup",
    "aria-required": required,
    "aria-orientation": orientation,
    "data-disabled": disabled ? "" : void 0,
    dir: direction
  }, groupProps, {
    ref: forwardedRef
  }))));
});
var $f99a8c78507165f7$var$ITEM_NAME = "RadioGroupItem";
var $f99a8c78507165f7$export$9f866c100ef519e4 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, disabled, ...itemProps } = props;
  const context = $f99a8c78507165f7$var$useRadioGroupContext($f99a8c78507165f7$var$ITEM_NAME, __scopeRadioGroup);
  const isDisabled = context.disabled || disabled;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const checked = context.value === itemProps.value;
  const isArrowKeyPressedRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    const handleKeyDown = (event) => {
      if ($f99a8c78507165f7$var$ARROW_KEYS.includes(event.key))
        isArrowKeyPressedRef.current = true;
    };
    const handleKeyUp = () => isArrowKeyPressedRef.current = false;
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !isDisabled,
    active: checked
  }), /* @__PURE__ */ (0, import_react.createElement)($ce77a8961b41be9e$export$d7b12c4107be0d61, _extends({
    disabled: isDisabled,
    required: context.required,
    checked
  }, radioScope, itemProps, {
    name: context.name,
    ref: composedRefs,
    onCheck: () => context.onValueChange(itemProps.value),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10((event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onFocus, () => {
      var _ref$current;
      if (isArrowKeyPressedRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.click();
    })
  })));
});
var $f99a8c78507165f7$export$5fb54c671a65c88 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, ...indicatorProps } = props;
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  return /* @__PURE__ */ (0, import_react.createElement)($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, _extends({}, radioScope, indicatorProps, {
    ref: forwardedRef
  }));
});
var $f99a8c78507165f7$export$be92b6f5f03c0fe9 = $f99a8c78507165f7$export$a98f0dcb43a68a25;
var $f99a8c78507165f7$export$6d08773d2e66f8f2 = $f99a8c78507165f7$export$9f866c100ef519e4;
var $f99a8c78507165f7$export$adb584737d712b70 = $f99a8c78507165f7$export$5fb54c671a65c88;

// app/shared/ui/RadioGroup/RadioGroup.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/RadioGroup/RadioGroup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/RadioGroup/RadioGroup.tsx"
  );
  import.meta.hot.lastModified = "1706962583490.1462";
}
var RadioGroup = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($f99a8c78507165f7$export$be92b6f5f03c0fe9, { className: cn("grid gap-2", className), ...props, ref }, void 0, false, {
    fileName: "app/shared/ui/RadioGroup/RadioGroup.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
});
_c2 = RadioGroup;
RadioGroup.displayName = $f99a8c78507165f7$export$be92b6f5f03c0fe9.displayName;
var RadioGroupItem = React.forwardRef(_c3 = ({
  className,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($f99a8c78507165f7$export$6d08773d2e66f8f2, { ref, className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($f99a8c78507165f7$export$adb584737d712b70, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "check", className: "size-3.5 fill-primary" }, void 0, false, {
    fileName: "app/shared/ui/RadioGroup/RadioGroup.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/RadioGroup/RadioGroup.tsx",
    lineNumber: 39,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/RadioGroup/RadioGroup.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
});
_c4 = RadioGroupItem;
RadioGroupItem.displayName = $f99a8c78507165f7$export$6d08773d2e66f8f2.displayName;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "RadioGroup$React.forwardRef");
$RefreshReg$(_c2, "RadioGroup");
$RefreshReg$(_c3, "RadioGroupItem$React.forwardRef");
$RefreshReg$(_c4, "RadioGroupItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_layout+/dashboard+/books+/__book-editor.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/dashboard+/books+/__book-editor.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/dashboard+/books+/__book-editor.tsx"
  );
  import.meta.hot.lastModified = "1707021226449.5352";
}
var MAX_UPLOAD_SIZE = 1024 * 1024 * 3;
var ImageFieldsetSchema = z.object({
  id: z.string().optional(),
  file: z.instanceof(File).optional().refine((file) => {
    return !file || file.size <= MAX_UPLOAD_SIZE;
  }, "File size must be less than 3MB")
});
var BookFormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, {
    message: "Please, provide a title"
  }).max(100, {
    message: "Title is too long"
  }),
  author: z.string().min(1, {
    message: "Please, provide an author"
  }).max(100, {
    message: "Author name is too long"
  }),
  year: z.number().positive(),
  images: z.array(ImageFieldsetSchema).max(5).optional(),
  statusName: z.string(),
  description: z.string().optional(),
  comment: z.string().optional()
});
function BookEditor({
  readingStatuses,
  book
}) {
  _s();
  const actionData = useActionData();
  const isSubmitting = useSubmitting();
  const showSpinner = (0, import_spin_delay.useSpinDelay)(isSubmitting);
  const [form, fields] = useForm({
    id: "bookEditor",
    constraint: getZodConstraint(BookFormSchema),
    lastResult: actionData?.result,
    shouldValidate: "onBlur",
    shouldRevalidate: "onBlur",
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: BookFormSchema
      });
    },
    defaultValue: {
      ...book,
      statusName: book?.status.name,
      images: book?.images ?? [{}]
    }
  });
  const imageList = fields.images.getFieldList();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormProvider, { context: form.context, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", className: "grid w-full grid-cols-2 gap-4", ...getFormProps(form), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 239,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "hidden" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 245,
      columnNumber: 8
    }, this),
    book ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", value: book.id }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 247,
      columnNumber: 16
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: fields.title.id, children: "Title" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 251,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { autoFocus: true, placeholder: "Romeo & Juliet", ...getInputProps(fields.title, {
        type: "text"
      }) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 252,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { id: fields.title.errorId, errors: fields.title.errors }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 256,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 250,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: fields.author.id, children: "Author" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: "William Shakespear", ...getInputProps(fields.author, {
        type: "text"
      }) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 263,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { id: fields.author.errorId, errors: fields.author.errors }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 267,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 266,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 261,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: fields.year.id, children: "Year" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: "1597", ...getInputProps(fields.year, {
        type: "number"
      }) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 274,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { id: fields.year.errorId, errors: fields.year.errors }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 278,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 277,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 272,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: fields.description.id, children: "Description" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 284,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: "Book description", ...getInputProps(fields.description, {
        type: "text"
      }) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 285,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { id: fields.description.errorId, errors: fields.description.errors }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 289,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 288,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 283,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ReadingStatusRadioGroup, { meta: fields.statusName, readingStatuses }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 294,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: fields.comment.id, children: "Your comments" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 298,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: "Share your thoughts about this book or leave some comments for your future reference", ...getInputProps(fields.comment, {
        type: "text"
      }) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 299,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { id: fields.comment.errorId, errors: fields.comment.errors }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 303,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 302,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 297,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { children: "Images" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
          lineNumber: 310,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex flex-wrap gap-2", children: imageList.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "absolute bottom-36 left-24 text-foreground-destructive", ...form.remove.getButtonProps({
            name: fields.images.name,
            index
          }), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: "cross-1" }, void 0, false, {
              fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
              lineNumber: 318,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
              lineNumber: 317,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: [
              "Remove image ",
              index + 1
            ] }, void 0, true, {
              fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
              lineNumber: 320,
              columnNumber: 14
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
            lineNumber: 313,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImageChooser, { meta: image }, void 0, false, {
            fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
            lineNumber: 324,
            columnNumber: 13
          }, this)
        ] }, image.key, true, {
          fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
          lineNumber: 312,
          columnNumber: 44
        }, this)) }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
          lineNumber: 311,
          columnNumber: 10
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 309,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { className: "mt-3", ...form.insert.getButtonProps({
        name: fields.images.name
      }), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: "plus", children: "Image" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
          lineNumber: 334,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
          lineNumber: 333,
          columnNumber: 10
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Add image" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
          lineNumber: 336,
          columnNumber: 10
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 330,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 308,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { id: form.errorId, errors: form.errors }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 340,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", disabled: showSpinner, className: "mt-auto", children: "Submit" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 342,
      columnNumber: 8
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
    lineNumber: 238,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
    lineNumber: 237,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
    lineNumber: 236,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
    lineNumber: 235,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
    lineNumber: 234,
    columnNumber: 10
  }, this);
}
_s(BookEditor, "JC+672AqSUI506cXKPuyXxv89mM=", false, function() {
  return [useActionData, useSubmitting, import_spin_delay.useSpinDelay, useForm];
});
_c5 = BookEditor;
var ReadingStatusRadioGroup = ({
  meta,
  readingStatuses
}) => {
  _s2();
  const control = useInputControl(meta);
  const radioGroupRef = (0, import_react4.useRef)(null);
  const readingStatusesNames = readingStatuses.map((status) => status.name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: meta.id, children: "Reading status" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 364,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: meta.name, defaultValue: meta.initialValue, tabIndex: -1, className: "sr-only", onFocus: () => {
      radioGroupRef.current?.focus();
    } }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 365,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioGroup, { id: meta.id, value: control.value, defaultValue: meta.initialValue, onValueChange: control.change, ref: radioGroupRef, onBlur: control.blur, className: "mt-2 flex", children: getCollectionProps(meta, {
      type: "radio",
      options: readingStatusesNames
    }).map((props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-3 space-y-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RadioGroupItem, { ...props, type: "button" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 373,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: props.id, children: props.value }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 374,
        columnNumber: 7
      }, this)
    ] }, props.value, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 372,
      columnNumber: 23
    }, this)) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 368,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { id: meta.errorId, errors: meta.errors }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 378,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 377,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
    lineNumber: 363,
    columnNumber: 10
  }, this);
};
_s2(ReadingStatusRadioGroup, "mpyfKIbi6DXerdw3fdAkeFRCdx0=", false, function() {
  return [useInputControl];
});
_c22 = ReadingStatusRadioGroup;
function ImageChooser({
  meta
}) {
  _s3();
  const fields = meta.getFieldset();
  const existingImage = Boolean(fields.id.initialValue);
  const [previewImage, setPreviewImage] = (0, import_react4.useState)(fields.id.initialValue ? getBookImgSrc(fields.id.initialValue) : null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("fieldset", { ...getFieldsetProps(meta), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-28", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative size-28", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: fields.file.id, className: cn("group absolute size-28 rounded-lg", {
      "bg-accent opacity-40 focus-within:opacity-100 hover:opacity-100": !previewImage,
      "cursor-pointer focus-within:ring-4": !existingImage
    }), children: [
      previewImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: previewImage, alt: "Preview", className: "size-28 rounded-lg object-cover" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
          lineNumber: 402,
          columnNumber: 10
        }, this),
        existingImage ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pointer-events-none absolute -right-0.5 -top-0.5 rotate-12 rounded-sm bg-secondary px-2 py-1 text-xs text-secondary-foreground shadow-md", children: "new" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
          lineNumber: 403,
          columnNumber: 34
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 401,
        columnNumber: 24
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex size-28 items-center justify-center rounded-lg border border-muted-foreground text-4xl text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: "plus" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 407,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 406,
        columnNumber: 18
      }, this),
      existingImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ...getInputProps(fields.id, {
        type: "hidden"
      }) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 410,
        columnNumber: 25
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { "aria-label": "Image", className: "absolute left-0 top-0 z-0 size-28 cursor-pointer opacity-0", onChange: (event) => {
        const file = event.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setPreviewImage(null);
        }
      }, accept: "image/*", ...getInputProps(fields.file, {
        type: "file"
      }) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
        lineNumber: 414,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 397,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 396,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { id: fields.file.errorId, errors: fields.file.errors }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 431,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 430,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
    lineNumber: 395,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
    lineNumber: 394,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
    lineNumber: 393,
    columnNumber: 10
  }, this);
}
_s3(ImageChooser, "MDtKG2LqJhILTmTyhG2DQBd+FU4=");
_c32 = ImageChooser;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    404: ({
      params
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      'No book with the id "',
      params.bookId,
      '" exists'
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
      lineNumber: 443,
      columnNumber: 11
    }, this)
  } }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/books+/__book-editor.tsx",
    lineNumber: 440,
    columnNumber: 10
  }, this);
}
_c42 = ErrorBoundary;
var _c5;
var _c22;
var _c32;
var _c42;
$RefreshReg$(_c5, "BookEditor");
$RefreshReg$(_c22, "ReadingStatusRadioGroup");
$RefreshReg$(_c32, "ImageChooser");
$RefreshReg$(_c42, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  BookEditor
};
//# sourceMappingURL=/build/_shared/chunk-RTVLNJBP.js.map
