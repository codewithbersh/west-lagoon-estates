import { cn } from "@/app/lib/utils";
import React, { FC, HTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  error: FieldError | undefined;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Input: FC<InputProps> = ({
  placeholder,
  id,
  className,
  error,
  register,
  ...props
}) => {
  return (
    <div className="relative flex flex-col-reverse gap-1 ">
      <input
        id={id}
        {...props}
        placeholder={placeholder}
        className={cn(
          `peer w-full rounded border px-3 py-2 placeholder-transparent ${
            error && "border-rose-400"
          }`,
          className
        )}
        {...register}
      />
      <label
        htmlFor={id}
        className="absolute -top-[9px] left-[9px] cursor-text bg-white px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-[9px] peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
