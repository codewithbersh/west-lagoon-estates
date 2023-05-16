// libraries
import Link from "next/link";

// components
import Heading from "@/app/components/ui/Heading";
import Container from "@/app/components/ui/Container";
import { idealLocation } from "@/contents/villa/ideal-location";

// icons
import { IoMdCheckmark } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Text } from "@/app/components/ui/Text";

const LocationSection = () => {
  const { title, description, benefits } = idealLocation;
  return (
    <Container className="space-y-6 py-0 pt-6">
      <div className=" space-y-4">
        <div>
          <Heading size="md">Where you'll be</Heading>
          <div className="flex items-center gap-1">
            <IoLocationOutline className=" text-gray-800" />
            <Link
              href="https://www.google.com/maps?ll=25.36565,51.51235&z=15&t=m&hl=en&gl=QA&mapclient=embed&cid=9845095862073321625"
              target="_blank"
              className="cursor-pointer text-sm text-gray-500 underline"
            >
              West Bay Lagoon, Leqtaifiya
            </Link>
          </div>
        </div>
        <div className="flex flex-col  gap-6  md:flex-row ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7210.408674858709!2d51.5103376!3d25.3644673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45ddda4a51d805%3A0x88a0ce86668c6899!2sWEST%20LAGOON%20ESTATES!5e0!3m2!1sen!2sqa!4v1683282500407!5m2!1sen!2sqa"
            loading="lazy"
            className="min-h-[300px] md:min-h-max md:w-1/2"
          />
          <div className=" min-h-[300px] space-y-4 bg-gray-50 p-8 md:min-h-max md:w-1/2">
            <Heading size="lg" className=" text-gray-700">
              {title}
            </Heading>
            <Text>{description}</Text>
            <div className=" space-y-4 pl-6">
              {benefits.map((benefit, index) => (
                <div key={index} className=" flex items-start gap-3">
                  <div className=" rounded-full bg-emerald-100 p-1">
                    <IoMdCheckmark size={16} className=" text-emerald-600" />
                  </div>
                  <Text>{benefit}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default LocationSection;
