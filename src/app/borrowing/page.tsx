import { Navbar, Footer } from "@/components";
import React from "react";
import Image from "next/image";
import bgWaves1 from "../../../public/waves-bottom.svg";
import { Button } from "@/components/ui/button";
import "./style.css";
import { PercentBar, RoundedButton } from "@/components/ui";

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
      insurance: false,
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
    remainingTime: "32:34",
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
            <a href="/how-it-works" className="gray-blue-text">
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
            Active loans / <span className="gray-blue-text">Pending</span> /{" "}
            <span className="gray-blue-text">History</span>
          </h3>
          <div
            className="flex flex-row items-center justify-between bg-[#151527] opacity-80 p-4 rounded-xl"
            style={{ width: "100%" }}
          >
            <table className=" w-full">
              <tbody>
                <tr>
                  <th className="gray-text">NFT</th>
                  <th className="gray-text">Duration</th>
                  <th className="gray-text">Remaining time</th>
                  <th className="gray-text">Total</th>
                  <th className="gray-text">Interest rate</th>
                  <th className="gray-text">Ballance</th>
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
                      {nft.total.toFixed(2)} {nft.currency}
                    </td>
                    <td>{(nft.interestRate * 100).toFixed(2)}%</td>
                    <td>
                      <div className="borrowing-balance-td">
                        <PercentBar
                          percent={(nft.ballance.payedOff / nft.total) * 100}
                        />
                        <div
                          className="flex flex-row items-center"
                          style={{ gap: 10 }}
                        >
                          <div className="flex flex-col text-sm gray-text">
                            <span>payed off:</span>
                            <span>remaining:</span>
                            <span>insurance:</span>
                            {nft.ballance.insurance && (
                              <span>sell a loan: </span>
                            )}
                          </div>
                          <div className="flex flex-col items-start text-sm">
                            <span>
                              {nft.ballance.payedOff.toFixed(2)} {nft.currency}
                            </span>
                            <span>
                              {(nft.total - nft.ballance.payedOff).toFixed(2)}{" "}
                              {nft.currency}
                            </span>
                            <span
                              className={
                                nft.ballance.insurance
                                  ? "text-green-500"
                                  : "text-red-500"
                              }
                            >
                              {nft.ballance.insurance
                                ? "up to " +
                                  (
                                    (nft.total - nft.ballance.payedOff) *
                                    0.95
                                  ).toFixed(2)
                                : "no"}
                            </span>

                            {nft.ballance.insurance && (
                              <span className="text-green-500">yes</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col" style={{ gap: 10 }}>
                        <RoundedButton borderColor="rgb(34, 197, 94)">
                          Pay off
                        </RoundedButton>
                        {nft.ballance.insurance && (
                          <RoundedButton>Sell a loan</RoundedButton>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
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
