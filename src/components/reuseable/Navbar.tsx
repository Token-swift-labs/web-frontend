"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { Button } from "@/components/ui/button";
import { animated, config, useSpring } from "react-spring";
import { useHideOnScrollDown } from "@/hooks";
import { Connection } from "@solana/web3.js";
import { getShortId } from "@/utils";

const Navbar = () => {
  const isVisible = useHideOnScrollDown();
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);

  const props = useSpring({
    to: { top: isVisible ? "0" : "-140px" },
    config: { ...config.wobbly, clamp: true },
  });

  useEffect(() => {
    // Detect Phantom provider
    if (window.solana) {
      setConnected(true);
    }
  }, []);

  const connectToWallet = async () => {
    try {
      if (!window.solana) return;
      // Connect to Phantom wallet
      const connection = new Connection("https://api.devnet.solana.com");
      const provider = await window.solana.connect(); // Connect if available
      const publicKey = provider.publicKey;
      // Use connection and publicKey for further interactions
      console.log("Connected:", publicKey.toString());
      setAccount(publicKey);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const disconnectFromWallet = () => {
    // Handle wallet disconnection
    setConnected(false);
    setAccount(null);
  };

  return (
    <animated.header
      className="w-full flex justify-between py-8 px-14 items-center z-30 fixed h-26 bg-[#171717] overflow-hidden"
      style={props}
    >
      <div className="h-[100vw] w-1/3 absolute top-[-100px] left-[-200px] xl:left-[-400px] blur-[200px] bg-[#25309D] z-1" />
      <div className="h-1/2 w-1/2 absolute bottom-[-800px] right-[-200px] blur-[200px] bg-purple-700/90 z-1" />
      <div className="relative w-full flex justify-between overflow-hidden">
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
        <div className="flex items-center ">
          {!account ? (
            <Button variant="default" size="lg" onClick={connectToWallet}>
              Connect wallet
            </Button>
          ) : (
            "Wallet: " + getShortId(account.toString())
          )}
        </div>
      </div>
    </animated.header>
  );
};

export default Navbar;
