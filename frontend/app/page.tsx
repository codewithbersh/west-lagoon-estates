import React from "react";
import HeroSection from "./components/home/HeroSection";
import BenefitsSection from "./components/home/BenefitsSection";
import AvailableVillas from "./components/home/AvailableVillas";
import Features from "./components/home/Features";
import CallToAction from "./components/home/CallToAction";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <AvailableVillas />
      <Features />
      <CallToAction />
      <FrequentlyAskedQuestions />
    </main>
  );
};

export default Home;
