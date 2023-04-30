"use client";

import { NavContext } from "@/app/context/NavContext";
import React, { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {};

const Hamburger = (props: Props) => {
  const { isOpen, setIsOpen } = useContext(NavContext);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div onClick={handleOpen} className="cursor-pointer lg:hidden">
      {isOpen ? (
        <>
          <FaTimes size={24} />
        </>
      ) : (
        <>
          <FaBars size={24} />
        </>
      )}
    </div>
  );
};

export default Hamburger;
