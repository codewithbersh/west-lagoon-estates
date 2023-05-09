// photos
import beachFront from "@/public/beach-front/beach-front.jpg";
import backyard from "@/public/beach-front/backyard.jpg";
import boat from "@/public/beach-front/boat.jpg";
import kitchen from "@/public/beach-front/kitchen.jpg";
import livingArea from "@/public/beach-front/living-area.jpg";
import masters from "@/public/beach-front/masters.jpg";
import { BiBed } from "react-icons/bi";
import { IconType } from "react-icons";

export const villa = {
  title: "Beach Front Villa with 6 BR",
  photos: [beachFront, backyard, boat, kitchen, livingArea, masters],
  offers: [
    {
      icon: <BiBed />,
      description: "6 Bedrooms",
    },
    {
      icon: <BiBed />,
      description: "5 Bathrooms",
    },
    {
      icon: <BiBed />,
      description: "500m² Property",
    },
    {
      icon: <BiBed />,
      description: "Private Beach",
    },
  ],
};
