// photos
import beachFront from "@/public/beach-front/beach-front.jpg";
import backyard from "@/public/beach-front/backyard.jpg";
import boat from "@/public/beach-front/boat.jpg";
import kitchen from "@/public/beach-front/kitchen.jpg";
import livingArea from "@/public/beach-front/living-area.jpg";
import masters from "@/public/beach-front/masters.jpg";
import { ameneties } from "./ameneties";
import { VillaType } from "@/types/villa";

const beachFrontVilla: VillaType = {
  slug: "beach-front-villa",
  cardTitle: "Beach Front Villa",
  title: "Luxurious Beach Front Property",
  about:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aliquam dolorem qui itaque repellendus. Illo eligendi accusantium voluptatum odit. Placeat voluptatem impedit magnam pariatur provident eum ipsa hic a atque? Alias voluptates, nam commodi officiis architecto nulla. Modi totam accusantium nisi.",
  cardCaption:
    "Relax in luxury at this beach front villa with private beach and panoramic lagoon views.",
  bedroom: 6,
  bathroom: 5,
  garage: 2,
  area: 500,
  locationFeature: "Private Beach",
  price: 30000,
  photos: [beachFront, backyard, boat, kitchen, livingArea, masters],
  ameneties: ameneties,
  available: true,
};

const poolFrontVilla: VillaType = {
  slug: "pool-front-villa",
  title: "Pool Front Villa with 6 BR",
  cardTitle: "Beach Front Villa",
  about:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aliquam dolorem qui itaque repellendus. Illo eligendi accusantium voluptatum odit. Placeat voluptatem impedit magnam pariatur provident eum ipsa hic a atque? Alias voluptates, nam commodi officiis architecto nulla. Modi totam accusantium nisi.",
  cardCaption:
    "Experience resort-style living in this villa with direct pool access and stunning beach views.",
  bedroom: 5,
  bathroom: 4,
  garage: 2,
  area: 470,
  locationFeature: "Direct pool access",
  price: 25000,
  photos: [beachFront, backyard, boat, kitchen, livingArea, masters],
  ameneties: ameneties,
  available: true,
};

const cornerVilla: VillaType = {
  slug: "corner-villa",
  title: "Beach Front Villa with 6 BR",
  cardTitle: "Corner Villa",
  about:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aliquam dolorem qui itaque repellendus. Illo eligendi accusantium voluptatum odit. Placeat voluptatem impedit magnam pariatur provident eum ipsa hic a atque? Alias voluptates, nam commodi officiis architecto nulla. Modi totam accusantium nisi.",
  cardCaption:
    "Escape to coastal luxury in this stunning 300m² single detached villa with beach and park views.",
  bedroom: 3,
  bathroom: 2,
  garage: 2,
  area: 300,
  locationFeature: "I dont know",
  price: 18000,
  photos: [beachFront, backyard, boat, kitchen, livingArea, masters],
  ameneties: ameneties,
  available: true,
};

export const villas: VillaType[] = [
  beachFrontVilla,
  poolFrontVilla,
  cornerVilla,
];
