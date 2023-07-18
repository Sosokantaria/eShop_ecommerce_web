import { lazy } from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import { TUser_Role_Enum } from "../../../types/user.types";

import { PrivateRoute } from "../privateRoute";

const UserView = lazy(() => import("./routes/user"));
const AdminView = lazy(() => import("./routes/admin"));
const PaymantView = lazy(() => import("./routes/payment"));

type PrivateRouteProps = {
  currentRole: TUser_Role_Enum;
};

export function PrivateRoutes({ currentRole }: PrivateRouteProps) {
  return (
    <Routes>
      <Route
        path="/userView"
        element={
          <PrivateRoute
            currentRole={currentRole}
            roles={[...Object.values(TUser_Role_Enum)]}
            children={<UserView />}
          />
        }
      />
       <Route
        path="/payment"
        element={
          <PrivateRoute
            currentRole={currentRole}
            roles={[...Object.values(TUser_Role_Enum)]}
            children={<PaymantView />}
          />
        }
      />
      <Route
        path="/adminView"
        element={
          <PrivateRoute
            currentRole={currentRole}
            roles={[...Object.values(TUser_Role_Enum),TUser_Role_Enum.ADMIN]}
            children={<AdminView />}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}