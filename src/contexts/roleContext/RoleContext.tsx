import {createContext} from "react"


export type TCurrentUserRoleContext = {
    currentUser: {
      user_id: string;
      user_role: string;
    };
    setCurrentUser: React.Dispatch<
      React.SetStateAction<{
        user_id: string;
        user_role: string;
      }>
    >;
  };
  export const RoleContext = createContext<TCurrentUserRoleContext>({
    currentUser: {
      user_id: "",
      user_role: "",
    },
    setCurrentUser: () => {},
  });