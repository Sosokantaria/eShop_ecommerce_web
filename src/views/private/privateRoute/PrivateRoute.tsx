import { Navigate } from "react-router-dom";
import { TUser_Role_Enum } from "../../../types/user.types";
import { PropsWithChildren } from "react";

type PrivateRouteProps = {
  roles: TUser_Role_Enum[];
  currentRole: TUser_Role_Enum;
};

export function PrivateRoute({
  currentRole,
  roles,
  children,
}: PropsWithChildren<PrivateRouteProps>) {
  if (roles.includes(currentRole)) {
    return <>{children}</>;
  }

  return <Navigate to="/" />;
}