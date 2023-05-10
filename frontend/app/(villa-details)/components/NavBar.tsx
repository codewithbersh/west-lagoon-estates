import ScrollLink from "@/app/components/ui/ScrollLink";
import Link from "next/link";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { RiShareBoxLine } from "react-icons/ri";

/*
  TODO:
    - TBD: Update 'Back Button' in Home Link
    - Fixed navigation bar
    - md and up: scroll on click for the nav-links and highlight current position
*/

const NavBar = () => {
  return (
    <div className="z-50 w-full border-b bg-white shadow md:fixed">
      <div className=" mx-auto flex max-w-5xl justify-between px-4 py-4 lg:px-0">
        {/* Desktop and Mobile */}
        <div className="flex items-center gap-2">
          <BsArrowLeftCircle />
          <Link href="/" className=" font-medium">
            Home
          </Link>
        </div>

        {/* Mobile Only Nav Links */}
        <div className=" flex items-center gap-1 md:hidden">
          <RiShareBoxLine />
          <Link href="/" className=" font-medium underline">
            Share
          </Link>
        </div>

        {/* Desktop Only Nav Links */}
        <div className=" hidden gap-6 md:flex">
          <ScrollLink href="/#photos">Photos</ScrollLink>
          <ScrollLink href="/#amenities">Amenities</ScrollLink>
          <ScrollLink href="/#location">Location</ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
