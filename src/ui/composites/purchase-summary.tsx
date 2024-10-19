import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import {
  ComponentProps,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
} from "react";

type PurchaseSummaryProps = ComponentProps<"div">;

type PurchaseSummaryComponent = {
  Header: FC<ComponentProps<"h2">>;
  Content: FC<ComponentProps<"div">>;
  ProductsText: FC<ComponentProps<"p">>;
  ProductList: FC<ComponentProps<"ul">>;
  ProductItem: FC<{ children: ReactNode }>;
  ProductItemContainer: FC<{ children: ReactNode }>;
  ProductItemName: FC<ComponentProps<"p">>;
  ProductItemQuantity: FC<ComponentProps<"p">>;
  ProductItemPrice: FC<ComponentProps<"p">>;
  Divider: FC;
  Total: FC<ComponentProps<"p">>;
};

const PurchaseSummary = forwardRef<HTMLDivElement, PurchaseSummaryProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col w-96 h-max border border-solid border-[#0e0e0e26] rounded-2xl shadow-[0px_4px_8px_#00000026] m-0 p-6 gap-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
) as ForwardRefExoticComponent<PurchaseSummaryProps> & PurchaseSummaryComponent;

PurchaseSummary.Header = ({ className, children, ...props }) => (
  <h2 className={cn("font-normal text-2xl", className)} {...props}>
    {children}
  </h2>
);

PurchaseSummary.Content = ({ className, children, ...props }) => (
  <div className={cn("flex flex-col gap-3", className)} {...props}>
    {children}
  </div>
);

PurchaseSummary.ProductsText = ({ className, children, ...props }) => (
  <p className={cn("font-normal text-base", className)} {...props}>
    {children}
  </p>
);

PurchaseSummary.ProductList = ({ className, children, ...props }) => (
  <ul className={cn("flex flex-col p-2.5 gap-2", className)} {...props}>
    {children}
  </ul>
);

PurchaseSummary.ProductItem = ({ children }) => (
  <li className="inline-flex justify-between items-start"> {children} </li>
);

PurchaseSummary.ProductItemContainer = ({ children }) => (
  <div className="inline-flex gap-1">
    <span className="py-1">
      <Icon
        className="size-2.5 text-[#0e0e0ecc]"
        icon={"material-symbols:circle"}
      />
    </span>
    <div> {children} </div>
  </div>
);
PurchaseSummary.ProductItemName = ({ className, children, ...props }) => (
  <p className={cn("font-light text-sm", className)} {...props}>
    {children}
  </p>
);
PurchaseSummary.ProductItemQuantity = ({ className, children, ...props }) => (
  <p className={cn("font-light text-xs", className)} {...props}>
    Cantidad: {children}
  </p>
);
PurchaseSummary.ProductItemPrice = ({ className, children, ...props }) => (
  <p className={cn("font-light text-sm normal-nums", className)} {...props}>
    S/ {children}
  </p>
);

PurchaseSummary.Divider = () => (
  <div className="w-full h-[1px] bg-[rgba(14,14,14,0.8)]" />
);

PurchaseSummary.Total = ({ className, children, ...props }) => (
  <div className="inline-flex flex-nowrap justify-between items-center">
    <p>Total</p>
    <p className={cn("normal-nums", className)} {...props}>
      {children}
    </p>
  </div>
);

PurchaseSummary.displayName = "PurchaseSummary";
PurchaseSummary.Header.displayName = "PurchaseSummary.Header";
PurchaseSummary.Content.displayName = "PurchaseSummary.Content";
PurchaseSummary.Total.displayName = "PurchaseSummary.Total";
PurchaseSummary.Divider.displayName = "PurchaseSummary.Divider";
PurchaseSummary.ProductsText.displayName = "PurchaseSummary.ProductsText";
PurchaseSummary.ProductList.displayName = "PurchaseSummary.ProductList";
PurchaseSummary.ProductItem.displayName = "PurchaseSummary.ProductItem";
PurchaseSummary.ProductItemContainer.displayName =
  "PurchaseSummary.ProductItemContainer";
PurchaseSummary.ProductItemName.displayName = "PurchaseSummary.ProductItemName";
PurchaseSummary.ProductItemQuantity.displayName =
  "PurchaseSummary.ProductItemQuantity";
PurchaseSummary.ProductItemPrice.displayName =
  "PurchaseSummary.ProductItemPrice";

export { PurchaseSummary };
