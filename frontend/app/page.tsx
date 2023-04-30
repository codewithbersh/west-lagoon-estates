import React from "react";
import HeroSection from "./components/home/HeroSection";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <main className="container mx-auto max-w-5xl">
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
