import React, { FC, HTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const smallVariants = cva("tracking-wide", {
  variants: {
    size: {
      default: "text-sm",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SmallProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof smallVariants> {}

const Small: FC<SmallProps> = ({ children, className, size, ...props }) => {
  return (
    <small {...props} className={cn(smallVariants({ size, className }))}>
      {children}
    </small>
  );
};

export default Small;
