import { ChangeEvent, FormEvent, useId, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

import { gmailRegex, passwordRegex } from "@/common/regex";
import { Button } from "@components/button";

export const LoginPage = () => {
  const [gmail, setGmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    try {
      e.preventDefault();

      if (!gmailRegex.test(gmail))
        throw new Error(
          "El gmail no es valido, revisa que este bien escrito o escribelo de vuelta."
        );

      if (!passwordRegex.test(password))
        throw new Error(
          "La contraseña esta mal escrita o no cumple con los requirimientos del sistema."
        );

      if (!gmailRegex.test(gmail) && !passwordRegex.test(password)) {
        throw new Error(
          "La contraseña y el gmail no son validos, intenta de nuevo."
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const gmailId = useId();
  const passwordId = useId();

  return (
    <section className="flex flex-row flex-nowrap items-center justify-center w-full h-[600px] gap-8">
      <div className="w-96 h-[480px] border rounded-lg p-6">
        <form action="/carrito" method="post" onSubmit={handleSubmit}>
          <h1 className="font-semibold text-2xl">Inicia Sección</h1>
          <div className="flex flex-col py-6 gap-3">
            <div className="flex flex-col justify-start gap-1">
              <label htmlFor={gmailId}>Ingresa tu gmail</label>
              <input
                type="email"
                className="text-white rounded-lg p-2 outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-current"
                name="gmail"
                placeholder="example@gmail.com"
                id={gmailId}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setGmail(e.target.value)
                }
              />
            </div>
            <div className="flex flex-col justify-start gap-1">
              <label htmlFor={passwordId}>Ingresa tu contraseña</label>
              <input
                type="password"
                className="text-white rounded-lg p-2 outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-current"
                name="password"
                placeholder="****************"
                id={passwordId}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>
          </div>
          <Button variant={"dark"} type="button" className="mt-5">
            <Icon icon="flat-color-icons:google" /> Inicia Sección con Google
          </Button>
          <Button variant={"dark"} type="button" className="mt-5">
            <Icon icon="mdi:twitter" /> Iniciar Sección con Twitter
          </Button>
          <Button variant={"dark"} type="submit" className="mt-5">
            Iniciar Sección
          </Button>
        </form>
      </div>
      <motion.div
        initial={{
          y: 100,
          borderRadius: "4px",
        }}
        whileInView={{
          width: "22.5rem",
          y: 0,
          borderRadius: "20px",
        }}
        viewport={{
          margin: "200px",
        }}
        className="w-80 h-[480px] origin-center overflow-hidden"
      >
        <a href="/productos" target="_self" rel="noopener noreferrer">
          <img
            className="w-full h-full object-cover"
            src="/img/banner.jpg"
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="async"
            draggable="false"
          />
        </a>
      </motion.div>
    </section>
  );
};
