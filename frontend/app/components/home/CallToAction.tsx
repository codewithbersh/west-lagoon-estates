import React from "react";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { Button } from "../ui/Button";

const CallToAction = () => {
  return (
    <div className=" px-4 py-8 lg:px-0">
      <div className=" container mx-auto max-w-5xl rounded bg-gray-50 px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className=" space-y-4">
            <Heading size="xl" className=" ">
              Take the Next Step
            </Heading>
            <Paragraph className="font-normal text-gray-500">
              Start your journey to luxurious living today with a personal
              consultation and tour of our exclusive properties.
            </Paragraph>
          </div>
          <div className=" flex w-full flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Button
              className=" w-full max-w-[400px] bg-emerald-600 font-normal sm:w-fit"
              size="lg"
            >
              Get Started
            </Button>
            <Button
              className=" w-full max-w-[400px] font-normal sm:w-fit"
              variant="outline"
              size="lg"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
