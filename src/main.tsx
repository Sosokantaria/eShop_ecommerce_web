import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/authProvider";
import { RoleProvider } from "./providers/roleProvider/RoleProvider.tsx";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RoleProvider>
          <ConfigProvider>
            <App />
          </ConfigProvider>
        </RoleProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
