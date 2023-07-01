import jwt_decode from "jwt-decode";
import { PropsWithChildren, useEffect, useState } from "react";
import { RoleContext } from "../../contexts/roleContext";
export function RoleProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<{
    user_id: string;
    user_role: string;
  }>({
    user_id: "",
    user_role: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwt_decode(token);
      setCurrentUser({
        user_id: (decodedToken as { id: string; role: string }).id,
        user_role: (decodedToken as { id: string; role: string }).role,
      });
    }
  }, []);
  return (
    <RoleContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </RoleContext.Provider>
  );
}
