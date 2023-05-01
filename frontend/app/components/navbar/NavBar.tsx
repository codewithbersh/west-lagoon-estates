import React from "react";
import Image from "next/image";
import logoDesktop from "@/public/logo-desktop.svg";
import logoMobile from "@/public/logo-mobile.svg";

import Hamburger from "./Hamburger";
import Link from "next/link";
import { Button } from "../ui/Button";

import { BiChevronDown } from "react-icons/bi";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

type Props = {};

const NavBar = (props: Props) => {
  const navLinkClassName = `text-sm md:text-base text-gray-400 ${poppins.className} hover:text-emerald-600`;
  return (
    <header className="mx-auto max-w-5xl px-4 py-4 lg:px-0">
      <nav className="flex justify-between">
        <Image src={logoMobile} alt="Logo Mobile" className="sm:hidden" />
        <Image
          src={logoDesktop}
          alt="Logo Desktop"
          className="hidden sm:block"
        />
        <Hamburger />

        <div className=" hidden items-center gap-6 sm:flex lg:gap-10">
          <Link className={navLinkClassName} href="/">
            Home
          </Link>
          <Link
            className={`flex items-center gap-2 ${navLinkClassName}`}
            href="/"
          >
            Villas <BiChevronDown size={24} />
          </Link>
          <Link className={navLinkClassName} href="/">
            About
          </Link>
          <Link className={navLinkClassName} href="/">
            Blogs
          </Link>
          <Button size="md">Contact Us</Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
