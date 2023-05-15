"use client";

import { Button } from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/ui/Heading";
import { VillaType } from "@/types/villa";
import React, { useState } from "react";
import AmenetiesDialog from "./AmenitiesDialog";
import Paragraph from "@/app/components/ui/Paragraph";

type Props = {
  villa: VillaType;
};

const Amenities = ({ villa }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container className=" space-y-4 px-0">
      <Heading className=" text-[22px]" id="amenities">
        What this villa offers
      </Heading>
      <div className=" flex flex-col gap-2 sm:flex-row sm:gap-6">
        {villa.amenities.slice(0, 2).map((amenety, index) => {
          return (
            <div key={index} className="flex flex-col gap-2 sm:w-1/2">
              {amenety.list.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" flex items-center gap-3 text-gray-700"
                  >
                    {<item.Icon size={20} />}
                    <Paragraph>{item.description}</Paragraph>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Button
        variant="secondary"
        size="md"
        className=" bg-gray-100 font-medium tracking-normal text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        View all amenities
      </Button>

      <AmenetiesDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        amenities={villa.amenities}
      />
    </Container>
  );
};

export default Amenities;