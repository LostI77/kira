import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type SelectableItem = Record<string, boolean>;

export type DispatchSelectableItem = Dispatch<SetStateAction<SelectableItem[]>>;

type SearchContextProps = {
  categories: SelectableItem[];
  setCategories: DispatchSelectableItem;
  helperTags: SelectableItem[];
  setHelperTags: DispatchSelectableItem;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

export const SearchProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [categories, setCategories] = useState<SelectableItem[]>([]);
  const [helperTags, setHelperTags] = useState<SelectableItem[]>([]);

  return (
    <SearchContext.Provider
      value={{
        categories,
        setCategories,
        helperTags,
        setHelperTags,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
