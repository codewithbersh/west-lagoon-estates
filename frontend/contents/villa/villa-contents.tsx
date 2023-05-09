// photos
import beachFront from "@/public/beach-front/beach-front.jpg";
import backyard from "@/public/beach-front/backyard.jpg";
import boat from "@/public/beach-front/boat.jpg";
import kitchen from "@/public/beach-front/kitchen.jpg";
import livingArea from "@/public/beach-front/living-area.jpg";
import masters from "@/public/beach-front/masters.jpg";
import { BiBed } from "react-icons/bi";
import { IconType } from "react-icons";

const amenetyBedroom = [
  {
    icon: <BiBed />,
    description: "Built-in closets",
  },
  {
    icon: <BiBed />,
    description: "Two balconies",
  },
  {
    icon: <BiBed />,
    description: "Private bathroom",
  },
];

const amenetyBathroom = [
  {
    icon: <BiBed />,
    description: "Bath tub",
  },
  {
    icon: <BiBed />,
    description: "Shower",
  },
  {
    icon: <BiBed />,
    description: "Vanity sinks",
  },
];

const amenetyKitchen = [
  {
    icon: <BiBed />,
    description: "Refridgerator",
  },
  {
    icon: <BiBed />,
    description: "Built-in stove",
  },
  {
    icon: <BiBed />,
    description: "Microwave",
  },
  {
    icon: <BiBed />,
    description: "Exhaust",
  },
];

const amenetyLocationFeatures = [
  {
    icon: <BiBed />,
    description: "Kids playground",
  },
  {
    icon: <BiBed />,
    description: "Shared swimming pool",
  },
  {
    icon: <BiBed />,
    description: "Maintained parks",
  },
  {
    icon: <BiBed />,
    description: "Tennis courts",
  },
  {
    icon: <BiBed />,
    description: "Basketball courts",
  },
];

const amenetyHeatingCooling = [
  {
    icon: <BiBed />,
    description: "Centralized A/C",
  },
  {
    icon: <BiBed />,
    description: "Hot and cold water",
  },
];

const amenetyOutdoor = [
  {
    icon: <BiBed />,
    description: "Two shaded parking",
  },
  {
    icon: <BiBed />,
    description: "Private garden",
  },
  {
    icon: <BiBed />,
    description: "Private balconies",
  },
];

const amenetySecurityServices = [
  {
    icon: <BiBed />,
    description: "24-hour security",
  },
  {
    icon: <BiBed />,
    description: "Surveillance systems",
  },
  {
    icon: <BiBed />,
    description: "Maintenance services",
  },
];

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
  ameneties: [
    {
      title: "Bedroom",
      description:
        "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
      list: amenetyBedroom,
    },
    {
      title: "Bathroom",
      description:
        "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
      list: amenetyBathroom,
    },
    {
      title: "Kitchen",
      description:
        "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
      list: amenetyKitchen,
    },
    {
      title: "Location Features",
      description:
        "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
      list: amenetyLocationFeatures,
    },
    {
      title: "Heating & Cooling",
      description:
        "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
      list: amenetyHeatingCooling,
    },
    {
      title: "Outdoor",
      description:
        "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
      list: amenetyOutdoor,
    },
    {
      title: "Security & Services",
      description:
        "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
      list: amenetySecurityServices,
    },
  ],
};
