import React from "react";
import HeadingSection from "./components/HeadingSection";
import LocationSection from "./components/LocationSection";
import { villas } from "@/contents/villa/villa-contents";
import OtherVillas from "./components/OtherVillas";
import CallToAction from "@/app/(home)/components/home/CallToAction";
import MainSection from "./components/main/MainSection";

type Props = {
  params: {
    slug: string;
  };
};

const VillaDetail = ({ params }: Props) => {
  const villa = villas.find((villa) => villa.slug === params.slug);

  if (!villa) throw new Error("Page not found");

  return (
    <section>
      <HeadingSection villa={villa} />
      <MainSection villa={villa} />
      <LocationSection />
      <OtherVillas villas={villas.filter((item) => item.slug !== villa.slug)} />
      <CallToAction />
    </section>
  );
};

export default VillaDetail;
