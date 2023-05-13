import Heading from "@/app/components/ui/Heading";
import React from "react";
import { idealLocation } from "@/contents/villa/ideal-location";
import Paragraph from "@/app/components/ui/Paragraph";
import { IoMdCheckmark } from "react-icons/io";
import Small from "@/app/components/ui/Small";
import { IoLocationOutline } from "react-icons/io5";
import Container from "@/app/components/ui/Container";

type Props = {};

const LocationSection = (props: Props) => {
  const { title, description, benefits } = idealLocation;
  return (
    <Container className="space-y-4">
      <div>
        <Heading className=" text-[22px]" id="location">
          Where you'll be
        </Heading>
        <Small className=" flex items-center gap-1">
          <IoLocationOutline />{" "}
          <span className=" underline">West Bay Lagoon, Leqtaifiya</span>
        </Small>
      </div>
      <div className="flex flex-col  gap-6  md:flex-row ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7210.408674858709!2d51.5103376!3d25.3644673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45ddda4a51d805%3A0x88a0ce86668c6899!2sWEST%20LAGOON%20ESTATES!5e0!3m2!1sen!2sqa!4v1683282500407!5m2!1sen!2sqa"
          loading="lazy"
          className="min-h-[300px] md:min-h-max md:w-1/2"
        />
        <div className=" min-h-[300px] space-y-4 bg-gray-50 p-8 md:min-h-max md:w-1/2">
          <Heading size="lg" className=" text-gray-700">
            {title}
          </Heading>
          <Paragraph className=" text-gray-500">{description}</Paragraph>
          <div className=" space-y-4 pl-6">
            {benefits.map((benefit, index) => (
              <div key={index} className=" flex items-start gap-3">
                <div className=" rounded-full bg-emerald-100 p-1">
                  <IoMdCheckmark size={16} className=" text-emerald-600" />
                </div>
                <Paragraph className=" text-gray-500">{benefit}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default LocationSection;
