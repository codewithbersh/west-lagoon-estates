import React from "react";
import HeroSection from "./components/home/HeroSection";
import BenefitsSection from "./components/home/BenefitsSection";
import AvailableVillas from "./components/home/AvailableVillas";
import Features from "./components/home/Features";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <AvailableVillas />
      <Features />
    </main>
  );
};

export default Home;
