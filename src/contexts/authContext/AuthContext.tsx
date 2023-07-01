import { createContext } from "react";

export enum TAuthorisationStage {
  AUTHORIZED = "authorized",
  UNAUTHORIZED = "unauthorised",
}

export type AuthContextValue = {
  status: TAuthorisationStage;
  setStatus: React.Dispatch<React.SetStateAction<TAuthorisationStage>>;
};

export const authContext = createContext<AuthContextValue>({
  status: TAuthorisationStage.UNAUTHORIZED,
  setStatus: () => {},
});
