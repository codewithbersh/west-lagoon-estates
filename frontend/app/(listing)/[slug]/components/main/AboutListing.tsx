import Paragraph from "@/app/components/ui/Paragraph";
import { VillaType } from "@/types/villa";
import React from "react";

interface Props {
  about: string;
}

const AboutListing = ({ about }: Props) => {
  return (
    <div className=" space-y-6 pt-6">
      <Paragraph>{about}</Paragraph>
      <hr />
    </div>
  );
};

export default AboutListing;
