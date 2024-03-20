import Hero from "@/components/landing/hero/Hero";
import "./globals.css";
import Benefits from "@/components/landing/benefits/Benefits";
import Feautres from "@/components/landing/features/Features";
import { Footer } from "@/components";
import Image from "next/image";
import bgWaves1 from "../../public/waves-top.png";
import bgWaves2 from "../../public/waves-mid.png";
import bgWaves3 from "../../public/waves-bottom.svg";

export default function LandingPage() {
  return (
    <div className="font-kanit text-white flex flex-col ">
      <Hero />
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
