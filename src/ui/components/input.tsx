import { ComponentProps, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
type InputProps = ComponentProps<"input"> & {
  iconOnClick?: () => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, iconOnClick, ...props }, ref) => {
    return (
      <div className="flex justify-start items-center w-full h-9 bg-[#0e0e0e] rounded-lg py-1.5 px-3 gap-1">
        <button onClick={iconOnClick}>
          <Icon
            className="size-6 text-white"
            icon={"material-symbols-light:search"}
          />
        </button>
        <input
          ref={ref}
          className={cn(
            "w-full font-light text-base text-white outline-none",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
