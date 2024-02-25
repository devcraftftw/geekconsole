import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/remix-utils/build/react/authenticity-token.js
var React = __toESM(require_react(), 1);
var context = React.createContext(null);
function AuthenticityTokenProvider({ children, token }) {
  return React.createElement(context.Provider, { value: token }, children);
}
function useAuthenticityToken() {
  let token = React.useContext(context);
  if (!token)
    throw new Error("Missing AuthenticityTokenProvider.");
  return token;
}
function AuthenticityTokenInput({ name = "csrf" }) {
  let token = useAuthenticityToken();
  return React.createElement("input", { type: "hidden", value: token, name });
}

export {
  AuthenticityTokenProvider,
  AuthenticityTokenInput
};
//# sourceMappingURL=/build/_shared/chunk-6LMWWETO.js.map
