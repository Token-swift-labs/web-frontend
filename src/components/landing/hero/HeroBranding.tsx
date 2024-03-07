import React from "react";
import Image from "next/image";
import branding from "../../../../public/branding.png";
const HeroBranding = () => {
  return (
    <div className="w-full flex justify-between px-32 py-4 ">
      <Image src={branding} alt="dummy brand" />
      <Image src={branding} alt="dummy brand" />
      <Image src={branding} alt="dummy brand" />
      <Image src={branding} alt="dummy brand" />
    </div>
  );
};

export default HeroBranding;
