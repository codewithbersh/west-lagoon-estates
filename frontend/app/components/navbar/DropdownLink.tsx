"use client";

// libraries
import { HTMLAttributes } from "react";
import { Menu } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

// components
import { Text } from "../ui/Text";

// contents
import { links } from "@/contents/links/link";

// utils
import { cn } from "@/app/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const DropdownLink = ({ className, children, ...props }: Props) => {
  return (
    <div className="relative" {...props}>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              className={cn("relative flex items-center gap-1", className)}
            >
              Villas
              <BiChevronDown
                size={14}
                className={`transition-all duration-300 ease-in-out ${
                  open && "-rotate-180"
                }`}
              />
              {children}
            </Menu.Button>
            <Menu.Items className="absolute -left-[190px] top-[40px] z-10 flex w-[250px] flex-col rounded-lg border bg-white p-2">
              {links.villas.map((item, index) => (
                <Menu.Item key={index}>
                  <Link
                    href={item.href}
                    className="relative flex w-full cursor-pointer flex-col  rounded-lg p-3 hover:bg-gray-50"
                  >
                    <Text className=" text-gray-800">{item.label}</Text>
                    <Text size="small">{item.caption}</Text>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
};

export default DropdownLink;
