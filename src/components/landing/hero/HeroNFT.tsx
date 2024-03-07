"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface HeroNFTProps {
  className: string;
  imageUrl: string;
  title: string;
  floor: string;
  interest: string;
  remaining: string;
}

const HeroNFT = (props: HeroNFTProps) => {
  const { className, imageUrl, title, floor, interest, remaining } = props;
  return (
    <div className={`absolute z-20 ${className}`}>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4  bg-footer_blue/90  w-48  flex flex-col ">
        <Image
          src={imageUrl}
          height={180}
          width={180}
          className="rounded-[22px]"
          alt="nft"
        />
        <div className="pt-2 text-white/80">
          <p className="text-sm text-text_dimmed pb-1">{title}</p>
          <div className="flex justify-between text-xs">
            <p>Floor</p>
            <p className="font-bold">{floor}</p>
          </div>
          <div className="flex justify-between text-xs">
            <p>Interest</p>
            <p className="font-bold">{interest}</p>
          </div>
          <div className="flex justify-between text-xs">
            <p>Remaining</p>
            <p className="font-bold">{remaining}</p>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default HeroNFT;
