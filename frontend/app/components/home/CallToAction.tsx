import React from "react";
import Heading from "@/app/components/ui/Heading";
import { Button } from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import { Text } from "../ui/Text";
import Link from "next/link";
import { links } from "@/contents/links/link";

const CallToAction = () => {
  return (
    <Container className="rounded ">
      <div className="flex flex-col items-center justify-center gap-8 bg-gray-50 py-8 text-center">
        <div className=" space-y-4">
          <Heading size="xl" className=" ">
            Take the Next Step
          </Heading>
          <Text>
            Start your journey to luxurious living today with a personal
            consultation and tour of our exclusive properties.
          </Text>
        </div>
        <div className=" flex w-full flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Link href={links.contact.href}>
            <Button
              className=" w-full max-w-[400px] font-normal sm:w-fit"
              size="lg"
            >
              Get Started
            </Button>
          </Link>
          <Link
            href={
              links.villas[Math.floor(Math.random() * links.villas.length)].href
            }
          >
            <Button
              className=" w-full max-w-[400px] font-normal sm:w-fit"
              variant="outline"
              size="lg"
            >
              Browse Villas
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CallToAction;
