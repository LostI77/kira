import { cn } from "@/lib/utils";
import {
  ComponentProps,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
} from "react";
import { Icon } from "@iconify/react";
import { cva, type VariantProps } from "class-variance-authority";

const quantityButtonVariants = cva(
  "flex flex-col justify-center items-center size-7 bg-[#0e0e0e] text-white p-0",
  {
    variants: {
      variant: {
        left: "rounded-tl-md rounded-bl-md",
        right: "rounded-tr-md rounded-br-md",
      },
    },
    defaultVariants: {
      variant: null,
    },
  }
);

type ShoppingItemProps = ComponentProps<"div">;

type QuantityButtonProps = ComponentProps<"button"> &
  VariantProps<typeof quantityButtonVariants>;

type ShoppingItemComponent = {
  Image: FC<ComponentProps<"img">>;
  Details: FC<ComponentProps<"div">>;
  Header: FC<ComponentProps<"div">>;
  Title: FC<ComponentProps<"h3">>;
  RemoveButton: FC<ComponentProps<"button">>;
  Content: FC<ComponentProps<"div">>;
  InfoWrapper: FC<ComponentProps<"div">>;
  Text: FC<ComponentProps<"p">>;
  QuantityControls: FC<ComponentProps<"div">>;
  QuantityButtons: FC<ComponentProps<"div">>;
  QuantityButton: FC<QuantityButtonProps>;
};
export const ShoppingItem = forwardRef<HTMLDivElement, ShoppingItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-row items-start w-full h-[220px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.25)] rounded-2xl py-3 px-6 gap-3",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
) as ForwardRefExoticComponent<ShoppingItemProps> & ShoppingItemComponent;

ShoppingItem.displayName = "ShoppingItem";

ShoppingItem.Image = forwardRef<HTMLImageElement, ComponentProps<"img">>(
  ({ className, src, alt, ...props }, ref) => (
    <img
      ref={ref}
      className={cn(
        "relative max-w-[210px] max-h-[196px] size-full object-cover",
        className
      )}
      src={src}
      alt={alt}
      {...props}
    />
  )
);

ShoppingItem.Image.displayName = "ShoppingItem.Image";

ShoppingItem.Details = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col items-start w-full h-[196px] p-0 gap-2.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

ShoppingItem.Details.displayName = "ShoppingItem.Details";

ShoppingItem.Header = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-full flex flex-row justify-between items-center p-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

ShoppingItem.Header.displayName = "ShoppingItem.Header";

ShoppingItem.Title = ({
  className,
  children,
  ...props
}: ComponentProps<"h3">) => (
  <h3 className={cn("font-medium text-2xl text-black", className)} {...props}>
    {children}
  </h3>
);

ShoppingItem.Title.displayName = "ShoppingItem.Title";

ShoppingItem.RemoveButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("size-7 text-black cursor-pointer", className)}
    {...props}
  >
    <Icon className="size-7 text-black" icon={"ph:x-light"} />
  </button>
));

ShoppingItem.RemoveButton.displayName = "ShoppingItem.RemoveButton";

ShoppingItem.Content = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col justify-between items-start w-full p-0 gap-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

ShoppingItem.Content.displayName = "ShoppingItem.Content";

ShoppingItem.InfoWrapper = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-row justify-between items-center p-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

ShoppingItem.InfoWrapper.displayName = "ShoppingItem.InfoWrapper";

ShoppingItem.Text = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => (
  <p className={cn("font-normal text-xl text-black", className)} {...props}>
    {children}
  </p>
);

ShoppingItem.Text.displayName = "ShoppingItem.Text";

ShoppingItem.QuantityControls = forwardRef<
  HTMLDivElement,
  ComponentProps<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-row items-center justify-start p-0 gap-2",
      className
    )}
    {...props}
  >
    {children}
  </div>
));

ShoppingItem.QuantityControls.displayName = "ShoppingItem.QuantityControls";

ShoppingItem.QuantityButtons = forwardRef<
  HTMLDivElement,
  ComponentProps<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row items-start py-0 px-6", className)}
    {...props}
  >
    {children}
  </div>
));

ShoppingItem.QuantityButtons.displayName = "ShoppingItem.QuantityButtons";

ShoppingItem.QuantityButton = forwardRef<
  HTMLButtonElement,
  QuantityButtonProps
>(({ className, type, variant, children, ...props }, ref) => (
  <button
    ref={ref}
    type={type}
    className={cn(quantityButtonVariants({ variant }), className)}
    {...props}
  >
    {children}
  </button>
));
