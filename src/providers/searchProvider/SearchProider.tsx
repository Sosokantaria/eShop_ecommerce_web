import { PropsWithChildren, useState } from "react";
import { SearchContext } from "../../contexts/searchContext";


export function SearchModalProvider({ children }: PropsWithChildren) {
  const [search, setSearch] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{search,setSearch }}>{children}</SearchContext.Provider>
  );
}