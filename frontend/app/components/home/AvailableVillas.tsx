import Link from "next/link";
import React from "react";
import Heading from "@/app/components/ui/Heading";
import { BsArrowDownCircle } from "react-icons/bs";
import { VillaType } from "@/types/villa";
import AvailableVillaCards from "@/app/components/AvailableVillaCards";
import Container from "@/app/components/ui/Container";
import { Button } from "../ui/Button";
import { Text } from "../ui/Text";

type Props = {
  villas: VillaType[];
};

const AvailableVillas = ({ villas }: Props) => {
  return (
    <Container className="space-y-6">
      {/* Heading */}
      <div className="flex flex-col gap-2">
        <Heading size="xl">Best Property Deals</Heading>
        <div className=" flex flex-col gap-6 sm:flex-row sm:justify-between">
          <Text>We have the best deals for villas in West Bay</Text>
          <div className=" flex items-center gap-1">
            <BsArrowDownCircle size={18} className=" text-gray-500" />
            <Link href="/" passHref>
              <Button size="tertiary" variant="tertiary">
                Download Brochure
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card */}
      <AvailableVillaCards villas={villas} />
    </Container>
  );
};

export default AvailableVillas;
