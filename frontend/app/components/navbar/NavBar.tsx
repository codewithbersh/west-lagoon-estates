import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

// ui components
import Hamburger from "./Hamburger";
import { Button } from "../ui/Button";

// svgs
import { BiChevronDown } from "react-icons/bi";
import { Logo } from "../ui/Logo";
import ScrollLink from "../ui/ScrollLink";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  const navLinkClassName = `text-sm text-gray-400 ${poppins.className} hover:text-emerald-600`;
  return (
    <header className="mx-auto max-w-5xl px-4 py-4 lg:px-0">
      <nav className="flex items-center justify-between">
        <Logo fill="#048757" />
        <Hamburger />

        <div className=" hidden items-center gap-6 sm:flex lg:gap-10">
          <ScrollLink className={navLinkClassName} href="/#" scroll>
            Home
          </ScrollLink>
          <Link
            className={`flex items-center gap-2 ${navLinkClassName}`}
            href="/"
          >
            Villas <BiChevronDown size={24} />
          </Link>
          <ScrollLink className={navLinkClassName} href="/#location" scroll>
            Location
          </ScrollLink>
          <ScrollLink className={navLinkClassName} href="/#FAQs" scroll>
            FAQs
          </ScrollLink>
          <Button size="md">Contact Us</Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
