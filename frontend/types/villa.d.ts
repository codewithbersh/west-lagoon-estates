export type VillaType = {
  slug: string;
  title: string;
  cardTitle: string;
  cardCaption: string;
  bedroom: number;
  bathroom: number;
  garage: number;
  area: number;
  locationFeature: string;
  price: number;
  photos: StaticImageData[];
  ameneties: {
    title: string;
    description: string;
    list: {
      icon: JSX.Element;
      description: string;
    }[];
  }[];
  available: boolean;
};
