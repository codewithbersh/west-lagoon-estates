"use client";

import { Dialog } from "@headlessui/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image, { StaticImageData } from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import { IoCloseCircleOutline } from "react-icons/io5";
import { SlClose } from "react-icons/sl";
import { AiOutlineCloseSquare } from "react-icons/ai";

type Props = {
  isOpen: boolean;
  photos: StaticImageData[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedItem: number;
};

const PhotosCarousel = ({ isOpen, setIsOpen, photos, selectedItem }: Props) => {
  const md = useMediaQuery("(min-width: 768px)");

  const [currentIndex, setCurrentIndex] = useState(selectedItem);
  useEffect(() => {
    setCurrentIndex(selectedItem);
  }, [selectedItem]);
  const handleCarouselIndex = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50   place-items-center"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center sm:p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="flex h-full w-full max-w-5xl flex-col items-center justify-center ">
          <div className=" absolute top-0 mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 lg:px-0">
            <IoCloseCircleOutline
              onClick={() => setIsOpen(false)}
              size={`${md ? 30 : 24}`}
              className=" cursor-pointer  text-white hover:text-gray-500"
            />
            <span className="h-fit rounded text-base font-medium tracking-widest text-white md:text-lg">
              {currentIndex + 1}/{photos.length}
            </span>
          </div>
          <Carousel
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showArrows={md ? true : false}
            useKeyboardArrows
            emulateTouch
            onChange={handleCarouselIndex}
            selectedItem={selectedItem}
          >
            {photos.map((photo, index) => (
              <div key={index} className="h-[calc(90vw-36px)] max-h-[500px]">
                <Image
                  src={photo}
                  alt={photo.src}
                  className=" h-full w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PhotosCarousel;
