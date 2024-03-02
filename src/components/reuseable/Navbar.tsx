"use client";

import React, { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { Button } from "@/components/ui/button";
import { animated, config, useSpring } from "react-spring";
import { useHideOnScrollDown } from "@/hooks";
import {
  WalletDisconnectButton,
  WalletModalButton,
} from "@solana/wallet-adapter-react-ui";
import {
  AnchorProvider,
  BN,
  Program,
  utils,
  web3,
} from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
// const idl = require("../server/target/idl/server.json");
// const utf8 = utils.bytes.utf8;
const Navbar = () => {
  const isVisible = useHideOnScrollDown();

  const props = useSpring({
    to: { top: isVisible ? "0" : "-140px" },
    config: { ...config.wobbly, clamp: true },
  });
  const anchorWallet = useAnchorWallet();
  useEffect(() => {
    if (anchorWallet) {
      console.log("wallet", anchorWallet);
    }
  }, [anchorWallet]);
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
      className="w-full flex justify-between py-8 px-14 items-center z-30 fixed h-26 bg-[#171717] overflow-hidden"
      style={props}
    >
      <div className="h-[100vw] w-1/3 absolute top-[-100px] left-[-200px] xl:left-[-400px] blur-[200px] bg-[#25309D] z-1"></div>
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
        <div>
          {/* <Button variant="default" size="lg">
            Connect wallet
          </Button> */}
          <WalletModalButton />
          <WalletDisconnectButton />
        </div>
      </div>
    </animated.header>
  );
};

export default Navbar;
