import { IconType } from "react-icons";

export type VillaType = {
  slug: string;
  title: string;
  cardTitle: string;
  about: string;
  cardCaption: string;
  bedroom: number;
  bathroom: number;
  garage: number;
  area: number;
  locationFeature: string;
  price: number;
  photos: {
    image: StaticImageData;
    alt: string;
  }[];
  amenities: {
    title: string;
    description: string;
    list: {
      Icon: IconType;
      description: string;
    }[];
  }[];
  available: boolean;
};
