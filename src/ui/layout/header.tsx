import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Header = () => {
  return (
    <header className="w-full h-24 p-5">
      <div className="flex flex-row flex-nowrap justify-between items-center max-w-screen-2xl h-14 my-0 mx-auto">
        <Link to="/" target="_self">
          <img
            className="w-[9.375rem] h-[3.094rem] object-cover aspect-[300/99]"
            src="/logo.png"
            alt="Logo de la empresa"
            draggable="false"
          />
        </Link>
        <nav className="py-0 px-8">
          <ul className="inline-flex items-center gap-6">
            <li>
              <Link to={"/productos"} target="_self" rel="noreferrer noopener">
                Productos
              </Link>
            </li>
            <li>
              <Link to={"/soporte"} target="_self" rel="noreferrer noopener">
                Soporte
              </Link>
            </li>
            <li>
              <Link to={"login"} target="_self" rel="noreferrer noopener">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/carrito"} target="_self" rel="noreferrer noopener">
                <Icon icon={"ph:shopping-cart-thin"} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
