import Container from "@/app/components/ui/Container";
import React from "react";
import Offers from "./Offers";
import Ameneties from "./Ameneties";
import ContactCard from "./ContactCard";
import { VillaType } from "@/types/villa";

type Props = {
  villa: VillaType;
};

const MainSection = ({ villa }: Props) => {
  return (
    <Container>
      <div className=" justify-between gap-16 md:flex">
        <div>
          <Offers villa={villa} />
          <Ameneties villa={villa} />
        </div>

        {/* Desktop only Contact Card */}
        <ContactCard />
      </div>

      <hr />
    </Container>
  );
};

export default MainSection;
