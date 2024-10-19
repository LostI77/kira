import { useLoaderData } from "react-router-dom";

import { Product, ISCProduct } from "@/main-types";

import { ProductCard } from "@composites/product-card";
import { Button } from "@components/button";
import { Input } from "@components/input";
import { Badge } from "@components/badge";

import { categories } from "@common/constants";

export const ProductsPage = () => {
  const { products } = useLoaderData() as { products: Product[] };

  const handleAddToShoppingCard = async (product: Product) => {
    try {
      const userId: string = "user_1";

      const cardRes = await fetch(`/api/users/${userId}/shopping-card`, {
        method: "GET",
      });

      if (!cardRes.ok)
        throw new Error(
          "Could not get your cart and validate the corresponding add, please try again or come back later."
        );

      const cardData: { shopping_card: ISCProduct[] } = await cardRes.json();

      const shoppingCard = cardData.shopping_card;

      const productInCart = shoppingCard.find(
        (item: Product) => item.name === product.name
      );

      const amount = productInCart ? productInCart.amount++ : 1;

      const res = await fetch(`/api/users/${userId}/shopping-card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...product, amount }),
      });

      if (!res.ok)
        throw new Error(
          "Has been a conflict adding a new product in shopping-card."
        );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="py-16 px-[120px]">
      <div className="flex flex-col justify-center items-center w-max mx-auto gap-4">
        <div className="w-[650px] relative">
          <Input placeholder="Buscar..." />
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
            <ProductCard.Image
              src={p.src}
              alt="example"
              decoding="async"
              draggable={false}
            />
            <ProductCard.Content>
              <ProductCard.Title> {p.name} </ProductCard.Title>
              <ProductCard.Price>S/ {p.price}</ProductCard.Price>
              <Button
                type="button"
                variant="dark"
                onClick={() => handleAddToShoppingCard(p)}
              >
                Example
              </Button>
            </ProductCard.Content>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
