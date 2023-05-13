import React from "react";
import { Dialog } from "@headlessui/react";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  amenities: {
    title: string;
    description: string;
    list: {
      icon: JSX.Element;
      description: string;
    }[];
  }[];
}

const AmenetiesDialog = ({ isOpen, setIsOpen, amenities }: Props) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center !overflow-x-hidden">
        {/* The actual dialog panel  */}
        <Dialog.Panel className=" mx-auto h-full w-full max-w-3xl !overflow-y-scroll rounded-lg bg-white sm:h-5/6 sm:max-h-[800px] sm:w-3/4">
          <div className="fixed w-full max-w-3xl rounded-t-lg bg-white px-4 py-4 sm:w-3/4">
            <AiOutlineCloseCircle
              size={30}
              className="cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div className=" flex flex-col divide-y  divide-solid px-4 pt-[78px]">
            <Heading className="mb-2 text-[22px]">
              What this villa offers
            </Heading>
            <hr />
            {amenities.map((amenity, index) => (
              <div
                className="items-start gap-12 space-y-3 py-6 sm:flex sm:space-y-0"
                key={index}
              >
                <div className="space-y-1 sm:w-1/2">
                  <Heading>{amenity.title}</Heading>
                  <Paragraph>{amenity.description}</Paragraph>
                </div>

                <div className=" sm:w-1/2">
                  {amenity.list.map((item, index) => (
                    <div
                      key={index}
                      className=" flex items-center gap-2 text-gray-700"
                    >
                      {item.icon}
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AmenetiesDialog;
