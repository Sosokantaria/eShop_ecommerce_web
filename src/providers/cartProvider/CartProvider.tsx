import { PropsWithChildren, useState } from "react";

import { CartContext } from "../../layouts/cartContext";

export function CartModalProvider({ children }: PropsWithChildren) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <CartContext.Provider value={{modal,setModal }}>{children}</CartContext.Provider>
  );
}
