"use client";

// libraries
import { FC, HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import TextareaAutosize from "react-textarea-autosize";

// components
import { Button } from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import { Text } from "@/app/components/ui/Text";

// icons & utils
import { CgSpinner } from "react-icons/cg";
import { cn } from "@/app/lib/utils";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const schema: ZodType<FormData> = z
  .object({
    firstName: z
      .string()
      .nonempty("Name required")
      .min(2, "Name too short")
      .max(20, "Name too long"),
    lastName: z
      .string()
      .nonempty("Last name required")
      .min(2, "Last name too short")
      .max(20, "Last name too long"),
    email: z.string().nonempty("Email required").email("Invalid email"),
    phone: z
      .string({ invalid_type_error: "Phone number required" })
      .nonempty("Phone number required"),
    message: z.string(),
  })
  .refine((data) => isPossiblePhoneNumber(data.phone) === true, {
    message: "Invalid phone number",
    path: ["phone"],
  });

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ContactForm: FC<Props> = ({ className, ...props }) => {
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

  const inputGroupClass =
    "flex flex-col gap-[6px] text-sm leading-none text-gray-500 text-medium";

  return (
    <section
      className={cn(" mx-auto max-w-md space-y-6", className)}
      {...props}
    >
      {/* show desktop */}
      <header className=" space-y-4 md:hidden">
        <div className=" space-y-2">
          <Text size="small" className="font-medium text-emerald-600">
            Contact us
          </Text>
          <Heading size="md">Chat to our friendly team</Heading>
        </div>
        <Text>
          We'd love to hear from you. Please fill out this form or shoot us an
          email.
        </Text>
      </header>

      <main className=" rounded-lg border p-8 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="contact-form space-y-4 "
        >
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* first name */}
            <div className={`${inputGroupClass} `}>
              <label htmlFor="first_name">First name *</label>
              <input
                className={`${
                  errors.firstName && "border-rose-500 bg-rose-50"
                }`}
                id="first_name"
                {...register("firstName")}
              />
              <Text
                size="small"
                className={`-translate-y-1 text-rose-500 ${
                  errors.firstName ? "visible" : "invisible"
                }`}
              >
                {errors.firstName ? errors.firstName.message : "."}
              </Text>
            </div>

            {/* last name */}
            <div className={`${inputGroupClass}`}>
              <label htmlFor="last_name">Last name *</label>
              <input
                className={`${errors.lastName && "border-rose-500 bg-rose-50"}`}
                id="last_name"
                {...register("lastName")}
              />
              <Text
                size="small"
                className={`-translate-y-1 text-rose-500 ${
                  errors.lastName ? "visible" : "invisible"
                }`}
              >
                {errors.lastName && errors.lastName.message}
              </Text>
            </div>
          </section>

          {/* email */}
          <div className={`${inputGroupClass}`}>
            <label htmlFor="email">Email *</label>
            <input
              className={`${errors.email && "border-rose-500 bg-rose-50"}`}
              id="email"
              {...register("email")}
            />
            <Text
              size="small"
              className={`-translate-y-1 text-rose-500 ${
                errors.email ? "visible" : "invisible"
              }`}
            >
              {errors.email ? errors.email.message : "."}
            </Text>
          </div>

          {/* phone number */}
          <div className={`${inputGroupClass}`}>
            <label htmlFor="phone_number">Phone number *</label>
            <PhoneInputWithCountry
              international
              className={`rounded border bg-white px-3  py-2 ${
                errors.phone && "border-rose-500 !bg-rose-50"
              }`}
              defaultCountry="QA"
              id="phone_number"
              name="phone"
              control={control}
              rules={{ required: true }}
              placeholder="Phone number"
            />
            <Text
              size="small"
              className={`-translate-y-1 text-rose-500 ${
                errors.phone ? "visible" : "invisible"
              }`}
            >
              {errors.phone ? errors.phone.message : "."}
            </Text>
          </div>

          {/* message */}
          <div className={`${inputGroupClass}`}>
            <label htmlFor="message">Message</label>
            <TextareaAutosize
              id="message"
              defaultValue="Set default message"
              minRows={4}
              {...register("message")}
              className="w-full resize-none rounded-md border px-3 py-2 text-base text-gray-900 outline-none"
            />
          </div>

          <Button
            size="lg"
            type="submit"
            className=" flex w-full items-center gap-2"
          >
            {isLoading && (
              <CgSpinner size={18} className=" animate-spin text-white" />
            )}

            <span className=" leading-none">
              {isLoading ? "Sending..." : "Send message"}
            </span>
          </Button>
        </form>
      </main>
    </section>
  );
};

export default ContactForm;
