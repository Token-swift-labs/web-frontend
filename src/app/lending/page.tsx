import { Navbar, Footer } from "@/components";
import React from "react";
import Benefits from "@/components/landing/benefits/Benefits";
import Feautres from "@/components/landing/features/Features";
import Image from "next/image";
import bgWaves1 from "../../../public/waves-bottom.svg";

const lending = () => {
  return (
    <div className="font-kanit text-white flex flex-col bg-[#f0f]">
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default lending;
