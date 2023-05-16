"use client";

// libraries
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import { Button } from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/ui/Heading";
import SharePopover from "./SharePopover";
import PhotosCarousel from "./PhotosCarousel";
import { Text } from "@/app/components/ui/Text";

// images & contents
import { VillaType } from "@/types/villa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineGridView } from "react-icons/md";

type Props = {
  villa: VillaType;
};

const HeadingSection = ({ villa }: Props) => {
  const { photos } = villa;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Container className="px-0 py-0 md:px-4 md:py-8" id="photos">
      {/* Heading Mobile */}
      <div className=" md:hidden">
        {/* Photo */}
        <div
          className="relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {photos.length > 0 && (
            <Image
              className="min-h-[280px] w-full object-cover hover:brightness-75"
              src={photos[0].image}
              alt={photos[0].alt}
            />
          )}
          <Button className="absolute bottom-4 right-4 rounded bg-black  bg-opacity-40 px-3 py-1 text-xs font-bold tracking-widest text-white">
            1/{photos.length}
          </Button>
        </div>

        {/* modal, carousel */}
        <PhotosCarousel
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          photos={photos}
          selectedItem={selectedItem}
        />

        {/* Title */}
        <div className="px-4 ">
          <div className="  space-y-2 border-b py-4">
            <Heading size="lg">{villa.cardTitle}</Heading>
            <div className="flex items-center gap-1">
              <IoLocationOutline className=" text-gray-800" />
              <Link
                href="https://www.google.com/maps?ll=25.36565,51.51235&z=15&t=m&hl=en&gl=QA&mapclient=embed&cid=9845095862073321625"
                target="_blank"
                className="cursor-pointer text-sm text-gray-500 underline"
              >
                West Bay Lagoon, Leqtaifiya
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Heading Desktop */}
      <div className="relative hidden space-y-2 md:block">
        {/* Title */}
        <div className="">
          <Heading size="lg">{villa.cardTitle}</Heading>
          <div className=" flex justify-between leading-none">
            <Text size="small" className=" flex items-center gap-1">
              <IoLocationOutline />{" "}
              <Link
                href="https://www.google.com/maps?ll=25.36565,51.51235&z=15&t=m&hl=en&gl=QA&mapclient=embed&cid=9845095862073321625"
                target="_blank"
                className="cursor-pointer underline"
              >
                West Bay Lagoon, Leqtaifiya
              </Link>
            </Text>
            <SharePopover />
          </div>
        </div>

        {/*  Photos */}
        <div className="grid h-[calc(50vw-36px)] max-h-[500px] grid-cols-12 grid-rows-2 gap-2 ">
          {photos.slice(0, 5).map((photo, index) => {
            return (
              <Image
                key={index}
                className={`${
                  index === 0
                    ? "col-span-6 row-span-2 rounded-bl-lg rounded-tl-lg"
                    : "col-span-3"
                } ${index === 2 && "rounded-tr-lg"} ${
                  index === 4 && "rounded-br-lg"
                } h-full cursor-pointer object-cover transition-all duration-200 ease-in-out hover:brightness-75`}
                src={photo.image}
                alt={photo.alt}
                priority
                onClick={() => {
                  setSelectedItem(index);
                  setIsOpen(!isOpen);
                }}
              />
            );
          })}
        </div>
        <Button
          onClick={() => {
            setSelectedItem(0);
            setIsOpen(!isOpen);
          }}
          className="absolute bottom-4 right-4 space-x-1 border border-gray-950 bg-white py-1 text-xs tracking-normal text-gray-950"
        >
          <MdOutlineGridView size={18} />
          <span>Show photos</span>
        </Button>
      </div>
    </Container>
  );
};

export default HeadingSection;
