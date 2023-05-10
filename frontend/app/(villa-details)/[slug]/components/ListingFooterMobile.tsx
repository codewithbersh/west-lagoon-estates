import { Button } from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import Link from "next/link";
import React from "react";

type Props = {};

const ListingFooterMobile = (props: Props) => {
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-between border-t bg-white px-4 py-6 md:hidden">
      <div>
        <Heading className=" text-sm">Have something in mind?</Heading>
        <Paragraph className=" text-xs text-gray-500">
          Contact us or{" "}
          <Link href="/" className="underline hover:text-gray-800">
            Visit our FAQs
          </Link>
          .
        </Paragraph>
      </div>
      <Button className=" shrink-0">Contact Us</Button>
    </div>
  );
};

export default ListingFooterMobile;
