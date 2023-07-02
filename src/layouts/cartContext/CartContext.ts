import { createContext } from "react";

export type CartContextValue = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartContext = createContext<CartContextValue>({
  modal: false,
  setModal: () => {},
});
