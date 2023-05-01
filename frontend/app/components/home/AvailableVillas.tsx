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

type Props = {};

interface villaType {
  name: string;
  title: string;
  bedroom: number;
  bathroom: number;
  garage: number;
  area: number;
  price: number;
  image: StaticImageData;
}

const villas: villaType[] = [
  {
    name: "Zafira Mansion",
    title: "Beach Front Villa",
    bedroom: 6,
    bathroom: 5,
    garage: 2,
    area: 500,
    price: 30000,
    image: beachFrontVilla,
  },
  {
    name: "Jazira Estate",
    title: "Pool Front Villa",
    bedroom: 5,
    bathroom: 4,
    garage: 2,
    area: 470,
    price: 25000,
    image: poolFrontVilla,
  },
  {
    name: "Hadiya Chateau",
    title: "Corver Villa",
    bedroom: 3,
    bathroom: 2,
    garage: 2,
    area: 300,
    price: 18000,
    image: cornerVilla,
  },
];

const amenitiesClasses = "flex gap-2 items-center text-gray-700";

const fillColor = "fill-gray-400";

const AvailableVillas = (props: Props) => {
  const format = require("comma-number");
  return (
    <div className=" container mx-auto flex max-w-5xl flex-col gap-8 py-[120px]">
      <div className=" flex flex-col gap-4 px-4 text-center md:text-left lg:px-0">
        <Heading size="lg">Best Property Deals</Heading>
        <div className=" flex flex-col justify-between md:flex-row">
          <Paragraph className=" max-w-full text-gray-500">
            We have the best deals for villas in West Bay
          </Paragraph>
          <Link href="/" className=" font-medium text-blue-500 underline">
            View all
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-8">
        {villas.map((villa, index) => {
          return (
            <div
              key={index}
              className="mx-auto flex max-w-[300px] flex-col gap-2 border px-4 py-4 sm:mx-0"
            >
              <Image
                className=" h-[185px] object-cover object-center"
                src={villa.image}
                alt={villa.title}
              />
              <div className=" flex flex-col gap-6">
                <div className=" flex flex-col gap-4">
                  <div className=" flex flex-col gap-2">
                    <Small className=" font-medium uppercase tracking-widest text-gray-400">
                      {villa.title}
                    </Small>
                    <Heading>{villa.name}</Heading>
                  </div>

                  <div className=" flex justify-between">
                    <div className={amenitiesClasses}>
                      <IconBed fill={fillColor} />
                      <Small size="lg">{villa.bedroom}</Small>
                    </div>

                    <div className={amenitiesClasses}>
                      <IconBath fill={fillColor} />
                      <Small size="lg">{villa.bathroom}</Small>
                    </div>

                    <div className={amenitiesClasses}>
                      <IconCarGarage fill={fillColor} />
                      <Small size="lg">{villa.garage}</Small>
                    </div>

                    <div className={amenitiesClasses}>
                      <IconArea fill={fillColor} />
                      <Small size="lg">{villa.area}</Small>
                    </div>
                  </div>
                </div>

                <hr />
                <div className=" flex items-center justify-between">
                  <Heading size="md">
                    QR <span>{format(villa.price)}</span>
                  </Heading>
                  <Button>View Details</Button>
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
