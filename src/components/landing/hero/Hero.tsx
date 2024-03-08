import { Navbar } from "@/components";
import React from "react";
import HeroContent from "./HeroContent";
import HeroBranding from "./HeroBranding";
import HeroNFT from "./HeroNFT";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="h-[90vh] rounded-b-[250px] relative overflow-hidden flex flex-col items-center ">
        <div className="h-full w-1/3 absolute top-[-100px] left-[-200px] xl:left-[-400px] blur-[200px] bg-[#25309D] z-10"></div>
        <div className="h-1/2 w-1/2 absolute bottom-[-100px] right-[-200px] blur-[200px] bg-purple-700/90 z-10"></div>
        <Navbar />
        <HeroContent />
        <HeroNFT />
      </div>
      <HeroBranding />
    </div>
  );
};

export default Hero;
