import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import { VillaType } from "@/types/villa";
import React from "react";

type Props = {
  villa: VillaType;
};

const Ameneties = ({ villa }: Props) => {
  return (
    <div className=" divide-y divide-solid">
      {villa.ameneties.map((amenety, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-6 py-8 md:flex-row md:gap-12"
          >
            <div className="space-y-2 md:w-1/2">
              <Heading className=" text-gray-700">{amenety.title}</Heading>
              <Paragraph className=" text-light text-gray-400">
                {amenety.description}
              </Paragraph>
            </div>
            <div className="flex flex-col  gap-4 md:w-1/2">
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
          </div>
        );
      })}
    </div>
  );
};

export default Ameneties;
