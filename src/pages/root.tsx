import { StrictMode } from "react";
import { Outlet } from "react-router-dom";

// Components
import { Header } from "../ui/layout/header";
import { Footer } from "../ui/layout/footer";

export const Root = () => {
  return (
    <StrictMode>
      <Header />
      <Outlet />
      <Footer />
    </StrictMode>
  );
};
