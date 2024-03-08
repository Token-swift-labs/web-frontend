import { Navbar, Footer } from "@/components";
import React from "react";
import Benefits from "@/components/landing/benefits/Benefits";
import Feautres from "@/components/landing/features/Features";
import Image from "next/image";
import bgWaves1 from "../../../public/waves-bottom.svg";

const borrowing = () => {
  return (
    <div className="font-kanit text-white flex flex-col ">
      <Navbar />
      <div className="pt-[200px]">
        <Image
          src={bgWaves1}
          alt="waves bottom"
          className="absolute z-0 w-full bottom-[200px]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default borrowing;
