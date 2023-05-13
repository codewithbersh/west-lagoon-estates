import { Button } from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import Link from "next/link";
import React from "react";

const ContactCTA = () => {
  return (
    <div className=" sticky top-[72px] hidden h-fit max-w-[300px] flex-col items-center space-y-6 rounded border p-8 text-center shadow-lg md:flex">
      <div className=" space-y-2">
        <Heading className="">Have something in mind?</Heading>
        <Paragraph className=" text-gray-500">
          Get in touch with our team or{" "}
          <Link href="/" className="underline hover:text-gray-800">
            Visit our FAQs
          </Link>
          .
        </Paragraph>
      </div>
      <Button className=" w-full">Contact Us</Button>
    </div>
  );
};

export default ContactCTA;
