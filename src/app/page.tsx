"use client";
import Hero from "@/components/landing/hero/Hero";
import "./globals.css";
import Benefits from "@/components/landing/benefits/Benefits";
import Feautres from "@/components/landing/features/Features";
import { Footer } from "@/components";
import Image from "next/image";
import bgWaves1 from "../../public/waves-top.png";
import bgWaves2 from "../../public/waves-mid.png";
import bgWaves3 from "../../public/waves-bottom.svg";

import {
  AnchorProvider,
  BN,
  Program,
  utils,
  web3,
} from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

const idl = require("../../server/target/idl/server.json");
const utf8 = utils.bytes.utf8;

export default function LandingPage() {
  const anchorWallet = useAnchorWallet();

  async function sendTransaction() {
    if (!anchorWallet) {
      return;
    }
    const network = "https://api.devnet.solana.com";
    const connection = new Connection(network, "processed");
    const provider = new AnchorProvider(connection, anchorWallet, {
      preflightCommitment: "processed",
    });
    const program = new Program(idl, idl.metadata.address, provider);

    try {
      const toKey = new PublicKey(
        "C8y9jqMCS81AR6r9Zq4FSCVAuERGNg4gaBgn3PaV2e8J"
      );
      const trans = await program.methods.initialize().rpc();

      console.log("trans", trans);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="font-kanit text-white flex flex-col ">
      <Hero />
      <button onClick={sendTransaction}>SEND</button>
      <div className="overflow-hidden w-full h-full relative">
        <Image
          src={bgWaves1}
          alt="waves left"
          height={1300}
          className=" opacity-70 md:opacity-100 absolute top-[-400px] left-[-150px]  sm:left-[-200px] sm:top-[-800px] md:left-[-250px] scale-y-[-1] rotate-[40deg] z-0"
        />
        <Image
          src={bgWaves1}
          alt="waves left"
          height={1300}
          className=" opacity-70 md:opacity-100 absolute top-[-300px] right-[-200px] md:right-[-250px] scale-x-[-1] rotate-[-30deg] z-0"
        />
        <Image
          src={bgWaves2}
          alt="waves mid"
          height={800}
          className=" opacity-70 md:opacity-100 absolute top-[700px] left-[-230px] sm:left-[-320px] rotate-[10deg]  z-0"
        />
        <Image
          src={bgWaves3}
          alt="waves mid"
          className="  absolute bottom-[100px] sm:bottom-[-200px]  z-0 w-full"
        />
        <Benefits />
        <Feautres />
        <Footer />
      </div>
    </div>
  );
}
