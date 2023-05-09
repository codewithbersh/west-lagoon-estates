import React, { FC, HTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("container mx-auto max-w-5xl px-4 py-8 lg:px-0", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
