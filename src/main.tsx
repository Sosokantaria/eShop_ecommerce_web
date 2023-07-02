import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { RoleProvider } from "./providers/roleProvider";
import { AuthProvider } from "./providers/authProvider";
import { CartProvider } from "react-use-cart";
import { CartModalProvider } from "./providers/cartProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RoleProvider>
          <ConfigProvider>
            <CartProvider>
              <CartModalProvider>
                <App />
              </CartModalProvider>
            </CartProvider>
          </ConfigProvider>
        </RoleProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
