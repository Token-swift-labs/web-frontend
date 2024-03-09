import { Navbar, Footer } from "@/components";
import React from "react";
import Image from "next/image";
import bgWaves1 from "../../../public/waves-bottom.svg";
import { Button } from "@/components/ui/button";
import "./style.css";
import { PercentBar } from "@/components/ui";

const nfts = [
  {
    nft: {
      name: "NFT 1",
      image: "/nft.jpg",
    },
    duration: "3 months",
    remainingTime: "32:34",
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 0.98,
      insurance: true,
    },
  },
  {
    nft: {
      name: "NFT 2",
      image: "/nft.jpg",
    },
    duration: "3 months",
    remainingTime: "32:34",
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 0.98,
      insurance: true,
    },
  },
  {
    nft: {
      name: "NFT 3",
      image: "/nft.jpg",
    },
    duration: "3 months",
    remainingTime: "32:34",
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 0.98,
      insurance: true,
    },
  },
];

const borrowing = () => {
  return (
    <div className="font-kanit text-white flex flex-col ">
      <Navbar />
      <div className="w-full" style={{ padding: "200px 32px 32px 32px" }}>
        <div className="flex flex-row items-center" style={{ gap: "24px" }}>
          <div
            className="flex flex-col items-start justify-center"
            style={{ gap: 10 }}
          >
            <h2
              className="text-6xl font-bold text-center"
              style={{ fontWeight: 400 }}
            >
              Borrow
            </h2>
            <a href="/how-it-works" className="text-[#484872]">
              How it works?
            </a>
          </div>
          <Button className="rounded-xl">Request a loan</Button>
          <Button className="rounded-xl">Insurance</Button>
        </div>
        <div
          className="flex flex-col justify-start"
          style={{
            minHeight: "calc(100vh - 600px)",
            padding: "32px",
            gap: "24px",
          }}
        >
          <h3 className="text-4xl">
            Active loans / <span className="text-[#484872]">Pending</span> /{" "}
            <span className="text-[#484872]">History</span>
          </h3>
          <div
            className="flex flex-row items-center justify-between bg-[#151527] opacity-80 p-4 rounded-xl"
            style={{ width: "100%" }}
          >
            <table className=" w-full">
              <tr>
                <th className="text-[#484872]">NFT</th>
                <th className="text-[#484872]">Duration</th>
                <th className="text-[#484872]">Remaining time</th>
                <th className="text-[#484872]">Total</th>
                <th className="text-[#484872]">Interest rate</th>
                <th className="text-[#484872]">Ballance</th>
                <th></th>
              </tr>
              {nfts.map((nft) => (
                <tr key={nft.nft.name}>
                  <td>
                    <div className="borrowing-td p-4 ">
                      <Image
                        src={nft.nft.image}
                        alt="nft"
                        width={100}
                        height={100}
                        className="rounded-xl" // Add this line
                      />
                      <span className="text-sm">{nft.nft.name}</span>
                    </div>
                  </td>
                  <td>{nft.duration}</td>
                  <td>{nft.remainingTime}</td>
                  <td>
                    {nft.total} {nft.currency}
                  </td>
                  <td>{nft.interestRate * 100}%</td>
                  <td>
                    <div className="borrowing-balance-td">
                      <PercentBar
                        percent={(nft.ballance.payedOff / nft.total) * 100}
                      />
                      {nft.ballance.payedOff} {nft.currency}{" "}
                      {nft.ballance.insurance ? (
                        <span className="text-green-500">Insured</span>
                      ) : (
                        <span className="text-red-500">Not insured</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <Button>Pay off</Button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>

      <Footer />

      <Image
        src={bgWaves1}
        alt="waves bottom"
        className="absolute w-full"
        style={{
          filter: "brightness(0.4)",
          bottom: "-50px",
          position: "fixed",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default borrowing;
