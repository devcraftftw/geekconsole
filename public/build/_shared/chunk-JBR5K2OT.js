import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  cva
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
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  createFormContext,
  formatPaths,
  getPaths,
  isFieldElement,
  isPrefix
} from "/build/_shared/chunk-O6I6CHNL.js";
import {
  cn
} from "/build/_shared/chunk-J754EQNG.js";
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

// app/shared/ui/Input/Input.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Input/Input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Input/Input.tsx"
  );
  import.meta.hot.lastModified = "1706962583489.9026";
}
var Input = React.forwardRef(_c = ({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type, className: cn("flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-muted-foreground placeholder:text-muted-foreground hover:file:cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-input-invalid", className), ref, ...props }, void 0, false, {
    fileName: "app/shared/ui/Input/Input.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
});
_c2 = Input;
Input.displayName = "Input";
var _c;
var _c2;
$RefreshReg$(_c, "Input$React.forwardRef");
$RefreshReg$(_c2, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@radix-ui/react-label/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $b73a6c6685e72184$export$b04be29aa201d4f5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends({}, props, {
    ref: forwardedRef,
    onMouseDown: (event) => {
      var _props$onMouseDown;
      (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event);
      if (!event.defaultPrevented && event.detail > 1)
        event.preventDefault();
    }
  }));
});
var $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;

// app/shared/ui/Label/Label.tsx
var React2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Label/Label.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Label/Label.tsx"
  );
  import.meta.hot.lastModified = "1706588338082.8882";
}
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React2.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($b73a6c6685e72184$export$be92b6f5f03c0fe9, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Label/Label.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = Label;
Label.displayName = $b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;
var _c3;
var _c22;
$RefreshReg$(_c3, "Label$React.forwardRef");
$RefreshReg$(_c22, "Label");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@conform-to/react/_virtual/_rollupPluginBabelHelpers.mjs
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/@conform-to/react/hooks.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@conform-to/react/context.mjs
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var _excluded = ["onSubmit"];
var Form = /* @__PURE__ */ (0, import_react2.createContext)([]);
var wrappedSymbol = Symbol("wrapped");
function getWrappedFormContext(context) {
  return context[wrappedSymbol];
}
function useFormState(form, subjectRef) {
  var subscribe = (0, import_react2.useCallback)((callback) => form.subscribe(callback, () => subjectRef === null || subjectRef === void 0 ? void 0 : subjectRef.current), [form, subjectRef]);
  return (0, import_react2.useSyncExternalStore)(subscribe, form.getState, form.getState);
}
function FormProvider(props) {
  var forms = (0, import_react2.useContext)(Form);
  var context = getWrappedFormContext(props.context);
  var value = (0, import_react2.useMemo)(
    () => [context].concat(forms),
    // Put the latest form context first
    [forms, context]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form.Provider, {
    value,
    children: props.children
  });
}
function useSubjectRef() {
  var initialSubject = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var subjectRef = (0, import_react2.useRef)(initialSubject);
  subjectRef.current = initialSubject;
  return subjectRef;
}
function updateSubjectRef(ref, name, subject, scope) {
  if (subject === "status") {
    ref.current[subject] = true;
  } else {
    var _ref$current$subject$, _ref$current$subject;
    ref.current[subject] = _objectSpread2(_objectSpread2({}, ref.current[subject]), {}, {
      [scope]: ((_ref$current$subject$ = (_ref$current$subject = ref.current[subject]) === null || _ref$current$subject === void 0 ? void 0 : _ref$current$subject[scope]) !== null && _ref$current$subject$ !== void 0 ? _ref$current$subject$ : []).concat(name)
    });
  }
}
function getMetadata(formId, state, subjectRef) {
  var name = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
  var id = name ? "".concat(formId, "-").concat(name) : formId;
  return new Proxy({
    id,
    name,
    errorId: "".concat(id, "-error"),
    descriptionId: "".concat(id, "-description"),
    get initialValue() {
      return state.initialValue[name];
    },
    get value() {
      return state.value[name];
    },
    get errors() {
      return state.error[name];
    },
    get key() {
      return state.key[name];
    },
    get valid() {
      return state.valid[name];
    },
    get dirty() {
      return state.dirty[name];
    },
    get allErrors() {
      if (name === "") {
        return state.error;
      }
      var result = {};
      for (var [key, error] of Object.entries(state.error)) {
        if (isPrefix(key, name)) {
          result[key] = error;
        }
      }
      return result;
    },
    get getFieldset() {
      return () => new Proxy({}, {
        get(target, key, receiver) {
          if (typeof key === "string") {
            return getFieldMetadata(formId, state, subjectRef, name, key);
          }
          return Reflect.get(target, key, receiver);
        }
      });
    }
  }, {
    get(target, key, receiver) {
      switch (key) {
        case "key":
        case "initialValue":
        case "value":
        case "valid":
        case "dirty":
          updateSubjectRef(subjectRef, name, key, "name");
          break;
        case "errors":
        case "allErrors":
          updateSubjectRef(subjectRef, name, "error", key === "errors" ? "name" : "prefix");
          break;
      }
      return Reflect.get(target, key, receiver);
    }
  });
}
function getFieldMetadata(formId, state, subjectRef) {
  var prefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
  var key = arguments.length > 4 ? arguments[4] : void 0;
  var name = typeof key === "undefined" ? prefix : formatPaths([...getPaths(prefix), key]);
  var metadata = getMetadata(formId, state, subjectRef, name);
  return new Proxy({}, {
    get(_, key2, receiver) {
      var _state$constraint$nam;
      switch (key2) {
        case "formId":
          return formId;
        case "required":
        case "minLength":
        case "maxLength":
        case "min":
        case "max":
        case "pattern":
        case "step":
        case "multiple":
          return (_state$constraint$nam = state.constraint[name]) === null || _state$constraint$nam === void 0 ? void 0 : _state$constraint$nam[key2];
        case "getFieldList": {
          return () => {
            var _state$initialValue$n;
            var initialValue = (_state$initialValue$n = state.initialValue[name]) !== null && _state$initialValue$n !== void 0 ? _state$initialValue$n : [];
            updateSubjectRef(subjectRef, name, "initialValue", "name");
            if (!Array.isArray(initialValue)) {
              throw new Error("The initial value at the given name is not a list");
            }
            return Array(initialValue.length).fill(0).map((_2, index) => getFieldMetadata(formId, state, subjectRef, name, index));
          };
        }
      }
      return Reflect.get(metadata, key2, receiver);
    }
  });
}
function getFormMetadata(formId, state, subjectRef, context, noValidate) {
  var metadata = getMetadata(formId, state, subjectRef);
  return new Proxy({}, {
    get(_, key, receiver) {
      switch (key) {
        case "context":
          return {
            [wrappedSymbol]: context
          };
        case "status":
          return state.submissionStatus;
        case "validate":
        case "update":
        case "reset":
        case "insert":
        case "remove":
        case "reorder":
          return context[key];
        case "onSubmit":
          return context.submit;
        case "noValidate":
          return noValidate;
      }
      return Reflect.get(metadata, key, receiver);
    }
  });
}
function createFormContext2(options) {
  var {
    onSubmit
  } = options, rest = _objectWithoutProperties(options, _excluded);
  var context = createFormContext(rest);
  return _objectSpread2(_objectSpread2({}, context), {}, {
    submit(event) {
      var submitEvent = event.nativeEvent;
      var result = context.submit(submitEvent);
      if (result.submission && result.submission.status !== "success" && result.submission.error !== null) {
        event.preventDefault();
      } else {
        var _onSubmit;
        (_onSubmit = onSubmit) === null || _onSubmit === void 0 || _onSubmit(event, result);
      }
    },
    onUpdate(options2) {
      onSubmit = options2.onSubmit;
      context.onUpdate(options2);
    }
  });
}

// node_modules/@conform-to/react/hooks.mjs
var _excluded2 = ["id"];
var useSafeLayoutEffect = typeof document === "undefined" ? import_react3.useEffect : import_react3.useLayoutEffect;
function useFormId(preferredId) {
  var id = (0, import_react3.useId)();
  return preferredId !== null && preferredId !== void 0 ? preferredId : id;
}
function useNoValidate() {
  var defaultNoValidate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  var [noValidate, setNoValidate] = (0, import_react3.useState)(defaultNoValidate);
  useSafeLayoutEffect(() => {
    if (!noValidate) {
      setNoValidate(true);
    }
  }, [noValidate]);
  return noValidate;
}
function useForm(options) {
  var {
    id
  } = options, formConfig = _objectWithoutProperties(options, _excluded2);
  var formId = useFormId(id);
  var [context] = (0, import_react3.useState)(() => createFormContext2(_objectSpread2(_objectSpread2({}, formConfig), {}, {
    formId
  })));
  useSafeLayoutEffect(() => {
    document.addEventListener("input", context.onInput);
    document.addEventListener("focusout", context.onBlur);
    document.addEventListener("reset", context.onReset);
    return () => {
      document.removeEventListener("input", context.onInput);
      document.removeEventListener("focusout", context.onBlur);
      document.removeEventListener("reset", context.onReset);
    };
  }, [context]);
  useSafeLayoutEffect(() => {
    context.onUpdate(_objectSpread2(_objectSpread2({}, formConfig), {}, {
      formId
    }));
  });
  var subjectRef = useSubjectRef();
  var state = useFormState(context, subjectRef);
  var noValidate = useNoValidate(options.defaultNoValidate);
  var form = getFormMetadata(formId, state, subjectRef, context, noValidate);
  return [form, form.getFieldset()];
}

// node_modules/@conform-to/react/helpers.mjs
function simplify(props) {
  for (var key in props) {
    if (props[key] === void 0) {
      delete props[key];
    }
  }
  return props;
}
function getAriaAttributes(metadata) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof options.ariaAttributes !== "undefined" && !options.ariaAttributes) {
    return {};
  }
  var invalid = options.ariaInvalid === "allErrors" ? !metadata.valid : typeof metadata.errors !== "undefined";
  var ariaDescribedBy = options.ariaDescribedBy;
  return simplify({
    "aria-invalid": invalid || void 0,
    "aria-describedby": invalid ? "".concat(metadata.errorId, " ").concat(ariaDescribedBy !== null && ariaDescribedBy !== void 0 ? ariaDescribedBy : "").trim() : ariaDescribedBy
  });
}
function getFormProps(metadata, options) {
  return simplify(_objectSpread2({
    id: metadata.id,
    onSubmit: metadata.onSubmit,
    noValidate: metadata.noValidate
  }, getAriaAttributes(metadata, options)));
}
function getFieldsetProps(metadata, options) {
  return simplify(_objectSpread2({
    id: metadata.id,
    name: metadata.name,
    form: metadata.formId
  }, getAriaAttributes(metadata, options)));
}
function getFormControlProps(metadata, options) {
  return simplify(_objectSpread2({
    key: metadata.key,
    required: metadata.required || void 0
  }, getFieldsetProps(metadata, options)));
}
function getInputProps(metadata, options) {
  var props = _objectSpread2(_objectSpread2({}, getFormControlProps(metadata, options)), {}, {
    type: options.type,
    minLength: metadata.minLength,
    maxLength: metadata.maxLength,
    min: metadata.min,
    max: metadata.max,
    step: metadata.step,
    pattern: metadata.pattern,
    multiple: metadata.multiple
  });
  if (typeof options.value === "undefined" || options.value) {
    if (options.type === "checkbox" || options.type === "radio") {
      props.value = typeof options.value === "string" ? options.value : "on";
      props.defaultChecked = typeof metadata.initialValue === "boolean" ? metadata.initialValue : metadata.initialValue === props.value;
    } else if (typeof metadata.initialValue === "string") {
      props.defaultValue = metadata.initialValue;
    }
  }
  return simplify(props);
}
function getCollectionProps(metadata, options) {
  return options.options.map((value) => {
    var _metadata$key;
    return simplify(_objectSpread2(_objectSpread2({}, getFormControlProps(metadata, options)), {}, {
      key: "".concat((_metadata$key = metadata.key) !== null && _metadata$key !== void 0 ? _metadata$key : "").concat(value),
      id: "".concat(metadata.id, "-").concat(value),
      type: options.type,
      value,
      defaultChecked: typeof options.value === "undefined" || options.value ? options.type === "checkbox" && Array.isArray(metadata.initialValue) ? metadata.initialValue.includes(value) : metadata.initialValue === value : void 0,
      // The required attribute doesn't make sense for checkbox group
      // As it would require all checkboxes to be checked instead of at least one
      // It is overriden with `undefiend` so it could be cleaned up properly
      required: options.type === "checkbox" ? void 0 : metadata.required
    }));
  });
}

// node_modules/@conform-to/react/integrations.mjs
var import_react4 = __toESM(require_react(), 1);
function getFieldElement(formId, name) {
  var _document$forms$named;
  var match = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : () => true;
  var element = (_document$forms$named = document.forms.namedItem(formId)) === null || _document$forms$named === void 0 ? void 0 : _document$forms$named.elements.namedItem(name);
  if (element) {
    var items = element instanceof Element ? [element] : Array.from(element.values());
    for (var item of items) {
      if (isFieldElement(item) && match(item)) {
        return item;
      }
    }
  }
  return null;
}
function getEventTarget(formId, name) {
  var element = getFieldElement(formId, name);
  if (element) {
    return element;
  }
  var form = document.forms.namedItem(formId);
  var input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  form === null || form === void 0 || form.appendChild(input);
  return input;
}
function useInputControl(metaOrOptions) {
  var eventDispatched = (0, import_react4.useRef)({
    change: false,
    focus: false,
    blur: false
  });
  var [key, setKey] = (0, import_react4.useState)(metaOrOptions.key);
  var [value, setValue] = (0, import_react4.useState)(() => metaOrOptions.initialValue);
  if (key !== metaOrOptions.key) {
    setValue(metaOrOptions.initialValue);
    setKey(metaOrOptions.key);
  }
  (0, import_react4.useEffect)(() => {
    var createEventListener = (listener) => {
      return (event) => {
        var element = getFieldElement(metaOrOptions.formId, metaOrOptions.name, (element2) => element2 === event.target);
        if (element) {
          eventDispatched.current[listener] = true;
        }
      };
    };
    var inputHandler = createEventListener("change");
    var focusHandler = createEventListener("focus");
    var blurHandler = createEventListener("blur");
    document.addEventListener("input", inputHandler, true);
    document.addEventListener("focusin", focusHandler, true);
    document.addEventListener("focusout", blurHandler, true);
    return () => {
      document.removeEventListener("input", inputHandler, true);
      document.removeEventListener("focusin", focusHandler, true);
      document.removeEventListener("focusout", blurHandler, true);
    };
  }, [metaOrOptions.formId, metaOrOptions.name]);
  var handlers = (0, import_react4.useMemo)(() => {
    return {
      change(value2) {
        if (!eventDispatched.current.change) {
          var _element = getEventTarget(metaOrOptions.formId, metaOrOptions.name);
          eventDispatched.current.change = true;
          if (_element instanceof HTMLInputElement && (_element.type === "checkbox" || _element.type === "radio")) {
            _element.checked = _element.value === value2;
          } else if (_element.value !== value2) {
            var {
              set: valueSetter
            } = Object.getOwnPropertyDescriptor(_element, "value") || {};
            var prototype = Object.getPrototypeOf(_element);
            var {
              set: prototypeValueSetter
            } = Object.getOwnPropertyDescriptor(prototype, "value") || {};
            if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
              prototypeValueSetter.call(_element, value2);
            } else {
              if (valueSetter) {
                valueSetter.call(_element, value2);
              } else {
                throw new Error("The given element does not have a value setter");
              }
            }
          }
          _element.dispatchEvent(new InputEvent("input", {
            bubbles: true
          }));
          _element.dispatchEvent(new Event("change", {
            bubbles: true
          }));
        }
        setValue(value2);
        eventDispatched.current.change = false;
      },
      focus() {
        if (!eventDispatched.current.focus) {
          var _element2 = getEventTarget(metaOrOptions.formId, metaOrOptions.name);
          eventDispatched.current.focus = true;
          _element2.dispatchEvent(new FocusEvent("focusin", {
            bubbles: true
          }));
          _element2.dispatchEvent(new FocusEvent("focus"));
        }
        eventDispatched.current.focus = false;
      },
      blur() {
        if (!eventDispatched.current.blur) {
          var _element3 = getEventTarget(metaOrOptions.formId, metaOrOptions.name);
          eventDispatched.current.blur = true;
          _element3.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true
          }));
          _element3.dispatchEvent(new FocusEvent("blur"));
        }
        eventDispatched.current.blur = false;
      }
    };
  }, [metaOrOptions.formId, metaOrOptions.name]);
  return _objectSpread2(_objectSpread2({}, handlers), {}, {
    value
  });
}

// app/shared/ui/Forms/Forms.tsx
var import_react8 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react5.useRef)({
    value,
    previous: value
  });
  return (0, import_react5.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var $e698a72e93240346$var$CHECKBOX_NAME = "Checkbox";
var [$e698a72e93240346$var$createCheckboxContext, $e698a72e93240346$export$b566c4ff5488ea01] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($e698a72e93240346$var$CHECKBOX_NAME);
var [$e698a72e93240346$var$CheckboxProvider, $e698a72e93240346$var$useCheckboxContext] = $e698a72e93240346$var$createCheckboxContext($e698a72e93240346$var$CHECKBOX_NAME);
var $e698a72e93240346$export$48513f6b9f8ce62d = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...checkboxProps } = props;
  const [button, setButton] = (0, import_react6.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react6.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  const initialCheckedStateRef = (0, import_react6.useRef)(checked);
  (0, import_react6.useEffect)(() => {
    const form = button === null || button === void 0 ? void 0 : button.form;
    if (form) {
      const reset = () => setChecked(initialCheckedStateRef.current);
      form.addEventListener("reset", reset);
      return () => form.removeEventListener("reset", reset);
    }
  }, [
    button,
    setChecked
  ]);
  return /* @__PURE__ */ (0, import_react6.createElement)($e698a72e93240346$var$CheckboxProvider, {
    scope: __scopeCheckbox,
    state: checked,
    disabled
  }, /* @__PURE__ */ (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": $e698a72e93240346$var$isIndeterminate(checked) ? "mixed" : checked,
    "aria-required": required,
    "data-state": $e698a72e93240346$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, checkboxProps, {
    ref: composedRefs,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => $e698a72e93240346$var$isIndeterminate(prevChecked) ? true : !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ (0, import_react6.createElement)($e698a72e93240346$var$BubbleInput, {
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
var $e698a72e93240346$var$INDICATOR_NAME = "CheckboxIndicator";
var $e698a72e93240346$export$59aad738f51d1c05 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
  const context = $e698a72e93240346$var$useCheckboxContext($e698a72e93240346$var$INDICATOR_NAME, __scopeCheckbox);
  return /* @__PURE__ */ (0, import_react6.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $e698a72e93240346$var$isIndeterminate(context.state) || context.state === true
  }, /* @__PURE__ */ (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $e698a72e93240346$var$getState(context.state),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      pointerEvents: "none",
      ...props.style
    }
  })));
});
var $e698a72e93240346$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react6.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react6.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      input.indeterminate = $e698a72e93240346$var$isIndeterminate(checked);
      setChecked.call(input, $e698a72e93240346$var$isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ (0, import_react6.createElement)("input", _extends({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: $e698a72e93240346$var$isIndeterminate(checked) ? false : checked
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
function $e698a72e93240346$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $e698a72e93240346$var$getState(checked) {
  return $e698a72e93240346$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var $e698a72e93240346$export$be92b6f5f03c0fe9 = $e698a72e93240346$export$48513f6b9f8ce62d;
var $e698a72e93240346$export$adb584737d712b70 = $e698a72e93240346$export$59aad738f51d1c05;

// app/shared/ui/Checkbox/Checkbox.tsx
var React3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Checkbox/Checkbox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Checkbox/Checkbox.tsx"
  );
  import.meta.hot.lastModified = "1706588338080.921";
}
var Checkbox = React3.forwardRef(_c4 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($e698a72e93240346$export$be92b6f5f03c0fe9, { ref, className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($e698a72e93240346$export$adb584737d712b70, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { name: "check" }, void 0, false, {
  fileName: "app/shared/ui/Checkbox/Checkbox.tsx",
  lineNumber: 30,
  columnNumber: 4
}, this) }, void 0, false, {
  fileName: "app/shared/ui/Checkbox/Checkbox.tsx",
  lineNumber: 29,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/shared/ui/Checkbox/Checkbox.tsx",
  lineNumber: 28,
  columnNumber: 12
}, this));
_c23 = Checkbox;
Checkbox.displayName = $e698a72e93240346$export$be92b6f5f03c0fe9.displayName;
var _c4;
var _c23;
$RefreshReg$(_c4, "Checkbox$React.forwardRef");
$RefreshReg$(_c23, "Checkbox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/shared/ui/Textarea/Textarea.tsx
var React4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Textarea/Textarea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Textarea/Textarea.tsx"
  );
  import.meta.hot.lastModified = "1706588338084.2678";
}
var Textarea = React4.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("textarea", { className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ref, ...props }, void 0, false, {
    fileName: "app/shared/ui/Textarea/Textarea.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
});
_c24 = Textarea;
Textarea.displayName = "Textarea";
var _c5;
var _c24;
$RefreshReg$(_c5, "Textarea$React.forwardRef");
$RefreshReg$(_c24, "Textarea");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/shared/ui/Forms/Forms.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Forms/Forms.tsx"' + id);
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
    "app/shared/ui/Forms/Forms.tsx"
  );
  import.meta.hot.lastModified = "1706962583489.1309";
}
function ErrorList({
  id,
  errors
}) {
  const errorsToRender = errors?.filter(Boolean);
  if (!errorsToRender?.length)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { id, className: "flex flex-col gap-1", children: errorsToRender.map((e) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "text-[10px] text-foreground-destructive", children: e }, e, false, {
    fileName: "app/shared/ui/Forms/Forms.tsx",
    lineNumber: 37,
    columnNumber: 29
  }, this)) }, void 0, false, {
    fileName: "app/shared/ui/Forms/Forms.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c6 = ErrorList;
function Field({
  labelProps,
  inputProps,
  errors,
  className
}) {
  _s();
  const fallbackId = (0, import_react8.useId)();
  const id = inputProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { htmlFor: id, ...labelProps }, void 0, false, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 54,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { id, "aria-invalid": errorId ? true : void 0, "aria-describedby": errorId, ...inputProps }, void 0, false, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 55,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: errorId ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorList, { id: errorId, errors }, void 0, false, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 57,
      columnNumber: 16
    }, this) : null }, void 0, false, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 56,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/shared/ui/Forms/Forms.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(Field, "i2GpmVP4tZRTGa8NQ93f/KVTRgI=", false, function() {
  return [import_react8.useId];
});
_c25 = Field;
function TextareaField({
  labelProps,
  textareaProps,
  errors,
  className
}) {
  _s2();
  const fallbackId = (0, import_react8.useId)();
  const id = textareaProps.id ?? textareaProps.name ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { htmlFor: id, ...labelProps }, void 0, false, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 76,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Textarea, { id, "aria-invalid": errorId ? true : void 0, "aria-describedby": errorId, ...textareaProps }, void 0, false, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 77,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: errorId ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorList, { id: errorId, errors }, void 0, false, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 79,
      columnNumber: 16
    }, this) : null }, void 0, false, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 78,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/shared/ui/Forms/Forms.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_s2(TextareaField, "i2GpmVP4tZRTGa8NQ93f/KVTRgI=", false, function() {
  return [import_react8.useId];
});
_c32 = TextareaField;
function CheckboxField({
  labelProps,
  buttonProps,
  errors,
  className
}) {
  _s3();
  const {
    key,
    defaultChecked,
    ...checkboxProps
  } = buttonProps;
  const fallbackId = (0, import_react8.useId)();
  const checkedValue = buttonProps.value ?? "on";
  const input = useInputControl({
    key,
    name: buttonProps.name,
    formId: buttonProps.form,
    initialValue: defaultChecked ? checkedValue : void 0
  });
  const id = buttonProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Checkbox, { ...checkboxProps, id, "aria-invalid": errorId ? true : void 0, "aria-describedby": errorId, checked: input.value === checkedValue, onCheckedChange: (state) => {
        input.change(state.valueOf() ? checkedValue : "");
        buttonProps.onCheckedChange?.(state);
      }, onFocus: (event) => {
        input.focus();
        buttonProps.onFocus?.(event);
      }, onBlur: (event) => {
        input.blur();
        buttonProps.onBlur?.(event);
      }, type: "button" }, void 0, false, {
        fileName: "app/shared/ui/Forms/Forms.tsx",
        lineNumber: 111,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: id, ...labelProps, className: "self-center text-body-xs text-muted-foreground" }, void 0, false, {
        fileName: "app/shared/ui/Forms/Forms.tsx",
        lineNumber: 121,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 110,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-4 pb-3 pt-1", children: errorId ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorList, { id: errorId, errors }, void 0, false, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 124,
      columnNumber: 16
    }, this) : null }, void 0, false, {
      fileName: "app/shared/ui/Forms/Forms.tsx",
      lineNumber: 123,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/shared/ui/Forms/Forms.tsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s3(CheckboxField, "bvQxwa8UFrmFr+rQ7VsNBcCfGxQ=", false, function() {
  return [import_react8.useId, useInputControl];
});
_c42 = CheckboxField;
var _c6;
var _c25;
var _c32;
var _c42;
$RefreshReg$(_c6, "ErrorList");
$RefreshReg$(_c25, "Field");
$RefreshReg$(_c32, "TextareaField");
$RefreshReg$(_c42, "CheckboxField");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Input,
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  Label,
  FormProvider,
  useForm,
  useInputControl,
  getFormProps,
  getFieldsetProps,
  getInputProps,
  getCollectionProps,
  ErrorList,
  Field,
  CheckboxField
};
//# sourceMappingURL=/build/_shared/chunk-JBR5K2OT.js.map
