"use client";

import React, { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";

import { animated, config, useSpring } from "react-spring";
import { useHideOnScrollDown } from "@/hooks";

// import {
//   AnchorProvider,
//   BN,
//   Program,
//   utils,
//   web3,
// } from "@project-serum/anchor";
// import { Connection, PublicKey } from "@solana/web3.js";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import ConnectButton from "./ConnectButton";
// const idl = require("../server/target/idl/server.json");
// const utf8 = utils.bytes.utf8;
const Navbar = () => {
  const isVisible = useHideOnScrollDown();

  const props = useSpring({
    to: { top: isVisible ? "0" : "-140px" },
    config: { ...config.wobbly, clamp: true },
  });

  // async function sendTransaction() {
  //   if (!anchorWallet) {
  //     return;
  //   }
  //   const network = "https://api.devnet.solana.com";
  //   const connection = new Connection(network, "processed");
  //   const provider = new AnchorProvider(connection, anchorWallet, {
  //     preflightCommitment: "processed",
  //   });
  //   const program = new Program(idl, idl.metadata.address, provider);

  //   try {
  //     const toKey = new PublicKey(
  //       "kYDA2FvksMZWZ9KabiQgQ9AWVS62Wdk5wW4m2mn2CZD"
  //     );
  //     const trans = await program.methods.initialize().rpc();

  //     console.log("trans", trans);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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
          <Link href="/insurance" className="text-xl">
            Borrowing
          </Link>
          <Link href="/buyaloan" className="text-xl text-center">
            Buy a loan <br />
            <span className="text-text_dimmed">(soon)</span>
          </Link>
          <div>
            <ConnectButton />
          </div>
        </div>
      </div>
    </animated.header>
  );
};
