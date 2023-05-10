"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { questions } from "@/contents/villa/faqs";
import Container from "@/app/components/ui/Container";

const FrequentlyAskedQuestions = () => {
  return (
    // <Container className="space-y-10 pb-24 pt-8">
    //   <div className=" space-y-2 text-center">
    //     <Heading size="xl">Frequently Asked Questions</Heading>
    //     <Paragraph className=" mx-auto text-gray-500">
    //       Need help with something? Here are our most frequently asked
    //       questions.
    //     </Paragraph>
    //   </div>

    //   <div className=" flex flex-col gap-4 sm:flex-row sm:gap-8">
    //     <div className=" space-y-2 sm:w-1/2">
    //       <Heading size="md">General FAQs</Heading>
    //       <Paragraph className=" text-gray-500">
    //         Everything you need to know about West Lagoon Estates is here. Can't
    //         find an answer?{" "}
    //         <span className=" text-emerald-600 underline underline-offset-2">
    //           Contact our team.
    //         </span>
    //       </Paragraph>
    //     </div>
    //     <div className=" divide-y divide-solid">
    //       {questions.map((question, index) => {
    //         return (
    //           <Disclosure key={index}>
    //             {({ open }) => (
    //               <div className="py-3">
    //                 <Disclosure.Button className="flex w-full justify-between text-left">
    //                   {question.question}
    //                   {open ? (
    //                     <AiOutlineMinusCircle
    //                       size={24}
    //                       className=" text-gray-400"
    //                     />
    //                   ) : (
    //                     <AiOutlinePlusCircle
    //                       size={24}
    //                       className=" text-gray-400"
    //                     />
    //                   )}
    //                 </Disclosure.Button>
    //                 <Disclosure.Panel className=" font-light text-gray-500">
    //                   {question.answer}
    //                 </Disclosure.Panel>
    //               </div>
    //             )}
    //           </Disclosure>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </Container>
    <Container className=" space-y-10">
      {/* Heading */}
      <div className=" space-y-2 sm:text-center">
        <Heading size="xl">Frequently Asked Questions</Heading>
        <Paragraph className=" max-w-full text-gray-500">
          Need help with something? Here are our most frequently asked
          questions.
        </Paragraph>
      </div>

      {/* Main */}
      <div className=" flex flex-col gap-14 sm:flex-row">
        {/* subheading */}
        <div className=" space-y-2 sm:w-1/2">
          <Heading size="md">General FAQs</Heading>
          <Paragraph className=" text-gray-500">
            Everything you need to know about West Lagoon Estates is here. Can't
            find an answer? Contact our team.
          </Paragraph>
        </div>

        <div className="divide-y divide-solid border-b border-t sm:w-1/2">
          {questions.map((question, index) => {
            return (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="space-y-4 py-4">
                    <Disclosure.Button className="flex w-full items-start justify-between gap-4 text-left">
                      {question.question}

                      {open ? (
                        <AiOutlineMinusCircle
                          size={24}
                          className=" text-gray-400"
                        />
                      ) : (
                        <AiOutlinePlusCircle
                          size={24}
                          className=" shrink-0 text-gray-400"
                        />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="max-w-[450px] text-left text-gray-500">
                      {question.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default FrequentlyAskedQuestions;
