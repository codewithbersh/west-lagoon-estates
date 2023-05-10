import Container from "@/app/components/ui/Container";
import React from "react";
import Ameneties from "./Ameneties";
import ContactCard from "./ContactCard";
import { VillaType } from "@/types/villa";
import Header from "./Header";
import ContactCTA from "./ContactCTA";
import AboutListing from "./AboutListing";

type Props = {
  villa: VillaType;
};

const MainSection = ({ villa }: Props) => {
  return (
    <Container className=" border-b">
      <div className=" relative justify-between gap-12 md:flex">
        <div>
          <Header villa={villa} />
          <AboutListing about={villa.about} />
          <Ameneties villa={villa} />
        </div>

        {/* Desktop only Contact Card */}
        {/* <ContactCard /> */}
        <ContactCTA />
      </div>
    </Container>
  );
};

export default MainSection;
