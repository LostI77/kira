import { createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/root";
import ErrorPage from "./error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "quienes-somos",
        element: (
          <>
            <div> About me </div>
            <div> Hola </div>
          </>
        ),
      },
      {
        path: "productos",
        element: <div> Productos </div>,
      },
      {
        path: "soporte",
        element: <div> Soporte </div>,
      },
    ],
  },
]);
