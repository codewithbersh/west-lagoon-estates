import React from "react";
import HeroSection from "./components/home/HeroSection";
import BenefitsSection from "./components/home/BenefitsSection";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
    </main>
  );
};

export default Home;
