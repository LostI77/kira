import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

type BadgeProps = ComponentProps<"div">;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "transition-colors inline-flex justify-center items-center h-6 rounded-[20px] bg-[#0e0e0ee6] text-xs text-gray-50/80 font-light py-1 px-2 hover:bg-[#0e0e0e] hover:text-white",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
