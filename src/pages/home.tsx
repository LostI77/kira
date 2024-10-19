import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { Testimonial } from "@/main-types";

import { TestimonialCard } from "@composites/testimonial-card";
import { TextCounter } from "@animations/text-counter";
import { Avatar } from "@components/avatar";
import { Button } from "@components/button";

export const Home = () => {
  const { testimonials_list } = useLoaderData() as {
    testimonials_list: Testimonial[];
  };

  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(
    testimonials_list || []
  );

  useEffect(() => {
    setTestimonialsList(testimonials_list);
  }, [testimonials_list]);

  return (
    <section>
      <div className="flex flex-row justify-between items-center w-full h-[650px] py-12 px-28">
        <div className="w-[577px]">
          <h1 className="font-semibold text-5xl text-left mb-6">
            <span>Los mejores productos </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A9AD4] to-[#2181DB]">
              tecnologicos
            </span>
          </h1>
          <p className="text-base leading-7 py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, alias. Numquam sunt ab quaerat assumenda sint ex quod
            quae ducimus? Provident doloremque, qui quo iure nihil debitis
            dolorum facere rerum. Perspiciatis pariatur aperiam ut non labore
            rem dolorum.
          </p>
          <div className="flex flex-row py-4 gap-3">
            <Button
              as="a"
              shadow={"small"}
              className="w-36"
              href="/productos"
              target="_self"
            >
              Ir a productos
            </Button>
            <Button
              as="a"
              variant={"dark"}
              className="w-36"
              href="/carrito"
              target="_self"
            >
              Example
            </Button>
          </div>
          <Icon className="size-4 text-black mt-8" icon={"cil:arrow-bottom"} />
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
      </div>
      <div className="flex flex-row justify-between items-center py-16 px-[120px]">
        <div className="w-[453px] h-full flex flex-col gap-6">
          <h2 className="font-semibold text-5xl text-left">
            Consigue segun{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A9AD4] to-[#2181DB]">
              tus necesidades
            </span>
          </h2>
          <p className="font-medium text-base leading-7">
            Lorem ipsum dolor sit amet consectetur. Tincidunt dui justo nisi
            integer in. Et a nunc scelerisque malesuada dolor consequat vel sit
            tempus. Vestibulum neque a aenean libero magna tempor et felis
            purus. Ac ut tempus quis a id lorem.
          </p>
          <p className="font-medium text-base leading-7">
            Vestibulum neque a aenean libero magna tempor et felis purus. Ac ut
            tempus quis a id lorem.
          </p>
          <div className="w-40">
            <Button
              as="a"
              variant={"dark"}
              href="/productos"
              target="_self"
              rel="noreferrer noopener"
            >
              Ver
            </Button>
          </div>
        </div>
        <div className="w-[640px] h-[370px] rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/img/products-panel.jpg"
            alt=""
            fetchPriority="low"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-16 px-[120px] ">
        <div className="flex flex-col flex-nowrap w-[712px] gap-6">
          <div>
            <h2 className="font-semibold text-5xl text-center">
              Aseguramos la integridad de nuestros{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A9AD4] to-[#2181DB]">
                productos
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 py-11 gap-16">
            <motion.div className="">
              <TextCounter minValue={0} maxValue={124.6} text="+ Mil" />
              <p className="text-center text-base font-normal">
                Personas confiaron en nosotros
              </p>
            </motion.div>
            <motion.div className="">
              <TextCounter minValue={0} maxValue={15} text="+ Mil" />
              <p className="text-center text-base font-normal">
                Distribuidores confiaron en nosotros
              </p>
            </motion.div>
            <motion.div className="">
              <TextCounter minValue={0} maxValue={450.87} text="+ Mil" />
              <p className="text-center text-base font-normal">
                Envios comprobados por todo el mundo
              </p>
            </motion.div>
            <motion.div className="">
              <TextCounter minValue={0} maxValue={40.5} text="+ Mil" />
              <p className="text-center text-base font-normal">
                Nuevos usuarios diariamente
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[800px] py-[165px] px-[120px]">
        <div className="relative w-[750px]">
          <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[560px] h-[500px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(33,129,219,.7)_0%,_rgba(255,255,255,0)_100%)] -z-10"></div>
          <div className="relative flex flex-col items-center justify-center py-12 px-6 gap-8">
            <h2 className="font-semibold text-4xl text-center">
              Han{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                evolucionado
              </span>{" "}
              la forma de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A9AD4] to-[#2181DB]">
                comprar online
              </span>{" "}
              a otro{" "}
              <span className="text-transparent bg-clip-text bg-green-400">
                nivel.
              </span>
            </h2>
            <Icon className="w-20 h-10" icon={"logos:intel"} />
            <div className="inline-flex items-center gap-7 p-3">
              <Icon className="size-9" icon={"bi:nvidia"} />
              <Icon className="size-9" icon={"mdi:apple"} />
              <Icon className="size-9" icon={"simple-icons:samsung"} />
              <Icon className="size-9" icon={"simple-icons:asus"} />
              <Icon className="size-9" icon={"simple-icons:corsair"} />
              <Icon
                className="size-9"
                icon={"simple-icons:kingstontechnology"}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #fff 15%, #fff 85%, transparent 100%)",
        }}
        className="w-full py-[120px] px-7 overflow-hidden"
      >
        <motion.div
          className="flex flex-row gap-24"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 35,
          }}
        >
          {testimonialsList.map((t, i) => (
            <TestimonialCard key={`testimonial-card-${i}`}>
              <TestimonialCard.Testimonial>
                {t.text}
              </TestimonialCard.Testimonial>
              <TestimonialCard.Information>
                <Avatar
                  src={t.author.avatar || "/img/GYpL9s8XUAAPMUB.jpeg"}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <TestimonialCard.Author>
                  <TestimonialCard.Name>{t.author.name}</TestimonialCard.Name>
                  <TestimonialCard.Role>{t.author.role}</TestimonialCard.Role>
                </TestimonialCard.Author>
              </TestimonialCard.Information>
            </TestimonialCard>
          ))}
        </motion.div>
      </div>
      <div className="w-[560px] flex flex-col items-center py-64 mx-auto gap-12">
        <h3 className="font-semibold text-4xl text-center">
          Disfruta del mejor{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A9AD4] to-[#2181DB]">
            servicio
          </span>{" "}
          de tecnologia{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            ahora.
          </span>
        </h3>
        <Button
          as="a"
          variant={"dark"}
          className="w-48"
          href="/login"
          target="_self"
          rel="noreferrer noopener"
        >
          Registrate
        </Button>
      </div>
    </section>
  );
};
