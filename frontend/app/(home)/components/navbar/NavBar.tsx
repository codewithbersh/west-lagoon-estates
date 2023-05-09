import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

// ui components
import Hamburger from "./Hamburger";
import { Button } from "@/app/components/ui/Button";

// svgs
import { BiChevronDown } from "react-icons/bi";
import { Logo } from "@/app/components/ui/Logo";
import ScrollLink from "@/app/components/ui/ScrollLink";
import Container from "@/app/components/ui/Container";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  const navLinkClassName = `text-sm text-gray-400 ${poppins.className} hover:text-emerald-600`;
  return (
    <Container className=" py-4">
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
    </Container>
  );
};

export default NavBar;
