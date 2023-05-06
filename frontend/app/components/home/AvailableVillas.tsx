import Link from "next/link";
import React from "react";
import beachFrontVilla from "@/public/beach-front.jpg";
import poolFrontVilla from "@/public/pool-front.png";
import cornerVilla from "@/public/corner-villa.jpg";
import Image, { StaticImageData } from "next/image";
import { IconBed, IconBath, IconCarGarage, IconArea } from "../ui/IconSVG";
import { Button } from "../ui/Button";
import Heading from "../ui/Heading";
import Small from "../ui/Small";
import Paragraph from "../ui/Paragraph";

import { FaBed, FaBath, FaCarAlt, FaSign } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsArrowDownCircle } from "react-icons/bs";

type Props = {};

interface villaType {
  title: string;
  caption: string;
  bedroom: number;
  bathroom: number;
  garage: number;
  area: number;
  price: number;
  image: StaticImageData;
}

const villas: villaType[] = [
  {
    title: "Beach Front Villa",
    caption:
      "Relax in luxury at this beach front villa with private beach and panoramic lagoon views.",
    bedroom: 6,
    bathroom: 5,
    garage: 2,
    area: 500,
    price: 30000,
    image: beachFrontVilla,
  },
  {
    title: "Pool Front Villa",
    caption:
      "Experience resort-style living in this villa with direct pool access and stunning beach views.",
    bedroom: 5,
    bathroom: 4,
    garage: 2,
    area: 470,
    price: 25000,
    image: poolFrontVilla,
  },
  {
    title: "Corner Villa",
    caption:
      "Escape to coastal luxury in this stunning 300m² single detached villa with beach and park views.",
    bedroom: 3,
    bathroom: 2,
    garage: 2,
    area: 300,
    price: 18000,
    image: cornerVilla,
  },
];

const icon = {
  size: 20,
  style: { color: "#9ca3af" },
};

const amenitiesClasses = " flex gap-2 items-center text-gray-600";

const AvailableVillas = (props: Props) => {
  const format = require("comma-number");
  return (
    <div className=" mx-auto max-w-5xl space-y-6 px-4 py-8 lg:px-0">
      {/* Heading */}
      <div className="flex flex-col gap-2">
        <Heading size="xl">Best Property Deals</Heading>
        <div className=" flex flex-col gap-6 sm:flex-row sm:justify-between">
          <Paragraph className=" text-gray-500">
            We have the best deals for villas in West Bay
          </Paragraph>
          <div className=" flex items-center gap-1">
            <BsArrowDownCircle className=" text-gray-600" />
            <Link
              href="/"
              className=" font-medium text-gray-600 underline underline-offset-2"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="grid auto-rows-max grid-cols-1 place-items-center gap-6 sm:grid-cols-2 sm:place-items-start min-[915px]:grid-cols-3">
        {villas.map((villa, index) => {
          return (
            <div
              key={index}
              className=" h-full max-w-[400px] rounded border shadow transition duration-300 ease-in-out hover:scale-105  hover:cursor-pointer hover:shadow-xl"
            >
              <div className="object-fill">
                <Image
                  className="h-[200px] rounded-t object-cover"
                  src={villa.image}
                  alt={villa.title}
                />
              </div>
              <div className="flex flex-col justify-between gap-4 p-6">
                <div className="">
                  <div className="space-y-2">
                    <Heading size="sm" className="font-medium">
                      {villa.title}
                    </Heading>
                    <Paragraph className="h-[96px] font-light text-gray-500">
                      {villa.caption}
                    </Paragraph>
                  </div>

                  <div className="flex justify-between">
                    <div className={amenitiesClasses}>
                      <BiBed size={icon.size} style={icon.style} />
                      <Small>{villa.bedroom}</Small>
                    </div>

                    <div className={amenitiesClasses}>
                      <BiBath size={icon.size} style={icon.style} />
                      <Small>{villa.bathroom}</Small>
                    </div>

                    <div className={amenitiesClasses}>
                      <AiOutlineCar size={icon.size} style={icon.style} />
                      <Small>{villa.garage}</Small>
                    </div>

                    <div className={amenitiesClasses}>
                      <BiArea size={icon.size} style={icon.style} />
                      <Small>{villa.area} m²</Small>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="flex items-center justify-between">
                  <div className=" flex items-start gap-[6px]">
                    <span className=" text-sm leading-tight">QAR</span>
                    <Heading size="lg" className=" font-bold tracking-wide">
                      {format(villa.price)}
                    </Heading>
                  </div>
                  <div className="flex items-center gap-1">
                    <Link
                      href="/"
                      className=" text-sm font-medium tracking-wide text-emerald-600"
                    >
                      View Villa
                    </Link>
                    <MdOutlineKeyboardArrowRight
                      size={24}
                      className=" text-emerald-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableVillas;
