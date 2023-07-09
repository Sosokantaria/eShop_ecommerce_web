import { createContext } from "react";

export type SearchContextValue = {
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchContext = createContext<SearchContextValue>({
  search: false,
  setSearch: () => {},
});
