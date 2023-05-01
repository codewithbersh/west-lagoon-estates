import React from "react";
import HeroSection from "./components/home/HeroSection";
import BenefitsSection from "./components/home/BenefitsSection";
import AvailableVillas from "./components/home/AvailableVillas";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <AvailableVillas />
    </main>
  );
};

export default Home;
