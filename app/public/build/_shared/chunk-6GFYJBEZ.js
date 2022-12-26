import {
  require_react
} from "/build/_shared/chunk-64ZQY7LL.js";
import {
  __commonJS,
  __export,
  __toESM
} from "/build/_shared/chunk-DF3EUDCN.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module2) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module2.exports = hoistNonReactStatics2;
  }
});

// node_modules/@sentry/utils/esm/is.js
var objectToString = Object.prototype.toString;
function isError(wat) {
  switch (objectToString.call(wat)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
function isBuiltin(wat, className) {
  return objectToString.call(wat) === `[object ${className}]`;
}
function isErrorEvent(wat) {
  return isBuiltin(wat, "ErrorEvent");
}
function isDOMError(wat) {
  return isBuiltin(wat, "DOMError");
}
function isDOMException(wat) {
  return isBuiltin(wat, "DOMException");
}
function isString(wat) {
  return isBuiltin(wat, "String");
}
function isPrimitive(wat) {
  return wat === null || typeof wat !== "object" && typeof wat !== "function";
}
function isPlainObject(wat) {
  return isBuiltin(wat, "Object");
}
function isEvent(wat) {
  return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
function isElement(wat) {
  return typeof Element !== "undefined" && isInstanceOf(wat, Element);
}
function isRegExp(wat) {
  return isBuiltin(wat, "RegExp");
}
function isThenable(wat) {
  return Boolean(wat && wat.then && typeof wat.then === "function");
}
function isSyntheticEvent(wat) {
  return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
}
function isNaN2(wat) {
  return typeof wat === "number" && wat !== wat;
}
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch (_e) {
    return false;
  }
}

// node_modules/@sentry/utils/esm/worldwide.js
function isGlobalObj(obj) {
  return obj && obj.Math == Math ? obj : void 0;
}
var GLOBAL_OBJ = typeof globalThis == "object" && isGlobalObj(globalThis) || typeof window == "object" && isGlobalObj(window) || typeof self == "object" && isGlobalObj(self) || typeof globalThis == "object" && isGlobalObj(globalThis) || function() {
  return this;
}() || {};
function getGlobalObject() {
  return GLOBAL_OBJ;
}
function getGlobalSingleton(name, creator, obj) {
  const gbl = obj || GLOBAL_OBJ;
  const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
  const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
  return singleton;
}

// node_modules/@sentry/utils/esm/browser.js
var WINDOW = getGlobalObject();
var DEFAULT_MAX_STRING_LENGTH = 80;
function htmlTreeAsString(elem, options = {}) {
  try {
    let currentElem = elem;
    const MAX_TRAVERSE_HEIGHT = 5;
    const out = [];
    let height = 0;
    let len = 0;
    const separator = " > ";
    const sepLength = separator.length;
    let nextStr;
    const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
    const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = _htmlElementAsString(currentElem, keyAttrs);
      if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
        break;
      }
      out.push(nextStr);
      len += nextStr.length;
      currentElem = currentElem.parentNode;
    }
    return out.reverse().join(separator);
  } catch (_oO) {
    return "<unknown>";
  }
}
function _htmlElementAsString(el, keyAttrs) {
  const elem = el;
  const out = [];
  let className;
  let classes;
  let key;
  let attr;
  let i;
  if (!elem || !elem.tagName) {
    return "";
  }
  out.push(elem.tagName.toLowerCase());
  const keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
  if (keyAttrPairs && keyAttrPairs.length) {
    keyAttrPairs.forEach((keyAttrPair) => {
      out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
  } else {
    if (elem.id) {
      out.push(`#${elem.id}`);
    }
    className = elem.className;
    if (className && isString(className)) {
      classes = className.split(/\s+/);
      for (i = 0; i < classes.length; i++) {
        out.push(`.${classes[i]}`);
      }
    }
  }
  const allowedAttrs = ["type", "name", "title", "alt"];
  for (i = 0; i < allowedAttrs.length; i++) {
    key = allowedAttrs[i];
    attr = elem.getAttribute(key);
    if (attr) {
      out.push(`[${key}="${attr}"]`);
    }
  }
  return out.join("");
}
function getLocationHref() {
  try {
    return WINDOW.document.location.href;
  } catch (oO) {
    return "";
  }
}

// node_modules/@sentry/utils/esm/error.js
var SentryError = class extends Error {
  constructor(message, logLevel = "warn") {
    super(message);
    this.message = message;
    ;
    this.name = new.target.prototype.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
    this.logLevel = logLevel;
  }
};

// node_modules/@sentry/utils/esm/dsn.js
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
  return protocol === "http" || protocol === "https";
}
function dsnToString(dsn, withPassword = false) {
  const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
  return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
function dsnFromString(str) {
  const match = DSN_REGEX.exec(str);
  if (!match) {
    throw new SentryError(`Invalid Sentry Dsn: ${str}`);
  }
  const [protocol, publicKey, pass = "", host, port = "", lastPath] = match.slice(1);
  let path = "";
  let projectId = lastPath;
  const split = projectId.split("/");
  if (split.length > 1) {
    path = split.slice(0, -1).join("/");
    projectId = split.pop();
  }
  if (projectId) {
    const projectMatch = projectId.match(/^\d+/);
    if (projectMatch) {
      projectId = projectMatch[0];
    }
  }
  return dsnFromComponents({ host, pass, path, projectId, port, protocol, publicKey });
}
function dsnFromComponents(components) {
  return {
    protocol: components.protocol,
    publicKey: components.publicKey || "",
    pass: components.pass || "",
    host: components.host,
    port: components.port || "",
    path: components.path || "",
    projectId: components.projectId
  };
}
function validateDsn(dsn) {
  if (!(typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__)) {
    return;
  }
  const { port, projectId, protocol } = dsn;
  const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
  requiredComponents.forEach((component) => {
    if (!dsn[component]) {
      throw new SentryError(`Invalid Sentry Dsn: ${component} missing`);
    }
  });
  if (!projectId.match(/^\d+$/)) {
    throw new SentryError(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
  }
  if (!isValidProtocol(protocol)) {
    throw new SentryError(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
  }
  if (port && isNaN(parseInt(port, 10))) {
    throw new SentryError(`Invalid Sentry Dsn: Invalid port ${port}`);
  }
  return true;
}
function makeDsn(from) {
  const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
  validateDsn(components);
  return components;
}

// node_modules/@sentry/utils/esm/logger.js
var PREFIX = "Sentry Logger ";
var CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
function consoleSandbox(callback) {
  if (!("console" in GLOBAL_OBJ)) {
    return callback();
  }
  const originalConsole = GLOBAL_OBJ.console;
  const wrappedLevels = {};
  CONSOLE_LEVELS.forEach((level) => {
    const originalWrappedFunc = originalConsole[level] && originalConsole[level].__sentry_original__;
    if (level in originalConsole && originalWrappedFunc) {
      wrappedLevels[level] = originalConsole[level];
      originalConsole[level] = originalWrappedFunc;
    }
  });
  try {
    return callback();
  } finally {
    Object.keys(wrappedLevels).forEach((level) => {
      originalConsole[level] = wrappedLevels[level];
    });
  }
}
function makeLogger() {
  let enabled = false;
  const logger2 = {
    enable: () => {
      enabled = true;
    },
    disable: () => {
      enabled = false;
    }
  };
  if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
    CONSOLE_LEVELS.forEach((name) => {
      logger2[name] = (...args) => {
        if (enabled) {
          consoleSandbox(() => {
            GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
          });
        }
      };
    });
  } else {
    CONSOLE_LEVELS.forEach((name) => {
      logger2[name] = () => void 0;
    });
  }
  return logger2;
}
var logger;
if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
  logger = getGlobalSingleton("logger", makeLogger);
} else {
  logger = makeLogger();
}

// node_modules/@sentry/utils/esm/string.js
function truncate(str, max = 0) {
  if (typeof str !== "string" || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.substr(0, max)}...`;
}
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return "";
  }
  const output = [];
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    try {
      output.push(String(value));
    } catch (e) {
      output.push("[value cannot be serialized]");
    }
  }
  return output.join(delimiter);
}
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
  if (!isString(value)) {
    return false;
  }
  if (isRegExp(pattern)) {
    return pattern.test(value);
  }
  if (isString(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }
  return false;
}
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
  return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
}

// node_modules/@sentry/utils/esm/object.js
function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }
  const original = source[name];
  const wrapped = replacementFactory(original);
  if (typeof wrapped === "function") {
    try {
      markFunctionWrapped(wrapped, original);
    } catch (_Oo) {
    }
  }
  source[name] = wrapped;
}
function addNonEnumerableProperty(obj, name, value) {
  Object.defineProperty(obj, name, {
    value,
    writable: true,
    configurable: true
  });
}
function markFunctionWrapped(wrapped, original) {
  const proto = original.prototype || {};
  wrapped.prototype = original.prototype = proto;
  addNonEnumerableProperty(wrapped, "__sentry_original__", original);
}
function getOriginalFunction(func) {
  return func.__sentry_original__;
}
function convertToPlainObject(value) {
  if (isError(value)) {
    return {
      message: value.message,
      name: value.name,
      stack: value.stack,
      ...getOwnProperties(value)
    };
  } else if (isEvent(value)) {
    const newObj = {
      type: value.type,
      target: serializeEventTarget(value.target),
      currentTarget: serializeEventTarget(value.currentTarget),
      ...getOwnProperties(value)
    };
    if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) {
      newObj.detail = value.detail;
    }
    return newObj;
  } else {
    return value;
  }
}
function serializeEventTarget(target) {
  try {
    return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
  } catch (_oO) {
    return "<unknown>";
  }
}
function getOwnProperties(obj) {
  if (typeof obj === "object" && obj !== null) {
    const extractedProps = {};
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        extractedProps[property] = obj[property];
      }
    }
    return extractedProps;
  } else {
    return {};
  }
}
function extractExceptionKeysForMessage(exception, maxLength = 40) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();
  if (!keys.length) {
    return "[object has no keys]";
  }
  if (keys[0].length >= maxLength) {
    return truncate(keys[0], maxLength);
  }
  for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    const serialized = keys.slice(0, includedKeys).join(", ");
    if (serialized.length > maxLength) {
      continue;
    }
    if (includedKeys === keys.length) {
      return serialized;
    }
    return truncate(serialized, maxLength);
  }
  return "";
}
function dropUndefinedKeys(inputValue) {
  const memoizationMap = /* @__PURE__ */ new Map();
  return _dropUndefinedKeys(inputValue, memoizationMap);
}
function _dropUndefinedKeys(inputValue, memoizationMap) {
  if (isPlainObject(inputValue)) {
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== void 0) {
      return memoVal;
    }
    const returnValue = {};
    memoizationMap.set(inputValue, returnValue);
    for (const key of Object.keys(inputValue)) {
      if (typeof inputValue[key] !== "undefined") {
        returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
      }
    }
    return returnValue;
  }
  if (Array.isArray(inputValue)) {
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== void 0) {
      return memoVal;
    }
    const returnValue = [];
    memoizationMap.set(inputValue, returnValue);
    inputValue.forEach((item) => {
      returnValue.push(_dropUndefinedKeys(item, memoizationMap));
    });
    return returnValue;
  }
  return inputValue;
}

// node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js
function _nullishCoalesce(lhs, rhsFn) {
  return lhs != null ? lhs : rhsFn();
}

// node_modules/@sentry/utils/esm/stacktrace.js
var defaultFunctionName = "<anonymous>";
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== "function") {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch (e) {
    return defaultFunctionName;
  }
}

// node_modules/@sentry/utils/esm/supports.js
var WINDOW2 = getGlobalObject();
function supportsFetch() {
  if (!("fetch" in WINDOW2)) {
    return false;
  }
  try {
    new Headers();
    new Request("http://www.example.com");
    new Response();
    return true;
  } catch (e) {
    return false;
  }
}
function isNativeFetch(func) {
  return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
function supportsNativeFetch() {
  if (!supportsFetch()) {
    return false;
  }
  if (isNativeFetch(WINDOW2.fetch)) {
    return true;
  }
  let result = false;
  const doc = WINDOW2.document;
  if (doc && typeof doc.createElement === "function") {
    try {
      const sandbox = doc.createElement("iframe");
      sandbox.hidden = true;
      doc.head.appendChild(sandbox);
      if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
        result = isNativeFetch(sandbox.contentWindow.fetch);
      }
      doc.head.removeChild(sandbox);
    } catch (err) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
    }
  }
  return result;
}
function supportsHistory() {
  const chrome = WINDOW2.chrome;
  const isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
  const hasHistoryApi = "history" in WINDOW2 && !!WINDOW2.history.pushState && !!WINDOW2.history.replaceState;
  return !isChromePackagedApp && hasHistoryApi;
}

// node_modules/@sentry/utils/esm/instrument.js
var WINDOW3 = getGlobalObject();
var handlers = {};
var instrumented = {};
function instrument(type) {
  if (instrumented[type]) {
    return;
  }
  instrumented[type] = true;
  switch (type) {
    case "console":
      instrumentConsole();
      break;
    case "dom":
      instrumentDOM();
      break;
    case "xhr":
      instrumentXHR();
      break;
    case "fetch":
      instrumentFetch();
      break;
    case "history":
      instrumentHistory();
      break;
    case "error":
      instrumentError();
      break;
    case "unhandledrejection":
      instrumentUnhandledRejection();
      break;
    default:
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("unknown instrumentation type:", type);
      return;
  }
}
function addInstrumentationHandler(type, callback) {
  handlers[type] = handlers[type] || [];
  handlers[type].push(callback);
  instrument(type);
}
function triggerHandlers(type, data) {
  if (!type || !handlers[type]) {
    return;
  }
  for (const handler of handlers[type] || []) {
    try {
      handler(data);
    } catch (e) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(
        `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
        e
      );
    }
  }
}
function instrumentConsole() {
  if (!("console" in WINDOW3)) {
    return;
  }
  CONSOLE_LEVELS.forEach(function(level) {
    if (!(level in WINDOW3.console)) {
      return;
    }
    fill(WINDOW3.console, level, function(originalConsoleMethod) {
      return function(...args) {
        triggerHandlers("console", { args, level });
        if (originalConsoleMethod) {
          originalConsoleMethod.apply(WINDOW3.console, args);
        }
      };
    });
  });
}
function instrumentFetch() {
  if (!supportsNativeFetch()) {
    return;
  }
  fill(WINDOW3, "fetch", function(originalFetch) {
    return function(...args) {
      const handlerData = {
        args,
        fetchData: {
          method: getFetchMethod(args),
          url: getFetchUrl(args)
        },
        startTimestamp: Date.now()
      };
      triggerHandlers("fetch", {
        ...handlerData
      });
      return originalFetch.apply(WINDOW3, args).then(
        (response) => {
          triggerHandlers("fetch", {
            ...handlerData,
            endTimestamp: Date.now(),
            response
          });
          return response;
        },
        (error) => {
          triggerHandlers("fetch", {
            ...handlerData,
            endTimestamp: Date.now(),
            error
          });
          throw error;
        }
      );
    };
  });
}
function getFetchMethod(fetchArgs = []) {
  if ("Request" in WINDOW3 && isInstanceOf(fetchArgs[0], Request) && fetchArgs[0].method) {
    return String(fetchArgs[0].method).toUpperCase();
  }
  if (fetchArgs[1] && fetchArgs[1].method) {
    return String(fetchArgs[1].method).toUpperCase();
  }
  return "GET";
}
function getFetchUrl(fetchArgs = []) {
  if (typeof fetchArgs[0] === "string") {
    return fetchArgs[0];
  }
  if ("Request" in WINDOW3 && isInstanceOf(fetchArgs[0], Request)) {
    return fetchArgs[0].url;
  }
  return String(fetchArgs[0]);
}
function instrumentXHR() {
  if (!("XMLHttpRequest" in WINDOW3)) {
    return;
  }
  const xhrproto = XMLHttpRequest.prototype;
  fill(xhrproto, "open", function(originalOpen) {
    return function(...args) {
      const xhr = this;
      const url = args[1];
      const xhrInfo = xhr.__sentry_xhr__ = {
        method: isString(args[0]) ? args[0].toUpperCase() : args[0],
        url: args[1]
      };
      if (isString(url) && xhrInfo.method === "POST" && url.match(/sentry_key/)) {
        xhr.__sentry_own_request__ = true;
      }
      const onreadystatechangeHandler = function() {
        if (xhr.readyState === 4) {
          try {
            xhrInfo.status_code = xhr.status;
          } catch (e) {
          }
          triggerHandlers("xhr", {
            args,
            endTimestamp: Date.now(),
            startTimestamp: Date.now(),
            xhr
          });
        }
      };
      if ("onreadystatechange" in xhr && typeof xhr.onreadystatechange === "function") {
        fill(xhr, "onreadystatechange", function(original) {
          return function(...readyStateArgs) {
            onreadystatechangeHandler();
            return original.apply(xhr, readyStateArgs);
          };
        });
      } else {
        xhr.addEventListener("readystatechange", onreadystatechangeHandler);
      }
      return originalOpen.apply(xhr, args);
    };
  });
  fill(xhrproto, "send", function(originalSend) {
    return function(...args) {
      if (this.__sentry_xhr__ && args[0] !== void 0) {
        this.__sentry_xhr__.body = args[0];
      }
      triggerHandlers("xhr", {
        args,
        startTimestamp: Date.now(),
        xhr: this
      });
      return originalSend.apply(this, args);
    };
  });
}
var lastHref;
function instrumentHistory() {
  if (!supportsHistory()) {
    return;
  }
  const oldOnPopState = WINDOW3.onpopstate;
  WINDOW3.onpopstate = function(...args) {
    const to = WINDOW3.location.href;
    const from = lastHref;
    lastHref = to;
    triggerHandlers("history", {
      from,
      to
    });
    if (oldOnPopState) {
      try {
        return oldOnPopState.apply(this, args);
      } catch (_oO) {
      }
    }
  };
  function historyReplacementFunction(originalHistoryFunction) {
    return function(...args) {
      const url = args.length > 2 ? args[2] : void 0;
      if (url) {
        const from = lastHref;
        const to = String(url);
        lastHref = to;
        triggerHandlers("history", {
          from,
          to
        });
      }
      return originalHistoryFunction.apply(this, args);
    };
  }
  fill(WINDOW3.history, "pushState", historyReplacementFunction);
  fill(WINDOW3.history, "replaceState", historyReplacementFunction);
}
var debounceDuration = 1e3;
var debounceTimerID;
var lastCapturedEvent;
function shouldShortcircuitPreviousDebounce(previous, current) {
  if (!previous) {
    return true;
  }
  if (previous.type !== current.type) {
    return true;
  }
  try {
    if (previous.target !== current.target) {
      return true;
    }
  } catch (e) {
  }
  return false;
}
function shouldSkipDOMEvent(event) {
  if (event.type !== "keypress") {
    return false;
  }
  try {
    const target = event.target;
    if (!target || !target.tagName) {
      return true;
    }
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
      return false;
    }
  } catch (e) {
  }
  return true;
}
function makeDOMEventHandler(handler, globalListener = false) {
  return (event) => {
    if (!event || lastCapturedEvent === event) {
      return;
    }
    if (shouldSkipDOMEvent(event)) {
      return;
    }
    const name = event.type === "keypress" ? "input" : event.type;
    if (debounceTimerID === void 0) {
      handler({
        event,
        name,
        global: globalListener
      });
      lastCapturedEvent = event;
    } else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
      handler({
        event,
        name,
        global: globalListener
      });
      lastCapturedEvent = event;
    }
    clearTimeout(debounceTimerID);
    debounceTimerID = WINDOW3.setTimeout(() => {
      debounceTimerID = void 0;
    }, debounceDuration);
  };
}
function instrumentDOM() {
  if (!("document" in WINDOW3)) {
    return;
  }
  const triggerDOMHandler = triggerHandlers.bind(null, "dom");
  const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
  WINDOW3.document.addEventListener("click", globalDOMEventHandler, false);
  WINDOW3.document.addEventListener("keypress", globalDOMEventHandler, false);
  ["EventTarget", "Node"].forEach((target) => {
    const proto = WINDOW3[target] && WINDOW3[target].prototype;
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
      return;
    }
    fill(proto, "addEventListener", function(originalAddEventListener) {
      return function(type, listener, options) {
        if (type === "click" || type == "keypress") {
          try {
            const el = this;
            const handlers2 = el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {};
            const handlerForType = handlers2[type] = handlers2[type] || { refCount: 0 };
            if (!handlerForType.handler) {
              const handler = makeDOMEventHandler(triggerDOMHandler);
              handlerForType.handler = handler;
              originalAddEventListener.call(this, type, handler, options);
            }
            handlerForType.refCount++;
          } catch (e) {
          }
        }
        return originalAddEventListener.call(this, type, listener, options);
      };
    });
    fill(
      proto,
      "removeEventListener",
      function(originalRemoveEventListener) {
        return function(type, listener, options) {
          if (type === "click" || type == "keypress") {
            try {
              const el = this;
              const handlers2 = el.__sentry_instrumentation_handlers__ || {};
              const handlerForType = handlers2[type];
              if (handlerForType) {
                handlerForType.refCount--;
                if (handlerForType.refCount <= 0) {
                  originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                  handlerForType.handler = void 0;
                  delete handlers2[type];
                }
                if (Object.keys(handlers2).length === 0) {
                  delete el.__sentry_instrumentation_handlers__;
                }
              }
            } catch (e) {
            }
          }
          return originalRemoveEventListener.call(this, type, listener, options);
        };
      }
    );
  });
}
var _oldOnErrorHandler = null;
function instrumentError() {
  _oldOnErrorHandler = WINDOW3.onerror;
  WINDOW3.onerror = function(msg, url, line, column, error) {
    triggerHandlers("error", {
      column,
      error,
      line,
      msg,
      url
    });
    if (_oldOnErrorHandler) {
      return _oldOnErrorHandler.apply(this, arguments);
    }
    return false;
  };
}
var _oldOnUnhandledRejectionHandler = null;
function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = WINDOW3.onunhandledrejection;
  WINDOW3.onunhandledrejection = function(e) {
    triggerHandlers("unhandledrejection", e);
    if (_oldOnUnhandledRejectionHandler) {
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }
    return true;
  };
}

// node_modules/@sentry/utils/esm/memo.js
function memoBuilder() {
  const hasWeakSet = typeof WeakSet === "function";
  const inner = hasWeakSet ? /* @__PURE__ */ new WeakSet() : [];
  function memoize(obj) {
    if (hasWeakSet) {
      if (inner.has(obj)) {
        return true;
      }
      inner.add(obj);
      return false;
    }
    for (let i = 0; i < inner.length; i++) {
      const value = inner[i];
      if (value === obj) {
        return true;
      }
    }
    inner.push(obj);
    return false;
  }
  function unmemoize(obj) {
    if (hasWeakSet) {
      inner.delete(obj);
    } else {
      for (let i = 0; i < inner.length; i++) {
        if (inner[i] === obj) {
          inner.splice(i, 1);
          break;
        }
      }
    }
  }
  return [memoize, unmemoize];
}

// node_modules/@sentry/utils/esm/misc.js
function uuid4() {
  const gbl = GLOBAL_OBJ;
  const crypto = gbl.crypto || gbl.msCrypto;
  if (crypto && crypto.randomUUID) {
    return crypto.randomUUID().replace(/-/g, "");
  }
  const getRandomByte = crypto && crypto.getRandomValues ? () => crypto.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(
    /[018]/g,
    (c) => (c ^ (getRandomByte() & 15) >> c / 4).toString(16)
  );
}
function getFirstException(event) {
  return event.exception && event.exception.values ? event.exception.values[0] : void 0;
}
function getEventDescription(event) {
  const { message, event_id: eventId } = event;
  if (message) {
    return message;
  }
  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || "<unknown>";
  }
  return eventId || "<unknown>";
}
function addExceptionTypeValue(event, value, type) {
  const exception = event.exception = event.exception || {};
  const values = exception.values = exception.values || [];
  const firstException = values[0] = values[0] || {};
  if (!firstException.value) {
    firstException.value = value || "";
  }
  if (!firstException.type) {
    firstException.type = type || "Error";
  }
}
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }
  const defaultMechanism = { type: "generic", handled: true };
  const currentMechanism = firstException.mechanism;
  firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };
  if (newMechanism && "data" in newMechanism) {
    const mergedData = { ...currentMechanism && currentMechanism.data, ...newMechanism.data };
    firstException.mechanism.data = mergedData;
  }
}
function arrayify(maybeArray) {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}

// node_modules/@sentry/utils/esm/env.js
function isBrowserBundle() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}

// node_modules/@sentry/utils/esm/node.js
function isNodeEnv() {
  return !isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
}
function dynamicRequire(mod, request) {
  return mod.require(request);
}
function loadModule(moduleName) {
  let mod;
  try {
    mod = dynamicRequire(module, moduleName);
  } catch (e) {
  }
  try {
    const { cwd } = dynamicRequire(module, "process");
    mod = dynamicRequire(module, `${cwd()}/node_modules/${moduleName}`);
  } catch (e) {
  }
  return mod;
}

// node_modules/@sentry/utils/esm/normalize.js
function normalize(input, depth = Infinity, maxProperties = Infinity) {
  try {
    return visit("", input, depth, maxProperties);
  } catch (err) {
    return { ERROR: `**non-serializable** (${err})` };
  }
}
function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
  const normalized = normalize(object, depth);
  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }
  return normalized;
}
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
  const [memoize, unmemoize] = memo;
  if (value === null || ["number", "boolean", "string"].includes(typeof value) && !isNaN2(value)) {
    return value;
  }
  const stringified = stringifyValue(key, value);
  if (!stringified.startsWith("[object ")) {
    return stringified;
  }
  if (value["__sentry_skip_normalization__"]) {
    return value;
  }
  if (depth === 0) {
    return stringified.replace("object ", "");
  }
  if (memoize(value)) {
    return "[Circular ~]";
  }
  const valueWithToJSON = value;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      return visit("", jsonValue, depth - 1, maxProperties, memo);
    } catch (err) {
    }
  }
  const normalized = Array.isArray(value) ? [] : {};
  let numAdded = 0;
  const visitable = convertToPlainObject(value);
  for (const visitKey in visitable) {
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }
    if (numAdded >= maxProperties) {
      normalized[visitKey] = "[MaxProperties ~]";
      break;
    }
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, depth - 1, maxProperties, memo);
    numAdded++;
  }
  unmemoize(value);
  return normalized;
}
function stringifyValue(key, value) {
  try {
    if (key === "domain" && value && typeof value === "object" && value._events) {
      return "[Domain]";
    }
    if (key === "domainEmitter") {
      return "[DomainEmitter]";
    }
    if (typeof globalThis !== "undefined" && value === globalThis) {
      return "[Global]";
    }
    if (typeof window !== "undefined" && value === window) {
      return "[Window]";
    }
    if (typeof document !== "undefined" && value === document) {
      return "[Document]";
    }
    if (isSyntheticEvent(value)) {
      return "[SyntheticEvent]";
    }
    if (typeof value === "number" && value !== value) {
      return "[NaN]";
    }
    if (value === void 0) {
      return "[undefined]";
    }
    if (typeof value === "function") {
      return `[Function: ${getFunctionName(value)}]`;
    }
    if (typeof value === "symbol") {
      return `[${String(value)}]`;
    }
    if (typeof value === "bigint") {
      return `[BigInt: ${String(value)}]`;
    }
    return `[object ${Object.getPrototypeOf(value).constructor.name}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}

// node_modules/@sentry/utils/esm/syncpromise.js
var States;
(function(States2) {
  const PENDING = 0;
  States2[States2["PENDING"] = PENDING] = "PENDING";
  const RESOLVED = 1;
  States2[States2["RESOLVED"] = RESOLVED] = "RESOLVED";
  const REJECTED = 2;
  States2[States2["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));
var SyncPromise = class {
  __init() {
    this._state = States.PENDING;
  }
  __init2() {
    this._handlers = [];
  }
  constructor(executor) {
    ;
    SyncPromise.prototype.__init.call(this);
    SyncPromise.prototype.__init2.call(this);
    SyncPromise.prototype.__init3.call(this);
    SyncPromise.prototype.__init4.call(this);
    SyncPromise.prototype.__init5.call(this);
    SyncPromise.prototype.__init6.call(this);
    try {
      executor(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }
  then(onfulfilled, onrejected) {
    return new SyncPromise((resolve, reject) => {
      this._handlers.push([
        false,
        (result) => {
          if (!onfulfilled) {
            resolve(result);
          } else {
            try {
              resolve(onfulfilled(result));
            } catch (e) {
              reject(e);
            }
          }
        },
        (reason) => {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve(onrejected(reason));
            } catch (e) {
              reject(e);
            }
          }
        }
      ]);
      this._executeHandlers();
    });
  }
  catch(onrejected) {
    return this.then((val) => val, onrejected);
  }
  finally(onfinally) {
    return new SyncPromise((resolve, reject) => {
      let val;
      let isRejected;
      return this.then(
        (value) => {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        },
        (reason) => {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        }
      ).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }
        resolve(val);
      });
    });
  }
  __init3() {
    this._resolve = (value) => {
      this._setResult(States.RESOLVED, value);
    };
  }
  __init4() {
    this._reject = (reason) => {
      this._setResult(States.REJECTED, reason);
    };
  }
  __init5() {
    this._setResult = (state, value) => {
      if (this._state !== States.PENDING) {
        return;
      }
      if (isThenable(value)) {
        void value.then(this._resolve, this._reject);
        return;
      }
      this._state = state;
      this._value = value;
      this._executeHandlers();
    };
  }
  __init6() {
    this._executeHandlers = () => {
      if (this._state === States.PENDING) {
        return;
      }
      const cachedHandlers = this._handlers.slice();
      this._handlers = [];
      cachedHandlers.forEach((handler) => {
        if (handler[0]) {
          return;
        }
        if (this._state === States.RESOLVED) {
          handler[1](this._value);
        }
        if (this._state === States.REJECTED) {
          handler[2](this._value);
        }
        handler[0] = true;
      });
    };
  }
};

// node_modules/@sentry/utils/esm/url.js
function parseUrl(url) {
  if (!url) {
    return {};
  }
  const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) {
    return {};
  }
  const query = match[6] || "";
  const fragment = match[8] || "";
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    relative: match[5] + query + fragment
  };
}

// node_modules/@sentry/utils/esm/severity.js
var validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
function severityLevelFromString(level) {
  return level === "warn" ? "warning" : validSeverityLevels.includes(level) ? level : "log";
}

// node_modules/@sentry/utils/esm/time.js
var WINDOW4 = getGlobalObject();
var dateTimestampSource = {
  nowSeconds: () => Date.now() / 1e3
};
function getBrowserPerformance() {
  const { performance } = WINDOW4;
  if (!performance || !performance.now) {
    return void 0;
  }
  const timeOrigin = Date.now() - performance.now();
  return {
    now: () => performance.now(),
    timeOrigin
  };
}
function getNodePerformance() {
  try {
    const perfHooks = dynamicRequire(module, "perf_hooks");
    return perfHooks.performance;
  } catch (_) {
    return void 0;
  }
}
var platformPerformance = isNodeEnv() ? getNodePerformance() : getBrowserPerformance();
var timestampSource = platformPerformance === void 0 ? dateTimestampSource : {
  nowSeconds: () => (platformPerformance.timeOrigin + platformPerformance.now()) / 1e3
};
var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
var timestampWithMs = timestampInSeconds;
var _browserPerformanceTimeOriginMode;
var browserPerformanceTimeOrigin = (() => {
  const { performance } = WINDOW4;
  if (!performance || !performance.now) {
    _browserPerformanceTimeOriginMode = "none";
    return void 0;
  }
  const threshold = 3600 * 1e3;
  const performanceNow = performance.now();
  const dateNow = Date.now();
  const timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
  const timeOriginIsReliable = timeOriginDelta < threshold;
  const navigationStart = performance.timing && performance.timing.navigationStart;
  const hasNavigationStart = typeof navigationStart === "number";
  const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
  const navigationStartIsReliable = navigationStartDelta < threshold;
  if (timeOriginIsReliable || navigationStartIsReliable) {
    if (timeOriginDelta <= navigationStartDelta) {
      _browserPerformanceTimeOriginMode = "timeOrigin";
      return performance.timeOrigin;
    } else {
      _browserPerformanceTimeOriginMode = "navigationStart";
      return navigationStart;
    }
  }
  _browserPerformanceTimeOriginMode = "dateNow";
  return dateNow;
})();

// node_modules/@sentry/core/esm/session.js
function makeSession(context) {
  const startingTime = timestampInSeconds();
  const session = {
    sid: uuid4(),
    init: true,
    timestamp: startingTime,
    started: startingTime,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => sessionToJSON(session)
  };
  if (context) {
    updateSession(session, context);
  }
  return session;
}
function updateSession(session, context = {}) {
  if (context.user) {
    if (!session.ipAddress && context.user.ip_address) {
      session.ipAddress = context.user.ip_address;
    }
    if (!session.did && !context.did) {
      session.did = context.user.id || context.user.email || context.user.username;
    }
  }
  session.timestamp = context.timestamp || timestampInSeconds();
  if (context.ignoreDuration) {
    session.ignoreDuration = context.ignoreDuration;
  }
  if (context.sid) {
    session.sid = context.sid.length === 32 ? context.sid : uuid4();
  }
  if (context.init !== void 0) {
    session.init = context.init;
  }
  if (!session.did && context.did) {
    session.did = `${context.did}`;
  }
  if (typeof context.started === "number") {
    session.started = context.started;
  }
  if (session.ignoreDuration) {
    session.duration = void 0;
  } else if (typeof context.duration === "number") {
    session.duration = context.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context.release) {
    session.release = context.release;
  }
  if (context.environment) {
    session.environment = context.environment;
  }
  if (!session.ipAddress && context.ipAddress) {
    session.ipAddress = context.ipAddress;
  }
  if (!session.userAgent && context.userAgent) {
    session.userAgent = context.userAgent;
  }
  if (typeof context.errors === "number") {
    session.errors = context.errors;
  }
  if (context.status) {
    session.status = context.status;
  }
}
function closeSession(session, status) {
  let context = {};
  if (status) {
    context = { status };
  } else if (session.status === "ok") {
    context = { status: "exited" };
  }
  updateSession(session, context);
}
function sessionToJSON(session) {
  return dropUndefinedKeys({
    sid: `${session.sid}`,
    init: session.init,
    started: new Date(session.started * 1e3).toISOString(),
    timestamp: new Date(session.timestamp * 1e3).toISOString(),
    status: session.status,
    errors: session.errors,
    did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
    duration: session.duration,
    attrs: {
      release: session.release,
      environment: session.environment,
      ip_address: session.ipAddress,
      user_agent: session.userAgent
    }
  });
}

// node_modules/@sentry/core/esm/scope.js
var DEFAULT_MAX_BREADCRUMBS = 100;
var Scope = class {
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
  }
  static clone(scope) {
    const newScope = new Scope();
    if (scope) {
      newScope._breadcrumbs = [...scope._breadcrumbs];
      newScope._tags = { ...scope._tags };
      newScope._extra = { ...scope._extra };
      newScope._contexts = { ...scope._contexts };
      newScope._user = scope._user;
      newScope._level = scope._level;
      newScope._span = scope._span;
      newScope._session = scope._session;
      newScope._transactionName = scope._transactionName;
      newScope._fingerprint = scope._fingerprint;
      newScope._eventProcessors = [...scope._eventProcessors];
      newScope._requestSession = scope._requestSession;
      newScope._attachments = [...scope._attachments];
      newScope._sdkProcessingMetadata = { ...scope._sdkProcessingMetadata };
    }
    return newScope;
  }
  addScopeListener(callback) {
    this._scopeListeners.push(callback);
  }
  addEventProcessor(callback) {
    this._eventProcessors.push(callback);
    return this;
  }
  setUser(user) {
    this._user = user || {};
    if (this._session) {
      updateSession(this._session, { user });
    }
    this._notifyScopeListeners();
    return this;
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(requestSession) {
    this._requestSession = requestSession;
    return this;
  }
  setTags(tags) {
    this._tags = {
      ...this._tags,
      ...tags
    };
    this._notifyScopeListeners();
    return this;
  }
  setTag(key, value) {
    this._tags = { ...this._tags, [key]: value };
    this._notifyScopeListeners();
    return this;
  }
  setExtras(extras) {
    this._extra = {
      ...this._extra,
      ...extras
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtra(key, extra) {
    this._extra = { ...this._extra, [key]: extra };
    this._notifyScopeListeners();
    return this;
  }
  setFingerprint(fingerprint) {
    this._fingerprint = fingerprint;
    this._notifyScopeListeners();
    return this;
  }
  setLevel(level) {
    this._level = level;
    this._notifyScopeListeners();
    return this;
  }
  setTransactionName(name) {
    this._transactionName = name;
    this._notifyScopeListeners();
    return this;
  }
  setContext(key, context) {
    if (context === null) {
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }
    this._notifyScopeListeners();
    return this;
  }
  setSpan(span) {
    this._span = span;
    this._notifyScopeListeners();
    return this;
  }
  getSpan() {
    return this._span;
  }
  getTransaction() {
    const span = this.getSpan();
    return span && span.transaction;
  }
  setSession(session) {
    if (!session) {
      delete this._session;
    } else {
      this._session = session;
    }
    this._notifyScopeListeners();
    return this;
  }
  getSession() {
    return this._session;
  }
  update(captureContext) {
    if (!captureContext) {
      return this;
    }
    if (typeof captureContext === "function") {
      const updatedScope = captureContext(this);
      return updatedScope instanceof Scope ? updatedScope : this;
    }
    if (captureContext instanceof Scope) {
      this._tags = { ...this._tags, ...captureContext._tags };
      this._extra = { ...this._extra, ...captureContext._extra };
      this._contexts = { ...this._contexts, ...captureContext._contexts };
      if (captureContext._user && Object.keys(captureContext._user).length) {
        this._user = captureContext._user;
      }
      if (captureContext._level) {
        this._level = captureContext._level;
      }
      if (captureContext._fingerprint) {
        this._fingerprint = captureContext._fingerprint;
      }
      if (captureContext._requestSession) {
        this._requestSession = captureContext._requestSession;
      }
    } else if (isPlainObject(captureContext)) {
      captureContext = captureContext;
      this._tags = { ...this._tags, ...captureContext.tags };
      this._extra = { ...this._extra, ...captureContext.extra };
      this._contexts = { ...this._contexts, ...captureContext.contexts };
      if (captureContext.user) {
        this._user = captureContext.user;
      }
      if (captureContext.level) {
        this._level = captureContext.level;
      }
      if (captureContext.fingerprint) {
        this._fingerprint = captureContext.fingerprint;
      }
      if (captureContext.requestSession) {
        this._requestSession = captureContext.requestSession;
      }
    }
    return this;
  }
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = void 0;
    this._transactionName = void 0;
    this._fingerprint = void 0;
    this._requestSession = void 0;
    this._span = void 0;
    this._session = void 0;
    this._notifyScopeListeners();
    this._attachments = [];
    return this;
  }
  addBreadcrumb(breadcrumb, maxBreadcrumbs) {
    const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
    if (maxCrumbs <= 0) {
      return this;
    }
    const mergedBreadcrumb = {
      timestamp: dateTimestampInSeconds(),
      ...breadcrumb
    };
    this._breadcrumbs = [...this._breadcrumbs, mergedBreadcrumb].slice(-maxCrumbs);
    this._notifyScopeListeners();
    return this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  addAttachment(attachment) {
    this._attachments.push(attachment);
    return this;
  }
  getAttachments() {
    return this._attachments;
  }
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  applyToEvent(event, hint = {}) {
    if (this._extra && Object.keys(this._extra).length) {
      event.extra = { ...this._extra, ...event.extra };
    }
    if (this._tags && Object.keys(this._tags).length) {
      event.tags = { ...this._tags, ...event.tags };
    }
    if (this._user && Object.keys(this._user).length) {
      event.user = { ...this._user, ...event.user };
    }
    if (this._contexts && Object.keys(this._contexts).length) {
      event.contexts = { ...this._contexts, ...event.contexts };
    }
    if (this._level) {
      event.level = this._level;
    }
    if (this._transactionName) {
      event.transaction = this._transactionName;
    }
    if (this._span) {
      event.contexts = { trace: this._span.getTraceContext(), ...event.contexts };
      const transactionName = this._span.transaction && this._span.transaction.name;
      if (transactionName) {
        event.tags = { transaction: transactionName, ...event.tags };
      }
    }
    this._applyFingerprint(event);
    event.breadcrumbs = [...event.breadcrumbs || [], ...this._breadcrumbs];
    event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : void 0;
    event.sdkProcessingMetadata = { ...event.sdkProcessingMetadata, ...this._sdkProcessingMetadata };
    return this._notifyEventProcessors([...getGlobalEventProcessors(), ...this._eventProcessors], event, hint);
  }
  setSDKProcessingMetadata(newData) {
    this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...newData };
    return this;
  }
  _notifyEventProcessors(processors, event, hint, index = 0) {
    return new SyncPromise((resolve, reject) => {
      const processor = processors[index];
      if (event === null || typeof processor !== "function") {
        resolve(event);
      } else {
        const result = processor({ ...event }, hint);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && processor.id && result === null && logger.log(`Event processor "${processor.id}" dropped event`);
        if (isThenable(result)) {
          void result.then((final) => this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
        } else {
          void this._notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
        }
      }
    });
  }
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach((callback) => {
        callback(this);
      });
      this._notifyingListeners = false;
    }
  }
  _applyFingerprint(event) {
    event.fingerprint = event.fingerprint ? arrayify(event.fingerprint) : [];
    if (this._fingerprint) {
      event.fingerprint = event.fingerprint.concat(this._fingerprint);
    }
    if (event.fingerprint && !event.fingerprint.length) {
      delete event.fingerprint;
    }
  }
};
function getGlobalEventProcessors() {
  return getGlobalSingleton("globalEventProcessors", () => []);
}
function addGlobalEventProcessor(callback) {
  getGlobalEventProcessors().push(callback);
}

// node_modules/@sentry/core/esm/hub.js
var API_VERSION = 4;
var DEFAULT_BREADCRUMBS = 100;
var Hub = class {
  __init() {
    this._stack = [{}];
  }
  constructor(client, scope = new Scope(), _version = API_VERSION) {
    ;
    this._version = _version;
    Hub.prototype.__init.call(this);
    this.getStackTop().scope = scope;
    if (client) {
      this.bindClient(client);
    }
  }
  isOlderThan(version2) {
    return this._version < version2;
  }
  bindClient(client) {
    const top = this.getStackTop();
    top.client = client;
    if (client && client.setupIntegrations) {
      client.setupIntegrations();
    }
  }
  pushScope() {
    const scope = Scope.clone(this.getScope());
    this.getStack().push({
      client: this.getClient(),
      scope
    });
    return scope;
  }
  popScope() {
    if (this.getStack().length <= 1)
      return false;
    return !!this.getStack().pop();
  }
  withScope(callback) {
    const scope = this.pushScope();
    try {
      callback(scope);
    } finally {
      this.popScope();
    }
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getStack() {
    return this._stack;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  captureException(exception, hint) {
    const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
    const syntheticException = new Error("Sentry syntheticException");
    this._withClient((client, scope) => {
      client.captureException(
        exception,
        {
          originalException: exception,
          syntheticException,
          ...hint,
          event_id: eventId
        },
        scope
      );
    });
    return eventId;
  }
  captureMessage(message, level, hint) {
    const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
    const syntheticException = new Error(message);
    this._withClient((client, scope) => {
      client.captureMessage(
        message,
        level,
        {
          originalException: message,
          syntheticException,
          ...hint,
          event_id: eventId
        },
        scope
      );
    });
    return eventId;
  }
  captureEvent(event, hint) {
    const eventId = hint && hint.event_id ? hint.event_id : uuid4();
    if (event.type !== "transaction") {
      this._lastEventId = eventId;
    }
    this._withClient((client, scope) => {
      client.captureEvent(event, { ...hint, event_id: eventId }, scope);
    });
    return eventId;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addBreadcrumb(breadcrumb, hint) {
    const { scope, client } = this.getStackTop();
    if (!scope || !client)
      return;
    const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions && client.getOptions() || {};
    if (maxBreadcrumbs <= 0)
      return;
    const timestamp = dateTimestampInSeconds();
    const mergedBreadcrumb = { timestamp, ...breadcrumb };
    const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
    if (finalBreadcrumb === null)
      return;
    scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
  }
  setUser(user) {
    const scope = this.getScope();
    if (scope)
      scope.setUser(user);
  }
  setTags(tags) {
    const scope = this.getScope();
    if (scope)
      scope.setTags(tags);
  }
  setExtras(extras) {
    const scope = this.getScope();
    if (scope)
      scope.setExtras(extras);
  }
  setTag(key, value) {
    const scope = this.getScope();
    if (scope)
      scope.setTag(key, value);
  }
  setExtra(key, extra) {
    const scope = this.getScope();
    if (scope)
      scope.setExtra(key, extra);
  }
  setContext(name, context) {
    const scope = this.getScope();
    if (scope)
      scope.setContext(name, context);
  }
  configureScope(callback) {
    const { scope, client } = this.getStackTop();
    if (scope && client) {
      callback(scope);
    }
  }
  run(callback) {
    const oldHub = makeMain(this);
    try {
      callback(this);
    } finally {
      makeMain(oldHub);
    }
  }
  getIntegration(integration) {
    const client = this.getClient();
    if (!client)
      return null;
    try {
      return client.getIntegration(integration);
    } catch (_oO) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
      return null;
    }
  }
  startTransaction(context, customSamplingContext) {
    return this._callExtensionMethod("startTransaction", context, customSamplingContext);
  }
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  captureSession(endSession = false) {
    if (endSession) {
      return this.endSession();
    }
    this._sendSessionUpdate();
  }
  endSession() {
    const layer = this.getStackTop();
    const scope = layer && layer.scope;
    const session = scope && scope.getSession();
    if (session) {
      closeSession(session);
    }
    this._sendSessionUpdate();
    if (scope) {
      scope.setSession();
    }
  }
  startSession(context) {
    const { scope, client } = this.getStackTop();
    const { release, environment } = client && client.getOptions() || {};
    const { userAgent } = GLOBAL_OBJ.navigator || {};
    const session = makeSession({
      release,
      environment,
      ...scope && { user: scope.getUser() },
      ...userAgent && { userAgent },
      ...context
    });
    if (scope) {
      const currentSession = scope.getSession && scope.getSession();
      if (currentSession && currentSession.status === "ok") {
        updateSession(currentSession, { status: "exited" });
      }
      this.endSession();
      scope.setSession(session);
    }
    return session;
  }
  shouldSendDefaultPii() {
    const client = this.getClient();
    const options = client && client.getOptions();
    return Boolean(options && options.sendDefaultPii);
  }
  _sendSessionUpdate() {
    const { scope, client } = this.getStackTop();
    if (!scope)
      return;
    const session = scope.getSession();
    if (session) {
      if (client && client.captureSession) {
        client.captureSession(session);
      }
    }
  }
  _withClient(callback) {
    const { scope, client } = this.getStackTop();
    if (client) {
      callback(client, scope);
    }
  }
  _callExtensionMethod(method, ...args) {
    const carrier = getMainCarrier();
    const sentry = carrier.__SENTRY__;
    if (sentry && sentry.extensions && typeof sentry.extensions[method] === "function") {
      return sentry.extensions[method].apply(this, args);
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Extension method ${method} couldn't be found, doing nothing.`);
  }
};
function getMainCarrier() {
  GLOBAL_OBJ.__SENTRY__ = GLOBAL_OBJ.__SENTRY__ || {
    extensions: {},
    hub: void 0
  };
  return GLOBAL_OBJ;
}
function makeMain(hub) {
  const registry = getMainCarrier();
  const oldHub = getHubFromCarrier(registry);
  setHubOnCarrier(registry, hub);
  return oldHub;
}
function getCurrentHub() {
  const registry = getMainCarrier();
  if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
    setHubOnCarrier(registry, new Hub());
  }
  if (isNodeEnv()) {
    return getHubFromActiveDomain(registry);
  }
  return getHubFromCarrier(registry);
}
function getHubFromActiveDomain(registry) {
  try {
    const sentry = getMainCarrier().__SENTRY__;
    const activeDomain = sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
    if (!activeDomain) {
      return getHubFromCarrier(registry);
    }
    if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
      const registryHubTopStack = getHubFromCarrier(registry).getStackTop();
      setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, Scope.clone(registryHubTopStack.scope)));
    }
    return getHubFromCarrier(activeDomain);
  } catch (_Oo) {
    return getHubFromCarrier(registry);
  }
}
function hasHubOnCarrier(carrier) {
  return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}
function getHubFromCarrier(carrier) {
  return getGlobalSingleton("hub", () => new Hub(), carrier);
}
function setHubOnCarrier(carrier, hub) {
  if (!carrier)
    return false;
  const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  __SENTRY__.hub = hub;
  return true;
}

// node_modules/@sentry/core/esm/exports.js
function captureException(exception, captureContext) {
  return getCurrentHub().captureException(exception, { captureContext });
}
function withScope(callback) {
  getCurrentHub().withScope(callback);
}

// node_modules/@sentry/core/esm/api.js
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
  const port = dsn.port ? `:${dsn.port}` : "";
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
function getReportDialogEndpoint(dsnLike, dialogOptions) {
  const dsn = makeDsn(dsnLike);
  const endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;
  let encodedOptions = `dsn=${dsnToString(dsn)}`;
  for (const key in dialogOptions) {
    if (key === "dsn") {
      continue;
    }
    if (key === "user") {
      const user = dialogOptions.user;
      if (!user) {
        continue;
      }
      if (user.name) {
        encodedOptions += `&name=${encodeURIComponent(user.name)}`;
      }
      if (user.email) {
        encodedOptions += `&email=${encodeURIComponent(user.email)}`;
      }
    } else {
      encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key])}`;
    }
  }
  return `${endpoint}?${encodedOptions}`;
}

// node_modules/@sentry/core/esm/integrations/index.js
var integrations_exports = {};
__export(integrations_exports, {
  FunctionToString: () => FunctionToString,
  InboundFilters: () => InboundFilters
});

// node_modules/@sentry/core/esm/integrations/functiontostring.js
var originalFunctionToString;
var FunctionToString = class {
  constructor() {
    FunctionToString.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "FunctionToString";
  }
  __init() {
    this.name = FunctionToString.id;
  }
  setupOnce() {
    originalFunctionToString = Function.prototype.toString;
    Function.prototype.toString = function(...args) {
      const context = getOriginalFunction(this) || this;
      return originalFunctionToString.apply(context, args);
    };
  }
};
FunctionToString.__initStatic();

// node_modules/@sentry/core/esm/integrations/inboundfilters.js
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
var InboundFilters = class {
  static __initStatic() {
    this.id = "InboundFilters";
  }
  __init() {
    this.name = InboundFilters.id;
  }
  constructor(_options = {}) {
    ;
    this._options = _options;
    InboundFilters.prototype.__init.call(this);
  }
  setupOnce(addGlobalEventProcessor2, getCurrentHub2) {
    const eventProcess = (event) => {
      const hub = getCurrentHub2();
      if (hub) {
        const self2 = hub.getIntegration(InboundFilters);
        if (self2) {
          const client = hub.getClient();
          const clientOptions = client ? client.getOptions() : {};
          const options = _mergeOptions(self2._options, clientOptions);
          return _shouldDropEvent(event, options) ? null : event;
        }
      }
      return event;
    };
    eventProcess.id = this.name;
    addGlobalEventProcessor2(eventProcess);
  }
};
InboundFilters.__initStatic();
function _mergeOptions(internalOptions = {}, clientOptions = {}) {
  return {
    allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
    denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
    ignoreErrors: [
      ...internalOptions.ignoreErrors || [],
      ...clientOptions.ignoreErrors || [],
      ...DEFAULT_IGNORE_ERRORS
    ],
    ignoreInternal: internalOptions.ignoreInternal !== void 0 ? internalOptions.ignoreInternal : true
  };
}
function _shouldDropEvent(event, options) {
  if (options.ignoreInternal && _isSentryError(event)) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${getEventDescription(event)}`);
    return true;
  }
  if (_isIgnoredError(event, options.ignoreErrors)) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
      `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`
    );
    return true;
  }
  if (_isDeniedUrl(event, options.denyUrls)) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
      `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(
        event
      )}.
Url: ${_getEventFilterUrl(event)}`
    );
    return true;
  }
  if (!_isAllowedUrl(event, options.allowUrls)) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
      `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(
        event
      )}.
Url: ${_getEventFilterUrl(event)}`
    );
    return true;
  }
  return false;
}
function _isIgnoredError(event, ignoreErrors) {
  if (!ignoreErrors || !ignoreErrors.length) {
    return false;
  }
  return _getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
}
function _isDeniedUrl(event, denyUrls) {
  if (!denyUrls || !denyUrls.length) {
    return false;
  }
  const url = _getEventFilterUrl(event);
  return !url ? false : stringMatchesSomePattern(url, denyUrls);
}
function _isAllowedUrl(event, allowUrls) {
  if (!allowUrls || !allowUrls.length) {
    return true;
  }
  const url = _getEventFilterUrl(event);
  return !url ? true : stringMatchesSomePattern(url, allowUrls);
}
function _getPossibleEventMessages(event) {
  if (event.message) {
    return [event.message];
  }
  if (event.exception) {
    try {
      const { type = "", value = "" } = event.exception.values && event.exception.values[0] || {};
      return [`${value}`, `${type}: ${value}`];
    } catch (oO) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(`Cannot extract message for event ${getEventDescription(event)}`);
      return [];
    }
  }
  return [];
}
function _isSentryError(event) {
  try {
    return event.exception.values[0].type === "SentryError";
  } catch (e) {
  }
  return false;
}
function _getLastValidUrl(frames = []) {
  for (let i = frames.length - 1; i >= 0; i--) {
    const frame = frames[i];
    if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
      return frame.filename || null;
    }
  }
  return null;
}
function _getEventFilterUrl(event) {
  try {
    let frames;
    try {
      frames = event.exception.values[0].stacktrace.frames;
    } catch (e) {
    }
    return frames ? _getLastValidUrl(frames) : null;
  } catch (oO) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
    return null;
  }
}

// node_modules/@sentry/browser/esm/helpers.js
var WINDOW5 = GLOBAL_OBJ;
var ignoreOnError = 0;
function shouldIgnoreOnError() {
  return ignoreOnError > 0;
}
function ignoreNextOnError() {
  ignoreOnError++;
  setTimeout(() => {
    ignoreOnError--;
  });
}
function wrap(fn, options = {}, before) {
  if (typeof fn !== "function") {
    return fn;
  }
  try {
    const wrapper = fn.__sentry_wrapped__;
    if (wrapper) {
      return wrapper;
    }
    if (getOriginalFunction(fn)) {
      return fn;
    }
  } catch (e) {
    return fn;
  }
  const sentryWrapped = function() {
    const args = Array.prototype.slice.call(arguments);
    try {
      if (before && typeof before === "function") {
        before.apply(this, arguments);
      }
      const wrappedArguments = args.map((arg) => wrap(arg, options));
      return fn.apply(this, wrappedArguments);
    } catch (ex) {
      ignoreNextOnError();
      withScope((scope) => {
        scope.addEventProcessor((event) => {
          if (options.mechanism) {
            addExceptionTypeValue(event, void 0, void 0);
            addExceptionMechanism(event, options.mechanism);
          }
          event.extra = {
            ...event.extra,
            arguments: args
          };
          return event;
        });
        captureException(ex);
      });
      throw ex;
    }
  };
  try {
    for (const property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        sentryWrapped[property] = fn[property];
      }
    }
  } catch (_oO) {
  }
  markFunctionWrapped(sentryWrapped, fn);
  addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
  try {
    const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
    if (descriptor.configurable) {
      Object.defineProperty(sentryWrapped, "name", {
        get() {
          return fn.name;
        }
      });
    }
  } catch (_oO) {
  }
  return sentryWrapped;
}

// node_modules/@sentry/browser/esm/eventbuilder.js
function exceptionFromError(stackParser, ex) {
  const frames = parseStackFrames(stackParser, ex);
  const exception = {
    type: ex && ex.name,
    value: extractMessage(ex)
  };
  if (frames.length) {
    exception.stacktrace = { frames };
  }
  if (exception.type === void 0 && exception.value === "") {
    exception.value = "Unrecoverable error caught";
  }
  return exception;
}
function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
  const hub = getCurrentHub();
  const client = hub.getClient();
  const normalizeDepth = client && client.getOptions().normalizeDepth;
  const event = {
    exception: {
      values: [
        {
          type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
          value: `Non-Error ${isUnhandledRejection ? "promise rejection" : "exception"} captured with keys: ${extractExceptionKeysForMessage(exception)}`
        }
      ]
    },
    extra: {
      __serialized__: normalizeToSize(exception, normalizeDepth)
    }
  };
  if (syntheticException) {
    const frames = parseStackFrames(stackParser, syntheticException);
    if (frames.length) {
      event.exception.values[0].stacktrace = { frames };
    }
  }
  return event;
}
function eventFromError(stackParser, ex) {
  return {
    exception: {
      values: [exceptionFromError(stackParser, ex)]
    }
  };
}
function parseStackFrames(stackParser, ex) {
  const stacktrace = ex.stacktrace || ex.stack || "";
  const popSize = getPopSize(ex);
  try {
    return stackParser(stacktrace, popSize);
  } catch (e) {
  }
  return [];
}
var reactMinifiedRegexp = /Minified React error #\d+;/i;
function getPopSize(ex) {
  if (ex) {
    if (typeof ex.framesToPop === "number") {
      return ex.framesToPop;
    }
    if (reactMinifiedRegexp.test(ex.message)) {
      return 1;
    }
  }
  return 0;
}
function extractMessage(ex) {
  const message = ex && ex.message;
  if (!message) {
    return "No error message";
  }
  if (message.error && typeof message.error.message === "string") {
    return message.error.message;
  }
  return message;
}
function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
  let event;
  if (isErrorEvent(exception) && exception.error) {
    const errorEvent = exception;
    return eventFromError(stackParser, errorEvent.error);
  }
  if (isDOMError(exception) || isDOMException(exception)) {
    const domException = exception;
    if ("stack" in exception) {
      event = eventFromError(stackParser, exception);
    } else {
      const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
      const message = domException.message ? `${name}: ${domException.message}` : name;
      event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
      addExceptionTypeValue(event, message);
    }
    if ("code" in domException) {
      event.tags = { ...event.tags, "DOMException.code": `${domException.code}` };
    }
    return event;
  }
  if (isError(exception)) {
    return eventFromError(stackParser, exception);
  }
  if (isPlainObject(exception) || isEvent(exception)) {
    const objectException = exception;
    event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
    addExceptionMechanism(event, {
      synthetic: true
    });
    return event;
  }
  event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
  addExceptionTypeValue(event, `${exception}`, void 0);
  addExceptionMechanism(event, {
    synthetic: true
  });
  return event;
}
function eventFromString(stackParser, input, syntheticException, attachStacktrace) {
  const event = {
    message: input
  };
  if (attachStacktrace && syntheticException) {
    const frames = parseStackFrames(stackParser, syntheticException);
    if (frames.length) {
      event.exception = {
        values: [{ value: input, stacktrace: { frames } }]
      };
    }
  }
  return event;
}

// node_modules/@sentry/browser/esm/integrations/breadcrumbs.js
var MAX_ALLOWED_STRING_LENGTH = 1024;
var BREADCRUMB_INTEGRATION_ID = "Breadcrumbs";
var Breadcrumbs = class {
  static __initStatic() {
    this.id = BREADCRUMB_INTEGRATION_ID;
  }
  __init() {
    this.name = Breadcrumbs.id;
  }
  constructor(options) {
    ;
    Breadcrumbs.prototype.__init.call(this);
    this.options = {
      console: true,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true,
      ...options
    };
  }
  setupOnce() {
    if (this.options.console) {
      addInstrumentationHandler("console", _consoleBreadcrumb);
    }
    if (this.options.dom) {
      addInstrumentationHandler("dom", _domBreadcrumb(this.options.dom));
    }
    if (this.options.xhr) {
      addInstrumentationHandler("xhr", _xhrBreadcrumb);
    }
    if (this.options.fetch) {
      addInstrumentationHandler("fetch", _fetchBreadcrumb);
    }
    if (this.options.history) {
      addInstrumentationHandler("history", _historyBreadcrumb);
    }
  }
  addSentryBreadcrumb(event) {
    if (this.options.sentry) {
      getCurrentHub().addBreadcrumb(
        {
          category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
          event_id: event.event_id,
          level: event.level,
          message: getEventDescription(event)
        },
        {
          event
        }
      );
    }
  }
};
Breadcrumbs.__initStatic();
function _domBreadcrumb(dom) {
  function _innerDomBreadcrumb(handlerData) {
    let target;
    let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
    let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
    if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`
      );
      maxStringLength = MAX_ALLOWED_STRING_LENGTH;
    }
    if (typeof keyAttrs === "string") {
      keyAttrs = [keyAttrs];
    }
    try {
      target = handlerData.event.target ? htmlTreeAsString(handlerData.event.target, { keyAttrs, maxStringLength }) : htmlTreeAsString(handlerData.event, { keyAttrs, maxStringLength });
    } catch (e) {
      target = "<unknown>";
    }
    if (target.length === 0) {
      return;
    }
    getCurrentHub().addBreadcrumb(
      {
        category: `ui.${handlerData.name}`,
        message: target
      },
      {
        event: handlerData.event,
        name: handlerData.name,
        global: handlerData.global
      }
    );
  }
  return _innerDomBreadcrumb;
}
function _consoleBreadcrumb(handlerData) {
  for (let i = 0; i < handlerData.args.length; i++) {
    if (handlerData.args[i] === "ref=Ref<") {
      handlerData.args[i + 1] = "viewRef";
      break;
    }
  }
  const breadcrumb = {
    category: "console",
    data: {
      arguments: handlerData.args,
      logger: "console"
    },
    level: severityLevelFromString(handlerData.level),
    message: safeJoin(handlerData.args, " ")
  };
  if (handlerData.level === "assert") {
    if (handlerData.args[0] === false) {
      breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), " ") || "console.assert"}`;
      breadcrumb.data.arguments = handlerData.args.slice(1);
    } else {
      return;
    }
  }
  getCurrentHub().addBreadcrumb(breadcrumb, {
    input: handlerData.args,
    level: handlerData.level
  });
}
function _xhrBreadcrumb(handlerData) {
  if (handlerData.endTimestamp) {
    if (handlerData.xhr.__sentry_own_request__) {
      return;
    }
    const { method, url, status_code, body } = handlerData.xhr.__sentry_xhr__ || {};
    getCurrentHub().addBreadcrumb(
      {
        category: "xhr",
        data: {
          method,
          url,
          status_code
        },
        type: "http"
      },
      {
        xhr: handlerData.xhr,
        input: body
      }
    );
    return;
  }
}
function _fetchBreadcrumb(handlerData) {
  if (!handlerData.endTimestamp) {
    return;
  }
  if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") {
    return;
  }
  if (handlerData.error) {
    getCurrentHub().addBreadcrumb(
      {
        category: "fetch",
        data: handlerData.fetchData,
        level: "error",
        type: "http"
      },
      {
        data: handlerData.error,
        input: handlerData.args
      }
    );
  } else {
    getCurrentHub().addBreadcrumb(
      {
        category: "fetch",
        data: {
          ...handlerData.fetchData,
          status_code: handlerData.response.status
        },
        type: "http"
      },
      {
        input: handlerData.args,
        response: handlerData.response
      }
    );
  }
}
function _historyBreadcrumb(handlerData) {
  let from = handlerData.from;
  let to = handlerData.to;
  const parsedLoc = parseUrl(WINDOW5.location.href);
  let parsedFrom = parseUrl(from);
  const parsedTo = parseUrl(to);
  if (!parsedFrom.path) {
    parsedFrom = parsedLoc;
  }
  if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
    to = parsedTo.relative;
  }
  if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
    from = parsedFrom.relative;
  }
  getCurrentHub().addBreadcrumb({
    category: "navigation",
    data: {
      from,
      to
    }
  });
}

// node_modules/@sentry/browser/esm/integrations/index.js
var integrations_exports2 = {};
__export(integrations_exports2, {
  Breadcrumbs: () => Breadcrumbs,
  Dedupe: () => Dedupe,
  GlobalHandlers: () => GlobalHandlers,
  HttpContext: () => HttpContext,
  LinkedErrors: () => LinkedErrors,
  TryCatch: () => TryCatch
});

// node_modules/@sentry/browser/esm/integrations/globalhandlers.js
var GlobalHandlers = class {
  static __initStatic() {
    this.id = "GlobalHandlers";
  }
  __init() {
    this.name = GlobalHandlers.id;
  }
  __init2() {
    this._installFunc = {
      onerror: _installGlobalOnErrorHandler,
      onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
    };
  }
  constructor(options) {
    ;
    GlobalHandlers.prototype.__init.call(this);
    GlobalHandlers.prototype.__init2.call(this);
    this._options = {
      onerror: true,
      onunhandledrejection: true,
      ...options
    };
  }
  setupOnce() {
    Error.stackTraceLimit = 50;
    const options = this._options;
    for (const key in options) {
      const installFunc = this._installFunc[key];
      if (installFunc && options[key]) {
        globalHandlerLog(key);
        installFunc();
        this._installFunc[key] = void 0;
      }
    }
  }
};
GlobalHandlers.__initStatic();
function _installGlobalOnErrorHandler() {
  addInstrumentationHandler(
    "error",
    (data) => {
      const [hub, stackParser, attachStacktrace] = getHubAndOptions();
      if (!hub.getIntegration(GlobalHandlers)) {
        return;
      }
      const { msg, url, line, column, error } = data;
      if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
        return;
      }
      const event = error === void 0 && isString(msg) ? _eventFromIncompleteOnError(msg, url, line, column) : _enhanceEventWithInitialFrame(
        eventFromUnknownInput(stackParser, error || msg, void 0, attachStacktrace, false),
        url,
        line,
        column
      );
      event.level = "error";
      addMechanismAndCapture(hub, error, event, "onerror");
    }
  );
}
function _installGlobalOnUnhandledRejectionHandler() {
  addInstrumentationHandler(
    "unhandledrejection",
    (e) => {
      const [hub, stackParser, attachStacktrace] = getHubAndOptions();
      if (!hub.getIntegration(GlobalHandlers)) {
        return;
      }
      let error = e;
      try {
        if ("reason" in e) {
          error = e.reason;
        } else if ("detail" in e && "reason" in e.detail) {
          error = e.detail.reason;
        }
      } catch (_oO) {
      }
      if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
        return true;
      }
      const event = isPrimitive(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput(stackParser, error, void 0, attachStacktrace, true);
      event.level = "error";
      addMechanismAndCapture(hub, error, event, "onunhandledrejection");
      return;
    }
  );
}
function _eventFromRejectionWithPrimitive(reason) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(reason)}`
        }
      ]
    }
  };
}
function _eventFromIncompleteOnError(msg, url, line, column) {
  const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  let message = isErrorEvent(msg) ? msg.message : msg;
  let name = "Error";
  const groups = message.match(ERROR_TYPES_RE);
  if (groups) {
    name = groups[1];
    message = groups[2];
  }
  const event = {
    exception: {
      values: [
        {
          type: name,
          value: message
        }
      ]
    }
  };
  return _enhanceEventWithInitialFrame(event, url, line, column);
}
function _enhanceEventWithInitialFrame(event, url, line, column) {
  const e = event.exception = event.exception || {};
  const ev = e.values = e.values || [];
  const ev0 = ev[0] = ev[0] || {};
  const ev0s = ev0.stacktrace = ev0.stacktrace || {};
  const ev0sf = ev0s.frames = ev0s.frames || [];
  const colno = isNaN(parseInt(column, 10)) ? void 0 : column;
  const lineno = isNaN(parseInt(line, 10)) ? void 0 : line;
  const filename = isString(url) && url.length > 0 ? url : getLocationHref();
  if (ev0sf.length === 0) {
    ev0sf.push({
      colno,
      filename,
      function: "?",
      in_app: true,
      lineno
    });
  }
  return event;
}
function globalHandlerLog(type) {
  (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Global Handler attached: ${type}`);
}
function addMechanismAndCapture(hub, error, event, type) {
  addExceptionMechanism(event, {
    handled: false,
    type
  });
  hub.captureEvent(event, {
    originalException: error
  });
}
function getHubAndOptions() {
  const hub = getCurrentHub();
  const client = hub.getClient();
  const options = client && client.getOptions() || {
    stackParser: () => [],
    attachStacktrace: false
  };
  return [hub, options.stackParser, options.attachStacktrace];
}

// node_modules/@sentry/browser/esm/integrations/trycatch.js
var DEFAULT_EVENT_TARGET = [
  "EventTarget",
  "Window",
  "Node",
  "ApplicationCache",
  "AudioTrackList",
  "ChannelMergerNode",
  "CryptoOperation",
  "EventSource",
  "FileReader",
  "HTMLUnknownElement",
  "IDBDatabase",
  "IDBRequest",
  "IDBTransaction",
  "KeyOperation",
  "MediaController",
  "MessagePort",
  "ModalWindow",
  "Notification",
  "SVGElementInstance",
  "Screen",
  "TextTrack",
  "TextTrackCue",
  "TextTrackList",
  "WebSocket",
  "WebSocketWorker",
  "Worker",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload"
];
var TryCatch = class {
  static __initStatic() {
    this.id = "TryCatch";
  }
  __init() {
    this.name = TryCatch.id;
  }
  constructor(options) {
    ;
    TryCatch.prototype.__init.call(this);
    this._options = {
      XMLHttpRequest: true,
      eventTarget: true,
      requestAnimationFrame: true,
      setInterval: true,
      setTimeout: true,
      ...options
    };
  }
  setupOnce() {
    if (this._options.setTimeout) {
      fill(WINDOW5, "setTimeout", _wrapTimeFunction);
    }
    if (this._options.setInterval) {
      fill(WINDOW5, "setInterval", _wrapTimeFunction);
    }
    if (this._options.requestAnimationFrame) {
      fill(WINDOW5, "requestAnimationFrame", _wrapRAF);
    }
    if (this._options.XMLHttpRequest && "XMLHttpRequest" in WINDOW5) {
      fill(XMLHttpRequest.prototype, "send", _wrapXHR);
    }
    const eventTargetOption = this._options.eventTarget;
    if (eventTargetOption) {
      const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
      eventTarget.forEach(_wrapEventTarget);
    }
  }
};
TryCatch.__initStatic();
function _wrapTimeFunction(original) {
  return function(...args) {
    const originalCallback = args[0];
    args[0] = wrap(originalCallback, {
      mechanism: {
        data: { function: getFunctionName(original) },
        handled: true,
        type: "instrument"
      }
    });
    return original.apply(this, args);
  };
}
function _wrapRAF(original) {
  return function(callback) {
    return original.apply(this, [
      wrap(callback, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: getFunctionName(original)
          },
          handled: true,
          type: "instrument"
        }
      })
    ]);
  };
}
function _wrapXHR(originalSend) {
  return function(...args) {
    const xhr = this;
    const xmlHttpRequestProps = ["onload", "onerror", "onprogress", "onreadystatechange"];
    xmlHttpRequestProps.forEach((prop) => {
      if (prop in xhr && typeof xhr[prop] === "function") {
        fill(xhr, prop, function(original) {
          const wrapOptions = {
            mechanism: {
              data: {
                function: prop,
                handler: getFunctionName(original)
              },
              handled: true,
              type: "instrument"
            }
          };
          const originalFunction = getOriginalFunction(original);
          if (originalFunction) {
            wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
          }
          return wrap(original, wrapOptions);
        });
      }
    });
    return originalSend.apply(this, args);
  };
}
function _wrapEventTarget(target) {
  const globalObject = WINDOW5;
  const proto = globalObject[target] && globalObject[target].prototype;
  if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
    return;
  }
  fill(proto, "addEventListener", function(original) {
    return function(eventName, fn, options) {
      try {
        if (typeof fn.handleEvent === "function") {
          fn.handleEvent = wrap(fn.handleEvent, {
            mechanism: {
              data: {
                function: "handleEvent",
                handler: getFunctionName(fn),
                target
              },
              handled: true,
              type: "instrument"
            }
          });
        }
      } catch (err) {
      }
      return original.apply(this, [
        eventName,
        wrap(fn, {
          mechanism: {
            data: {
              function: "addEventListener",
              handler: getFunctionName(fn),
              target
            },
            handled: true,
            type: "instrument"
          }
        }),
        options
      ]);
    };
  });
  fill(
    proto,
    "removeEventListener",
    function(originalRemoveEventListener) {
      return function(eventName, fn, options) {
        const wrappedEventHandler = fn;
        try {
          const originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
          if (originalEventHandler) {
            originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
          }
        } catch (e) {
        }
        return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
      };
    }
  );
}

// node_modules/@sentry/browser/esm/integrations/linkederrors.js
var DEFAULT_KEY = "cause";
var DEFAULT_LIMIT = 5;
var LinkedErrors = class {
  static __initStatic() {
    this.id = "LinkedErrors";
  }
  __init() {
    this.name = LinkedErrors.id;
  }
  constructor(options = {}) {
    ;
    LinkedErrors.prototype.__init.call(this);
    this._key = options.key || DEFAULT_KEY;
    this._limit = options.limit || DEFAULT_LIMIT;
  }
  setupOnce() {
    const client = getCurrentHub().getClient();
    if (!client) {
      return;
    }
    addGlobalEventProcessor((event, hint) => {
      const self2 = getCurrentHub().getIntegration(LinkedErrors);
      return self2 ? _handler(client.getOptions().stackParser, self2._key, self2._limit, event, hint) : event;
    });
  }
};
LinkedErrors.__initStatic();
function _handler(parser, key, limit, event, hint) {
  if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
    return event;
  }
  const linkedErrors = _walkErrorTree(parser, limit, hint.originalException, key);
  event.exception.values = [...linkedErrors, ...event.exception.values];
  return event;
}
function _walkErrorTree(parser, limit, error, key, stack = []) {
  if (!isInstanceOf(error[key], Error) || stack.length + 1 >= limit) {
    return stack;
  }
  const exception = exceptionFromError(parser, error[key]);
  return _walkErrorTree(parser, limit, error[key], key, [exception, ...stack]);
}

// node_modules/@sentry/browser/esm/integrations/httpcontext.js
var HttpContext = class {
  constructor() {
    HttpContext.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "HttpContext";
  }
  __init() {
    this.name = HttpContext.id;
  }
  setupOnce() {
    addGlobalEventProcessor((event) => {
      if (getCurrentHub().getIntegration(HttpContext)) {
        if (!WINDOW5.navigator && !WINDOW5.location && !WINDOW5.document) {
          return event;
        }
        const url = event.request && event.request.url || WINDOW5.location && WINDOW5.location.href;
        const { referrer } = WINDOW5.document || {};
        const { userAgent } = WINDOW5.navigator || {};
        const headers = {
          ...event.request && event.request.headers,
          ...referrer && { Referer: referrer },
          ...userAgent && { "User-Agent": userAgent }
        };
        const request = { ...url && { url }, headers };
        return { ...event, request };
      }
      return event;
    });
  }
};
HttpContext.__initStatic();

// node_modules/@sentry/browser/esm/integrations/dedupe.js
var Dedupe = class {
  constructor() {
    Dedupe.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "Dedupe";
  }
  __init() {
    this.name = Dedupe.id;
  }
  setupOnce(addGlobalEventProcessor2, getCurrentHub2) {
    const eventProcessor = (currentEvent) => {
      const self2 = getCurrentHub2().getIntegration(Dedupe);
      if (self2) {
        try {
          if (_shouldDropEvent2(currentEvent, self2._previousEvent)) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Event dropped due to being a duplicate of previously captured event.");
            return null;
          }
        } catch (_oO) {
          return self2._previousEvent = currentEvent;
        }
        return self2._previousEvent = currentEvent;
      }
      return currentEvent;
    };
    eventProcessor.id = this.name;
    addGlobalEventProcessor2(eventProcessor);
  }
};
Dedupe.__initStatic();
function _shouldDropEvent2(currentEvent, previousEvent) {
  if (!previousEvent) {
    return false;
  }
  if (_isSameMessageEvent(currentEvent, previousEvent)) {
    return true;
  }
  if (_isSameExceptionEvent(currentEvent, previousEvent)) {
    return true;
  }
  return false;
}
function _isSameMessageEvent(currentEvent, previousEvent) {
  const currentMessage = currentEvent.message;
  const previousMessage = previousEvent.message;
  if (!currentMessage && !previousMessage) {
    return false;
  }
  if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
    return false;
  }
  if (currentMessage !== previousMessage) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
function _isSameExceptionEvent(currentEvent, previousEvent) {
  const previousException = _getExceptionFromEvent(previousEvent);
  const currentException = _getExceptionFromEvent(currentEvent);
  if (!previousException || !currentException) {
    return false;
  }
  if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
function _isSameStacktrace(currentEvent, previousEvent) {
  let currentFrames = _getFramesFromEvent(currentEvent);
  let previousFrames = _getFramesFromEvent(previousEvent);
  if (!currentFrames && !previousFrames) {
    return true;
  }
  if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
    return false;
  }
  currentFrames = currentFrames;
  previousFrames = previousFrames;
  if (previousFrames.length !== currentFrames.length) {
    return false;
  }
  for (let i = 0; i < previousFrames.length; i++) {
    const frameA = previousFrames[i];
    const frameB = currentFrames[i];
    if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
      return false;
    }
  }
  return true;
}
function _isSameFingerprint(currentEvent, previousEvent) {
  let currentFingerprint = currentEvent.fingerprint;
  let previousFingerprint = previousEvent.fingerprint;
  if (!currentFingerprint && !previousFingerprint) {
    return true;
  }
  if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
    return false;
  }
  currentFingerprint = currentFingerprint;
  previousFingerprint = previousFingerprint;
  try {
    return !!(currentFingerprint.join("") === previousFingerprint.join(""));
  } catch (_oO) {
    return false;
  }
}
function _getExceptionFromEvent(event) {
  return event.exception && event.exception.values && event.exception.values[0];
}
function _getFramesFromEvent(event) {
  const exception = event.exception;
  if (exception) {
    try {
      return exception.values[0].stacktrace.frames;
    } catch (_oO) {
      return void 0;
    }
  }
  return void 0;
}

// node_modules/@sentry/browser/esm/sdk.js
var defaultIntegrations = [
  new integrations_exports.InboundFilters(),
  new integrations_exports.FunctionToString(),
  new TryCatch(),
  new Breadcrumbs(),
  new GlobalHandlers(),
  new LinkedErrors(),
  new Dedupe(),
  new HttpContext()
];
function showReportDialog(options = {}, hub = getCurrentHub()) {
  if (!WINDOW5.document) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Global document not defined in showReportDialog call");
    return;
  }
  const { client, scope } = hub.getStackTop();
  const dsn = options.dsn || client && client.getDsn();
  if (!dsn) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("DSN not configured for showReportDialog call");
    return;
  }
  if (scope) {
    options.user = {
      ...scope.getUser(),
      ...options.user
    };
  }
  if (!options.eventId) {
    options.eventId = hub.lastEventId();
  }
  const script = WINDOW5.document.createElement("script");
  script.async = true;
  script.src = getReportDialogEndpoint(dsn, options);
  if (options.onLoad) {
    script.onload = options.onLoad;
  }
  const injectionPoint = WINDOW5.document.head || WINDOW5.document.body;
  if (injectionPoint) {
    injectionPoint.appendChild(script);
  } else {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Not injecting report dialog. No injection point found in HTML");
  }
}

// node_modules/@sentry/browser/esm/index.js
var windowIntegrations = {};
if (WINDOW5.Sentry && WINDOW5.Sentry.Integrations) {
  windowIntegrations = WINDOW5.Sentry.Integrations;
}
var INTEGRATIONS = {
  ...windowIntegrations,
  ...integrations_exports,
  ...integrations_exports2
};

// node_modules/@sentry/react/esm/errorboundary.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var React = __toESM(require_react());
var _jsxFileName = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/errorboundary.tsx";
function isAtLeastReact17(version2) {
  const major = version2.match(/^([^.]+)/);
  return major !== null && parseInt(major[0]) >= 17;
}
var UNKNOWN_COMPONENT = "unknown";
var INITIAL_STATE = {
  componentStack: null,
  error: null,
  eventId: null
};
var ErrorBoundary = class extends React.Component {
  constructor(...args) {
    super(...args);
    ErrorBoundary.prototype.__init.call(this);
    ErrorBoundary.prototype.__init2.call(this);
  }
  __init() {
    this.state = INITIAL_STATE;
  }
  componentDidCatch(error, { componentStack }) {
    const { beforeCapture, onError, showDialog, dialogOptions } = this.props;
    withScope((scope) => {
      if (isAtLeastReact17(React.version) && isError(error)) {
        const errorBoundaryError = new Error(error.message);
        errorBoundaryError.name = `React ErrorBoundary ${errorBoundaryError.name}`;
        errorBoundaryError.stack = componentStack;
        error.cause = errorBoundaryError;
      }
      if (beforeCapture) {
        beforeCapture(scope, error, componentStack);
      }
      const eventId = captureException(error, { contexts: { react: { componentStack } } });
      if (onError) {
        onError(error, componentStack, eventId);
      }
      if (showDialog) {
        showReportDialog({ ...dialogOptions, eventId });
      }
      this.setState({ error, componentStack, eventId });
    });
  }
  componentDidMount() {
    const { onMount } = this.props;
    if (onMount) {
      onMount();
    }
  }
  componentWillUnmount() {
    const { error, componentStack, eventId } = this.state;
    const { onUnmount } = this.props;
    if (onUnmount) {
      onUnmount(error, componentStack, eventId);
    }
  }
  __init2() {
    this.resetErrorBoundary = () => {
      const { onReset } = this.props;
      const { error, componentStack, eventId } = this.state;
      if (onReset) {
        onReset(error, componentStack, eventId);
      }
      this.setState(INITIAL_STATE);
    };
  }
  render() {
    const { fallback, children } = this.props;
    const { error, componentStack, eventId } = this.state;
    if (error) {
      let element = void 0;
      if (typeof fallback === "function") {
        element = fallback({ error, componentStack, resetError: this.resetErrorBoundary, eventId });
      } else {
        element = fallback;
      }
      if (React.isValidElement(element)) {
        return element;
      }
      if (fallback) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("fallback did not produce a valid ReactElement");
      }
      return null;
    }
    if (typeof children === "function") {
      return children();
    }
    return children;
  }
};
function withErrorBoundary(WrappedComponent, errorBoundaryOptions) {
  const componentDisplayName = WrappedComponent.displayName || WrappedComponent.name || UNKNOWN_COMPONENT;
  const Wrapped = (props) => React.createElement(
    ErrorBoundary,
    { ...errorBoundaryOptions, __self: this, __source: { fileName: _jsxFileName, lineNumber: 173 } },
    React.createElement(WrappedComponent, { ...props, __self: this, __source: { fileName: _jsxFileName, lineNumber: 174 } })
  );
  Wrapped.displayName = `errorBoundary(${componentDisplayName})`;
  (0, import_hoist_non_react_statics.default)(Wrapped, WrappedComponent);
  return Wrapped;
}

// node_modules/@sentry/remix/esm/performance/client.js
var React2 = __toESM(require_react());
var _jsxFileName2 = "/home/runner/work/sentry-javascript/sentry-javascript/packages/remix/src/performance/client.tsx";
var DEFAULT_TAGS = {
  "routing.instrumentation": "remix-router"
};
var activeTransaction;
var _useEffect;
var _useLocation;
var _useMatches;
var _customStartTransaction;
var _startTransactionOnLocationChange;
function withSentry(OrigApp, options = {
  wrapWithErrorBoundary: true,
  errorBoundaryOptions: {}
}) {
  const SentryRoot = (props) => {
    if (!_useEffect || !_useLocation || !_useMatches || !_customStartTransaction) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Remix SDK was unable to wrap your root because of one or more missing parameters.");
      return React2.createElement(OrigApp, { ...props, __self: this, __source: { fileName: _jsxFileName2, lineNumber: 107 } });
    }
    let isBaseLocation = false;
    const location = _useLocation();
    const matches = _useMatches();
    _useEffect(() => {
      if (activeTransaction && matches && matches.length) {
        activeTransaction.setName(matches[matches.length - 1].id, "route");
      }
      isBaseLocation = true;
    }, []);
    _useEffect(() => {
      if (isBaseLocation) {
        if (activeTransaction) {
          activeTransaction.finish();
        }
        return;
      }
      if (_startTransactionOnLocationChange && matches && matches.length) {
        if (activeTransaction) {
          activeTransaction.finish();
        }
        activeTransaction = _customStartTransaction({
          name: matches[matches.length - 1].id,
          op: "navigation",
          tags: DEFAULT_TAGS,
          metadata: {
            source: "route"
          }
        });
      }
    }, [location]);
    isBaseLocation = false;
    return React2.createElement(OrigApp, { ...props, __self: this, __source: { fileName: _jsxFileName2, lineNumber: 152 } });
  };
  if (options.wrapWithErrorBoundary) {
    return withErrorBoundary(SentryRoot, options.errorBoundaryOptions);
  }
  return SentryRoot;
}

// node_modules/@sentry/tracing/esm/utils.js
function hasTracingEnabled(maybeOptions) {
  const client = getCurrentHub().getClient();
  const options = maybeOptions || client && client.getOptions();
  return !!options && ("tracesSampleRate" in options || "tracesSampler" in options);
}
function getActiveTransaction(maybeHub) {
  const hub = maybeHub || getCurrentHub();
  const scope = hub.getScope();
  return scope && scope.getTransaction();
}

// node_modules/@sentry/tracing/esm/errors.js
function registerErrorInstrumentation() {
  addInstrumentationHandler("error", errorCallback);
  addInstrumentationHandler("unhandledrejection", errorCallback);
}
function errorCallback() {
  const activeTransaction2 = getActiveTransaction();
  if (activeTransaction2) {
    const status = "internal_error";
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Transaction: ${status} -> Global error occured`);
    activeTransaction2.setStatus(status);
  }
}

// node_modules/@sentry/tracing/esm/span.js
var SpanRecorder = class {
  __init() {
    this.spans = [];
  }
  constructor(maxlen = 1e3) {
    ;
    SpanRecorder.prototype.__init.call(this);
    this._maxlen = maxlen;
  }
  add(span) {
    if (this.spans.length > this._maxlen) {
      span.spanRecorder = void 0;
    } else {
      this.spans.push(span);
    }
  }
};
var Span = class {
  __init2() {
    this.traceId = uuid4();
  }
  __init3() {
    this.spanId = uuid4().substring(16);
  }
  __init4() {
    this.startTimestamp = timestampWithMs();
  }
  __init5() {
    this.tags = {};
  }
  __init6() {
    this.data = {};
  }
  __init7() {
    this.instrumenter = "sentry";
  }
  constructor(spanContext) {
    ;
    Span.prototype.__init2.call(this);
    Span.prototype.__init3.call(this);
    Span.prototype.__init4.call(this);
    Span.prototype.__init5.call(this);
    Span.prototype.__init6.call(this);
    Span.prototype.__init7.call(this);
    if (!spanContext) {
      return this;
    }
    if (spanContext.traceId) {
      this.traceId = spanContext.traceId;
    }
    if (spanContext.spanId) {
      this.spanId = spanContext.spanId;
    }
    if (spanContext.parentSpanId) {
      this.parentSpanId = spanContext.parentSpanId;
    }
    if ("sampled" in spanContext) {
      this.sampled = spanContext.sampled;
    }
    if (spanContext.op) {
      this.op = spanContext.op;
    }
    if (spanContext.description) {
      this.description = spanContext.description;
    }
    if (spanContext.data) {
      this.data = spanContext.data;
    }
    if (spanContext.tags) {
      this.tags = spanContext.tags;
    }
    if (spanContext.status) {
      this.status = spanContext.status;
    }
    if (spanContext.startTimestamp) {
      this.startTimestamp = spanContext.startTimestamp;
    }
    if (spanContext.endTimestamp) {
      this.endTimestamp = spanContext.endTimestamp;
    }
    if (spanContext.instrumenter) {
      this.instrumenter = spanContext.instrumenter;
    }
  }
  startChild(spanContext) {
    const childSpan = new Span({
      ...spanContext,
      parentSpanId: this.spanId,
      sampled: this.sampled,
      traceId: this.traceId
    });
    childSpan.spanRecorder = this.spanRecorder;
    if (childSpan.spanRecorder) {
      childSpan.spanRecorder.add(childSpan);
    }
    childSpan.transaction = this.transaction;
    if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && childSpan.transaction) {
      const opStr = spanContext && spanContext.op || "< unknown op >";
      const nameStr = childSpan.transaction.name || "< unknown name >";
      const idStr = childSpan.transaction.spanId;
      const logMessage = `[Tracing] Starting '${opStr}' span on transaction '${nameStr}' (${idStr}).`;
      childSpan.transaction.metadata.spanMetadata[childSpan.spanId] = { logMessage };
      logger.log(logMessage);
    }
    return childSpan;
  }
  setTag(key, value) {
    this.tags = { ...this.tags, [key]: value };
    return this;
  }
  setData(key, value) {
    this.data = { ...this.data, [key]: value };
    return this;
  }
  setStatus(value) {
    this.status = value;
    return this;
  }
  setHttpStatus(httpStatus) {
    this.setTag("http.status_code", String(httpStatus));
    const spanStatus = spanStatusfromHttpCode(httpStatus);
    if (spanStatus !== "unknown_error") {
      this.setStatus(spanStatus);
    }
    return this;
  }
  isSuccess() {
    return this.status === "ok";
  }
  finish(endTimestamp) {
    if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
      const { logMessage } = this.transaction.metadata.spanMetadata[this.spanId];
      if (logMessage) {
        logger.log(logMessage.replace("Starting", "Finishing"));
      }
    }
    this.endTimestamp = typeof endTimestamp === "number" ? endTimestamp : timestampWithMs();
  }
  toTraceparent() {
    let sampledString = "";
    if (this.sampled !== void 0) {
      sampledString = this.sampled ? "-1" : "-0";
    }
    return `${this.traceId}-${this.spanId}${sampledString}`;
  }
  toContext() {
    return dropUndefinedKeys({
      data: this.data,
      description: this.description,
      endTimestamp: this.endTimestamp,
      op: this.op,
      parentSpanId: this.parentSpanId,
      sampled: this.sampled,
      spanId: this.spanId,
      startTimestamp: this.startTimestamp,
      status: this.status,
      tags: this.tags,
      traceId: this.traceId
    });
  }
  updateWithContext(spanContext) {
    this.data = _nullishCoalesce(spanContext.data, () => ({}));
    this.description = spanContext.description;
    this.endTimestamp = spanContext.endTimestamp;
    this.op = spanContext.op;
    this.parentSpanId = spanContext.parentSpanId;
    this.sampled = spanContext.sampled;
    this.spanId = _nullishCoalesce(spanContext.spanId, () => this.spanId);
    this.startTimestamp = _nullishCoalesce(spanContext.startTimestamp, () => this.startTimestamp);
    this.status = spanContext.status;
    this.tags = _nullishCoalesce(spanContext.tags, () => ({}));
    this.traceId = _nullishCoalesce(spanContext.traceId, () => this.traceId);
    return this;
  }
  getTraceContext() {
    return dropUndefinedKeys({
      data: Object.keys(this.data).length > 0 ? this.data : void 0,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      trace_id: this.traceId
    });
  }
  toJSON() {
    return dropUndefinedKeys({
      data: Object.keys(this.data).length > 0 ? this.data : void 0,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      start_timestamp: this.startTimestamp,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      timestamp: this.endTimestamp,
      trace_id: this.traceId
    });
  }
};
function spanStatusfromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return "ok";
  }
  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
  }
  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
  }
  return "unknown_error";
}

// node_modules/@sentry/tracing/esm/transaction.js
var Transaction = class extends Span {
  __init() {
    this._measurements = {};
  }
  __init2() {
    this._contexts = {};
  }
  __init3() {
    this._frozenDynamicSamplingContext = void 0;
  }
  constructor(transactionContext, hub) {
    super(transactionContext);
    Transaction.prototype.__init.call(this);
    Transaction.prototype.__init2.call(this);
    Transaction.prototype.__init3.call(this);
    ;
    this._hub = hub || getCurrentHub();
    this._name = transactionContext.name || "";
    this.metadata = {
      source: "custom",
      ...transactionContext.metadata,
      spanMetadata: {},
      changes: [],
      propagations: 0
    };
    this._trimEnd = transactionContext.trimEnd;
    this.transaction = this;
    const incomingDynamicSamplingContext = this.metadata.dynamicSamplingContext;
    if (incomingDynamicSamplingContext) {
      this._frozenDynamicSamplingContext = { ...incomingDynamicSamplingContext };
    }
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this.setName(newName);
  }
  setName(name, source = "custom") {
    if (name !== this.name || source !== this.metadata.source) {
      this.metadata.changes.push({
        source: this.metadata.source,
        timestamp: timestampInSeconds(),
        propagations: this.metadata.propagations
      });
    }
    this._name = name;
    this.metadata.source = source;
  }
  initSpanRecorder(maxlen = 1e3) {
    if (!this.spanRecorder) {
      this.spanRecorder = new SpanRecorder(maxlen);
    }
    this.spanRecorder.add(this);
  }
  setContext(key, context) {
    if (context === null) {
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }
  }
  setMeasurement(name, value, unit = "") {
    this._measurements[name] = { value, unit };
  }
  setMetadata(newMetadata) {
    this.metadata = { ...this.metadata, ...newMetadata };
  }
  finish(endTimestamp) {
    if (this.endTimestamp !== void 0) {
      return void 0;
    }
    if (!this.name) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
      this.name = "<unlabeled transaction>";
    }
    super.finish(endTimestamp);
    if (this.sampled !== true) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
      const client = this._hub.getClient();
      if (client) {
        client.recordDroppedEvent("sample_rate", "transaction");
      }
      return void 0;
    }
    const finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter((s) => s !== this && s.endTimestamp) : [];
    if (this._trimEnd && finishedSpans.length > 0) {
      this.endTimestamp = finishedSpans.reduce((prev, current) => {
        if (prev.endTimestamp && current.endTimestamp) {
          return prev.endTimestamp > current.endTimestamp ? prev : current;
        }
        return prev;
      }).endTimestamp;
    }
    const metadata = this.metadata;
    const transaction = {
      contexts: {
        ...this._contexts,
        trace: this.getTraceContext()
      },
      spans: finishedSpans,
      start_timestamp: this.startTimestamp,
      tags: this.tags,
      timestamp: this.endTimestamp,
      transaction: this.name,
      type: "transaction",
      sdkProcessingMetadata: {
        ...metadata,
        dynamicSamplingContext: this.getDynamicSamplingContext()
      },
      ...metadata.source && {
        transaction_info: {
          source: metadata.source,
          changes: metadata.changes,
          propagations: metadata.propagations
        }
      }
    };
    const hasMeasurements = Object.keys(this._measurements).length > 0;
    if (hasMeasurements) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
        "[Measurements] Adding measurements to transaction",
        JSON.stringify(this._measurements, void 0, 2)
      );
      transaction.measurements = this._measurements;
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`);
    return this._hub.captureEvent(transaction);
  }
  toContext() {
    const spanContext = super.toContext();
    return dropUndefinedKeys({
      ...spanContext,
      name: this.name,
      trimEnd: this._trimEnd
    });
  }
  updateWithContext(transactionContext) {
    super.updateWithContext(transactionContext);
    this.name = _nullishCoalesce(transactionContext.name, () => "");
    this._trimEnd = transactionContext.trimEnd;
    return this;
  }
  getDynamicSamplingContext() {
    if (this._frozenDynamicSamplingContext) {
      return this._frozenDynamicSamplingContext;
    }
    const hub = this._hub || getCurrentHub();
    const client = hub && hub.getClient();
    if (!client)
      return {};
    const { environment, release } = client.getOptions() || {};
    const { publicKey: public_key } = client.getDsn() || {};
    const maybeSampleRate = this.metadata.sampleRate;
    const sample_rate = maybeSampleRate !== void 0 ? maybeSampleRate.toString() : void 0;
    const scope = hub.getScope();
    const { segment: user_segment } = scope && scope.getUser() || {};
    const source = this.metadata.source;
    const transaction = source && source !== "url" ? this.name : void 0;
    const dsc = dropUndefinedKeys({
      environment,
      release,
      transaction,
      user_segment,
      public_key,
      trace_id: this.traceId,
      sample_rate
    });
    return dsc;
  }
};

// node_modules/@sentry/tracing/esm/hubextensions.js
function traceHeaders() {
  const scope = this.getScope();
  if (scope) {
    const span = scope.getSpan();
    if (span) {
      return {
        "sentry-trace": span.toTraceparent()
      };
    }
  }
  return {};
}
function sample(transaction, options, samplingContext) {
  if (!hasTracingEnabled(options)) {
    transaction.sampled = false;
    return transaction;
  }
  if (transaction.sampled !== void 0) {
    transaction.setMetadata({
      sampleRate: Number(transaction.sampled)
    });
    return transaction;
  }
  let sampleRate;
  if (typeof options.tracesSampler === "function") {
    sampleRate = options.tracesSampler(samplingContext);
    transaction.setMetadata({
      sampleRate: Number(sampleRate)
    });
  } else if (samplingContext.parentSampled !== void 0) {
    sampleRate = samplingContext.parentSampled;
  } else {
    sampleRate = options.tracesSampleRate;
    transaction.setMetadata({
      sampleRate: Number(sampleRate)
    });
  }
  if (!isValidSampleRate(sampleRate)) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("[Tracing] Discarding transaction because of invalid sample rate.");
    transaction.sampled = false;
    return transaction;
  }
  if (!sampleRate) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
      `[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
    );
    transaction.sampled = false;
    return transaction;
  }
  transaction.sampled = Math.random() < sampleRate;
  if (!transaction.sampled) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
      `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
        sampleRate
      )})`
    );
    return transaction;
  }
  (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] starting ${transaction.op} transaction - ${transaction.name}`);
  return transaction;
}
function isValidSampleRate(rate) {
  if (isNaN2(rate) || !(typeof rate === "number" || typeof rate === "boolean")) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
      `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
        rate
      )} of type ${JSON.stringify(typeof rate)}.`
    );
    return false;
  }
  if (rate < 0 || rate > 1) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${rate}.`);
    return false;
  }
  return true;
}
function _startTransaction(transactionContext, customSamplingContext) {
  const client = this.getClient();
  const options = client && client.getOptions() || {};
  const configInstrumenter = options.instrumenter || "sentry";
  const transactionInstrumenter = transactionContext.instrumenter || "sentry";
  if (configInstrumenter !== transactionInstrumenter) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(
      `A transaction was started with instrumenter=\`${transactionInstrumenter}\`, but the SDK is configured with the \`${configInstrumenter}\` instrumenter.
The transaction will not be sampled. Please use the ${configInstrumenter} instrumentation to start transactions.`
    );
    transactionContext.sampled = false;
  }
  let transaction = new Transaction(transactionContext, this);
  transaction = sample(transaction, options, {
    parentSampled: transactionContext.parentSampled,
    transactionContext,
    ...customSamplingContext
  });
  if (transaction.sampled) {
    transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
  }
  return transaction;
}
function _addTracingExtensions() {
  const carrier = getMainCarrier();
  if (!carrier.__SENTRY__) {
    return;
  }
  carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
  if (!carrier.__SENTRY__.extensions.startTransaction) {
    carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
  }
  if (!carrier.__SENTRY__.extensions.traceHeaders) {
    carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
  }
}
function _autoloadDatabaseIntegrations() {
  const carrier = getMainCarrier();
  if (!carrier.__SENTRY__) {
    return;
  }
  const packageToIntegrationMapping = {
    mongodb() {
      const integration = dynamicRequire(module, "./integrations/node/mongo");
      return new integration.Mongo();
    },
    mongoose() {
      const integration = dynamicRequire(module, "./integrations/node/mongo");
      return new integration.Mongo({ mongoose: true });
    },
    mysql() {
      const integration = dynamicRequire(module, "./integrations/node/mysql");
      return new integration.Mysql();
    },
    pg() {
      const integration = dynamicRequire(module, "./integrations/node/postgres");
      return new integration.Postgres();
    }
  };
  const mappedPackages = Object.keys(packageToIntegrationMapping).filter((moduleName) => !!loadModule(moduleName)).map((pkg) => {
    try {
      return packageToIntegrationMapping[pkg]();
    } catch (e) {
      return void 0;
    }
  }).filter((p) => p);
  if (mappedPackages.length > 0) {
    carrier.__SENTRY__.integrations = [...carrier.__SENTRY__.integrations || [], ...mappedPackages];
  }
}
function addExtensionMethods() {
  _addTracingExtensions();
  if (isNodeEnv()) {
    _autoloadDatabaseIntegrations();
  }
  registerErrorInstrumentation();
}

// node_modules/@sentry/tracing/esm/index.js
if (typeof __SENTRY_TRACING__ === "undefined" || __SENTRY_TRACING__) {
  addExtensionMethods();
}

export {
  withSentry
};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/_shared/chunk-6GFYJBEZ.js.map
