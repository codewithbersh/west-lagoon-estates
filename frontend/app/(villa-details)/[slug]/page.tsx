import React from "react";
import HeadingSection from "./components/HeadingSection";
import { villa } from "@/contents/villa/villa-contents";
import OfferSection from "./components/OfferSection";
import ContactSection from "./components/ContactSection";

const VillaDetail = () => {
  return (
    <div>
      <HeadingSection villa={villa} />

      {/* main body */}
      <div className=" mx-auto max-w-5xl justify-between gap-4 px-4 py-6 md:flex lg:px-0">
        <OfferSection villa={villa} />
        {/* Desktop only Contact Card */}
        <ContactSection />
      </div>
    </div>
  );
};

export default VillaDetail;
