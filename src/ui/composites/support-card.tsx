import { cn } from "@/lib/utils";
import {
  type ComponentProps,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
} from "react";

type SupportCardProps = ComponentProps<"div">;

type SupportCardComponent = {
  Title: FC<ComponentProps<"h3">>;
  Description: FC<ComponentProps<"p">>;
};

const SupportCard = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col flex-nowrap justify-between w-[364px] h-[236px] rounded-2xl shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}) as ForwardRefExoticComponent<SupportCardProps> & SupportCardComponent;

SupportCard.displayName = "SupportCard";

SupportCard.Title = ({
  className,
  children,
  ...props
}: ComponentProps<"h3">) => (
  <h3
    className={cn("font-medium text-xl text-zinc-950 mb-3", className)}
    {...props}
  >
    {children}
  </h3>
);

SupportCard.Title.displayName = "SupportCard.Title";

SupportCard.Description = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => (
  <p
    className={cn("font-normal text-sm text-zinc-950/90", className)}
    {...props}
  >
    {children}
  </p>
);

SupportCard.Description.displayName = "SupportCard.Description";

export { SupportCard };
