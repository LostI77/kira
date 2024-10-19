import { cn } from "@/lib/utils";
import {
  ComponentProps,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
} from "react";

type ProductCardProps = ComponentProps<"div">;

type ProductCardComponent = {
  Image: FC<ComponentProps<"img">>;
  Content: FC<ComponentProps<"div">>;
  Title: FC<ComponentProps<"h3">>;
  Price: FC<ComponentProps<"p">>;
};

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-start w-[330px] h-min bg-white rounded-lg shadow-[0px_6px_8px_rgba(0,0,0,0.3)] m-0 p-0 gap-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
) as ForwardRefExoticComponent<ProductCardProps> & ProductCardComponent;

ProductCard.Image = forwardRef<HTMLImageElement, ComponentProps<"img">>(
  ({ className, src, alt, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn("w-full h-[250px] object-cover", className)}
        src={src}
        alt={alt}
        {...props}
      />
    );
  }
);

ProductCard.Image.displayName = "ProductCard.Image";

ProductCard.Content = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-col w-full min-h-[135px] max-h-full m-0 py-3 px-1.5 gap-2"
      >
        {children}
      </div>
    );
  }
);

ProductCard.Title = forwardRef<HTMLHeadingElement, ComponentProps<"h3">>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("font-medium text-2xl ml-1.5", className)}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

ProductCard.Title.displayName = "ProductCard.Title";

ProductCard.Price = forwardRef<HTMLParagraphElement, ComponentProps<"p">>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("font-regular text-base ml-1.5", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

ProductCard.Price.displayName = "ProductCard.Price";

export { ProductCard };
