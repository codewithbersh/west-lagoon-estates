"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import Input from "@/app/components/ui/Input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@/app/components/ui/Button";

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

const ContactSection = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className=" contact-form hidden max-w-[350px] flex-col gap-4 rounded border px-6 py-6 md:flex"
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
        Send message
      </Button>
    </form>
  );
};

export default ContactSection;
