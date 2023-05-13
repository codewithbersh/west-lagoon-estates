import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import Small from "@/app/components/ui/Small";
import { cn } from "@/app/lib/utils";
import { contacts } from "@/contents/villa/contacts";
import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ContactUsSection: FC<Props> = ({ className, ...props }) => {
  return (
    <section className={cn(" space-y-8", className)} {...props}>
      {/* hide mobile */}
      <header className=" hidden space-y-4 md:block">
        <div className=" space-y-2">
          <Small className=" font-medium text-emerald-700">Contact us</Small>
          <Heading className=" text-2xl leading-none">
            Chat to our friendly team
          </Heading>
        </div>
        <Paragraph className=" text-gray-500">
          We'd love to hear from you. Please fill out this form or shoot us an
          email.
        </Paragraph>
      </header>

      <section className="mx-auto grid  max-w-md grid-cols-1 place-content-between gap-x-4 gap-y-6  md:max-w-none md:grid-cols-2">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex h-full flex-col space-y-2 overflow-hidden"
          >
            <div className=" w-fit rounded-lg bg-emerald-50 p-2">
              <contact.Icon className=" text-emerald-600" size={20} />
            </div>
            <Heading>{contact.name}</Heading>
            <Paragraph className="text-gray-500">{contact.caption}</Paragraph>
            <Paragraph className=" text-emerald-700">
              {contact.detail}
            </Paragraph>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ContactUsSection;
