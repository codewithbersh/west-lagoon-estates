import React from "react";
import { villas } from "@/contents/villa/villa-contents";
import HeroSection from "./components/home/HeroSection";
import AvailableVillas from "./components/home/AvailableVillas";
import Location from "./components/home/Location";
import CallToAction from "./components/home/CallToAction";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <AvailableVillas villas={villas} />
      <Location />
      <CallToAction />
      <FrequentlyAskedQuestions />
    </section>
  );
};

export default Home;
