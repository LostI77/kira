import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import { PurchaseSummary } from "@composites/purchase-summary";
import { ShoppingItem } from "@composites/shopping-item";
import { Button } from "@components/button";
import { ISCProduct } from "@/main-types";

export const ShoppingCard = () => {
  const { shopping_card } = useLoaderData() as {
    shopping_card: ISCProduct[];
  };

  const [productsCard, setProductsCard] = useState<ISCProduct[]>(
    shopping_card || []
  );

  const [finalPrices, setFinalPrices] = useState<Record<string, number>>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setProductsCard(shopping_card);
  }, [shopping_card]);

  useEffect(() => {
    const total = productsCard.reduce(
      (acc, product) => acc + product.price * product.amount,
      0
    );
    setTotalPrice(parseFloat(Number(total).toFixed(2)));
  }, [productsCard]);

  const handleAmount = async (name: string, type: "less" | "more") => {
    let current: number = 0;
    setProductsCard((prev) => {
      return prev.map((product) => {
        if (product.name === name) {
          current = product.amount;

          if (type !== "more" && current > 1) current--;
          if (type == "more") current++;

          const updatedPrice = parseFloat((product.price * current).toFixed(2));

          setFinalPrices((prevPrices) => ({
            ...prevPrices,
            [name]: updatedPrice,
          }));

          return {
            ...product,
            amount: current,
          };
        }

        return product;
      });
    });

    try {
      const response = await fetch(`/api/users/user_1/shopping-card`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, current, type }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error updating product amount:", errorData.detail);
        return;
      }

      const result = await response.json();
      console.log("New product amount:", result.new_amount);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRemoveProduct = async (name: string) => {
    try {
      const response = await fetch(
        `/api/users/${"user_1"}/shopping-card?product_name=${name}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error deleting product:", errorData.detail);
        return;
      }

      const result = await response.json();
      if (result.product_deleted) {
        console.log("Product successfully deleted");
        // Actualiza el estado local para reflejar los cambios en la UI
        setProductsCard((prev) =>
          prev.filter((product) => product.name !== name)
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col flex-nowrap m-0 py-16 px-[120px] gap-0">
      <div className="mb-4 py-1">
        <h1 className="font-medium text-2xl">Carrito de Compras</h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col max-w-3xl w-full gap-8">
          {productsCard.length === 0 ? (
            <div></div>
          ) : (
            productsCard.map((product, i) => (
              <ShoppingItem
                key={`product-${product.name
                  .trim()
                  .replace(" ", "-")
                  .toLowerCase()}-${i}`}
              >
                <ShoppingItem.Image
                  src="/img/GYpEGv-a4AAfD4F.jpeg"
                  alt=""
                  draggable="false"
                />
                <ShoppingItem.Details>
                  <ShoppingItem.Header>
                    <ShoppingItem.Title>{product.name}</ShoppingItem.Title>
                    <ShoppingItem.RemoveButton
                      onClick={() => handleRemoveProduct(product.name)}
                    />
                  </ShoppingItem.Header>
                  <ShoppingItem.Content>
                    <div className="flex flex-row justify-start items-center mr-auto gap-20">
                      <ShoppingItem.Text>S/. {product.price}</ShoppingItem.Text>
                      <ShoppingItem.QuantityControls>
                        <ShoppingItem.Text>
                          Cantidad: {product.amount}
                        </ShoppingItem.Text>
                        <ShoppingItem.QuantityButtons>
                          <ShoppingItem.QuantityButton
                            variant={"left"}
                            onClick={() => handleAmount(product.name, "less")}
                          >
                            <Icon icon="ri:subtract-line" />
                          </ShoppingItem.QuantityButton>
                          <div className="w-[1px] h-7 bg-zinc-500" />
                          <ShoppingItem.QuantityButton
                            variant={"right"}
                            onClick={() => handleAmount(product.name, "more")}
                          >
                            <Icon icon="material-symbols:add" />
                          </ShoppingItem.QuantityButton>
                        </ShoppingItem.QuantityButtons>
                      </ShoppingItem.QuantityControls>
                    </div>
                    <ShoppingItem.Text>
                      Final Price: S/.{" "}
                      {finalPrices[product.name] ||
                        product.price * product.amount}
                    </ShoppingItem.Text>
                    <Button variant={"dark"}>Comprar Ahora</Button>
                  </ShoppingItem.Content>
                </ShoppingItem.Details>
              </ShoppingItem>
            ))
          )}
        </div>
        <PurchaseSummary>
          <PurchaseSummary.Header>Resumen de compras</PurchaseSummary.Header>
          <PurchaseSummary.Content>
            <PurchaseSummary.ProductsText>
              Productos {`(${productsCard.length})`}
            </PurchaseSummary.ProductsText>
            <PurchaseSummary.ProductList>
              {productsCard.map((product, i) => (
                <PurchaseSummary.ProductItem
                  key={`purchase-summary-${product.name
                    .trim()
                    .replace(" ", "-")
                    .toLowerCase()}-${i}`}
                >
                  <PurchaseSummary.ProductItemContainer>
                    <PurchaseSummary.ProductItemName>
                      {product.name}
                    </PurchaseSummary.ProductItemName>
                    <PurchaseSummary.ProductItemQuantity>
                      {product.amount}
                    </PurchaseSummary.ProductItemQuantity>
                  </PurchaseSummary.ProductItemContainer>
                  <PurchaseSummary.ProductItemPrice>
                    {product.price}
                  </PurchaseSummary.ProductItemPrice>
                </PurchaseSummary.ProductItem>
              ))}
            </PurchaseSummary.ProductList>
            <PurchaseSummary.Divider />
            <PurchaseSummary.Total>S/. {totalPrice}</PurchaseSummary.Total>
          </PurchaseSummary.Content>
          <Button type="button" variant={"dark"}>
            Comprar todo
          </Button>
        </PurchaseSummary>
      </div>
    </div>
  );
};
