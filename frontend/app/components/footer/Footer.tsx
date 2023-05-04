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
    <div className="bg-emerald-700">
      <div className="mx-auto flex max-w-5xl flex-col gap-8  px-4 py-8 min-[850px]:flex-row min-[850px]:justify-between lg:px-0">
        <Logo fill="#ffffff" />
        <div className="flex flex-wrap gap-y-4 min-[850px]:flex-row min-[850px]:gap-x-4">
          {links.map((link, index) => {
            return (
              <Link
                className=" w-1/2 font-medium text-emerald-100 min-[850px]:w-fit"
                key={index}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <Small className=" text-emerald-200">© 2077 West Lagoon Estates</Small>
      </div>
    </div>
  );
};

export default Footer;
