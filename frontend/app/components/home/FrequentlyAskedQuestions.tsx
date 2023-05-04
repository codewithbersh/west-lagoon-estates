"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

type QuestionType = {
  question: string;
  answer: string;
};

const questions: QuestionType[] = [
  {
    question: "What types of properties do you offer?",
    answer:
      "We offer villa-type properties, with a choice of three different types to suit your needs. These include beachfront villas, villas near the pool and beach, and corner villas.",
  },
  {
    question: "How do I schedule a viewing of a property?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iure, iusto sed eum deleniti esse tenetur beatae. Nulla quos autem omnis expedita voluptatum ratione atque.",
  },
  {
    question: "Do you offer any furnished properties?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iure, iusto sed eum deleniti esse tenetur beatae. Nulla quos autem omnis expedita voluptatum ratione atque.",
  },
  {
    question: "What utilities are included in the rent?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iure, iusto sed eum deleniti esse tenetur beatae. Nulla quos autem omnis expedita voluptatum ratione atque.",
  },
  {
    question: "What is your pet policy?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iure, iusto sed eum deleniti esse tenetur beatae. Nulla quos autem omnis expedita voluptatum ratione atque.",
  },
  {
    question: "Do you offer parking for residents?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iure, iusto sed eum deleniti esse tenetur beatae. Nulla quos autem omnis expedita voluptatum ratione atque.",
  },
  {
    question: "Are there any amenities or services included for residents?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iure, iusto sed eum deleniti esse tenetur beatae. Nulla quos autem omnis expedita voluptatum ratione atque.",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <div className=" mx-auto max-w-5xl space-y-10 px-4 pb-24 pt-8">
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
    </div>
  );
};

export default FrequentlyAskedQuestions;
