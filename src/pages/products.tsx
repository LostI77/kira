import { useLoaderData } from "react-router-dom";
import { KeyboardEvent } from "react";
import { useSearch } from "@/hooks/useSearch";

import { Product } from "@/main-types";

import { ProductCard } from "@composites/product-card";
import { Button } from "@components/button";
import { Input } from "@components/input";
import { Badge } from "@components/badge";

import { categories } from "@common/constants";

export const ProductsPage = () => {
  const { products } = useLoaderData() as { products: Product[] };
  const { registerItems, searchProducts, changeSearchValue } = useSearch();

  let idList: string[] = categories
    .filter((c, _) => typeof c.id === "string")
    .map((c) => c.id);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchProducts();
      console.log(e.key);
    }
  };

  registerItems("category", idList);

  return (
    <div className="py-16 px-[120px]">
      <div className="flex flex-col justify-center items-center w-max mx-auto gap-4">
        <div className="w-[650px] relative">
          <Input
            placeholder="Buscar..."
            onChange={changeSearchValue}
            onKeyDown={handleKeyPress}
            iconOnClick={searchProducts}
          />
        </div>
        <div className="flex flex-row flex-wrap w-[650px] gap-1.5">
          {categories.map((c, _) => (
            <Badge key={`badge-categories-${c.id}`} className="cursor-pointer">
              {c.name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 auto-rows-min py-12 px-6 gap-12">
        {products.map((p, i) => (
          <ProductCard key={`fake-product-${i}`}>
            <ProductCard.Image src={p.src} alt="example" draggable={false} />
            <ProductCard.Content>
              <ProductCard.Title> {p.name} </ProductCard.Title>
              <ProductCard.Price>S/ {p.price}</ProductCard.Price>
              <Button type="button" variant="dark">
                Example
              </Button>
            </ProductCard.Content>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
