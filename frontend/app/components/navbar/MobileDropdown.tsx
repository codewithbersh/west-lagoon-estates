import { cn } from "@/app/lib/utils";
import { Menu } from "@headlessui/react";
import React, { FC, HTMLAttributes } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { Button } from "../ui/Button";
import { links } from "@/contents/links/link";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MobileDropdown: FC<Props> = ({ className, ...props }) => {
  const linkClassName =
    "text-gray-800 font-medium py-2 rounded-lg px-4 hover:bg-gray-50";
  return (
    <div
      className={cn(className, "grid place-items-center sm:hidden")}
      {...props}
    >
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button>
              <Hamburger open={open} />
            </Menu.Button>
            {open && (
              <div className=" ">
                <Menu.Items
                  static
                  className="absolute left-0 z-50 w-full translate-y-[14px] border-b   bg-white px-2 py-4 shadow-sm"
                >
                  <div className=" mx-auto flex flex-col gap-4">
                    <Menu.Item>
                      <Link className={linkClassName} href={links.home.href}>
                        Home
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        className={linkClassName}
                        href={links.villas[0].href}
                      >
                        Beach Front Villa
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link
                        className={linkClassName}
                        href={links.villas[1].href}
                      >
                        Pool Front Villa
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link
                        className={linkClassName}
                        href={links.villas[2].href}
                      >
                        Corner Villa
                      </Link>
                    </Menu.Item>

                    <hr />
                    <Menu.Item>
                      <Link className={`px-4`} href={links.contact.href}>
                        <Button className=" w-full max-w-sm">Contact Us</Button>
                      </Link>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </div>
            )}
          </>
        )}
      </Menu>
    </div>
  );
};

export default MobileDropdown;
