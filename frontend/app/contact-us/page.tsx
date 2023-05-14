import React from "react";
import ContactForm from "./components/ContactForm";
import Container from "@/app/components/ui/Container";
import ContactUsSection from "./components/ContactUsSection";
const ContactPage = () => {
  return (
    <Container className="py-24">
      <div className=" flex flex-col-reverse justify-between gap-6 md:flex-row md:gap-12 lg:gap-24">
        <ContactUsSection className="md:w-1/2" />
        <ContactForm className="md:w-1/2" />
      </div>
    </Container>
  );
};

export default ContactPage;
