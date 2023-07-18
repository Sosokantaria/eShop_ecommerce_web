import { lazy } from "react";
import { Route } from "react-router-dom";

const LoginView = lazy(() => import("./routes/login"));
const RegisterView = lazy(() => import("./routes/register"));

export default [
  <Route path="/login/:login" element={<LoginView />} key="privateRoute" />,
  <Route path="/register/:register" element={<RegisterView />} key="privateRoute" />,
];