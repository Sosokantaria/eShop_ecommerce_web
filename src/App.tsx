import { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { authContext } from "./contexts/authContext";

import { MainLayout } from "./layouts";
import { PrivateRoutes } from "./views/private/privateRoutes";
import PublicRoutes from "./views/public";
import GlobalRoutes from "./views/global";
import FourOhFour from "./views/fourOhFour";

import { TUser_Role_Enum } from "./types/user.types";

export default function App() {
  const { isAuthorized } = useContext(authContext);
  const role = TUser_Role_Enum.USER;

  return (
    <Suspense>
      <Routes>
        <Route element={<MainLayout />}>
          {GlobalRoutes}
          {isAuthorized ? (
            <Route path="/*" element={<PrivateRoutes currentRole={role} />} />
          ) : (
            <>{PublicRoutes}</>
          )}
          <Route path="/*" element={<FourOhFour />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
