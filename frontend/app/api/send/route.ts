import { FormData } from "@/app/contact-us/components/ContactForm";
import sgMail from "@sendgrid/mail";

//  store API KEY in process.env
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

type Data = {
  success: boolean;
};

export const POST = async (request: Request) => {
  try {
    const { email, firstName, lastName, phone, message }: FormData =
      await request.json();
    const messageToUser = {
      to: `${email}`, // Change to your recipient
      from: "brucesalcedo.programming@gmail.com", // Change to your verified sender
      subject: `Request Submitted: Our agent will get in touch with you.`,
      text: `Email => ${email}`,
      html: `<p>Hello, ${firstName}. Thank you for reaching out. We have received your request and our team will contact you shortly.</p>`,
    };
    const messageToOwner = {
      to: `brucesalcedo.programming@gmail.com`, // Change to your recipient
      from: "brucesalcedo.programming@gmail.com", // Change to your verified sender
      subject: `Contact request from: ${email},`,
      text: `Email => ${email}`,
      html: `<strong>${message}. ${phone}</strong>`,
    };

    await sgMail.send(messageToUser);
    await sgMail.send(messageToOwner);
  } catch (error) {}

  return new Response();
};
