// libraries
import Link from "next/link";

// components
import { Button } from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import { Text } from "@/app/components/ui/Text";

const ListingFooterMobile = () => {
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-between border-t bg-white px-4 py-6 md:hidden">
      <div>
        <Heading size="sm">Have something in mind?</Heading>
        <Text size="small">
          Contact us or{" "}
          <Link href="/" className="underline hover:text-gray-800">
            Visit our FAQs
          </Link>
          .
        </Text>
      </div>
      <Link href="/contact-us" passHref>
        <Button className=" shrink-0">Contact Us</Button>
      </Link>
    </div>
  );
};

export default ListingFooterMobile;
