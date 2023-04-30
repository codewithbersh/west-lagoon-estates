import React from "react";
import Image from "next/image";

// images, icons

import logoDesktop from "@/public/logo-desktop.svg";
import logoMobile from "@/public/logo-mobile.svg";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { Button } from "../ui/Button";

import { BiChevronDown } from "react-icons/bi";

type Props = {};

const NavBar = (props: Props) => {
  const navLinkClassName =
    "capitalize font-medium tracking-wider text-gray-500";
  return (
    <header className="border-b-2 py-4">
      <nav className="container mx-auto flex max-w-5xl items-center justify-between px-4 xl:px-0">
        <Image src={logoMobile} alt="Logo Mobile" className="lg:hidden" />
        <Image
          src={logoDesktop}
          alt="Logo Desktop"
          className="hidden lg:block"
        />
        <Hamburger />

        <div className="hidden items-center justify-center gap-x-4  lg:flex">
          <Link
            className={`flex items-center gap-2 ${navLinkClassName}`}
            href="/"
          >
            villas <BiChevronDown size={24} />
          </Link>
          <Link className={navLinkClassName} href="/">
            about
          </Link>
          <Link className={navLinkClassName} href="/">
            blogs
          </Link>
          <Button size="xsmall">Get in Touch</Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
