import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type AvatarProps = ComponentProps<"img">;

export const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <img
      className={cn("size-7 bg-[#0e0e0e] rounded-full object-cover", className)}
      {...props}
    />
  );
};
