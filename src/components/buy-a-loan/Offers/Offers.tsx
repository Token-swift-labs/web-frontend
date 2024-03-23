import { Binoculars } from "@/components";
import React from "react";
import { NftCard } from "../NftCard/NftCard";

export const Offers = () => {
  return (
    <>
      <div className="flex flex-row" style={{ gap: 10 }}>
        <Binoculars />
        <input
          type="text"
          placeholder="Collection name..."
          className="bg-transparent w-[150px] text-white placeholder-[#484872] focus:border-none"
        />
      </div>
      <div
        className="w-[100%] flex flex-wrap flex-row justify-start md:justify-start"
        style={{ gap: 24 }}
      >
        {nfts.map((nft, index) => (
          <NftCard key={index} nft={nft} />
        ))}
      </div>
    </>
  );
};

const nfts = [
  {
    nft: {
      name: "NFT 1",
      image: "/nft.jpg",
    },
    duration: "3 months",
    expirationTimeStamp: Date.now() + 100000,
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 0.98,
      insurance: false,
    },
  },
  {
    nft: {
      name: "NFT 2",
      image: "/nft.jpg",
    },
    duration: "3 months",
    expirationTimeStamp: Date.now() + 150000,
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 0.2,
      insurance: true,
    },
  },
  {
    nft: {
      name: "NFT 3",
      image: "/nft.jpg",
    },
    duration: "3 months",
    expirationTimeStamp: Date.now() + 200000,
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 1.6,
      insurance: true,
    },
  },
];
