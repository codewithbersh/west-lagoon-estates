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
    <Container className="space-y-10 pb-24 pt-8">
      <div className=" space-y-2 text-center">
        <Heading size="xl">Frequently Asked Questions</Heading>
        <Paragraph className=" mx-auto text-gray-500">
          Need help with something? Here are our most frequently asked
          questions.
        </Paragraph>
      </div>

      <div className=" flex flex-col gap-4 sm:flex-row sm:gap-8">
        <div className=" space-y-2 sm:w-1/2">
          <Heading size="md">General FAQs</Heading>
          <Paragraph className=" text-gray-500">
            Everything you need to know about West Lagoon Estates is here. Can't
            find an answer?{" "}
            <span className=" text-emerald-600 underline underline-offset-2">
              Contact our team.
            </span>
          </Paragraph>
        </div>
        <hr className=" sm:hidden" />
        <div className="flex flex-col gap-4 text-left sm:w-1/2">
          <hr className="hidden sm:block" />
          {questions.map((question, index) => {
            return (
              <>
                <Disclosure key={index}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between text-left">
                        {question.question}
                        {open ? (
                          <AiOutlineMinusCircle
                            size={24}
                            className=" text-gray-400"
                          />
                        ) : (
                          <AiOutlinePlusCircle
                            size={24}
                            className=" text-gray-400"
                          />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className=" font-light text-gray-500">
                        {question.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default FrequentlyAskedQuestions;
