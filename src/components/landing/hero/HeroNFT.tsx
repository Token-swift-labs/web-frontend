"use client";

import React, { useEffect } from "react";
import { useColor } from "color-thief-react";

const HeroNFT = () => {
  const { data, loading, error } = useColor("/nft.jpg", "hex");
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div></div>;
};

export default HeroNFT;
