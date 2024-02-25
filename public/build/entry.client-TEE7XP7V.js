import {
  require_client
} from "/build/_shared/chunk-ZWGWGGVF.js";
import {
  RemixBrowser
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

// app/entry.client.tsx
var import_react = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1706962583480.1887";
}
if (ENV.MODE === "production" && ENV.MOCKS === "false" && ENV.SENTRY_DSN) {
  import("/build/_shared/monitoring.client-QRYB4ZCX.js").then(
    ({ init }) => init()
  );
}
(0, import_react.startTransition)(() => {
  (0, import_client.hydrateRoot)(document, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 23,
    columnNumber: 24
  }, this));
});
//# sourceMappingURL=/build/entry.client-TEE7XP7V.js.map
