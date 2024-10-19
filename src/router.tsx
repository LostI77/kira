import { createBrowserRouter } from "react-router-dom";

import { Root } from "@pages/root";
import { Home } from "@pages/home";
import { ProductsPage } from "@pages/products";
import { ProductPage } from "@pages/product-page";
import { ShoppingCard } from "@pages/shopping-card";
import { Support } from "@pages/support";
import { LoginPage } from "@pages/login-page";

import ErrorPage from "./error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: async () => {
          const res = await fetch("/api/testimonials");
          return res.json();
        },
      },
      {
        path: "productos",
        element: <ProductsPage />,
        loader: async () => {
          const res = await fetch("/api/products");
          return res.json();
        },
      },
      {
        path: "productos/:nameId",
        element: <ProductPage />,
      },
      {
        path: "carrito",
        element: <ShoppingCard />,
        loader: async () => {
          try {
            const userId = "user_1" as const;
            const res = await fetch(`/api/users/${userId}/shopping-card`);

            if (!res.ok) {
              throw new Error("Problem getting your shopping-card data");
            }

            return res.json();
          } catch (err) {
            console.error(err);
          }
        },
      },
      {
        path: "soporte",
        element: <Support />,
        loader: async () => {
          try {
            const res = await fetch("/api/support/cards");

            if (!res.ok)
              throw new Error("Error getting support-cards information");

            const data = await res.json();

            return data;
          } catch (err) {
            console.error(err);
            return { support_cards: [] };
          }
        },
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
