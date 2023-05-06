import React from "react";
import Image from "next/image";

// ui components
import { Button } from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Small from "../ui/Small";

// images and svgs
import beachFront from "@/public/beach-front.jpg";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BiCloset } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import {
  MdOutlinePool,
  MdOutlineSevereCold,
  MdWifi,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";

interface AmenetyInterface {
  icon: JSX.Element;
  title: string;
}

const icon = {
  style: { color: "#d1d5db" },
  size: 20,
};

const ameneties: AmenetyInterface[] = [
  {
    icon: <TbToolsKitchen2 size={icon.size} style={icon.style} />,
    title: "Kitchen Appliances",
  },
  {
    icon: <BiCloset size={icon.size} style={icon.style} />,
    title: "Built-in Wardrobes",
  },
  {
    icon: <GiHomeGarage size={icon.size} style={icon.style} />,
    title: "Covered Parking",
  },
  {
    icon: <MdOutlinePool size={icon.size} style={icon.style} />,
    title: "Pool and Beach",
  },
  {
    icon: <MdOutlineSevereCold size={icon.size} style={icon.style} />,
    title: "Centralized A/C",
  },
  {
    icon: <MdWifi size={icon.size} style={icon.style} />,
    title: "High-speed WiFi",
  },
];

const HeroSection = () => {
  return (
    <div className="container relative mx-auto max-w-5xl overflow-clip lg:flex lg:flex-row-reverse">
      <Image
        className="h-[380px] object-cover brightness-75 md:h-[450px] lg:h-[540px] lg:max-w-[850px] lg:rounded lg:object-fill"
        src={beachFront}
        alt="Beach Front Villa"
      />

      {/* card */}
      <div className=" relative  -top-12 -mb-12 space-y-8 overflow-hidden border bg-white px-8 py-8 drop-shadow-lg min-[510px]:left-8 min-[510px]:max-w-[450px] min-[510px]:rounded md:-top-24 md:-mb-24 lg:absolute lg:left-8 lg:top-16 lg:mb-0">
        <div className=" space-y-8">
          <div className=" space-y-4">
            <div>
              <Small className="font-normal uppercase text-gray-500">
                West Bay Lagoon
              </Small>
              <Heading size="lg" className="leading-tight text-emerald-700">
                Luxury Villas for Rent
              </Heading>
            </div>
            <Paragraph className="font-light text-gray-900">
              Find the perfect villa for rent in Doha, Qatar and experience
              luxurious living like never before.
            </Paragraph>
          </div>

          <ul className="grid grid-cols-2 gap-4 font-light text-gray-500">
            {ameneties.map((amenety, index) => {
              return (
                <li key={index} className={`flex w-fit items-center gap-2`}>
                  <span>{amenety.icon}</span>
                  <Small className=" sm:text-sm">{amenety.title}</Small>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex space-x-3">
          <Button size="lg" variant="secondary">
            Explore Villas
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-gray-700 text-gray-700"
          >
            Learn more
          </Button>
        </div>
      </div>

      {/* background color on desktop */}
      <div className="bottom-6 left-0 -z-50 hidden h-2/3 w-2/3 rounded bg-emerald-100 lg:absolute lg:block"></div>
    </div>
  );
};

export default HeroSection;
