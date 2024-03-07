import React from "react";
import { Button } from "@/components/ui/button";
const HeroContent = () => {
  return (
    <div className="w-full z-30 absolute flex flex-col items-center mt-36 ">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-center text-6xl font-medium leading-[80px]">
          Unlock the Value of your NFT <br /> with safety
        </h1>
        <p className="text-2xl font-light text-center mt-4 leading-[40px]">
          <span className="font-bold">AI</span> powered NFT dApp built to <br />
          <span className="font-bold">deliver you</span> the best user
          experience with lowest fees and safety
        </p>
        <div className="flex gap-8 mt-8">
          <Button variant="gradient" size="lg">
            Take a loan 💸
          </Button>
          <Button variant="shadow" size="lg">
            Learn more 📚
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
