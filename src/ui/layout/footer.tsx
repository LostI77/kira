import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full h-auto py-36 px-6">
      <div className="max-w-screen-2xl my-0 mx-auto">
        <div className="flex flex-col  md:flex-row flex-nowrap justify-between gap-12">
          <div className="max-w-96">
            <img
              className="w-[18.75rem] h-[6.188rem] mb-5"
              src="/logo.png"
              alt="Logo de la empresa"
              draggable="false"
            />
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vel unde corporis exercitationem, soluta dignissimos
              cupiditate ab placeat, in praesentium similique porro aliquam
              temporibus voluptas laborum dolorem laboriosam sed rem.
            </p>
          </div>
          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="mb-2 ml-1 text-sm text-[#fffffded] font-bold">
                Servicios
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    to={"/productos/computadoras"}
                    target="_self"
                    className="transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-0.5 text-sm text-[#fffcf4b0] outline-none hover:text-[#fffffded] focus-visible:text-[#fffffded]"
                  >
                    Computadoras
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/productos/latpots"}
                    target="_self"
                    className="transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-0.5 text-sm text-[#fffcf4b0] outline-none hover:text-[#fffffded] focus-visible:text-[#fffffded]"
                  >
                    Laptopts
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/productos/componentes"}
                    target="_self"
                    className="transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-0.5 text-sm text-[#fffcf4b0] outline-none hover:text-[#fffffded] focus-visible:text-[#fffffded]"
                  >
                    Componentes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="mb-2 ml-1 text-sm text-[#fffffded] font-bold">
                Enlaces
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    to={"/quienes-somos"}
                    target="_self"
                    className="transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-0.5 text-sm text-[#fffcf4b0] outline-none hover:text-[#fffffded] focus-visible:text-[#fffffded]"
                  >
                    Quienes somos
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/productos"}
                    target="_self"
                    className="transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-0.5 text-sm text-[#fffcf4b0] outline-none hover:text-[#fffffded] focus-visible:text-[#fffffded]"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/soporte"}
                    target="_self"
                    className="transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-0.5 text-sm text-[#fffcf4b0] outline-none hover:text-[#fffffded] focus-visible:text-[#fffffded]"
                  >
                    Productos
                  </Link>
                </li>
              </ul>
            </div>
            {/*
            <div className="flex flex-col gap-4">
              <h4 className="mb-2 ml-1 text-sm text-[#fffffded] font-bold">
                Contacto
              </h4>
              <div>
                <form action="">
                  <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Correo:</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Telefono:</label>
                    <input type="text" />
                  </div>
                </form>
              </div>
            </div>
            */}
          </div>
        </div>
        <p className="font-bold text-xs text-center mt-2 py-2">
          ©️ Copyright Computer Peru - 2024
        </p>
      </div>
    </footer>
  );
};
