import React from "react";
import HeadingSection from "./components/HeadingSection";
import { villa } from "@/contents/villa/villa-contents";
import OfferSection from "./components/OfferSection";
import ContactSection from "./components/ContactSection";
import AmenetiesSection from "./components/AmenetiesSection";

const VillaDetail = () => {
  return (
    <div>
      <HeadingSection villa={villa} />

      {/* main body */}
      <div className=" mx-auto max-w-5xl justify-between gap-16 px-4 py-6 md:flex lg:px-0">
        <div>
          <OfferSection villa={villa} />
          <AmenetiesSection villa={villa} />
        </div>

        {/* Desktop only Contact Card */}
        <ContactSection />
      </div>

      <hr className="mx-auto max-w-5xl px-4 lg:px-0" />
    </div>
  );
};

export default VillaDetail;
