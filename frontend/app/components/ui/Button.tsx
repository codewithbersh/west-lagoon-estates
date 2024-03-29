import React, { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex justify-center items-center font-normal w-fit rounded transition-all duration-300 ease-in-out hover:scale-95 tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-emerald-500 text-white hover:bg-emerald-400",
        outline:
          "border border-emerald-500 text-emerald-500 hover:border-emerald-400 hover:text-emerald-400",
        tertiary:
          "bg-none underline text-gray-500 underline-offset-4 hover:scale-100",
      },
      size: {
        tertiary: "leading-none p-0",
        default: "py-2 px-[14px] text-sm",
        md: "py-[10px] px-4 text-sm",
        lg: "py-[10px] px-[18px] text-base lg:py-[12px] lg:px-5",
        xl: "py-[12px] px-5 text-base",
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
