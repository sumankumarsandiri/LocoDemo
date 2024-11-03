import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import { LogtoProvider, LogtoConfig, UserScope } from "@logto/react";

// const config: LogtoConfig = {
//   endpoint: "https://gzb8jq.logto.app/",
//   appId: "g6p9gwfwe0983jr23kmx4",
//   scopes: [
//     UserScope.Email,
//     UserScope.Phone,
//     UserScope.CustomData,
//     UserScope.Identities,
//     UserScope.Organizations,
//   ],
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <LogtoProvider config={config}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </LogtoProvider>
);
