import AvailableVillaCards from "@/app/components/AvailableVillaCards";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/ui/Heading";
import { VillaType } from "@/types/villa";
import React from "react";

type Props = {
  villas: VillaType[];
};

const OtherVillas = ({ villas }: Props) => {
  return (
    <Container className=" space-y-6">
      <Heading className=" text-[22px]">Explore other villas</Heading>
      <AvailableVillaCards villas={villas} />
    </Container>
  );
};

export default OtherVillas;
