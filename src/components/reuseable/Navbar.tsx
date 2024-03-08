"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { Button } from "@/components/ui/button";
import { animated, config, useSpring } from "react-spring";
import { useHideOnScrollDown } from "@/hooks";

export const Navbar = () => {
  const isVisible = useHideOnScrollDown();

  const props = useSpring({
    to: { top: isVisible ? "0" : "-140px" },
    config: { ...config.wobbly, clamp: true },
  });

  return (
    <animated.header
      className="w-full flex justify-between py-8 px-14 items-center z-30 fixed h-26 overflow-hidden"
      style={props}
    >
      <div className="absolute left-[0px] h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10" />
      <div className="relative w-full flex justify-between overflow-hidden">
        <div className="flex items-center gap-20">
          <Link href="/">
            <Image src={logo} alt="logo" width={170} />
          </Link>
          <Link href="/how" className="text-xl">
            How it works
          </Link>
          <Link href="/lending" className="text-xl">
            Lending
          </Link>
          <Link href="/borrow" className="text-xl">
            Borrow
          </Link>
          <Link href="/buyaloan" className="text-xl">
            Buy a loan
          </Link>
        </div>
        <div className="flex items-center ">
          <Button variant="default" size="lg">
            Connect wallet
          </Button>
        </div>
      </div>
    </animated.header>
  );
};
