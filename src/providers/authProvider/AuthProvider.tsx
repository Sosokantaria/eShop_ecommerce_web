import { PropsWithChildren, useEffect, useState } from "react";

import { authContext, TAuthorisationStage } from "../../contexts/authContext";
import { TLocalstorage } from "../../types/Localstorage";


export function AuthProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<TAuthorisationStage>(
    TAuthorisationStage.UNAUTHORIZED
  );

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setStatus(TAuthorisationStage.AUTHORIZED);
    }
  }, []);

  return (
    <authContext.Provider value={{ status, setStatus }}>
      {children}
    </authContext.Provider>
  );
}