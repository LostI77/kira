import { motion } from "framer-motion";
import { forwardRef } from "react";

export const ScrollAnimate = forwardRef<HTMLDivElement>((props, ref) => {
  /*const { scrollY } = useScroll({
    target: ref,
  });*/
  return (
    <motion.div
      ref={ref}
      viewport={{
        once: true,
        amount: 0.8,
      }}
    >
      scroll-animate
    </motion.div>
  );
});

ScrollAnimate.displayName = "ScrollAnimate";
