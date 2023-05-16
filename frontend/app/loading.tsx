"use client";

import Lottie from "lottie-react";
import animationData from "@/public/loading-animation.json";

const Loading = () => {
  return (
    <div className="grid min-h-screen min-w-full place-items-center">
      <Lottie animationData={animationData} />
    </div>
  );
};

export default Loading;
