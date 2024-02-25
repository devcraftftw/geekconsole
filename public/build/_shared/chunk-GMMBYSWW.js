import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  constructFrom,
  differenceInCalendarDays,
  enUS,
  format,
  getDefaultOptions,
  getISOWeek,
  getTimezoneOffsetInMilliseconds,
  getWeek,
  isDate,
  millisecondsInWeek,
  startOfDay,
  startOfISOWeek,
  startOfWeek,
  startOfYear,
  toDate
} from "/build/_shared/chunk-KA2PX4QT.js";
import {
  require_cuid2
} from "/build/_shared/chunk-FERROO4A.js";
import {
  HoneypotInputs
} from "/build/_shared/chunk-6NMOG26R.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_dist
} from "/build/_shared/chunk-3FDTPL7P.js";
import {
  ErrorList,
  Field,
  Label,
  getFormProps,
  getInputProps,
  useForm,
  useInputControl
} from "/build/_shared/chunk-JBR5K2OT.js";
import {
  Button,
  buttonVariants
} from "/build/_shared/chunk-ZGF5TUXK.js";
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
  cn,
  isIsoDate
} from "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate
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

// app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx
var import_cuid2 = __toESM(require_cuid2(), 1);
var import_node = __toESM(require_node(), 1);

// node_modules/date-fns/addDays.mjs
function addDays(date, amount) {
  const _date = toDate(date);
  if (isNaN(amount))
    return constructFrom(date, NaN);
  if (!amount) {
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// node_modules/date-fns/addMonths.mjs
function addMonths(date, amount) {
  const _date = toDate(date);
  if (isNaN(amount))
    return constructFrom(date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/date-fns/addWeeks.mjs
function addWeeks(date, amount) {
  const days = amount * 7;
  return addDays(date, days);
}

// node_modules/date-fns/addYears.mjs
function addYears(date, amount) {
  return addMonths(date, amount * 12);
}

// node_modules/date-fns/max.mjs
function max(dates) {
  let result;
  dates.forEach(function(dirtyDate) {
    const currentDate = toDate(dirtyDate);
    if (result === void 0 || result < currentDate || isNaN(Number(currentDate))) {
      result = currentDate;
    }
  });
  return result || /* @__PURE__ */ new Date(NaN);
}

// node_modules/date-fns/min.mjs
function min(dates) {
  let result;
  dates.forEach((dirtyDate) => {
    const date = toDate(dirtyDate);
    if (!result || result > date || isNaN(+date)) {
      result = date;
    }
  });
  return result || /* @__PURE__ */ new Date(NaN);
}

// node_modules/date-fns/isSameDay.mjs
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = startOfDay(dateLeft);
  const dateRightStartOfDay = startOfDay(dateRight);
  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// node_modules/date-fns/differenceInCalendarMonths.mjs
function differenceInCalendarMonths(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
  const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

// node_modules/date-fns/differenceInCalendarWeeks.mjs
function differenceInCalendarWeeks(dateLeft, dateRight, options) {
  const startOfWeekLeft = startOfWeek(dateLeft, options);
  const startOfWeekRight = startOfWeek(dateRight, options);
  const timestampLeft = +startOfWeekLeft - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
  const timestampRight = +startOfWeekRight - getTimezoneOffsetInMilliseconds(startOfWeekRight);
  return Math.round((timestampLeft - timestampRight) / millisecondsInWeek);
}

// node_modules/date-fns/endOfMonth.mjs
function endOfMonth(date) {
  const _date = toDate(date);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/startOfMonth.mjs
function startOfMonth(date) {
  const _date = toDate(date);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/endOfWeek.mjs
function endOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/endOfISOWeek.mjs
function endOfISOWeek(date) {
  return endOfWeek(date, { weekStartsOn: 1 });
}

// node_modules/date-fns/getDaysInMonth.mjs
function getDaysInMonth(date) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth2 = constructFrom(date, 0);
  lastDayOfMonth2.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth2.setHours(0, 0, 0, 0);
  return lastDayOfMonth2.getDate();
}

// node_modules/date-fns/getUnixTime.mjs
function getUnixTime(date) {
  return Math.trunc(+toDate(date) / 1e3);
}

// node_modules/date-fns/lastDayOfMonth.mjs
function lastDayOfMonth(date) {
  const _date = toDate(date);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/getWeeksInMonth.mjs
function getWeeksInMonth(date, options) {
  return differenceInCalendarWeeks(
    lastDayOfMonth(date),
    startOfMonth(date),
    options
  ) + 1;
}

// node_modules/date-fns/isAfter.mjs
function isAfter(date, dateToCompare) {
  const _date = toDate(date);
  const _dateToCompare = toDate(dateToCompare);
  return _date.getTime() > _dateToCompare.getTime();
}

// node_modules/date-fns/isBefore.mjs
function isBefore(date, dateToCompare) {
  const _date = toDate(date);
  const _dateToCompare = toDate(dateToCompare);
  return +_date < +_dateToCompare;
}

// node_modules/date-fns/isSameMonth.mjs
function isSameMonth(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  return _dateLeft.getFullYear() === _dateRight.getFullYear() && _dateLeft.getMonth() === _dateRight.getMonth();
}

// node_modules/date-fns/isSameYear.mjs
function isSameYear(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  return _dateLeft.getFullYear() === _dateRight.getFullYear();
}

// node_modules/date-fns/subDays.mjs
function subDays(date, amount) {
  return addDays(date, -amount);
}

// node_modules/date-fns/setMonth.mjs
function setMonth(date, month) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const dateWithDesiredMonth = constructFrom(date, 0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}

// node_modules/date-fns/setYear.mjs
function setYear(date, year) {
  const _date = toDate(date);
  if (isNaN(+_date)) {
    return constructFrom(date, NaN);
  }
  _date.setFullYear(year);
  return _date;
}

// app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx
var import_react4 = __toESM(require_react(), 1);
var import_spin_delay = __toESM(require_dist(), 1);

// node_modules/react-day-picker/dist/index.esm.js
var import_react = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_development = {};
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development)
    return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  if (true) {
    (function() {
      var React = import_react.default;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format2) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format2, args);
          }
        }
      }
      function printWarning(level, format2, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format2 += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format2);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var assign = Object.assign;
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              c--;
            }
            for (; s >= 1 && c >= 0; s--, c--) {
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--;
                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      var didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type,
          key,
          ref,
          props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function jsxDEV3(type, config, maybeKey, source, self) {
        {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          if (maybeKey !== void 0) {
            {
              checkKeyStringCoercion(maybeKey);
            }
            key = "" + maybeKey;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function isValidElement(object) {
        {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === void 0 || typeof type === "string") {
            return;
          }
          var propTypes;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
      }
      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV3(type, props, key, source, self);
          if (element == null) {
            return element;
          }
          if (validType) {
            var children = props.children;
            if (children !== void 0) {
              if (isStaticChildren) {
                if (isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }
                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
      }
      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }
      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }
      var jsx = jsxWithValidationDynamic;
      var jsxs = jsxWithValidationStatic;
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = jsx;
      reactJsxRuntime_development.jsxs = jsxs;
    })();
  }
  return reactJsxRuntime_development;
}
if (false) {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}
var jsxRuntimeExports = jsxRuntime.exports;
function isDayPickerMultiple(props) {
  return props.mode === "multiple";
}
function isDayPickerRange(props) {
  return props.mode === "range";
}
function isDayPickerSingle(props) {
  return props.mode === "single";
}
var defaultClassNames = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function formatCaption(month, options) {
  return format(month, "LLLL y", options);
}
function formatDay(day, options) {
  return format(day, "d", options);
}
function formatMonthCaption(month, options) {
  return format(month, "LLLL", options);
}
function formatWeekNumber(weekNumber) {
  return "".concat(weekNumber);
}
function formatWeekdayName(weekday, options) {
  return format(weekday, "cccccc", options);
}
function formatYearCaption(year, options) {
  return format(year, "yyyy", options);
}
var formatters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption,
  formatDay,
  formatMonthCaption,
  formatWeekNumber,
  formatWeekdayName,
  formatYearCaption
});
var labelDay = function(day, activeModifiers, options) {
  return format(day, "do MMMM (EEEE)", options);
};
var labelMonthDropdown = function() {
  return "Month: ";
};
var labelNext = function() {
  return "Go to next month";
};
var labelPrevious = function() {
  return "Go to previous month";
};
var labelWeekday = function(day, options) {
  return format(day, "cccc", options);
};
var labelWeekNumber = function(n) {
  return "Week n. ".concat(n);
};
var labelYearDropdown = function() {
  return "Year: ";
};
var labels = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay,
  labelMonthDropdown,
  labelNext,
  labelPrevious,
  labelWeekNumber,
  labelWeekday,
  labelYearDropdown
});
function getDefaultContextValues() {
  var captionLayout = "buttons";
  var classNames = defaultClassNames;
  var locale = enUS;
  var modifiersClassNames = {};
  var modifiers = {};
  var numberOfMonths = 1;
  var styles = {};
  var today = /* @__PURE__ */ new Date();
  return {
    captionLayout,
    classNames,
    formatters,
    labels,
    locale,
    modifiersClassNames,
    modifiers,
    numberOfMonths,
    styles,
    today,
    mode: "default"
  };
}
function parseFromToProps(props) {
  var fromYear = props.fromYear, toYear = props.toYear, fromMonth = props.fromMonth, toMonth = props.toMonth;
  var fromDate = props.fromDate, toDate2 = props.toDate;
  if (fromMonth) {
    fromDate = startOfMonth(fromMonth);
  } else if (fromYear) {
    fromDate = new Date(fromYear, 0, 1);
  }
  if (toMonth) {
    toDate2 = endOfMonth(toMonth);
  } else if (toYear) {
    toDate2 = new Date(toYear, 11, 31);
  }
  return {
    fromDate: fromDate ? startOfDay(fromDate) : void 0,
    toDate: toDate2 ? startOfDay(toDate2) : void 0
  };
}
var DayPickerContext = (0, import_react.createContext)(void 0);
function DayPickerProvider(props) {
  var _a;
  var initialProps = props.initialProps;
  var defaultContextValues = getDefaultContextValues();
  var _b = parseFromToProps(initialProps), fromDate = _b.fromDate, toDate2 = _b.toDate;
  var captionLayout = (_a = initialProps.captionLayout) !== null && _a !== void 0 ? _a : defaultContextValues.captionLayout;
  if (captionLayout !== "buttons" && (!fromDate || !toDate2)) {
    captionLayout = "buttons";
  }
  var onSelect;
  if (isDayPickerSingle(initialProps) || isDayPickerMultiple(initialProps) || isDayPickerRange(initialProps)) {
    onSelect = initialProps.onSelect;
  }
  var value = __assign(__assign(__assign({}, defaultContextValues), initialProps), { captionLayout, classNames: __assign(__assign({}, defaultContextValues.classNames), initialProps.classNames), components: __assign({}, initialProps.components), formatters: __assign(__assign({}, defaultContextValues.formatters), initialProps.formatters), fromDate, labels: __assign(__assign({}, defaultContextValues.labels), initialProps.labels), mode: initialProps.mode || defaultContextValues.mode, modifiers: __assign(__assign({}, defaultContextValues.modifiers), initialProps.modifiers), modifiersClassNames: __assign(__assign({}, defaultContextValues.modifiersClassNames), initialProps.modifiersClassNames), onSelect, styles: __assign(__assign({}, defaultContextValues.styles), initialProps.styles), toDate: toDate2 });
  return jsxRuntimeExports.jsx(DayPickerContext.Provider, { value, children: props.children });
}
function useDayPicker() {
  var context = (0, import_react.useContext)(DayPickerContext);
  if (!context) {
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  }
  return context;
}
function CaptionLabel(props) {
  var _a = useDayPicker(), locale = _a.locale, classNames = _a.classNames, styles = _a.styles, formatCaption2 = _a.formatters.formatCaption;
  return jsxRuntimeExports.jsx("div", { className: classNames.caption_label, style: styles.caption_label, "aria-live": "polite", role: "presentation", id: props.id, children: formatCaption2(props.displayMonth, { locale }) });
}
function IconDropdown(props) {
  return jsxRuntimeExports.jsx("svg", __assign({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, props, { children: jsxRuntimeExports.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Dropdown(props) {
  var _a, _b;
  var onChange = props.onChange, value = props.value, children = props.children, caption = props.caption, className = props.className, style = props.style;
  var dayPicker = useDayPicker();
  var IconDropdownComponent = (_b = (_a = dayPicker.components) === null || _a === void 0 ? void 0 : _a.IconDropdown) !== null && _b !== void 0 ? _b : IconDropdown;
  return jsxRuntimeExports.jsxs("div", { className, style, children: [jsxRuntimeExports.jsx("span", { className: dayPicker.classNames.vhidden, children: props["aria-label"] }), jsxRuntimeExports.jsx("select", { name: props.name, "aria-label": props["aria-label"], className: dayPicker.classNames.dropdown, style: dayPicker.styles.dropdown, value, onChange, children }), jsxRuntimeExports.jsxs("div", { className: dayPicker.classNames.caption_label, style: dayPicker.styles.caption_label, "aria-hidden": "true", children: [caption, jsxRuntimeExports.jsx(IconDropdownComponent, { className: dayPicker.classNames.dropdown_icon, style: dayPicker.styles.dropdown_icon })] })] });
}
function MonthsDropdown(props) {
  var _a;
  var _b = useDayPicker(), fromDate = _b.fromDate, toDate2 = _b.toDate, styles = _b.styles, locale = _b.locale, formatMonthCaption2 = _b.formatters.formatMonthCaption, classNames = _b.classNames, components = _b.components, labelMonthDropdown2 = _b.labels.labelMonthDropdown;
  if (!fromDate)
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  if (!toDate2)
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  var dropdownMonths = [];
  if (isSameYear(fromDate, toDate2)) {
    var date = startOfMonth(fromDate);
    for (var month = fromDate.getMonth(); month <= toDate2.getMonth(); month++) {
      dropdownMonths.push(setMonth(date, month));
    }
  } else {
    var date = startOfMonth(/* @__PURE__ */ new Date());
    for (var month = 0; month <= 11; month++) {
      dropdownMonths.push(setMonth(date, month));
    }
  }
  var handleChange = function(e) {
    var selectedMonth = Number(e.target.value);
    var newMonth = setMonth(startOfMonth(props.displayMonth), selectedMonth);
    props.onChange(newMonth);
  };
  var DropdownComponent = (_a = components === null || components === void 0 ? void 0 : components.Dropdown) !== null && _a !== void 0 ? _a : Dropdown;
  return jsxRuntimeExports.jsx(DropdownComponent, { name: "months", "aria-label": labelMonthDropdown2(), className: classNames.dropdown_month, style: styles.dropdown_month, onChange: handleChange, value: props.displayMonth.getMonth(), caption: formatMonthCaption2(props.displayMonth, { locale }), children: dropdownMonths.map(function(m) {
    return jsxRuntimeExports.jsx("option", { value: m.getMonth(), children: formatMonthCaption2(m, { locale }) }, m.getMonth());
  }) });
}
function YearsDropdown(props) {
  var _a;
  var displayMonth = props.displayMonth;
  var _b = useDayPicker(), fromDate = _b.fromDate, toDate2 = _b.toDate, locale = _b.locale, styles = _b.styles, classNames = _b.classNames, components = _b.components, formatYearCaption2 = _b.formatters.formatYearCaption, labelYearDropdown2 = _b.labels.labelYearDropdown;
  var years = [];
  if (!fromDate)
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  if (!toDate2)
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  var fromYear = fromDate.getFullYear();
  var toYear = toDate2.getFullYear();
  for (var year = fromYear; year <= toYear; year++) {
    years.push(setYear(startOfYear(/* @__PURE__ */ new Date()), year));
  }
  var handleChange = function(e) {
    var newMonth = setYear(startOfMonth(displayMonth), Number(e.target.value));
    props.onChange(newMonth);
  };
  var DropdownComponent = (_a = components === null || components === void 0 ? void 0 : components.Dropdown) !== null && _a !== void 0 ? _a : Dropdown;
  return jsxRuntimeExports.jsx(DropdownComponent, { name: "years", "aria-label": labelYearDropdown2(), className: classNames.dropdown_year, style: styles.dropdown_year, onChange: handleChange, value: displayMonth.getFullYear(), caption: formatYearCaption2(displayMonth, { locale }), children: years.map(function(year2) {
    return jsxRuntimeExports.jsx("option", { value: year2.getFullYear(), children: formatYearCaption2(year2, { locale }) }, year2.getFullYear());
  }) });
}
function useControlledValue(defaultValue, controlledValue) {
  var _a = (0, import_react.useState)(defaultValue), uncontrolledValue = _a[0], setValue = _a[1];
  var value = controlledValue === void 0 ? uncontrolledValue : controlledValue;
  return [value, setValue];
}
function getInitialMonth(context) {
  var month = context.month, defaultMonth = context.defaultMonth, today = context.today;
  var initialMonth = month || defaultMonth || today || /* @__PURE__ */ new Date();
  var toDate2 = context.toDate, fromDate = context.fromDate, _a = context.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
  if (toDate2 && differenceInCalendarMonths(toDate2, initialMonth) < 0) {
    var offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(toDate2, offset);
  }
  if (fromDate && differenceInCalendarMonths(initialMonth, fromDate) < 0) {
    initialMonth = fromDate;
  }
  return startOfMonth(initialMonth);
}
function useNavigationState() {
  var context = useDayPicker();
  var initialMonth = getInitialMonth(context);
  var _a = useControlledValue(initialMonth, context.month), month = _a[0], setMonth2 = _a[1];
  var goToMonth = function(date) {
    var _a2;
    if (context.disableNavigation)
      return;
    var month2 = startOfMonth(date);
    setMonth2(month2);
    (_a2 = context.onMonthChange) === null || _a2 === void 0 ? void 0 : _a2.call(context, month2);
  };
  return [month, goToMonth];
}
function getDisplayMonths(month, _a) {
  var reverseMonths = _a.reverseMonths, numberOfMonths = _a.numberOfMonths;
  var start = startOfMonth(month);
  var end = startOfMonth(addMonths(start, numberOfMonths));
  var monthsDiff = differenceInCalendarMonths(end, start);
  var months = [];
  for (var i = 0; i < monthsDiff; i++) {
    var nextMonth = addMonths(start, i);
    months.push(nextMonth);
  }
  if (reverseMonths)
    months = months.reverse();
  return months;
}
function getNextMonth(startingMonth, options) {
  if (options.disableNavigation) {
    return void 0;
  }
  var toDate2 = options.toDate, pagedNavigation = options.pagedNavigation, _a = options.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
  var offset = pagedNavigation ? numberOfMonths : 1;
  var month = startOfMonth(startingMonth);
  if (!toDate2) {
    return addMonths(month, offset);
  }
  var monthsDiff = differenceInCalendarMonths(toDate2, startingMonth);
  if (monthsDiff < numberOfMonths) {
    return void 0;
  }
  return addMonths(month, offset);
}
function getPreviousMonth(startingMonth, options) {
  if (options.disableNavigation) {
    return void 0;
  }
  var fromDate = options.fromDate, pagedNavigation = options.pagedNavigation, _a = options.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
  var offset = pagedNavigation ? numberOfMonths : 1;
  var month = startOfMonth(startingMonth);
  if (!fromDate) {
    return addMonths(month, -offset);
  }
  var monthsDiff = differenceInCalendarMonths(month, fromDate);
  if (monthsDiff <= 0) {
    return void 0;
  }
  return addMonths(month, -offset);
}
var NavigationContext = (0, import_react.createContext)(void 0);
function NavigationProvider(props) {
  var dayPicker = useDayPicker();
  var _a = useNavigationState(), currentMonth = _a[0], goToMonth = _a[1];
  var displayMonths = getDisplayMonths(currentMonth, dayPicker);
  var nextMonth = getNextMonth(currentMonth, dayPicker);
  var previousMonth = getPreviousMonth(currentMonth, dayPicker);
  var isDateDisplayed = function(date) {
    return displayMonths.some(function(displayMonth) {
      return isSameMonth(date, displayMonth);
    });
  };
  var goToDate = function(date, refDate) {
    if (isDateDisplayed(date)) {
      return;
    }
    if (refDate && isBefore(date, refDate)) {
      goToMonth(addMonths(date, 1 + dayPicker.numberOfMonths * -1));
    } else {
      goToMonth(date);
    }
  };
  var value = {
    currentMonth,
    displayMonths,
    goToMonth,
    goToDate,
    previousMonth,
    nextMonth,
    isDateDisplayed
  };
  return jsxRuntimeExports.jsx(NavigationContext.Provider, { value, children: props.children });
}
function useNavigation() {
  var context = (0, import_react.useContext)(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
function CaptionDropdowns(props) {
  var _a;
  var _b = useDayPicker(), classNames = _b.classNames, styles = _b.styles, components = _b.components;
  var goToMonth = useNavigation().goToMonth;
  var handleMonthChange = function(newMonth) {
    goToMonth(addMonths(newMonth, props.displayIndex ? -props.displayIndex : 0));
  };
  var CaptionLabelComponent = (_a = components === null || components === void 0 ? void 0 : components.CaptionLabel) !== null && _a !== void 0 ? _a : CaptionLabel;
  var captionLabel = jsxRuntimeExports.jsx(CaptionLabelComponent, { id: props.id, displayMonth: props.displayMonth });
  return jsxRuntimeExports.jsxs("div", { className: classNames.caption_dropdowns, style: styles.caption_dropdowns, children: [jsxRuntimeExports.jsx("div", { className: classNames.vhidden, children: captionLabel }), jsxRuntimeExports.jsx(MonthsDropdown, { onChange: handleMonthChange, displayMonth: props.displayMonth }), jsxRuntimeExports.jsx(YearsDropdown, { onChange: handleMonthChange, displayMonth: props.displayMonth })] });
}
function IconLeft(props) {
  return jsxRuntimeExports.jsx("svg", __assign({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, props, { children: jsxRuntimeExports.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function IconRight(props) {
  return jsxRuntimeExports.jsx("svg", __assign({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, props, { children: jsxRuntimeExports.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Button2 = (0, import_react.forwardRef)(function(props, ref) {
  var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles;
  var classNamesArr = [classNames.button_reset, classNames.button];
  if (props.className) {
    classNamesArr.push(props.className);
  }
  var className = classNamesArr.join(" ");
  var style = __assign(__assign({}, styles.button_reset), styles.button);
  if (props.style) {
    Object.assign(style, props.style);
  }
  return jsxRuntimeExports.jsx("button", __assign({}, props, { ref, type: "button", className, style }));
});
function Navigation(props) {
  var _a, _b;
  var _c4 = useDayPicker(), dir = _c4.dir, locale = _c4.locale, classNames = _c4.classNames, styles = _c4.styles, _d = _c4.labels, labelPrevious2 = _d.labelPrevious, labelNext2 = _d.labelNext, components = _c4.components;
  if (!props.nextMonth && !props.previousMonth) {
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  }
  var previousLabel = labelPrevious2(props.previousMonth, { locale });
  var previousClassName = [
    classNames.nav_button,
    classNames.nav_button_previous
  ].join(" ");
  var nextLabel = labelNext2(props.nextMonth, { locale });
  var nextClassName = [
    classNames.nav_button,
    classNames.nav_button_next
  ].join(" ");
  var IconRightComponent = (_a = components === null || components === void 0 ? void 0 : components.IconRight) !== null && _a !== void 0 ? _a : IconRight;
  var IconLeftComponent = (_b = components === null || components === void 0 ? void 0 : components.IconLeft) !== null && _b !== void 0 ? _b : IconLeft;
  return jsxRuntimeExports.jsxs("div", { className: classNames.nav, style: styles.nav, children: [!props.hidePrevious && jsxRuntimeExports.jsx(Button2, { name: "previous-month", "aria-label": previousLabel, className: previousClassName, style: styles.nav_button_previous, disabled: !props.previousMonth, onClick: props.onPreviousClick, children: dir === "rtl" ? jsxRuntimeExports.jsx(IconRightComponent, { className: classNames.nav_icon, style: styles.nav_icon }) : jsxRuntimeExports.jsx(IconLeftComponent, { className: classNames.nav_icon, style: styles.nav_icon }) }), !props.hideNext && jsxRuntimeExports.jsx(Button2, { name: "next-month", "aria-label": nextLabel, className: nextClassName, style: styles.nav_button_next, disabled: !props.nextMonth, onClick: props.onNextClick, children: dir === "rtl" ? jsxRuntimeExports.jsx(IconLeftComponent, { className: classNames.nav_icon, style: styles.nav_icon }) : jsxRuntimeExports.jsx(IconRightComponent, { className: classNames.nav_icon, style: styles.nav_icon }) })] });
}
function CaptionNavigation(props) {
  var numberOfMonths = useDayPicker().numberOfMonths;
  var _a = useNavigation(), previousMonth = _a.previousMonth, nextMonth = _a.nextMonth, goToMonth = _a.goToMonth, displayMonths = _a.displayMonths;
  var displayIndex = displayMonths.findIndex(function(month) {
    return isSameMonth(props.displayMonth, month);
  });
  var isFirst = displayIndex === 0;
  var isLast = displayIndex === displayMonths.length - 1;
  var hideNext = numberOfMonths > 1 && (isFirst || !isLast);
  var hidePrevious = numberOfMonths > 1 && (isLast || !isFirst);
  var handlePreviousClick = function() {
    if (!previousMonth)
      return;
    goToMonth(previousMonth);
  };
  var handleNextClick = function() {
    if (!nextMonth)
      return;
    goToMonth(nextMonth);
  };
  return jsxRuntimeExports.jsx(Navigation, { displayMonth: props.displayMonth, hideNext, hidePrevious, nextMonth, previousMonth, onPreviousClick: handlePreviousClick, onNextClick: handleNextClick });
}
function Caption(props) {
  var _a;
  var _b = useDayPicker(), classNames = _b.classNames, disableNavigation = _b.disableNavigation, styles = _b.styles, captionLayout = _b.captionLayout, components = _b.components;
  var CaptionLabelComponent = (_a = components === null || components === void 0 ? void 0 : components.CaptionLabel) !== null && _a !== void 0 ? _a : CaptionLabel;
  var caption;
  if (disableNavigation) {
    caption = jsxRuntimeExports.jsx(CaptionLabelComponent, { id: props.id, displayMonth: props.displayMonth });
  } else if (captionLayout === "dropdown") {
    caption = jsxRuntimeExports.jsx(CaptionDropdowns, { displayMonth: props.displayMonth, id: props.id });
  } else if (captionLayout === "dropdown-buttons") {
    caption = jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(CaptionDropdowns, { displayMonth: props.displayMonth, displayIndex: props.displayIndex, id: props.id }), jsxRuntimeExports.jsx(CaptionNavigation, { displayMonth: props.displayMonth, displayIndex: props.displayIndex, id: props.id })] });
  } else {
    caption = jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(CaptionLabelComponent, { id: props.id, displayMonth: props.displayMonth, displayIndex: props.displayIndex }), jsxRuntimeExports.jsx(CaptionNavigation, { displayMonth: props.displayMonth, id: props.id })] });
  }
  return jsxRuntimeExports.jsx("div", { className: classNames.caption, style: styles.caption, children: caption });
}
function Footer(props) {
  var _a = useDayPicker(), footer = _a.footer, styles = _a.styles, tfoot = _a.classNames.tfoot;
  if (!footer)
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  return jsxRuntimeExports.jsx("tfoot", { className: tfoot, style: styles.tfoot, children: jsxRuntimeExports.jsx("tr", { children: jsxRuntimeExports.jsx("td", { colSpan: 8, children: footer }) }) });
}
function getWeekdays(locale, weekStartsOn, ISOWeek) {
  var start = ISOWeek ? startOfISOWeek(/* @__PURE__ */ new Date()) : startOfWeek(/* @__PURE__ */ new Date(), { locale, weekStartsOn });
  var days = [];
  for (var i = 0; i < 7; i++) {
    var day = addDays(start, i);
    days.push(day);
  }
  return days;
}
function HeadRow() {
  var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles, showWeekNumber = _a.showWeekNumber, locale = _a.locale, weekStartsOn = _a.weekStartsOn, ISOWeek = _a.ISOWeek, formatWeekdayName2 = _a.formatters.formatWeekdayName, labelWeekday2 = _a.labels.labelWeekday;
  var weekdays = getWeekdays(locale, weekStartsOn, ISOWeek);
  return jsxRuntimeExports.jsxs("tr", { style: styles.head_row, className: classNames.head_row, children: [showWeekNumber && jsxRuntimeExports.jsx("td", { style: styles.head_cell, className: classNames.head_cell }), weekdays.map(function(weekday, i) {
    return jsxRuntimeExports.jsx("th", { scope: "col", className: classNames.head_cell, style: styles.head_cell, "aria-label": labelWeekday2(weekday, { locale }), children: formatWeekdayName2(weekday, { locale }) }, i);
  })] });
}
function Head() {
  var _a;
  var _b = useDayPicker(), classNames = _b.classNames, styles = _b.styles, components = _b.components;
  var HeadRowComponent = (_a = components === null || components === void 0 ? void 0 : components.HeadRow) !== null && _a !== void 0 ? _a : HeadRow;
  return jsxRuntimeExports.jsx("thead", { style: styles.head, className: classNames.head, children: jsxRuntimeExports.jsx(HeadRowComponent, {}) });
}
function DayContent(props) {
  var _a = useDayPicker(), locale = _a.locale, formatDay2 = _a.formatters.formatDay;
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: formatDay2(props.date, { locale }) });
}
var SelectMultipleContext = (0, import_react.createContext)(void 0);
function SelectMultipleProvider(props) {
  if (!isDayPickerMultiple(props.initialProps)) {
    var emptyContextValue = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return jsxRuntimeExports.jsx(SelectMultipleContext.Provider, { value: emptyContextValue, children: props.children });
  }
  return jsxRuntimeExports.jsx(SelectMultipleProviderInternal, { initialProps: props.initialProps, children: props.children });
}
function SelectMultipleProviderInternal(_a) {
  var initialProps = _a.initialProps, children = _a.children;
  var selected = initialProps.selected, min2 = initialProps.min, max2 = initialProps.max;
  var onDayClick = function(day, activeModifiers, e) {
    var _a2, _b;
    (_a2 = initialProps.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(initialProps, day, activeModifiers, e);
    var isMinSelected = Boolean(activeModifiers.selected && min2 && (selected === null || selected === void 0 ? void 0 : selected.length) === min2);
    if (isMinSelected) {
      return;
    }
    var isMaxSelected = Boolean(!activeModifiers.selected && max2 && (selected === null || selected === void 0 ? void 0 : selected.length) === max2);
    if (isMaxSelected) {
      return;
    }
    var selectedDays = selected ? __spreadArray([], selected, true) : [];
    if (activeModifiers.selected) {
      var index = selectedDays.findIndex(function(selectedDay) {
        return isSameDay(day, selectedDay);
      });
      selectedDays.splice(index, 1);
    } else {
      selectedDays.push(day);
    }
    (_b = initialProps.onSelect) === null || _b === void 0 ? void 0 : _b.call(initialProps, selectedDays, day, activeModifiers, e);
  };
  var modifiers = {
    disabled: []
  };
  if (selected) {
    modifiers.disabled.push(function(day) {
      var isMaxSelected = max2 && selected.length > max2 - 1;
      var isSelected = selected.some(function(selectedDay) {
        return isSameDay(selectedDay, day);
      });
      return Boolean(isMaxSelected && !isSelected);
    });
  }
  var contextValue = {
    selected,
    onDayClick,
    modifiers
  };
  return jsxRuntimeExports.jsx(SelectMultipleContext.Provider, { value: contextValue, children });
}
function useSelectMultiple() {
  var context = (0, import_react.useContext)(SelectMultipleContext);
  if (!context) {
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  }
  return context;
}
function addToRange(day, range) {
  var _a = range || {}, from = _a.from, to = _a.to;
  if (from && to) {
    if (isSameDay(to, day) && isSameDay(from, day)) {
      return void 0;
    }
    if (isSameDay(to, day)) {
      return { from: to, to: void 0 };
    }
    if (isSameDay(from, day)) {
      return void 0;
    }
    if (isAfter(from, day)) {
      return { from: day, to };
    }
    return { from, to: day };
  }
  if (to) {
    if (isAfter(day, to)) {
      return { from: to, to: day };
    }
    return { from: day, to };
  }
  if (from) {
    if (isBefore(day, from)) {
      return { from: day, to: from };
    }
    return { from, to: day };
  }
  return { from: day, to: void 0 };
}
var SelectRangeContext = (0, import_react.createContext)(void 0);
function SelectRangeProvider(props) {
  if (!isDayPickerRange(props.initialProps)) {
    var emptyContextValue = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return jsxRuntimeExports.jsx(SelectRangeContext.Provider, { value: emptyContextValue, children: props.children });
  }
  return jsxRuntimeExports.jsx(SelectRangeProviderInternal, { initialProps: props.initialProps, children: props.children });
}
function SelectRangeProviderInternal(_a) {
  var initialProps = _a.initialProps, children = _a.children;
  var selected = initialProps.selected;
  var _b = selected || {}, selectedFrom = _b.from, selectedTo = _b.to;
  var min2 = initialProps.min;
  var max2 = initialProps.max;
  var onDayClick = function(day, activeModifiers, e) {
    var _a2, _b2;
    (_a2 = initialProps.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(initialProps, day, activeModifiers, e);
    var newRange = addToRange(day, selected);
    (_b2 = initialProps.onSelect) === null || _b2 === void 0 ? void 0 : _b2.call(initialProps, newRange, day, activeModifiers, e);
  };
  var modifiers = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (selectedFrom) {
    modifiers.range_start = [selectedFrom];
    if (!selectedTo) {
      modifiers.range_end = [selectedFrom];
    } else {
      modifiers.range_end = [selectedTo];
      if (!isSameDay(selectedFrom, selectedTo)) {
        modifiers.range_middle = [
          {
            after: selectedFrom,
            before: selectedTo
          }
        ];
      }
    }
  } else if (selectedTo) {
    modifiers.range_start = [selectedTo];
    modifiers.range_end = [selectedTo];
  }
  if (min2) {
    if (selectedFrom && !selectedTo) {
      modifiers.disabled.push({
        after: subDays(selectedFrom, min2 - 1),
        before: addDays(selectedFrom, min2 - 1)
      });
    }
    if (selectedFrom && selectedTo) {
      modifiers.disabled.push({
        after: selectedFrom,
        before: addDays(selectedFrom, min2 - 1)
      });
    }
    if (!selectedFrom && selectedTo) {
      modifiers.disabled.push({
        after: subDays(selectedTo, min2 - 1),
        before: addDays(selectedTo, min2 - 1)
      });
    }
  }
  if (max2) {
    if (selectedFrom && !selectedTo) {
      modifiers.disabled.push({
        before: addDays(selectedFrom, -max2 + 1)
      });
      modifiers.disabled.push({
        after: addDays(selectedFrom, max2 - 1)
      });
    }
    if (selectedFrom && selectedTo) {
      var selectedCount = differenceInCalendarDays(selectedTo, selectedFrom) + 1;
      var offset = max2 - selectedCount;
      modifiers.disabled.push({
        before: subDays(selectedFrom, offset)
      });
      modifiers.disabled.push({
        after: addDays(selectedTo, offset)
      });
    }
    if (!selectedFrom && selectedTo) {
      modifiers.disabled.push({
        before: addDays(selectedTo, -max2 + 1)
      });
      modifiers.disabled.push({
        after: addDays(selectedTo, max2 - 1)
      });
    }
  }
  return jsxRuntimeExports.jsx(SelectRangeContext.Provider, { value: { selected, onDayClick, modifiers }, children });
}
function useSelectRange() {
  var context = (0, import_react.useContext)(SelectRangeContext);
  if (!context) {
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  }
  return context;
}
function matcherToArray(matcher) {
  if (Array.isArray(matcher)) {
    return __spreadArray([], matcher, true);
  } else if (matcher !== void 0) {
    return [matcher];
  } else {
    return [];
  }
}
function getCustomModifiers(dayModifiers) {
  var customModifiers = {};
  Object.entries(dayModifiers).forEach(function(_a) {
    var modifier = _a[0], matcher = _a[1];
    customModifiers[modifier] = matcherToArray(matcher);
  });
  return customModifiers;
}
var InternalModifier;
(function(InternalModifier2) {
  InternalModifier2["Outside"] = "outside";
  InternalModifier2["Disabled"] = "disabled";
  InternalModifier2["Selected"] = "selected";
  InternalModifier2["Hidden"] = "hidden";
  InternalModifier2["Today"] = "today";
  InternalModifier2["RangeStart"] = "range_start";
  InternalModifier2["RangeEnd"] = "range_end";
  InternalModifier2["RangeMiddle"] = "range_middle";
})(InternalModifier || (InternalModifier = {}));
var Selected = InternalModifier.Selected;
var Disabled = InternalModifier.Disabled;
var Hidden = InternalModifier.Hidden;
var Today = InternalModifier.Today;
var RangeEnd = InternalModifier.RangeEnd;
var RangeMiddle = InternalModifier.RangeMiddle;
var RangeStart = InternalModifier.RangeStart;
var Outside = InternalModifier.Outside;
function getInternalModifiers(dayPicker, selectMultiple, selectRange) {
  var _a;
  var internalModifiers = (_a = {}, _a[Selected] = matcherToArray(dayPicker.selected), _a[Disabled] = matcherToArray(dayPicker.disabled), _a[Hidden] = matcherToArray(dayPicker.hidden), _a[Today] = [dayPicker.today], _a[RangeEnd] = [], _a[RangeMiddle] = [], _a[RangeStart] = [], _a[Outside] = [], _a);
  if (dayPicker.fromDate) {
    internalModifiers[Disabled].push({ before: dayPicker.fromDate });
  }
  if (dayPicker.toDate) {
    internalModifiers[Disabled].push({ after: dayPicker.toDate });
  }
  if (isDayPickerMultiple(dayPicker)) {
    internalModifiers[Disabled] = internalModifiers[Disabled].concat(selectMultiple.modifiers[Disabled]);
  } else if (isDayPickerRange(dayPicker)) {
    internalModifiers[Disabled] = internalModifiers[Disabled].concat(selectRange.modifiers[Disabled]);
    internalModifiers[RangeStart] = selectRange.modifiers[RangeStart];
    internalModifiers[RangeMiddle] = selectRange.modifiers[RangeMiddle];
    internalModifiers[RangeEnd] = selectRange.modifiers[RangeEnd];
  }
  return internalModifiers;
}
var ModifiersContext = (0, import_react.createContext)(void 0);
function ModifiersProvider(props) {
  var dayPicker = useDayPicker();
  var selectMultiple = useSelectMultiple();
  var selectRange = useSelectRange();
  var internalModifiers = getInternalModifiers(dayPicker, selectMultiple, selectRange);
  var customModifiers = getCustomModifiers(dayPicker.modifiers);
  var modifiers = __assign(__assign({}, internalModifiers), customModifiers);
  return jsxRuntimeExports.jsx(ModifiersContext.Provider, { value: modifiers, children: props.children });
}
function useModifiers() {
  var context = (0, import_react.useContext)(ModifiersContext);
  if (!context) {
    throw new Error("useModifiers must be used within a ModifiersProvider");
  }
  return context;
}
function isDateInterval(matcher) {
  return Boolean(matcher && typeof matcher === "object" && "before" in matcher && "after" in matcher);
}
function isDateRange(value) {
  return Boolean(value && typeof value === "object" && "from" in value);
}
function isDateAfterType(value) {
  return Boolean(value && typeof value === "object" && "after" in value);
}
function isDateBeforeType(value) {
  return Boolean(value && typeof value === "object" && "before" in value);
}
function isDayOfWeekType(value) {
  return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
function isDateInRange(date, range) {
  var _a;
  var from = range.from, to = range.to;
  if (from && to) {
    var isRangeInverted = differenceInCalendarDays(to, from) < 0;
    if (isRangeInverted) {
      _a = [to, from], from = _a[0], to = _a[1];
    }
    var isInRange = differenceInCalendarDays(date, from) >= 0 && differenceInCalendarDays(to, date) >= 0;
    return isInRange;
  }
  if (to) {
    return isSameDay(to, date);
  }
  if (from) {
    return isSameDay(from, date);
  }
  return false;
}
function isDateType(value) {
  return isDate(value);
}
function isArrayOfDates(value) {
  return Array.isArray(value) && value.every(isDate);
}
function isMatch(day, matchers) {
  return matchers.some(function(matcher) {
    if (typeof matcher === "boolean") {
      return matcher;
    }
    if (isDateType(matcher)) {
      return isSameDay(day, matcher);
    }
    if (isArrayOfDates(matcher)) {
      return matcher.includes(day);
    }
    if (isDateRange(matcher)) {
      return isDateInRange(day, matcher);
    }
    if (isDayOfWeekType(matcher)) {
      return matcher.dayOfWeek.includes(day.getDay());
    }
    if (isDateInterval(matcher)) {
      var diffBefore = differenceInCalendarDays(matcher.before, day);
      var diffAfter = differenceInCalendarDays(matcher.after, day);
      var isDayBefore = diffBefore > 0;
      var isDayAfter = diffAfter < 0;
      var isClosedInterval = isAfter(matcher.before, matcher.after);
      if (isClosedInterval) {
        return isDayAfter && isDayBefore;
      } else {
        return isDayBefore || isDayAfter;
      }
    }
    if (isDateAfterType(matcher)) {
      return differenceInCalendarDays(day, matcher.after) > 0;
    }
    if (isDateBeforeType(matcher)) {
      return differenceInCalendarDays(matcher.before, day) > 0;
    }
    if (typeof matcher === "function") {
      return matcher(day);
    }
    return false;
  });
}
function getActiveModifiers(day, modifiers, displayMonth) {
  var matchedModifiers = Object.keys(modifiers).reduce(function(result, key) {
    var modifier = modifiers[key];
    if (isMatch(day, modifier)) {
      result.push(key);
    }
    return result;
  }, []);
  var activeModifiers = {};
  matchedModifiers.forEach(function(modifier) {
    return activeModifiers[modifier] = true;
  });
  if (displayMonth && !isSameMonth(day, displayMonth)) {
    activeModifiers.outside = true;
  }
  return activeModifiers;
}
function getInitialFocusTarget(displayMonths, modifiers) {
  var firstDayInMonth = startOfMonth(displayMonths[0]);
  var lastDayInMonth = endOfMonth(displayMonths[displayMonths.length - 1]);
  var firstFocusableDay;
  var today;
  var date = firstDayInMonth;
  while (date <= lastDayInMonth) {
    var activeModifiers = getActiveModifiers(date, modifiers);
    var isFocusable = !activeModifiers.disabled && !activeModifiers.hidden;
    if (!isFocusable) {
      date = addDays(date, 1);
      continue;
    }
    if (activeModifiers.selected) {
      return date;
    }
    if (activeModifiers.today && !today) {
      today = date;
    }
    if (!firstFocusableDay) {
      firstFocusableDay = date;
    }
    date = addDays(date, 1);
  }
  if (today) {
    return today;
  } else {
    return firstFocusableDay;
  }
}
var MAX_RETRY = 365;
function getNextFocus(focusedDay, options) {
  var moveBy = options.moveBy, direction = options.direction, context = options.context, modifiers = options.modifiers, _a = options.retry, retry = _a === void 0 ? { count: 0, lastFocused: focusedDay } : _a;
  var weekStartsOn = context.weekStartsOn, fromDate = context.fromDate, toDate2 = context.toDate, locale = context.locale;
  var moveFns = {
    day: addDays,
    week: addWeeks,
    month: addMonths,
    year: addYears,
    startOfWeek: function(date) {
      return context.ISOWeek ? startOfISOWeek(date) : startOfWeek(date, { locale, weekStartsOn });
    },
    endOfWeek: function(date) {
      return context.ISOWeek ? endOfISOWeek(date) : endOfWeek(date, { locale, weekStartsOn });
    }
  };
  var newFocusedDay = moveFns[moveBy](focusedDay, direction === "after" ? 1 : -1);
  if (direction === "before" && fromDate) {
    newFocusedDay = max([fromDate, newFocusedDay]);
  } else if (direction === "after" && toDate2) {
    newFocusedDay = min([toDate2, newFocusedDay]);
  }
  var isFocusable = true;
  if (modifiers) {
    var activeModifiers = getActiveModifiers(newFocusedDay, modifiers);
    isFocusable = !activeModifiers.disabled && !activeModifiers.hidden;
  }
  if (isFocusable) {
    return newFocusedDay;
  } else {
    if (retry.count > MAX_RETRY) {
      return retry.lastFocused;
    }
    return getNextFocus(newFocusedDay, {
      moveBy,
      direction,
      context,
      modifiers,
      retry: __assign(__assign({}, retry), { count: retry.count + 1 })
    });
  }
}
var FocusContext = (0, import_react.createContext)(void 0);
function FocusProvider(props) {
  var navigation = useNavigation();
  var modifiers = useModifiers();
  var _a = (0, import_react.useState)(), focusedDay = _a[0], setFocusedDay = _a[1];
  var _b = (0, import_react.useState)(), lastFocused = _b[0], setLastFocused = _b[1];
  var initialFocusTarget = getInitialFocusTarget(navigation.displayMonths, modifiers);
  var focusTarget = (focusedDay !== null && focusedDay !== void 0 ? focusedDay : lastFocused && navigation.isDateDisplayed(lastFocused)) ? lastFocused : initialFocusTarget;
  var blur = function() {
    setLastFocused(focusedDay);
    setFocusedDay(void 0);
  };
  var focus = function(date) {
    setFocusedDay(date);
  };
  var context = useDayPicker();
  var moveFocus = function(moveBy, direction) {
    if (!focusedDay)
      return;
    var nextFocused = getNextFocus(focusedDay, {
      moveBy,
      direction,
      context,
      modifiers
    });
    if (isSameDay(focusedDay, nextFocused))
      return void 0;
    navigation.goToDate(nextFocused, focusedDay);
    focus(nextFocused);
  };
  var value = {
    focusedDay,
    focusTarget,
    blur,
    focus,
    focusDayAfter: function() {
      return moveFocus("day", "after");
    },
    focusDayBefore: function() {
      return moveFocus("day", "before");
    },
    focusWeekAfter: function() {
      return moveFocus("week", "after");
    },
    focusWeekBefore: function() {
      return moveFocus("week", "before");
    },
    focusMonthBefore: function() {
      return moveFocus("month", "before");
    },
    focusMonthAfter: function() {
      return moveFocus("month", "after");
    },
    focusYearBefore: function() {
      return moveFocus("year", "before");
    },
    focusYearAfter: function() {
      return moveFocus("year", "after");
    },
    focusStartOfWeek: function() {
      return moveFocus("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return moveFocus("endOfWeek", "after");
    }
  };
  return jsxRuntimeExports.jsx(FocusContext.Provider, { value, children: props.children });
}
function useFocusContext() {
  var context = (0, import_react.useContext)(FocusContext);
  if (!context) {
    throw new Error("useFocusContext must be used within a FocusProvider");
  }
  return context;
}
function useActiveModifiers(day, displayMonth) {
  var modifiers = useModifiers();
  var activeModifiers = getActiveModifiers(day, modifiers, displayMonth);
  return activeModifiers;
}
var SelectSingleContext = (0, import_react.createContext)(void 0);
function SelectSingleProvider(props) {
  if (!isDayPickerSingle(props.initialProps)) {
    var emptyContextValue = {
      selected: void 0
    };
    return jsxRuntimeExports.jsx(SelectSingleContext.Provider, { value: emptyContextValue, children: props.children });
  }
  return jsxRuntimeExports.jsx(SelectSingleProviderInternal, { initialProps: props.initialProps, children: props.children });
}
function SelectSingleProviderInternal(_a) {
  var initialProps = _a.initialProps, children = _a.children;
  var onDayClick = function(day, activeModifiers, e) {
    var _a2, _b, _c4;
    (_a2 = initialProps.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(initialProps, day, activeModifiers, e);
    if (activeModifiers.selected && !initialProps.required) {
      (_b = initialProps.onSelect) === null || _b === void 0 ? void 0 : _b.call(initialProps, void 0, day, activeModifiers, e);
      return;
    }
    (_c4 = initialProps.onSelect) === null || _c4 === void 0 ? void 0 : _c4.call(initialProps, day, day, activeModifiers, e);
  };
  var contextValue = {
    selected: initialProps.selected,
    onDayClick
  };
  return jsxRuntimeExports.jsx(SelectSingleContext.Provider, { value: contextValue, children });
}
function useSelectSingle() {
  var context = (0, import_react.useContext)(SelectSingleContext);
  if (!context) {
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  }
  return context;
}
function useDayEventHandlers(date, activeModifiers) {
  var dayPicker = useDayPicker();
  var single = useSelectSingle();
  var multiple = useSelectMultiple();
  var range = useSelectRange();
  var _a = useFocusContext(), focusDayAfter = _a.focusDayAfter, focusDayBefore = _a.focusDayBefore, focusWeekAfter = _a.focusWeekAfter, focusWeekBefore = _a.focusWeekBefore, blur = _a.blur, focus = _a.focus, focusMonthBefore = _a.focusMonthBefore, focusMonthAfter = _a.focusMonthAfter, focusYearBefore = _a.focusYearBefore, focusYearAfter = _a.focusYearAfter, focusStartOfWeek = _a.focusStartOfWeek, focusEndOfWeek = _a.focusEndOfWeek;
  var onClick = function(e) {
    var _a2, _b, _c4, _d;
    if (isDayPickerSingle(dayPicker)) {
      (_a2 = single.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(single, date, activeModifiers, e);
    } else if (isDayPickerMultiple(dayPicker)) {
      (_b = multiple.onDayClick) === null || _b === void 0 ? void 0 : _b.call(multiple, date, activeModifiers, e);
    } else if (isDayPickerRange(dayPicker)) {
      (_c4 = range.onDayClick) === null || _c4 === void 0 ? void 0 : _c4.call(range, date, activeModifiers, e);
    } else {
      (_d = dayPicker.onDayClick) === null || _d === void 0 ? void 0 : _d.call(dayPicker, date, activeModifiers, e);
    }
  };
  var onFocus = function(e) {
    var _a2;
    focus(date);
    (_a2 = dayPicker.onDayFocus) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onBlur = function(e) {
    var _a2;
    blur();
    (_a2 = dayPicker.onDayBlur) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onMouseEnter = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayMouseEnter) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onMouseLeave = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayMouseLeave) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onPointerEnter = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayPointerEnter) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onPointerLeave = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayPointerLeave) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onTouchCancel = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayTouchCancel) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onTouchEnd = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayTouchEnd) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onTouchMove = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayTouchMove) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onTouchStart = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayTouchStart) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onKeyUp = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayKeyUp) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onKeyDown = function(e) {
    var _a2;
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        e.stopPropagation();
        dayPicker.dir === "rtl" ? focusDayAfter() : focusDayBefore();
        break;
      case "ArrowRight":
        e.preventDefault();
        e.stopPropagation();
        dayPicker.dir === "rtl" ? focusDayBefore() : focusDayAfter();
        break;
      case "ArrowDown":
        e.preventDefault();
        e.stopPropagation();
        focusWeekAfter();
        break;
      case "ArrowUp":
        e.preventDefault();
        e.stopPropagation();
        focusWeekBefore();
        break;
      case "PageUp":
        e.preventDefault();
        e.stopPropagation();
        e.shiftKey ? focusYearBefore() : focusMonthBefore();
        break;
      case "PageDown":
        e.preventDefault();
        e.stopPropagation();
        e.shiftKey ? focusYearAfter() : focusMonthAfter();
        break;
      case "Home":
        e.preventDefault();
        e.stopPropagation();
        focusStartOfWeek();
        break;
      case "End":
        e.preventDefault();
        e.stopPropagation();
        focusEndOfWeek();
        break;
    }
    (_a2 = dayPicker.onDayKeyDown) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var eventHandlers = {
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onTouchCancel,
    onTouchEnd,
    onTouchMove,
    onTouchStart
  };
  return eventHandlers;
}
function useSelectedDays() {
  var dayPicker = useDayPicker();
  var single = useSelectSingle();
  var multiple = useSelectMultiple();
  var range = useSelectRange();
  var selectedDays = isDayPickerSingle(dayPicker) ? single.selected : isDayPickerMultiple(dayPicker) ? multiple.selected : isDayPickerRange(dayPicker) ? range.selected : void 0;
  return selectedDays;
}
function isInternalModifier(modifier) {
  return Object.values(InternalModifier).includes(modifier);
}
function getDayClassNames(dayPicker, activeModifiers) {
  var classNames = [dayPicker.classNames.day];
  Object.keys(activeModifiers).forEach(function(modifier) {
    var customClassName = dayPicker.modifiersClassNames[modifier];
    if (customClassName) {
      classNames.push(customClassName);
    } else if (isInternalModifier(modifier)) {
      var internalClassName = dayPicker.classNames["day_".concat(modifier)];
      if (internalClassName) {
        classNames.push(internalClassName);
      }
    }
  });
  return classNames;
}
function getDayStyle(dayPicker, activeModifiers) {
  var style = __assign({}, dayPicker.styles.day);
  Object.keys(activeModifiers).forEach(function(modifier) {
    var _a;
    style = __assign(__assign({}, style), (_a = dayPicker.modifiersStyles) === null || _a === void 0 ? void 0 : _a[modifier]);
  });
  return style;
}
function useDayRender(day, displayMonth, buttonRef) {
  var _a;
  var _b, _c4;
  var dayPicker = useDayPicker();
  var focusContext = useFocusContext();
  var activeModifiers = useActiveModifiers(day, displayMonth);
  var eventHandlers = useDayEventHandlers(day, activeModifiers);
  var selectedDays = useSelectedDays();
  var isButton = Boolean(dayPicker.onDayClick || dayPicker.mode !== "default");
  (0, import_react.useEffect)(function() {
    var _a2;
    if (activeModifiers.outside)
      return;
    if (!focusContext.focusedDay)
      return;
    if (!isButton)
      return;
    if (isSameDay(focusContext.focusedDay, day)) {
      (_a2 = buttonRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }
  }, [
    focusContext.focusedDay,
    day,
    buttonRef,
    isButton,
    activeModifiers.outside
  ]);
  var className = getDayClassNames(dayPicker, activeModifiers).join(" ");
  var style = getDayStyle(dayPicker, activeModifiers);
  var isHidden = Boolean(activeModifiers.outside && !dayPicker.showOutsideDays || activeModifiers.hidden);
  var DayContentComponent = (_c4 = (_b = dayPicker.components) === null || _b === void 0 ? void 0 : _b.DayContent) !== null && _c4 !== void 0 ? _c4 : DayContent;
  var children = jsxRuntimeExports.jsx(DayContentComponent, { date: day, displayMonth, activeModifiers });
  var divProps = {
    style,
    className,
    children,
    role: "gridcell"
  };
  var isFocusTarget = focusContext.focusTarget && isSameDay(focusContext.focusTarget, day) && !activeModifiers.outside;
  var isFocused = focusContext.focusedDay && isSameDay(focusContext.focusedDay, day);
  var buttonProps = __assign(__assign(__assign({}, divProps), (_a = { disabled: activeModifiers.disabled, role: "gridcell" }, _a["aria-selected"] = activeModifiers.selected, _a.tabIndex = isFocused || isFocusTarget ? 0 : -1, _a)), eventHandlers);
  var dayRender = {
    isButton,
    isHidden,
    activeModifiers,
    selectedDays,
    buttonProps,
    divProps
  };
  return dayRender;
}
function Day(props) {
  var buttonRef = (0, import_react.useRef)(null);
  var dayRender = useDayRender(props.date, props.displayMonth, buttonRef);
  if (dayRender.isHidden) {
    return jsxRuntimeExports.jsx("div", { role: "gridcell" });
  }
  if (!dayRender.isButton) {
    return jsxRuntimeExports.jsx("div", __assign({}, dayRender.divProps));
  }
  return jsxRuntimeExports.jsx(Button2, __assign({ name: "day", ref: buttonRef }, dayRender.buttonProps));
}
function WeekNumber(props) {
  var weekNumber = props.number, dates = props.dates;
  var _a = useDayPicker(), onWeekNumberClick = _a.onWeekNumberClick, styles = _a.styles, classNames = _a.classNames, locale = _a.locale, labelWeekNumber2 = _a.labels.labelWeekNumber, formatWeekNumber2 = _a.formatters.formatWeekNumber;
  var content = formatWeekNumber2(Number(weekNumber), { locale });
  if (!onWeekNumberClick) {
    return jsxRuntimeExports.jsx("span", { className: classNames.weeknumber, style: styles.weeknumber, children: content });
  }
  var label = labelWeekNumber2(Number(weekNumber), { locale });
  var handleClick = function(e) {
    onWeekNumberClick(weekNumber, dates, e);
  };
  return jsxRuntimeExports.jsx(Button2, { name: "week-number", "aria-label": label, className: classNames.weeknumber, style: styles.weeknumber, onClick: handleClick, children: content });
}
function Row(props) {
  var _a, _b;
  var _c4 = useDayPicker(), styles = _c4.styles, classNames = _c4.classNames, showWeekNumber = _c4.showWeekNumber, components = _c4.components;
  var DayComponent = (_a = components === null || components === void 0 ? void 0 : components.Day) !== null && _a !== void 0 ? _a : Day;
  var WeeknumberComponent = (_b = components === null || components === void 0 ? void 0 : components.WeekNumber) !== null && _b !== void 0 ? _b : WeekNumber;
  var weekNumberCell;
  if (showWeekNumber) {
    weekNumberCell = jsxRuntimeExports.jsx("td", { className: classNames.cell, style: styles.cell, children: jsxRuntimeExports.jsx(WeeknumberComponent, { number: props.weekNumber, dates: props.dates }) });
  }
  return jsxRuntimeExports.jsxs("tr", { className: classNames.row, style: styles.row, children: [weekNumberCell, props.dates.map(function(date) {
    return jsxRuntimeExports.jsx("td", { className: classNames.cell, style: styles.cell, role: "presentation", children: jsxRuntimeExports.jsx(DayComponent, { displayMonth: props.displayMonth, date }) }, getUnixTime(date));
  })] });
}
function daysToMonthWeeks(fromDate, toDate2, options) {
  var toWeek = (options === null || options === void 0 ? void 0 : options.ISOWeek) ? endOfISOWeek(toDate2) : endOfWeek(toDate2, options);
  var fromWeek = (options === null || options === void 0 ? void 0 : options.ISOWeek) ? startOfISOWeek(fromDate) : startOfWeek(fromDate, options);
  var nOfDays = differenceInCalendarDays(toWeek, fromWeek);
  var days = [];
  for (var i = 0; i <= nOfDays; i++) {
    days.push(addDays(fromWeek, i));
  }
  var weeksInMonth = days.reduce(function(result, date) {
    var weekNumber = (options === null || options === void 0 ? void 0 : options.ISOWeek) ? getISOWeek(date) : getWeek(date, options);
    var existingWeek = result.find(function(value) {
      return value.weekNumber === weekNumber;
    });
    if (existingWeek) {
      existingWeek.dates.push(date);
      return result;
    }
    result.push({
      weekNumber,
      dates: [date]
    });
    return result;
  }, []);
  return weeksInMonth;
}
function getMonthWeeks(month, options) {
  var weeksInMonth = daysToMonthWeeks(startOfMonth(month), endOfMonth(month), options);
  if (options === null || options === void 0 ? void 0 : options.useFixedWeeks) {
    var nrOfMonthWeeks = getWeeksInMonth(month, options);
    if (nrOfMonthWeeks < 6) {
      var lastWeek = weeksInMonth[weeksInMonth.length - 1];
      var lastDate = lastWeek.dates[lastWeek.dates.length - 1];
      var toDate2 = addWeeks(lastDate, 6 - nrOfMonthWeeks);
      var extraWeeks = daysToMonthWeeks(addWeeks(lastDate, 1), toDate2, options);
      weeksInMonth.push.apply(weeksInMonth, extraWeeks);
    }
  }
  return weeksInMonth;
}
function Table(props) {
  var _a, _b, _c4;
  var _d = useDayPicker(), locale = _d.locale, classNames = _d.classNames, styles = _d.styles, hideHead = _d.hideHead, fixedWeeks = _d.fixedWeeks, components = _d.components, weekStartsOn = _d.weekStartsOn, firstWeekContainsDate = _d.firstWeekContainsDate, ISOWeek = _d.ISOWeek;
  var weeks = getMonthWeeks(props.displayMonth, {
    useFixedWeeks: Boolean(fixedWeeks),
    ISOWeek,
    locale,
    weekStartsOn,
    firstWeekContainsDate
  });
  var HeadComponent = (_a = components === null || components === void 0 ? void 0 : components.Head) !== null && _a !== void 0 ? _a : Head;
  var RowComponent = (_b = components === null || components === void 0 ? void 0 : components.Row) !== null && _b !== void 0 ? _b : Row;
  var FooterComponent = (_c4 = components === null || components === void 0 ? void 0 : components.Footer) !== null && _c4 !== void 0 ? _c4 : Footer;
  return jsxRuntimeExports.jsxs("table", { id: props.id, className: classNames.table, style: styles.table, role: "grid", "aria-labelledby": props["aria-labelledby"], children: [!hideHead && jsxRuntimeExports.jsx(HeadComponent, {}), jsxRuntimeExports.jsx("tbody", { className: classNames.tbody, style: styles.tbody, children: weeks.map(function(week) {
    return jsxRuntimeExports.jsx(RowComponent, { displayMonth: props.displayMonth, dates: week.dates, weekNumber: week.weekNumber }, week.weekNumber);
  }) }), jsxRuntimeExports.jsx(FooterComponent, { displayMonth: props.displayMonth })] });
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var useIsomorphicLayoutEffect = canUseDOM() ? import_react.useLayoutEffect : import_react.useEffect;
var serverHandoffComplete = false;
var id = 0;
function genId() {
  return "react-day-picker-".concat(++id);
}
function useId(providedId) {
  var _a;
  var initialId = providedId !== null && providedId !== void 0 ? providedId : serverHandoffComplete ? genId() : null;
  var _b = (0, import_react.useState)(initialId), id2 = _b[0], setId = _b[1];
  useIsomorphicLayoutEffect(function() {
    if (id2 === null) {
      setId(genId());
    }
  }, []);
  (0, import_react.useEffect)(function() {
    if (serverHandoffComplete === false) {
      serverHandoffComplete = true;
    }
  }, []);
  return (_a = providedId !== null && providedId !== void 0 ? providedId : id2) !== null && _a !== void 0 ? _a : void 0;
}
function Month(props) {
  var _a;
  var _b;
  var dayPicker = useDayPicker();
  var dir = dayPicker.dir, classNames = dayPicker.classNames, styles = dayPicker.styles, components = dayPicker.components;
  var displayMonths = useNavigation().displayMonths;
  var captionId = useId(dayPicker.id ? "".concat(dayPicker.id, "-").concat(props.displayIndex) : void 0);
  var tableId = dayPicker.id ? "".concat(dayPicker.id, "-grid-").concat(props.displayIndex) : void 0;
  var className = [classNames.month];
  var style = styles.month;
  var isStart = props.displayIndex === 0;
  var isEnd = props.displayIndex === displayMonths.length - 1;
  var isCenter = !isStart && !isEnd;
  if (dir === "rtl") {
    _a = [isStart, isEnd], isEnd = _a[0], isStart = _a[1];
  }
  if (isStart) {
    className.push(classNames.caption_start);
    style = __assign(__assign({}, style), styles.caption_start);
  }
  if (isEnd) {
    className.push(classNames.caption_end);
    style = __assign(__assign({}, style), styles.caption_end);
  }
  if (isCenter) {
    className.push(classNames.caption_between);
    style = __assign(__assign({}, style), styles.caption_between);
  }
  var CaptionComponent = (_b = components === null || components === void 0 ? void 0 : components.Caption) !== null && _b !== void 0 ? _b : Caption;
  return jsxRuntimeExports.jsxs("div", { className: className.join(" "), style, children: [jsxRuntimeExports.jsx(CaptionComponent, { id: captionId, displayMonth: props.displayMonth, displayIndex: props.displayIndex }), jsxRuntimeExports.jsx(Table, { id: tableId, "aria-labelledby": captionId, displayMonth: props.displayMonth })] }, props.displayIndex);
}
function Months(props) {
  var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles;
  return jsxRuntimeExports.jsx("div", { className: classNames.months, style: styles.months, children: props.children });
}
function Root(_a) {
  var _b, _c4;
  var initialProps = _a.initialProps;
  var dayPicker = useDayPicker();
  var focusContext = useFocusContext();
  var navigation = useNavigation();
  var _d = (0, import_react.useState)(false), hasInitialFocus = _d[0], setHasInitialFocus = _d[1];
  (0, import_react.useEffect)(function() {
    if (!dayPicker.initialFocus)
      return;
    if (!focusContext.focusTarget)
      return;
    if (hasInitialFocus)
      return;
    focusContext.focus(focusContext.focusTarget);
    setHasInitialFocus(true);
  }, [
    dayPicker.initialFocus,
    hasInitialFocus,
    focusContext.focus,
    focusContext.focusTarget,
    focusContext
  ]);
  var classNames = [dayPicker.classNames.root, dayPicker.className];
  if (dayPicker.numberOfMonths > 1) {
    classNames.push(dayPicker.classNames.multiple_months);
  }
  if (dayPicker.showWeekNumber) {
    classNames.push(dayPicker.classNames.with_weeknumber);
  }
  var style = __assign(__assign({}, dayPicker.styles.root), dayPicker.style);
  var dataAttributes = Object.keys(initialProps).filter(function(key) {
    return key.startsWith("data-");
  }).reduce(function(attrs, key) {
    var _a2;
    return __assign(__assign({}, attrs), (_a2 = {}, _a2[key] = initialProps[key], _a2));
  }, {});
  var MonthsComponent = (_c4 = (_b = initialProps.components) === null || _b === void 0 ? void 0 : _b.Months) !== null && _c4 !== void 0 ? _c4 : Months;
  return jsxRuntimeExports.jsx("div", __assign({ className: classNames.join(" "), style, dir: dayPicker.dir, id: dayPicker.id, nonce: initialProps.nonce, title: initialProps.title, lang: initialProps.lang }, dataAttributes, { children: jsxRuntimeExports.jsx(MonthsComponent, { children: navigation.displayMonths.map(function(month, i) {
    return jsxRuntimeExports.jsx(Month, { displayIndex: i, displayMonth: month }, i);
  }) }) }));
}
function RootProvider(props) {
  var children = props.children, initialProps = __rest(props, ["children"]);
  return jsxRuntimeExports.jsx(DayPickerProvider, { initialProps, children: jsxRuntimeExports.jsx(NavigationProvider, { children: jsxRuntimeExports.jsx(SelectSingleProvider, { initialProps, children: jsxRuntimeExports.jsx(SelectMultipleProvider, { initialProps, children: jsxRuntimeExports.jsx(SelectRangeProvider, { initialProps, children: jsxRuntimeExports.jsx(ModifiersProvider, { children: jsxRuntimeExports.jsx(FocusProvider, { children }) }) }) }) }) }) });
}
function DayPicker(props) {
  return jsxRuntimeExports.jsx(RootProvider, __assign({}, props, { children: jsxRuntimeExports.jsx(Root, { initialProps: props }) }));
}

// app/shared/ui/Calendar/Calendar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id2) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Calendar/Calendar.tsx"' + id2);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Calendar/Calendar.tsx"
  );
  import.meta.hot.lastModified = "1706588338080.6162";
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DayPicker, { showOutsideDays, className: cn("p-3", className), classNames: {
    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
    month: "space-y-4",
    caption: "flex justify-center pt-1 relative items-center",
    caption_label: "text-sm font-medium",
    nav: "space-x-1 flex items-center",
    nav_button: cn(buttonVariants({
      variant: "outline"
    }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
    nav_button_previous: "absolute left-1",
    nav_button_next: "absolute right-1",
    table: "w-full border-collapse space-y-1",
    head_row: "flex",
    head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
    row: "flex w-full mt-2",
    cell: cn("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md", props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"),
    day: cn(buttonVariants({
      variant: "ghost"
    }), "h-8 w-8 p-0 font-normal aria-selected:opacity-100"),
    day_range_start: "day-range-start",
    day_range_end: "day-range-end",
    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
    day_today: "bg-accent text-accent-foreground",
    day_outside: "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
    day_disabled: "text-muted-foreground opacity-50",
    day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
    day_hidden: "invisible",
    ...classNames
  }, components: {
    IconLeft: ({
      ...props2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "chevron-left", size: "sm", ...props2 }, void 0, false, {
      fileName: "app/shared/ui/Calendar/Calendar.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this),
    IconRight: ({
      ...props2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "chevron-right", size: "sm", ...props2 }, void 0, false, {
      fileName: "app/shared/ui/Calendar/Calendar.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this)
  }, ...props }, void 0, false, {
    fileName: "app/shared/ui/Calendar/Calendar.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = Calendar;
Calendar.displayName = "Calendar";
var _c;
$RefreshReg$(_c, "Calendar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id2) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx"' + id2);
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
    "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx"
  );
  import.meta.hot.lastModified = "1706962583485.4204";
}
var NewExpenseFormSchema = z.object({
  id: z.string().optional(),
  date: z.string({
    required_error: "A date is required"
  }).superRefine((value, ctx) => {
    if (!isIsoDate(value)) {
      ctx.addIssue({
        path: ["date"],
        code: "custom",
        message: "Date format is invalid"
      });
    }
  }),
  value: z.number({
    required_error: "A value is required"
  }).positive({
    message: "Value must be a positive number"
  }),
  typeId: z.string({
    required_error: "An expense type is required"
  }),
  comment: z.string().optional()
});
function CarExpenseEditor({
  spending
}) {
  _s();
  const [opened, setOpened] = (0, import_react4.useState)(false);
  const actionData = useActionData();
  const navigate = useNavigate();
  const isSubmitting = useSubmitting();
  const showSpinner = (0, import_spin_delay.useSpinDelay)(isSubmitting);
  const [form, fields] = useForm({
    id: "carExpenseEditor",
    constraint: getZodConstraint(NewExpenseFormSchema),
    lastResult: actionData?.result,
    shouldValidate: "onBlur",
    shouldRevalidate: "onBlur",
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: NewExpenseFormSchema
      });
    },
    defaultValue: {
      date: spending?.date,
      value: spending?.value,
      typeId: spending?.typeId,
      comment: spending?.comment
    }
  });
  (0, import_react4.useEffect)(() => {
    setOpened(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { open: opened, onOpenChange: () => {
    setOpened(false);
    navigate("/dashboard/car");
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { className: "sm:max-w-[400px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", ...getFormProps(form), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 100,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HoneypotInputs, {}, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 101,
      columnNumber: 6
    }, this),
    spending ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", value: spending.id }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 103,
      columnNumber: 18
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { children: "Add new expense" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 106,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogDescription, { children: "Add new expense here. Click save when you're done." }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 105,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col py-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: fields.date.id, className: "mb-2", children: "Date" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 114,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExpenseDatePicker, { meta: fields.date }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 117,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { id: fields.date.errorId, errors: fields.date.errors }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 120,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 119,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 113,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: fields.typeId.id, className: "mb-2", children: "Expense type" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 125,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SpendingTypesSelect, { meta: fields.typeId }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 128,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { id: fields.typeId.errorId, errors: fields.typeId.errors }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 131,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 130,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { labelProps: {
        children: "Value",
        htmlFor: fields.value.id,
        className: "mb-3"
      }, inputProps: {
        ...getInputProps(fields.value, {
          type: "number"
        })
      }, errors: fields.value.errors }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { labelProps: {
        children: "Comment",
        htmlFor: fields.comment.id,
        className: "mb-3"
      }, inputProps: {
        ...getInputProps(fields.comment, {
          type: "text"
        })
      }, errors: fields.comment.errors }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 145,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 112,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", disabled: showSpinner, children: "Save changes" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 155,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
    lineNumber: 98,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_s(CarExpenseEditor, "jXd1kh1EcPY4ECFgYWmWHzmi1Rc=", false, function() {
  return [useActionData, useNavigate, useSubmitting, import_spin_delay.useSpinDelay, useForm];
});
_c2 = CarExpenseEditor;
function SpendingTypesSelect({
  meta
}) {
  _s2();
  const data = useLoaderData();
  const shadowInputRef = (0, import_react4.useRef)(null);
  const control = useInputControl(meta);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ref: shadowInputRef, ...getInputProps(meta, {
      type: "hidden"
    }) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 176,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { required: true, defaultValue: meta.initialValue, onValueChange: control.change, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectTrigger, { className: cn("w-full", meta.errors ? "border-input-invalid" : ""), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectValue, { placeholder: "Select an expense type" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 182,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 181,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectLabel, { children: "Expense types" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 186,
          columnNumber: 7
        }, this),
        data.spendingTypes.map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectItem, { value: type.id, children: type.name }, type.id, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 187,
          columnNumber: 39
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 185,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 184,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 180,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
    lineNumber: 175,
    columnNumber: 10
  }, this);
}
_s2(SpendingTypesSelect, "gRDK2sB6I2/W0sgeA1edVQWKt6c=", false, function() {
  return [useLoaderData, useInputControl];
});
_c22 = SpendingTypesSelect;
function ExpenseDatePicker({
  meta
}) {
  _s3();
  const defaultDateValue = meta.initialValue ? new Date(meta.initialValue) : void 0;
  const [date, setDate] = (0, import_react4.useState)(defaultDateValue);
  const shadowInputRef = (0, import_react4.useRef)(null);
  const control = useInputControl(meta);
  const onDateSelect = (value) => {
    setDate(value);
    control.change(value?.toISOString() ?? "");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ref: shadowInputRef, ...getInputProps(meta, {
      type: "hidden"
    }) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 212,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Popover, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "outline", className: cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground", meta.errors ? "border-input-invalid" : ""), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: "calendar", size: "sm", className: "mr-2" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 219,
          columnNumber: 7
        }, this),
        date ? format(date, "PPP") : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Pick a date" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
          lineNumber: 220,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 218,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 217,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Calendar, { mode: "single", selected: date, onSelect: onDateSelect, disabled: (date2) => date2 > /* @__PURE__ */ new Date() || date2 < /* @__PURE__ */ new Date("1900-01-01"), initialFocus: true }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 224,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
        lineNumber: 223,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
      lineNumber: 216,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/car+/__car-expense-editor.tsx",
    lineNumber: 211,
    columnNumber: 10
  }, this);
}
_s3(ExpenseDatePicker, "NW/vgzZyqhlXRBI0Hev2OVcyLXQ=", false, function() {
  return [useInputControl];
});
_c3 = ExpenseDatePicker;
var _c2;
var _c22;
var _c3;
$RefreshReg$(_c2, "CarExpenseEditor");
$RefreshReg$(_c22, "SpendingTypesSelect");
$RefreshReg$(_c3, "ExpenseDatePicker");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CarExpenseEditor
};
/*! Bundled license information:

react-day-picker/dist/index.esm.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-day-picker/dist/index.esm.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/_shared/chunk-GMMBYSWW.js.map
