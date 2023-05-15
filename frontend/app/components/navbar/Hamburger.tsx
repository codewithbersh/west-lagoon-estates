"use client";

import React from "react";

interface Props {
  open: boolean;
}

const Hamburger = ({ open }: Props) => {
  const lineClassName =
    "h-[3px] w-6 bg-gray-800 transition duration-300 ease-in-out";
  return (
    <div className="cursor-pointer sm:hidden">
      <div className=" flex flex-col gap-1">
        <div
          className={`${lineClassName} ${
            open ? " translate-y-[7px] rotate-45" : "rotate-0"
          }`}
        ></div>
        <div
          className={`${lineClassName} ${open ? "opacity-0" : "opacity-100"}`}
        ></div>
        <div
          className={`${lineClassName} ${
            open ? "-translate-y-[7px] -rotate-45" : "rotate-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Hamburger;
