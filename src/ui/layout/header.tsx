import { Link } from "react-router-dom";

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
          <ul className="inline-flex gap-6">
            <li className="">
              <Link to="/quienes-somos" target="_self" className="">
                Quienes somos
              </Link>
            </li>
            <li className="">
              <Link to="/productos" target="_self" className="">
                Productos
              </Link>
            </li>
            <li className="">
              <Link to="/soporte" target="_self" className="">
                Soporte
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
