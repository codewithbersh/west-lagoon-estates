import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

// ui components
import Hamburger from "./Hamburger";
import { Button } from "@/app/components/ui/Button";

// svgs
import { BiChevronDown } from "react-icons/bi";
import { Logo } from "@/app/components/ui/Logo";
import Container from "@/app/components/ui/Container";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  const navLinkClassName = `text-sm text-gray-400 ${poppins.className} hover:text-emerald-600`;
  return (
    <Container className=" py-4">
      <nav className="flex items-center justify-between">
        <Link passHref href="/">
          <Logo fill="#048757" />
        </Link>
        <Hamburger />

        <div className=" hidden items-center gap-6 sm:flex lg:gap-10">
          <Link className={navLinkClassName} href="/#">
            Home
          </Link>
          <Link
            className={`flex items-center gap-2 ${navLinkClassName}`}
            href="/"
          >
            Villas <BiChevronDown size={24} />
          </Link>
          <Button size="md">Contact Us</Button>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
