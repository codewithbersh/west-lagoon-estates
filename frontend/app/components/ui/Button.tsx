import React, { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex justify-center items-center tracking-wider font-medium",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white",
        outline: "border-2 border-blue-600 text-blue-600",
      },
      size: {
        sm: "py-2 px-[14px] text-sm",
        md: "py-[10px] px-4 text-sm",
        lg: "py-[10px] px-[18px] text-base ",
        xl: "py-[12px] px-5 text-base",
        xxl: "py-4 px-7 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
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
