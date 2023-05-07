import React from "react";
import HeadingSection from "./components/HeadingSection";
import { villa } from "@/contents/villa/villa-contents";

const VillaDetail = () => {
  return (
    <div>
      <HeadingSection villa={villa} />
    </div>
  );
};

export default VillaDetail;
