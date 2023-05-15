"use client";

import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

// ui components
import Hamburger from "./Hamburger";
import { Button } from "@/app/components/ui/Button";

// svgs
import { Logo } from "@/app/components/ui/Logo";
import Container from "@/app/components/ui/Container";
import { links } from "@/contents/links/link";
import DropdownLink from "./DropdownLink";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  const navLinkClassName = `${poppins.className} text-sm hover:text-emerald-500 relative`;
  const pathname = usePathname();
  return (
    <div className=" border-b">
      <Container className="py-2">
        <nav className="flex items-center justify-between">
          <Link passHref href={links.home.href}>
            <Logo fill="#048757" />
          </Link>
          <Hamburger />

          <div className="relative hidden items-center gap-6 sm:flex lg:gap-10">
            <Link
              className={`${navLinkClassName} ${
                links.home.href === pathname
                  ? "text-emerald-500"
                  : "text-gray-500"
              }`}
              href={links.home.href}
            >
              Home
              {links.home.href === pathname && (
                <motion.span
                  transition={{ duration: 0.5 }}
                  layoutId="underline"
                  className=" absolute -bottom-1 block h-[2px] w-full bg-emerald-500"
                ></motion.span>
              )}
            </Link>

            <DropdownLink
              className={`${navLinkClassName} ${
                links.villas.some((villa) => villa.href === pathname)
                  ? "text-emerald-500"
                  : "text-gray-500"
              }`}
            >
              {links.villas.some((villa) => villa.href === pathname) && (
                <motion.span
                  layoutId="underline"
                  transition={{ duration: 0.5 }}
                  className=" absolute -bottom-1 block h-[2px] w-3/4 bg-emerald-500"
                ></motion.span>
              )}
            </DropdownLink>
            <Link href={links.contact.href} passHref>
              <Button size="md">{links.contact.label}</Button>
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
