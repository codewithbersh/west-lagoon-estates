import React, { ReactNode } from "react";
import Paragraph from "@/app/components/ui/Paragraph";
import Heading from "@/app/components/ui/Heading";

import { MdDashboardCustomize } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
import { GiCutDiamond } from "react-icons/gi";
import Container from "@/app/components/ui/Container";

// Not being used

interface Benefit {
  svg: ReactNode;
  title: string;
  description: string;
}

const icon = {
  style: { color: "#34d399" },
  size: 20,
};

const benefits: Benefit[] = [
  {
    svg: <GiCutDiamond size={icon.size} style={icon.style} />,
    title: "Spacious and Luxurious",
    description: "Featuring up to 6 bedrooms and private outdoor areas.",
  },
  {
    svg: <BsShieldFillCheck size={icon.size} style={icon.style} />,
    title: "Secured Residence",
    description: "Restricted access for authorized personnel and residents.",
  },
  {
    svg: <MdDashboardCustomize size={icon.size} style={icon.style} />,
    title: "Partially Furnished",
    description: "Furnished with fully-equipped kitchens and centralized AC.",
  },
];

const BenefitsSection = () => {
  return (
    <Container className="relative mx-auto flex flex-wrap items-center gap-8 overflow-hidden bg-emerald-50 py-4 text-center md:-translate-y-32 md:px-4 lg:-translate-y-0 lg:justify-between lg:px-0">
      {benefits.map((benefit, index) => {
        return (
          <div
            key={index}
            className="mx-auto flex w-[300px] flex-col gap-4 rounded-lg  bg-emerald-50 px-4 py-4 lg:mx-0"
          >
            <div className="mx-auto grid h-[45px] w-[45px] place-items-center rounded-full bg-emerald-100">
              {benefit.svg}
            </div>
            <Heading size="sm" className=" text-gray-600">
              {benefit.title}
            </Heading>

            <Paragraph className=" text-gray-500">
              {benefit.description}
            </Paragraph>
          </div>
        );
      })}
    </Container>
  );
};

export default BenefitsSection;
