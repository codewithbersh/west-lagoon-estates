import React from "react";
import HeroSection from "./components/home/HeroSection";
import AvailableVillas from "./components/home/AvailableVillas";
import Location from "./components/home/Location";
import CallToAction from "./components/home/CallToAction";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";
import { villas } from "@/contents/villa/villa-contents";

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
