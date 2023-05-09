import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/ui/Heading";
import Small from "@/app/components/ui/Small";
import { VillaType } from "@/types/villa";
import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";

/* 
    TODO:
        - 'Show all photos' button in md screens above
        - Modal and Carousel onClick on the image
        - Hover effect on grid-items: highlight 'Show all photos' button
*/

type Props = {
  villa: VillaType;
};

const HeadingSection = ({ villa }: Props) => {
  const { photos } = villa;
  return (
    <Container className="px-0 py-0 md:px-4 md:pt-8">
      {/* Heading Mobile */}
      <div className="md:hidden">
        {/* Photo */}
        <div>
          {photos.length > 0 && (
            <Image
              className=" min-h-[320px] object-cover"
              src={photos[0]}
              alt=""
            />
          )}
        </div>

        {/* Title */}
        <div className="px-4 ">
          <div className="  space-y-2 border-b py-4">
            <Heading className=" text-[26px] leading-none">
              {villa.title}
            </Heading>
            <Small className=" flex items-center gap-1">
              <IoLocationOutline />{" "}
              <span className=" underline">West Bay Lagoon, Leqtaifiya</span>
            </Small>
          </div>
        </div>
      </div>

      {/* Heading Desktop */}
      <div className="hidden space-y-4 md:block">
        {/* Title */}
        <div className="space-y-1">
          <Heading className=" text-[26px] leading-none">{villa.title}</Heading>
          <div className=" flex justify-between leading-none">
            <Small className=" flex items-center gap-1">
              <IoLocationOutline />{" "}
              <span className=" underline">West Bay Lagoon, Leqtaifiya</span>
            </Small>
            <Small className=" flex items-center gap-1">
              <RiShareBoxLine /> <span className=" underline">Share</span>
            </Small>
          </div>
        </div>

        {/*  Photos */}
        <div className="grid h-[calc(50vw-36px)] max-h-[500px] grid-cols-12 grid-rows-2 gap-2 ">
          {photos.slice(0, 5).map((photo, index) => {
            return (
              <Image
                key={index}
                className={`${
                  index === 0 ? "col-span-6 row-span-2" : "col-span-3"
                } h-full object-cover`}
                src={photo}
                alt={`${index}`}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default HeadingSection;
