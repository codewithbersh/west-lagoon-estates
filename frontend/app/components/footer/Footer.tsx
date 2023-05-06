import React from "react";
import logoDesktop from "@/public/logo-desktop.svg";
import logoMobile from "@/public/logo-mobile.svg";
import Image from "next/image";
import Link from "next/link";
import Small from "../ui/Small";
import { Logo } from "../ui/Logo";

type LinkType = {
  name: string;
  href: string;
};

const links: LinkType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Villas",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Blogs",
    href: "/",
  },
  {
    name: "Location",
    href: "/",
  },
  {
    name: "Brochure",
    href: "/",
  },
];

const Footer = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col space-y-8 px-4 py-8">
      <hr className=" w-full" />
      <div className="flex flex-col gap-4 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <Logo fill="#059669" />
        <div className="grid grid-cols-2  gap-4 md:grid-cols-6">
          {links.map((link, index) => {
            return (
              <Link className="" key={index} href={link.href}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <Small className=" ">© 2023 West Lagoon Estates</Small>
      </div>
    </div>
  );
};

export default Footer;
