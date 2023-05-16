// libraries
import { FC, HTMLAttributes } from "react";

// components
import Heading from "@/app/components/ui/Heading";
import { Text } from "@/app/components/ui/Text";

// contents & utils
import { contacts } from "@/contents/villa/contacts";
import { cn } from "@/app/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ContactUsSection: FC<Props> = ({ className, ...props }) => {
  return (
    <section className={cn(" space-y-8", className)} {...props}>
      {/* hide mobile */}
      <header className=" hidden space-y-4 md:block">
        <div className=" space-y-2">
          <Text size="small" className=" font-medium text-emerald-600">
            Contact us
          </Text>
          <Heading className=" text-2xl leading-none">
            Chat to our friendly team
          </Heading>
        </div>
        <Text>
          We'd love to hear from you. Please fill out this form or shoot us an
          email.
        </Text>
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
            <Text>{contact.caption}</Text>
            <Text className=" text-emerald-600">{contact.detail}</Text>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ContactUsSection;
