import React, { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex justify-center items-center uppercase tracking-wider font-medium",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white",
        outline: "border-2 border-blue-600 text-blue-600",
      },
      size: {
        xsmall: "py-[6px] px-2 text-xs",
        default: "py-2 px-[10px] text-sm",
        medium: "py-3 px-4 text-base ",
        large: "py-[15px] px-[30px] text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps {}
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
