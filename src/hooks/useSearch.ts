import { ChangeEvent, useCallback, useContext } from "react";

import {
  SearchContext,
  SelectableItem,
  type DispatchSelectableItem,
} from "@/contexts/SearchContext";

/**
 * @function useSearch
 *
 * @param none
 *
 * @throws Will throw error if context is not defined.
 *
 * @example
 * const ExampleComponent = () => {
 *    const { getSearchValue, changeSearchValue } = useSearch();
 *    ...
 *    return {
 *      <div>
 *        <Input
 *          value={getSearchValue}
 *          onChange={changeSearchValue}
 *        />
 *      </div>
 *    }
 * }
 */
export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  const {
    categories,
    setCategories,
    helperTags,
    setHelperTags,
    searchValue,
    setSearchValue,
  } = context;

  // #region Overload functions

  function overloadResetActiveItems(): void;
  function overloadResetActiveItems(type?: "category" | "helper"): void;

  function overloadResetActiveItems(type?: "category" | "helper"): void {
    if (type === "category") {
      setCategories((prev) => prev.map((item) => ({ ...item, active: false })));
    } else if (type === "helper") {
      setHelperTags((prev) => prev.map((item) => ({ ...item, active: false })));
    } else {
      // Resetea ambos si no se proporciona un tipo
      setCategories((prev) => prev.map((item) => ({ ...item, active: false })));
      setHelperTags((prev) => prev.map((item) => ({ ...item, active: false })));
    }
  }

  function overloadGetActiveItems(): {
    activeCategories: SelectableItem[];
    activeHelperTags: SelectableItem[];
  };
  function overloadGetActiveItems(
    type?: "category" | "helper"
  ): SelectableItem[];

  function overloadGetActiveItems(type?: "category" | "helper") {
    if (type === "category") {
      return categories.filter((item) => item.active);
    } else if (type === "helper") {
      return helperTags.filter((item) => item.active);
    } else {
      // Retorna ambos si no se proporciona un tipo
      return {
        activeCategories: categories.filter((item) => item.active),
        activeHelperTags: helperTags.filter((item) => item.active),
      };
    }
  }

  // #region Hook Functions

  /**
   * @function toogleItemActive
   *
   * @description Function to change the status of an element (category or helperTag) according to its id.
   *
   * @param {string} id - Id of the element on which onClick was made
   * @param {"category" | "helper"} type - Select to which type the element corresponds (“category” | “helper”)
   *
   */
  const toggleItemActive: (id: string, type: "category" | "helper") => void =
    useCallback(
      (id: string, type: "category" | "helper") => {
        let setter: DispatchSelectableItem =
          type === "category" ? setCategories : setHelperTags;

        setter((prevItems) =>
          prevItems.map((item) => ({
            ...item,
            [id]: !item[id],
          }))
        );
      },
      [categories, helperTags, setCategories, setHelperTags]
    );

  /**
   * @function resetActiveItems
   *
   * @description Esta función reinicia el estado de todos los elementos de un tipo a inactivos (active: false). Puede reiniciar categorías, helperTags, o ambos.
   *
   * @overload resetActiveItems(): void
   * @description Si no se pasa un argumento, reinicia tanto las categorías como los helperTags.
   *
   * @overload resetActiveItems(type: "category" | "helper"): void
   * @description Si se pasa un argumento, solo reinicia el tipo especificado (category o helper).
   *
   * @param {"category" | "helper"} [type] - Tipo de elemento a resetear (opcional).
   *
   * @example
   * // Resetea solo las categorías
   * resetActiveItems("category");
   *
   * // Resetea categorías y helperTags
   * resetActiveItems();
   */
  const resetActiveItems = useCallback(
    (type?: "category" | "helper") => overloadResetActiveItems(type),
    [setCategories, setHelperTags]
  );

  /**
   * @function registerItems
   *
   * @description Esta funcion registra los items de "categorias" | "helper" para manejar su estado de activado fuera de los componentes.
   *
   * @param {"category" | "helper"} [type] - Especificamos la lista a la cual ira nuestros items.
   * @param {string[]} [items] - Pasamos el arrray con los elementos a añadir a la lista.
   *
   * @returns {void}
   *
   * @example
   * // Para las categorias de la tienda
   * registerItems("category", idList);
   *
   * // Para las categorias de el soporte
   * registerItems("helper", idList);
   *
   */

  const registerItems = useCallback(
    (type: "category" | "helper", items: string[]) => {
      let setter: DispatchSelectableItem =
        type === "category" ? setCategories : setHelperTags;

      setter((prev) => {
        const updatedItems = [...prev];

        items.map((i, _) => {
          const itemExists = updatedItems.some(
            (selectableItem) => i in selectableItem
          );

          if (!itemExists) {
            updatedItems.push({ [i]: false });
          }
        });

        return updatedItems;
      });
    },
    [setCategories, setHelperTags]
  );

  /**
   * @function getActiveItems
   *
   * @description Esta función devuelve los elementos activos en categorías, helperTags o ambos.
   *
   * @overload getActiveItems(): { activeCategories: SelectableItem[], activeHelperTags: SelectableItem[] }
   * @description Si no se pasa un argumento, devuelve un objeto con las categorías y helperTags activas.
   *
   * @overload getActiveItems(type: "category" | "helper"): SelectableItem[]
   * @description Si se pasa un argumento, devuelve solo los elementos activos del tipo especificado (category o helper).
   *
   * @param {"category" | "helper"} [type] - Tipo de elemento cuyos activos se desean obtener (opcional).
   *
   * @returns {object | SelectableItem[]} Los elementos activos de categorías y helperTags, o solo del tipo especificado.
   *
   * @example
   * // Obtiene solo las categorías activas
   * const activeCategories = getActiveItems("category");
   *
   * // Obtiene categorías y helperTags activas
   * const { activeCategories, activeHelperTags } = getActiveItems();
   */

  const getActiveItems = useCallback(
    (type?: "category" | "helper") => overloadGetActiveItems(type),
    [categories, helperTags]
  );

  /**
   * @function changeSearchValue
   *
   * @description Changes the value of the search input and stores it for display in the input between page changes.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - Change Input Event
   *
   */
  const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  /**
   * @function searchProducts
   */
  const searchProducts = () => {};

  /**
   * Returning the functions of the hooks to be used in the application.
   */
  return {
    toggleItemActive,
    resetActiveItems,
    registerItems,
    getActiveItems,
    changeSearchValue,
    searchProducts,
  };
};
