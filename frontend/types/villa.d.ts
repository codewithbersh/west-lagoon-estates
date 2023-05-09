export type VillaType = {
  title: string;
  photos: StaticImageData[];
  offers: {
    icon: IconType;
    description: string;
  }[];
  ameneties: {
    title: string;
    description: string;
    list: {
      icon: JSX.Element;
      description: string;
    }[];
  }[];
};
