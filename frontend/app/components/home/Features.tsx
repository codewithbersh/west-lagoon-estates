import React from "react";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Image, { StaticImageData } from "next/image";

import amenities from "@/public/amenities.jpg";
import location from "@/public/location.jpg";
import security from "@/public/security.jpg";

import { FaFingerprint } from "react-icons/fa";
import { TbMap2 } from "react-icons/tb";
import { BiSwim } from "react-icons/bi";
import { MdCheck } from "react-icons/md";

type FeaturesType = {
  img: StaticImageData; // not string
  icon: JSX.Element;
  title: string;
  subtitle: string;
  features: string[];
};

const features: FeaturesType[] = [
  {
    img: amenities,
    icon: <BiSwim size={30} />,
    title: "Enjoy unmatched amenities",
    subtitle:
      "Lorem ipsum dolor sit amet consectur dolor. Sit amet lorem ipsum dolor.",
    features: [
      "Fully equipped kitchens",
      "Basketball and tennis courts",
      "Kids playgrounds and private outdoor spaces",
      "Private beach and swimming pool",
    ],
  },
  {
    img: location,
    icon: <TbMap2 size={30} />,
    title: "Ideal Location",
    subtitle:
      "Lorem ipsum dolor sit amet consectur dolor. Sit amet lorem ipsum dolor.",
    features: [
      "Near major transportation routes",
      "Exclusive location near iconic landmarks",
      "Proximity to universities, government offices, and world class amenities",
    ],
  },

  {
    img: security,
    icon: <FaFingerprint size={30} />,
    title: "Maximum Security",
    subtitle:
      "Lorem ipsum dolor sit amet consectur dolor. Sit amet lorem ipsum dolor.",
    features: [
      "24-hour security personnel",
      "Industry-leading surveillance systems",
      "Restricted access to residents and personnel",
    ],
  },
];

const Features = () => {
  return (
    <div className=" mx-auto max-w-5xl space-y-8 px-4 py-8">
      {/* title */}
      <div className=" mx-auto space-y-4">
        <Heading size="xl" className=" text-center">
          Elevate Your Living Experience
        </Heading>
        <Paragraph className=" mx-auto text-center text-gray-500">
          Experience the ultimate in luxury with our upscale villas featuring
          stunning city views, world-class amenities, and exceptional service.
        </Paragraph>
      </div>

      {/* main */}

      <div className=" space-y-8">
        {features.map((feature, index) => {
          const reverseRow = index % 2 !== 0;
          const containerClass = `flex flex-col md:items-center gap-4 space-y-6 md:justify-between items-center  ${
            reverseRow ? "md:flex-row-reverse" : "md:flex-row"
          }`;
          return (
            <div key={index} className={containerClass}>
              <div className=" space-y-6 md:w-1/2">
                <div className=" h-fit w-fit rounded-full bg-emerald-50 p-1 text-emerald-600">
                  <div className=" rounded-full bg-emerald-100 p-2">
                    {feature.icon}
                  </div>
                </div>
                <Heading size="lg">{feature.title}</Heading>
                <Paragraph>{feature.subtitle}</Paragraph>
                <div className=" space-y-4">
                  {feature.features.map((item, index) => {
                    return (
                      <div key={index} className=" flex gap-3">
                        <div className=" grid h-fit place-items-center rounded-full bg-emerald-50 p-1">
                          <MdCheck className=" text-emerald-600" />
                        </div>
                        <Paragraph className="">{item}</Paragraph>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="max-w-[350px] md:w-1/2">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  className="aspect-square max-h-[350px]  object-cover object-left"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
