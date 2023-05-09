import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import Small from "./ui/Small";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { VillaType } from "@/types/villa";

type Props = {
  villas: VillaType[];
};

const icon = {
  size: 20,
  style: { color: "#9ca3af" },
};

const amenitiesClasses = " flex gap-2 items-center text-gray-600";

const AvailableVillaCards = ({ villas }: Props) => {
  const format = require("comma-number");

  return (
    <div className="grid auto-rows-max grid-cols-1 place-items-start gap-6 sm:grid-cols-2 sm:place-items-start min-[915px]:grid-cols-3">
      {villas
        .filter((villa) => villa.available === true)
        .map((villa, index) => {
          return (
            <Link href={`/${villa.slug}`} passHref key={index}>
              <div className=" h-full max-w-[400px] rounded border shadow transition duration-300 ease-in-out hover:scale-105  hover:cursor-pointer hover:shadow-xl">
                <div className="object-fill">
                  <Image
                    className="h-[200px] rounded-t object-cover"
                    src={villa.photos[0]}
                    alt={villa.cardTitle}
                  />
                </div>
                <div className="flex flex-col justify-between gap-4 p-6">
                  <div className="">
                    <div className="space-y-2">
                      <Heading size="sm" className="font-medium">
                        {villa.title}
                      </Heading>
                      <Paragraph className="h-[96px] font-light text-gray-500">
                        {villa.cardCaption}
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
                      <Paragraph className=" text-sm font-medium tracking-wide text-emerald-600">
                        View Villa
                      </Paragraph>
                      <MdOutlineKeyboardArrowRight
                        size={24}
                        className=" text-emerald-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default AvailableVillaCards;
