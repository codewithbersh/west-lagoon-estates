"use client";

import React, { useContext } from "react";
import { NavContext } from "@/app/(home)/context/NavContext";

type Props = {};

const Hamburger = (props: Props) => {
  const { isOpen, setIsOpen } = useContext(NavContext);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const lineClassName =
    "h-[3px] w-6 bg-emerald-700 transition duration-300 ease-in-out";
  return (
    <div onClick={handleOpen} className="cursor-pointer sm:hidden">
      <div className=" flex flex-col gap-1">
        <div
          className={`${lineClassName} ${
            isOpen ? " translate-y-[7px] rotate-45" : "rotate-0"
          }`}
        ></div>
        <div
          className={`${lineClassName} ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></div>
        <div
          className={`${lineClassName} ${
            isOpen ? "-translate-y-[7px] -rotate-45" : "rotate-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Hamburger;
