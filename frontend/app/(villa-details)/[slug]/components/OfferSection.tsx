import Heading from "@/app/components/ui/Heading";
import Small from "@/app/components/ui/Small";
import { VillaType } from "@/types/villa";
import React from "react";
import { BiArea, BiBath, BiBed, BiSwim } from "react-icons/bi";

type Props = {
  villa: VillaType;
};

const offerClassName =
  "flex w-fit items-center gap-2 rounded border px-[14px] py-[14px] font-medium";

const OfferSection = ({ villa }: Props) => {
  return (
    <div className="space-y-4">
      <Heading className=" text-[22px] leading-none">
        What this villa offers
      </Heading>
      <div className=" flex flex-wrap gap-2">
        {/* location feature */}
        <Small className={offerClassName}>
          {/* change later into condition */}
          <BiSwim />
          <span>{villa.locationFeature}</span>
        </Small>

        {/* beds */}
        <Small className={offerClassName}>
          <BiBed />
          <span>{villa.bedroom} Bedrooms</span>
        </Small>

        {/* baths */}
        <Small className={offerClassName}>
          <BiBath />
          <span>{villa.bathroom} Bathrooms</span>
        </Small>

        {/* area */}
        <Small className={offerClassName}>
          <BiArea />
          <span>{villa.area}m² Property</span>
        </Small>
      </div>
      <hr />
    </div>
  );
};

export default OfferSection;
