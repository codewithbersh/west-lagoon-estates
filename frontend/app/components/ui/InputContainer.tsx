import { cn } from "@/app/lib/utils";
import React, { FC, HTMLAttributes } from "react";

interface InputContainerProps extends HTMLAttributes<HTMLDivElement> {}

const InputContainer: FC<InputContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("relative flex flex-col-reverse gap-1", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default InputContainer;
