import React from "react";
import HeroSection from "./components/home/HeroSection";
import AvailableVillas from "./components/home/AvailableVillas";
import CallToAction from "./components/home/CallToAction";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";
import Location from "./components/home/Location";

// removed
import BenefitsSection from "./components/home/BenefitsSection";
import Features from "./components/home/Features";

const Home = () => {
  return (
    <main>
      <HeroSection />
      {/* <BenefitsSection /> */}
      <AvailableVillas />
      <Location />
      {/* <Features /> */}
      <CallToAction />
      <FrequentlyAskedQuestions />
    </main>
  );
};

export default Home;
