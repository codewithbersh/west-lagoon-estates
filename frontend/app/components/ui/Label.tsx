import { cn } from "@/app/lib/utils";
import React, { FC, HTMLAttributes, LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label: FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label
      className={cn(
        "absolute -top-[9px] left-[9px] cursor-text bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-[9px] peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
