import React from "react";
import HeadingSection from "./components/HeadingSection";
import OfferSection from "./components/OfferSection";
import ContactSection from "./components/ContactSection";
import AmenetiesSection from "./components/AmenetiesSection";
import LocationSection from "./components/LocationSection";
import { villas } from "@/contents/villa/villa-contents";
import OtherVillas from "./components/OtherVillas";

type Props = {
  params: {
    slug: string;
  };
};

const VillaDetail = ({ params }: Props) => {
  const villa = villas.find((villa) => villa.slug === params.slug);

  if (!villa) throw new Error("Page not found");

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

      <LocationSection />

      <hr className="mx-auto max-w-5xl px-4 lg:px-0" />

      <OtherVillas villas={villas.filter((item) => item.slug !== villa.slug)} />
    </div>
  );
};

export default VillaDetail;
