import React from "react";
import Heading from "@/app/components/ui/Heading";
import Small from "@/app/components/ui/Small";
import Paragraph from "@/app/components/ui/Paragraph";
import Container from "@/app/components/ui/Container";

const Location = () => {
  return (
    <Container className="space-y-8">
      <div className="space-y-2 sm:text-center">
        <Small className=" text-emerald-600">Visit Us</Small>
        <Heading size="xl">Get to Know Our Neighborhood</Heading>
        <Paragraph className="mx-auto text-gray-500">
          See our location on the map and learn how our two premiere residential
          compounds can meet your real estate needs.
        </Paragraph>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7210.408674858709!2d51.5103376!3d25.3644673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45ddda4a51d805%3A0x88a0ce86668c6899!2sWEST%20LAGOON%20ESTATES!5e0!3m2!1sen!2sqa!4v1683282500407!5m2!1sen!2sqa"
        loading="lazy"
        className="h-[400px] w-full"
      ></iframe>
    </Container>
  );
};

export default Location;
