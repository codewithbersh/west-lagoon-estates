import React, { FC, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const textVariants = cva("text-gray-500 max-w-prose", {
  variants: {
    size: {
      small: "leading-none text-sm",
      normal: "leading-normal text-base",
    },

    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
    },
  },
  defaultVariants: {
    size: "normal",
    weight: "normal",
  },
});

interface Props
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text: FC<Props> = ({ className, size, weight, children, ...props }) => {
  return (
    <p className={cn(textVariants({ weight, size, className }))} {...props}>
      {children}
    </p>
  );
};

export { Text, textVariants };
