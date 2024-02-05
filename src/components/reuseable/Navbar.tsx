"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { Button } from "@/components/ui/button";
import { animated, config, useSpring } from "react-spring";
import { useHideOnScrollDown } from "@/hooks";
const Navbar = () => {
  const isVisible = useHideOnScrollDown();

  const props = useSpring({
    to: { top: isVisible ? "0" : "-120px" },
    config: { ...config.wobbly, clamp: true },
  });

  return (
    <animated.header
      className="w-full flex justify-between py-8 px-14 items-center z-30 fixed"
      style={props}
    >
      <div className="flex items-center gap-20">
        <Image src={logo} alt="logo" width={170} />
        <Link href="/how" className="text-xl">
          How it works
        </Link>
        <Link href="/lending" className="text-xl">
          Lending
        </Link>
        <Link href="/insurance" className="text-xl">
          Insurance
        </Link>
        <Link href="/buyaloan" className="text-xl">
          Buy a loan
        </Link>
      </div>
      <div>
        <Button variant="default" size="lg">
          Connect wallet
        </Button>
      </div>
    </animated.header>
  );
};

export default Navbar;
