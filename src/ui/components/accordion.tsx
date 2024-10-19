import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const accordionVariants = cva("", {
  variants: {
    variant: {},
  },
  defaultVariants: {
    variant: undefined,
  },
});

type TriggerProps = ComponentProps<"div"> & {
  handleAccordion?: () => void;
  isOpen?: boolean;
};

type ContentProps = {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
};

type AccordionComponent = {
  Trigger: FC<TriggerProps>;
  Content: FC<ContentProps>;
};

type AccordionProps = ComponentProps<"div"> &
  VariantProps<typeof accordionVariants>;

export const Accordion = forwardRef(
  ({ className, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAccordion = () => {
      setIsOpen((prev) => !prev);
    };

    const childrenWithProps = Children.map(children, (child) => {
      if (isValidElement<TriggerProps | ContentProps>(child)) {
        return cloneElement(
          child as ReactElement<TriggerProps | ContentProps>,
          { isOpen, handleAccordion }
        );
      }
      return child;
    });

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col border border-black overflow-hidden p-2",
          className
        )}
        {...props}
      >
        {childrenWithProps}
      </div>
    );
  }
) as ForwardRefExoticComponent<AccordionProps> & AccordionComponent;

Accordion.displayName = "Accordion";

Accordion.Trigger = ({ children, isOpen, handleAccordion, ...props }) => (
  <div
    className="flex flex-row justify-between items-center cursor-pointer"
    onClick={handleAccordion}
    {...props}
  >
    {children}
    <Icon
      className="size-6"
      icon={isOpen ? "iconamoon:arrow-up-2" : "iconamoon:arrow-down-2"}
    />
  </div>
);

Accordion.Trigger.displayName = "Accordion.Trigger";

Accordion.Content = ({ className, children, isOpen }) => (
  <motion.div
    className={cn("text-sm", className)}
    initial={{ height: 0, opacity: 0 }}
    animate={{
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      padding: isOpen ? ".5rem 0" : "0 0",
    }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

Accordion.Content.displayName = "Accordion.Content";
