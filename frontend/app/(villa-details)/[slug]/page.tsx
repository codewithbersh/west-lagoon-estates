import React from "react";

type VillaDetailsType = {
  params: {
    slug: string;
  };
};

const VillaDetails = ({ params }: VillaDetailsType) => {
  return <div>{params.slug}</div>;
};

export default VillaDetails;
