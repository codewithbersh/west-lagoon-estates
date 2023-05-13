"use client";

import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import Small from "@/app/components/ui/Small";
import useCopyToClipboard from "@/app/hooks/useCopyToClipboard";
import { Popover } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { FiShare } from "react-icons/fi";
import {
  MdOutlineContentCopy,
  MdOutlineWhatsapp,
  MdOutlineMail,
} from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";

/*
TODO:
    update mailto,
    links to messenger & whatsapp
 */

type Props = {};

const links = [
  {
    Icon: MdOutlineContentCopy,
    title: "Copy Link",
  },
  {
    Icon: MdOutlineMail,
    title: "Email",
  },
  {
    Icon: MdOutlineWhatsapp,
    title: "WhatsApp",
  },
  {
    Icon: RiMessengerLine,
    title: "Messenger",
  },
];

const SharePopover = (props: Props) => {
  const [value, copy] = useCopyToClipboard();
  const handleEmailButton = () => {
    const recipient = "example@example.com";
    const subject = "TODO: Please update this";
    const body = "This is the body of the email.";

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  };
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [toast]);
  return (
    <Popover className="relative">
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button
            className={`flex items-end justify-end gap-[6px] rounded-lg px-3 py-2 outline-none hover:bg-gray-50 ${
              open && "bg-gray-50"
            }`}
          >
            <FiShare />
            <Small className=" leading-[12px]">Share</Small>
          </Popover.Button>
          <Popover.Panel className="absolute z-10 -translate-x-[238px] translate-y-[10px]   space-y-2 rounded-lg border bg-white pt-4">
            <div className="columns-2 space-y-4 px-4">
              {links.map((item, index) => (
                <div
                  key={index}
                  className=" flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-gray-50"
                  onClick={() => {
                    if (
                      item.Icon === MdOutlineContentCopy &&
                      item.title === "Copy Link"
                    ) {
                      copy(window.location.href);
                      setToast(true);
                    } else if (
                      item.Icon === MdOutlineMail &&
                      item.title === "Email"
                    ) {
                      handleEmailButton();
                    }
                  }}
                >
                  <div className="rounded-lg bg-emerald-50 p-2">
                    <item.Icon className=" text-emerald-700" size={24} />
                  </div>
                  <Small>{item.title}</Small>
                </div>
              ))}
            </div>
            <div className=" space-y-1 bg-gray-100 px-6 py-4 text-base">
              <Heading className="">Spread the word</Heading>
              <Paragraph className="font-light">
                Share it with your friends and family
              </Paragraph>
            </div>
            <div
              className={`absolute bottom-[12px] left-0 right-0 ml-auto mr-auto flex w-fit items-center gap-[6px] rounded-lg border bg-white px-3 py-2 text-sm  shadow-2xl transition-all duration-200 ease-in-out ${
                toast ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <AiFillCheckCircle size={18} className=" text-emerald-600" />
              Copied to clipboard
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default SharePopover;
