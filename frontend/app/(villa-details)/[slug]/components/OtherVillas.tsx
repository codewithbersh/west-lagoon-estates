import AvailableVillaCards from "@/app/components/AvailableVillaCards";
import Heading from "@/app/components/ui/Heading";
import { VillaType } from "@/types/villa";
import React from "react";

type Props = {
  villas: VillaType[];
};

const OtherVillas = ({ villas }: Props) => {
  return (
    <div className=" mx-auto max-w-5xl space-y-6 px-4 py-8 lg:px-0">
      <Heading className=" text-[22px]">Explore other villas</Heading>
      <AvailableVillaCards villas={villas} />
    </div>
  );
};

export default OtherVillas;
