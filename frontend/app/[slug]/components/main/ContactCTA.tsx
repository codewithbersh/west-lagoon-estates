// libraries
import Link from "next/link";

// components
import { Button } from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import { Text } from "@/app/components/ui/Text";

// contents
import { links } from "@/contents/links/link";

const ContactCTA = () => {
  return (
    <div className=" sticky top-[30px] hidden h-fit max-w-[300px] flex-col items-center space-y-6 rounded border p-8 text-center shadow-lg md:flex">
      <div className=" space-y-2">
        <Heading className="">Have something in mind?</Heading>
        <Text>
          Get in touch with our team or{" "}
          <Link href="/" className="underline hover:text-gray-800">
            Visit our FAQs
          </Link>
          .
        </Text>
      </div>
      <Link passHref href={links.contact.href} className=" w-full">
        <Button className=" w-full">Contact Us</Button>
      </Link>
    </div>
  );
};

export default ContactCTA;
