"use client";
import { Binoculars, Footer, Navbar, Offers } from "@/components";
import React, { useState } from "react";
import Image from "next/image";
import bgWaves1 from "../../../public/waves-bottom.svg";

const page = () => {
  const [activePage, setActivePage] = useState<"offers" | "bought">("offers");

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
              Buy a loan
            </h2>
            <a href="/how-it-works" className="gray-blue-text">
              How it works?
            </a>
          </div>
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
            <button
              className={activePage !== "offers" ? "gray-blue-text" : ""}
              onClick={() => setActivePage("offers")}
            >
              Offers
            </button>
            /
            <button
              className={activePage !== "bought" ? "gray-blue-text" : ""}
              onClick={() => setActivePage("bought")}
            >
              Bought
            </button>
          </h3>
          <div className="flex flex-col items-start justify-start bg-[#151527c5] p-4 rounded-xl w-[100%] min-h-[300px]">
            {activePage === "offers" && <Offers />}
            {activePage === "bought" && <></>}
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
          bottom: "-200px",
          position: "fixed",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default page;
