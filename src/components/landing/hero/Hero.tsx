import { Navbar } from "@/components";
import React from "react";
import HeroContent from "./HeroContent";
import HeroBranding from "./HeroBranding";
import HeroNFT from "./HeroNFT";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="h-[90vh] rounded-b-[250px] relative overflow-hidden ">
        <Navbar />
        <HeroContent />
        <HeroNFT
          className="top-[200px] left-[50px] scale-95 rotate-[-10deg]"
          imageUrl="/nft.jpg"
          title="Collection #1234"
          floor="0.5"
          interest="5%"
          remaining="9 days"
        />
        <HeroNFT
          className="bottom-[80px] left-[140px] scale-[0.75] rotate-[10deg]"
          imageUrl="/nft.jpg"
          title="Collection #2137"
          floor="1.2"
          interest="8%"
          remaining="4 days"
        />
        <HeroNFT
          className="top-[200px] right-[50px] scale-95 rotate-[10deg]"
          imageUrl="/nft.jpg"
          title="Collection #4200"
          floor="1.29"
          interest="8%"
          remaining="4 days"
        />
        <HeroNFT
          className="bottom-[80px] right-[140px] scale-[0.75] rotate-[-10deg]"
          imageUrl="/nft.jpg"
          title="Collection #6969"
          floor="0.5"
          interest="6%"
          remaining="3 days"
        />
        <div className="h-full w-1/3 absolute top-[-100px] left-[-200px] xl:left-[-400px] blur-[200px] bg-[#25309D] z-10"></div>
        <div className="h-1/2 w-1/2 absolute bottom-[-100px] right-[-200px] blur-[200px] bg-purple-700/90 z-10"></div>
      </div>
      <HeroBranding />
    </div>
  );
};

export default Hero;
