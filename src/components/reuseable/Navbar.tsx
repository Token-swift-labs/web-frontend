"use client";

import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";

import { animated, config, useSpring } from "react-spring";
import { useHideOnScrollDown } from "@/hooks";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerOverlay,
} from "@/components/ui/drawer";

import ConnectButton from "./ConnectButton";
import { List } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import OverlayMeteors from "../ui/OverlayMeteors";
export const Navbar = () => {
  const isVisible = useHideOnScrollDown();
  const [isOpen, setIsOpen] = useState(false);
  const props = useSpring({
    to: { top: isVisible ? "0" : "-140px" },
    config: { ...config.wobbly, clamp: true },
  });

  return (
    <>
      <OverlayMeteors isOpen={isOpen} />

      <animated.header
        className="w-full flex justify-between py-8 px-4 md:px-14 items-center z-40 fixed h-26 overflow-hidden"
        style={props}
      >
        <div className="absolute left-[0px] h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10" />

        <div className="relative w-full flex justify-between  overflow-hidden ">
          {/* Big devices navbar */}
          <div className="hidden md:flex items-center gap-4 justify-around xl:justify-normal  xl:gap-20 w-full">
            <Link href="/">
              <Image src={logo} alt="logo" width={170} />
            </Link>
            <Link href="/how" className="text-xl text-center">
              How it works
            </Link>
            <Link href="/lending" className="text-xl">
              Lending
            </Link>
            <Link href="/borrowing" className="text-xl">
              Borrowing
            </Link>
            <Link href="/buy-a-loan" className="text-xl text-center">
              Buy a loan <br />
            </Link>
          </div>
          {/* Small devices navbar */}
          <div className="flex md:hidden justify-between w-full items-center">
            <Link href="/">
              <Image src={logo} alt="logo" width={130} />
            </Link>
            <Drawer onOpenChange={(open) => setIsOpen(open)}>
              <DrawerTrigger>
                <List size={40} className=" mx-4" />
              </DrawerTrigger>
              <DrawerContent className="">
                <div className="absolute inset-x-0 h-px w-3/4 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-[#4854ff] to-transparent" />
                <div className="overflow-hidden relative">
                  <DrawerHeader>
                    <DrawerTitle className=" pt-2 ">Navigation</DrawerTitle>
                  </DrawerHeader>
                  <div className="flex  text-white  justify-evenly items-center flex-wrap  gap-4  pb-4">
                    <Button variant="primary" size="sm">
                      <Link href="/how" className="text-xl ">
                        How it works
                      </Link>
                    </Button>
                    <Button variant="primary" size="sm">
                      <Link href="/lending" className="text-xl">
                        Lending
                      </Link>
                    </Button>
                    <Button variant="primary" size="sm">
                      <Link href="/borrowing" className="text-xl">
                        Borrowing
                      </Link>
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <ConnectButton />
        </div>
      </animated.header>
    </>
  );
};
