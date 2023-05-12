"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import Input from "@/app/components/ui/Input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@/app/components/ui/Button";
import axios from "axios";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const schema: ZodType<FormData> = z
  .object({
    firstName: z.string().min(2).max(20),
    lastName: z.string().min(2).max(20),
    email: z.string().email(),
    phone: z.string(),
    message: z.string(),
  })
  .refine((data) => isPossiblePhoneNumber(data.phone) === true, {
    message: "Invalid phone number",
    path: ["phone"],
  });

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className=" contact-form hidden h-fit max-w-[350px] flex-col gap-4 rounded border px-6 py-6 shadow-xl md:flex"
    >
      <div className=" flex gap-2">
        <Input
          id="first_name"
          placeholder="First name"
          register={{ ...register("firstName") }}
          error={errors.firstName}
        />

        <Input
          id="last_name"
          placeholder="Last name"
          register={{ ...register("lastName") }}
          error={errors.lastName}
        />
      </div>

      <Input
        placeholder="Email"
        id="email"
        register={{ ...register("email") }}
        error={errors.email}
      />

      <PhoneInputWithCountry
        className={`rounded border px-3  py-2 ${
          errors.phone && "border-rose-400"
        }`}
        defaultCountry="QA"
        id="phone_number"
        name="phone"
        control={control}
        rules={{ required: true }}
        placeholder="Phone number"
      />

      <TextareaAutosize
        defaultValue="Hello"
        placeholder="Enter your message"
        minRows={3}
        {...register("message")}
        className=" resize-none rounded border px-3 py-2 outline-none"
      />
      <Button type="submit" className=" w-full">
        {isLoading ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
};

export default ContactPage;
