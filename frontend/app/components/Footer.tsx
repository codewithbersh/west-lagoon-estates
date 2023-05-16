// libraries
import Link from "next/link";
import Image from "next/image";

// components
import { Text } from "./ui/Text";

// images
import logoMobile from "@/public/images/logo.svg";
import logoDesktop from "@/public/images/logo-desktop.svg";

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
    name: "Beach Front",
    href: "/beach-front-villa",
  },
  {
    name: "Pool Front",
    href: "/pool-front-villa",
  },
  {
    name: "Corner Villa",
    href: "/corner-villa",
  },
  {
    name: "Location",
    href: "https://www.google.com/maps?ll=25.36565,51.51235&z=15&t=m&hl=en&gl=QA&mapclient=embed&cid=9845095862073321625",
  },
];

const Footer = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col space-y-8 px-4 pb-6 pt-0">
      <hr className=" w-full" />
      <div className="flex flex-col gap-4 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <Image src={logoDesktop} alt="Logo" className="hidden sm:block" />
        <Image src={logoMobile} alt="Logo" className="block sm:hidden" />
        <div className="flex flex-wrap gap-8">
          {links.map((link, index) => {
            return (
              <Link className="" key={index} href={link.href}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <Text size="small">© 2023 West Lagoon Estates</Text>
      </div>
    </div>
  );
};

export default Footer;
