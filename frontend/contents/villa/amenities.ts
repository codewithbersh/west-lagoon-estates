"use client";

import { BiBath, BiCctv } from "react-icons/bi";
import { FaSwimmingPool, FaTemperatureLow } from "react-icons/fa";
import { GiBasketballBasket, GiKidSlide, GiTennisRacket } from "react-icons/gi";
import { IoIosSnow } from "react-icons/io";
import {
  MdOutlineBalcony,
  MdOutlineBathroom,
  MdOutlineGarage,
  MdOutlineMicrowave,
} from "react-icons/md";
import { RiArchiveDrawerLine, RiPlantLine } from "react-icons/ri";
import { TbCooker, TbFridge, TbTrees } from "react-icons/tb";
import { GrSecure, GrVmMaintenance } from "react-icons/gr";
import { IconType } from "react-icons";

type AmenityType = {
  Icon: IconType;
  description: string;
};

const amenityBedroom: AmenityType[] = [
  {
    Icon: RiArchiveDrawerLine,
    description: "Built-in closets",
  },
  {
    Icon: MdOutlineBalcony,
    description: "Balconies",
  },
];

const amenityBathroom: AmenityType[] = [
  {
    Icon: BiBath,
    description: "Bath tub",
  },
  {
    Icon: MdOutlineBathroom,
    description: "Shower",
  },
];

const amenityKitchen: AmenityType[] = [
  {
    Icon: TbFridge,
    description: "Refridgerator",
  },
  {
    Icon: TbCooker,
    description: "Built-in stove",
  },
  {
    Icon: MdOutlineMicrowave,
    description: "Microwave",
  },
];

const amenityLocationFeatures: AmenityType[] = [
  {
    Icon: GiKidSlide,
    description: "Kids playground",
  },
  {
    Icon: FaSwimmingPool,
    description: "Shared swimming pool",
  },
  {
    Icon: TbTrees,
    description: "Maintained parks",
  },
  {
    Icon: GiTennisRacket,
    description: "Tennis courts",
  },
  {
    Icon: GiBasketballBasket,
    description: "Basketball courts",
  },
];

const amenityHeatingCooling: AmenityType[] = [
  {
    Icon: IoIosSnow,
    description: "Centralized A/C",
  },
  {
    Icon: FaTemperatureLow,
    description: "Hot and cold water",
  },
];

const amenityOutdoor: AmenityType[] = [
  {
    Icon: MdOutlineGarage,
    description: "Two shaded parking",
  },
  {
    Icon: RiPlantLine,
    description: "Private garden",
  },
  {
    Icon: MdOutlineBalcony,
    description: "Private balconies",
  },
];

const amenitySecurityServices: AmenityType[] = [
  {
    Icon: GrSecure,
    description: "24-hour security",
  },
  {
    Icon: BiCctv,
    description: "Surveillance systems",
  },
  {
    Icon: GrVmMaintenance,
    description: "Maintenance services",
  },
];

export const amenities = [
  {
    title: "Bedroom",
    description:
      "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
    list: amenityBedroom,
  },
  {
    title: "Bathroom",
    description:
      "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
    list: amenityBathroom,
  },
  {
    title: "Kitchen",
    description:
      "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
    list: amenityKitchen,
  },
  {
    title: "Location Features",
    description:
      "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
    list: amenityLocationFeatures,
  },
  {
    title: "Heating & Cooling",
    description:
      "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
    list: amenityHeatingCooling,
  },
  {
    title: "Outdoor",
    description:
      "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
    list: amenityOutdoor,
  },
  {
    title: "Security & Services",
    description:
      "Lorem ipsum dolor sit amet consetur lorem ipsum dolor sit ament.",
    list: amenitySecurityServices,
  },
];
