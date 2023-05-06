import React from "react";
import HeroSection from "./components/home/HeroSection";
import AvailableVillas from "./components/home/AvailableVillas";
import Location from "./components/home/Location";
import CallToAction from "./components/home/CallToAction";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";

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
