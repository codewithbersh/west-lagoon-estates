"use client";

// libraries
import { useState } from "react";

// components
import { Button } from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import AmenetiesDialog from "./AmenitiesDialog";
import { Text } from "@/app/components/ui/Text";

// types
import { VillaType } from "@/types/villa";

type Props = {
  villa: VillaType;
};

const Amenities = ({ villa }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" space-y-4 pt-6">
      <Heading size="md">What this villa offers</Heading>
      <div className=" flex flex-col gap-4">
        {villa.amenities.slice(0, 2).map((amenety, index) => {
          return (
            <div key={index} className="flex flex-col gap-4 sm:w-1/2">
              {amenety.list.map((item, index) => {
                return (
                  <div key={index} className=" flex items-center gap-4">
                    {<item.Icon size={20} className=" text-gray-800" />}
                    <Text>{item.description}</Text>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Button
        size="md"
        className=" bg-gray-200 font-medium tracking-normal text-gray-800 hover:bg-gray-100 "
        onClick={() => setIsOpen(!isOpen)}
      >
        View all amenities
      </Button>
      <AmenetiesDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        amenities={villa.amenities}
      />
    </div>
  );
};

export default Amenities;
