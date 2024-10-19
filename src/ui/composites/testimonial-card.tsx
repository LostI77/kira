import { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

type TestimonialCardProps = ComponentProps<"div">;

type TestimonialCardComponent = {
  Testimonial: FC<ComponentProps<"p">>;
  Information: FC<ComponentProps<"div">>;
  Author: FC<ComponentProps<"div">>;
  Name: FC<ComponentProps<"h4">>;
  Role: FC<ComponentProps<"p">>;
};

export const TestimonialCard: FC<TestimonialCardProps> &
  TestimonialCardComponent = ({ children, ...props }: TestimonialCardProps) => {
  return (
    <div
      className="flex flex-col flex-nowrap min-w-[440px] min-h-[320px] rounded-lg shadow-[0px_4px_8px_rgba(0,0,0,0.25)] m-0 p-16 gap-3"
      {...props}
    >
      {children}
    </div>
  );
};

TestimonialCard.Testimonial = ({ className, children, ...props }) => (
  <p className={cn("font-regular text-xl", className)} {...props}>
    “ {children} ”
  </p>
);

TestimonialCard.Information = ({ className, children, ...props }) => (
  <div
    className={cn(
      "flex flex-row flex-nowrap justify-start items-center bg-transparent m-0 py-6 px-0 gap-1",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

TestimonialCard.Author = ({ className, children, ...props }) => (
  <div
    className={cn(
      "flex flex-col flex-nowrap justify-start items-start",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

TestimonialCard.Name = ({ className, children, ...props }) => (
  <h4 className={cn("font-normal text-xs", className)} {...props}>
    {children}
  </h4>
);

TestimonialCard.Role = ({ className, children, ...props }) => (
  <p className={cn("font-light text-[10px]", className)} {...props}>
    {children}
  </p>
);
