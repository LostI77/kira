import { useCallback, useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";

type ProductData =
  | {
      productId: string;
      productName: string;
      productPrice: number;
      productStack: number;
    }
  | {};

const ProductPage = () => {
  const { nameId } = useParams();

  const getProductData = useCallback(
    async (nameId: string) => {
      try {
        const res = await fetch(`/api/products/${nameId}`, { method: "GET" });

        if (!res.ok) {
          throw new Error("Can't be find a product information");
        }
        const pData: ProductData = await res.json();

        if (Object.is(productData, {})) throw redirect("*");

        return pData;
      } catch (err) {
        console.error(err);
      }
    },
    [nameId]
  );

  const [productData, setProductData] = useState<ProductData | undefined>(
    () => getProductData(nameId!) || {}
  );

  useEffect(() => {
    setProductData(getProductData(nameId!));
  }, [nameId]);

  return <div>product-page - {nameId} </div>;
};

export { ProductPage };
