import { StrictMode } from "react";
import { Outlet } from "react-router-dom";

// Context

// Components
import { Header } from "@layout/header";
import { Footer } from "@layout/footer";

export const Root = () => {
  return (
    <StrictMode>
      <Header />
      <main className="max-w-screen-2xl my-0 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </StrictMode>
  );
};
