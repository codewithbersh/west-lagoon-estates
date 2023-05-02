import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Small from "../ui/Small";

import beachFront from "@/public/beach-front.jpg";
import wle from "@/public/wle.jpg";

import { TbToolsKitchen2 } from "react-icons/tb";
import { BiCloset } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlinePool, MdOutlineSevereCold, MdWifi } from "react-icons/md";

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
    <div className="container relative mx-auto max-w-5xl overflow-clip pb-12 lg:flex lg:flex-row-reverse">
      <Image
        className="md:h-[450px] lg:h-[540px] lg:max-w-[850px] h-[380px] object-cover brightness-75 lg:rounded lg:object-fill"
        src={beachFront}
        alt="Beach Front Villa"
      />

      {/* relative -translate-y-12 */}
      <div className="">
        <div className=" min-[510px]:max-w-[450px]  relative flex -translate-y-12 flex-col  gap-8 overflow-hidden border bg-white px-8 py-8 drop-shadow-lg min-[510px]:left-8 min-[510px]:rounded md:left-16 md:-translate-y-32 lg:absolute lg:bottom-24 lg:left-8 lg:translate-y-0">
          <div className=" flex flex-col gap-6">
            <Heading
              size="md"
              className="font-medium uppercase leading-tight text-emerald-900"
            >
              Your Gateway to Luxury
            </Heading>
            <Paragraph className="font-light text-gray-900">
              Find the perfect villa for rent and experience luxurious living
              like never before.
            </Paragraph>

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

          <div className=" flex gap-3">
            <Button size="lg" variant="secondary">
              Explore Villas
            </Button>
            <Button variant="tertiary" className="!px-0">
              Learn more
            </Button>
          </div>
        </div>
      </div>

      {/* background color on desktop */}
      <div className="bottom-6 left-0 -z-50 hidden h-2/3 w-2/3 rounded bg-emerald-100 lg:absolute lg:block"></div>
    </div>
  );
};

export default HeroSection;
