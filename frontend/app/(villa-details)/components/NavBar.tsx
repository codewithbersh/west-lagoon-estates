import Link from "next/link";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { RiShareBoxLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className=" flex max-w-5xl justify-between border-b px-4 py-4 shadow">
      <div className="flex items-center gap-1">
        <BsArrowLeftCircle />
        <Link href="/" className=" font-medium">
          Home
        </Link>
      </div>

      <div className=" flex items-center gap-1">
        <RiShareBoxLine />
        <Link href="/" className=" font-medium underline">
          Share
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
