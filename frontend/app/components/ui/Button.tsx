import React, { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex justify-center items-center tracking-wider font-medium w-fit rounded",
  {
    variants: {
      variant: {
        default: "bg-emerald-600 text-white",
        secondary: "bg-emerald-50 text-emerald-600",
        outline: "border border-emerald-600 text-emerald-600",
      },
      size: {
        sm: "py-2 px-[14px] text-sm lg:py-[10px] lg:px-4",
        md: "py-[10px] px-4 text-sm lg:py-[10px] lg:px-[18px] lg:text-base",
        lg: "py-[10px] px-[18px] text-base",
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
