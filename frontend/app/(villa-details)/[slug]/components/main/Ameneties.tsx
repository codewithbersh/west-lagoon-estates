import { Button } from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import { VillaType } from "@/types/villa";
import React from "react";

type Props = {
  villa: VillaType;
};

const Ameneties = ({ villa }: Props) => {
  return (
    <Container className=" space-y-4 px-0">
      <Heading className=" text-[22px]" id="amenities">
        What this villa offers
      </Heading>
      <div className=" flex flex-col gap-2 sm:flex-row sm:gap-6">
        {villa.ameneties.slice(0, 2).map((amenety, index) => {
          return (
            <div key={index} className="flex flex-col gap-2 sm:w-1/2">
              {amenety.list.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" flex items-center gap-2 text-gray-700"
                  >
                    {item.icon}
                    <p>{item.description}</p>
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
      >
        View all amenities
      </Button>
    </Container>
  );
};

export default Ameneties;
