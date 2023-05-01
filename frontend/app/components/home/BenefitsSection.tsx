import React, { ReactNode } from "react";

import { IconCustomize, IconDiamond, IconShield } from "../ui/IconSVG";

type Props = {};

interface Benefit {
  svg: ReactNode;
  title: string;
  description: string;
}

const iconFill = " fill-blue-50";

const benefits: Benefit[] = [
  {
    svg: <IconDiamond fill={iconFill} />,
    title: "Spacious and Luxurious",
    description: "Featuring up to 6 bedrooms and private outdoor areas.",
  },
  {
    svg: <IconShield fill={iconFill} />,
    title: "Secured Residence",
    description: "Restricted access for authorized personnel and residents.",
  },
  {
    svg: <IconCustomize fill={iconFill} />,
    title: "Partially Furnished",
    description: "Furnished with fully-equipped kitchens and centralized AC.",
  },
];

const BenefitsSection = (props: Props) => {
  return (
    <div className=" bg-blue-50">
      <div className=" container mx-auto flex max-w-5xl flex-wrap gap-12 px-4 py-16 lg:px-0">
        {benefits.map((benefit, index) => {
          return (
            <div
              key={index}
              className=" mx-auto flex max-w-[300px] flex-col justify-between gap-6 sm:items-center sm:text-center"
            >
              <div className=" grid h-10 w-10 place-items-center rounded-full bg-blue-400">
                {benefit.svg}
              </div>
              <div className=" flex flex-col gap-2">
                <h3 className=" text-base font-medium lg:text-lg">
                  {benefit.title}
                </h3>
                <p className=" text-gray-400 lg:text-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitsSection;
