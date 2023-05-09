import Link from "next/link";
import React from "react";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import { BsArrowDownCircle } from "react-icons/bs";
import { VillaType } from "@/types/villa";
import AvailableVillaCards from "@/app/components/AvailableVillaCards";

type Props = {
  villas: VillaType[];
};

const AvailableVillas = ({ villas }: Props) => {
  return (
    <div className=" mx-auto max-w-5xl space-y-6 px-4 py-8 lg:px-0">
      {/* Heading */}
      <div className="flex flex-col gap-2">
        <Heading size="xl">Best Property Deals</Heading>
        <div className=" flex flex-col gap-6 sm:flex-row sm:justify-between">
          <Paragraph className=" text-gray-500">
            We have the best deals for villas in West Bay
          </Paragraph>
          <div className=" flex items-center gap-1">
            <BsArrowDownCircle className=" text-gray-600" />
            <Link
              href="/"
              className=" font-medium text-gray-600 underline underline-offset-2"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </div>

      {/* Card */}
      <AvailableVillaCards villas={villas} />
    </div>
  );
};

export default AvailableVillas;
