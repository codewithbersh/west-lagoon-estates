import { IconType } from "react-icons";
import {
  MdOutlineLocationOn,
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineWhatsapp,
} from "react-icons/md";

type ContactType = {
  Icon: IconType;
  name: string;
  caption: string;
  detail: string;
};

export const contacts: ContactType[] = [
  {
    Icon: MdOutlinePhone,
    name: "Phone",
    caption: "Sat-Thur from 8am to 5pm.",
    detail: "+974-6644-5577",
  },
  {
    Icon: MdOutlineWhatsapp,
    name: "WhatsApp",
    caption: "Our friendly team is here to help.",
    detail: "hello@westlagoonestates.com",
  },
  {
    Icon: MdOutlineMail,
    name: "Email",
    caption: "Our friendly team is here to help.",
    detail: "+974-3222-2223",
  },
  {
    Icon: MdOutlineLocationOn,
    name: "Office",
    caption: "Come say hello at our office HQ.",
    detail: "Street 20, West Bay Lagoon, Doha",
  },
];
