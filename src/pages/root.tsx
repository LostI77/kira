import { StrictMode } from "react";
import { Outlet } from "react-router-dom";

// Context
import { SearchProvider } from "@contexts/SearchContext";

// Components
import { Header } from "@layout/header";
import { Footer } from "@layout/footer";

export const Root = () => {
  return (
    <StrictMode>
      <SearchProvider>
        <Header />
        <main className="max-w-screen-2xl my-0 mx-auto">
          <Outlet />
        </main>
        <Footer />
      </SearchProvider>
    </StrictMode>
  );
};
