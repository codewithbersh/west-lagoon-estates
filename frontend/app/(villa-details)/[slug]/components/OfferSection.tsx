import Heading from "@/app/components/ui/Heading";
import Small from "@/app/components/ui/Small";
import { VillaType } from "@/types/villa";
import React from "react";

type Props = {
  villa: VillaType;
};

const OfferSection = ({ villa }: Props) => {
  return (
    <div className="space-y-4">
      <Heading className=" text-[22px] leading-none">
        What this villa offers
      </Heading>
      <div className=" flex flex-wrap gap-2">
        {villa.offers.map((offer, index) => {
          return (
            <Small
              className=" flex w-fit items-center gap-2 rounded border px-[14px] py-[14px] font-medium"
              key={index}
            >
              <>{offer.icon}</>
              <span>{offer.description}</span>
            </Small>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default OfferSection;
