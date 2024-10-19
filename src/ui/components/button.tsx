import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex justify-center items-center h-10 text-base font-normal rounded-full py-2 px-4 gap-1 outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-current",
  {
    variants: {
      variant: {
        default: "bg-white text-[#0e0e0e]",
        dark: "bg-[#0e0e0e] text-white",
      },
      shadow: {
        default: "shadow-[0_0px_10px_rgba(0,0,0,0.10)]",
        small: "shadow-[0_2px_4px_rgba(0,0,0,0.25)]",
      },
    },
    defaultVariants: {
      variant: "default",
      shadow: "default",
    },
  }
);

export type ButtonProps<C extends ElementType = "button"> = {
  as?: C;
} & ComponentPropsWithoutRef<C> &
  VariantProps<typeof buttonVariants>;

export const Button = <C extends ElementType = "button">({
  as,
  variant,
  shadow,
  className,
  children,
  ...props
}: ButtonProps<C>) => {
  const Component = as || "button";
  return (
    <Component
      className={cn(buttonVariants({ variant, shadow }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.displayName = "Button";
