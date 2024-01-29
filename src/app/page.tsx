import Navbar from "@/components/reuseable/Navbar";
import "./globals.css";
import HeroContent from "@/components/landing/hero/HeroContent";
export default function LandingPage() {
  return (
    <div className="font-kanit text-white ">
      <div className="h-[90vh] rounded-b-[250px] relative overflow-hidden flex flex-col items-center ">
        <div className="h-full w-1/3 absolute top-[-100px] left-[-200px] xl:left-[-400px] blur-[200px] bg-[#25309D] z-0"></div>
        <div className="h-1/2 w-1/2 absolute bottom-[-100px] right-[-200px] blur-[200px] bg-purple-700/90 z-0"></div>
        <Navbar />
        <HeroContent />
      </div>
    </div>
  );
}
