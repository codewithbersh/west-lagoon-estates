import React from "react";
import beachFrontVilla from "@/public/beach-front-villa.jpeg";
import Image from "next/image";
import { Button } from "../ui/Button";

import { BiRadioCircleMarked } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 sm:flex-row-reverse sm:gap-6 sm:py-24  lg:px-0 lg:py-40">
      <div className=" max-w-[487px] flex-1">
        <Image alt="Beach Front Villa" src={beachFrontVilla} />
      </div>
      <div className=" relative flex flex-1 flex-col gap-6 px-8 sm:items-start sm:px-0 md:gap-12">
        {/* radial bg  */}
        {/* <div className=" absolute right-8 top-4 z-0 h-24 w-24  rounded-full bg-gradient-radial  from-yellow-300 via-yellow-50 to-transparent blur-lg"></div> */}

        {/* heading and subheader */}
        <div className=" z-50 flex flex-col gap-2 text-center sm:text-left md:gap-4">
          <h1 className="  text-[32px] leading-none md:text-4xl lg:text-6xl">
            Find your dream <br /> home
            <span className=" font-bold italic">
              {" "}
              <mark className=" inline-block bg-yellow-300 pb-[20px] leading-[0px] md:pb-[25px] lg:pb-[30px]">
                today
              </mark>
            </span>
          </h1>
          <p className=" text-sm leading-snug text-gray-500 md:text-lg lg:text-xl">
            Discover a wide range of villas for rent at West Lagoon Estates.
          </p>
        </div>

        {/* button */}
        <div className=" flex w-full flex-col items-center gap-2 sm:flex-row">
          <Button
            size="lg"
            className="shrink-0 lg:px-5 lg:py-[12px] lg:text-base"
          >
            Explore Villas
          </Button>
          <div className=" flex shrink items-center gap-x-3">
            <BiRadioCircleMarked size={20} className=" text-yellow-300" />
            <small className="text-xs leading-snug text-gray-500">
              At least 90% of our villas <br /> are rented each year!
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
