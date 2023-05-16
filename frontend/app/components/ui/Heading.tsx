import { cn } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { FC, HTMLAttributes } from "react";

const headingVariants = cva("font-medium text-gray-800 ", {
  // leading none in cva not working
  variants: {
    size: {
      sm: "text-base leading-none",
      default: "text-lg leading-none",
      md: "text-[22px] leading-none",
      lg: "text-[26px] leading-none",
      xl: "text-3xl leading-none",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = ({ className, children, size, ...props }) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

export default Heading;
