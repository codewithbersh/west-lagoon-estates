"use client";

import React from "react";
import Image from "next/image";

// ui components
import { Button } from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";

// images and svgs
import beachFront from "@/public/beach-front.jpg";
import Container from "@/app/components/ui/Container";
import Link from "next/link";
import { Text } from "@/app/components/ui/Text";
import { heroAmenities } from "@/contents/hero-section/heroAmenities";
import { links } from "@/contents/links/link";

const HeroSection = () => {
  return (
    <Container className="relative overflow-clip px-0 py-0 sm:px-4 sm:py-8 lg:flex lg:flex-row-reverse">
      <Image
        className="h-[380px] object-cover brightness-75 sm:rounded-lg md:h-[450px] lg:h-[540px] lg:max-w-[850px] lg:object-fill"
        src={beachFront}
        alt="Beach Front Villa"
      />

      {/* card */}
      <div className=" relative  -top-12 -mb-12 space-y-8 overflow-hidden border bg-white px-8 py-8 drop-shadow-lg min-[510px]:left-8 min-[510px]:max-w-[450px] min-[510px]:rounded-lg md:-top-24 md:-mb-24 lg:absolute lg:left-8 lg:top-24 lg:mb-0">
        <div className=" space-y-4">
          <div className=" space-y-2">
            <div>
              <Text className="uppercase">West Bay Lagoon</Text>
              <Heading size="lg" className="leading-tight text-emerald-700">
                Luxury Villas for Rent
              </Heading>
            </div>
            <Text>
              Find the perfect villa for rent in Doha, Qatar and experience
              luxurious living like never before.
            </Text>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {heroAmenities.map((amenity, index) => {
              return (
                <li key={index} className={`flex w-fit items-center gap-2`}>
                  <amenity.icon size={20} className=" text-gray-500" />
                  <Text size="small" weight="thin">
                    {amenity.title}
                  </Text>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex space-x-3">
          <Link passHref href={links.contact.href}>
            <Button size="lg">Get Started</Button>
          </Link>

          <Link
            href={
              links.villas[Math.floor(Math.random() * links.villas.length)].href
            }
            passHref
          >
            <Button variant="outline" size="lg">
              View Villas
            </Button>
          </Link>
        </div>
      </div>

      {/* background color on desktop */}
      <div className="bottom-2 left-0 -z-50 hidden h-2/3 w-2/3 rounded-lg bg-emerald-100 lg:absolute lg:block"></div>
      <div className="absolute bottom-16 right-12 -z-50 hidden h-2/3 w-[90%] rounded-lg bg-emerald-100 min-[510px]:block"></div>
    </Container>
  );
};

export default HeroSection;
