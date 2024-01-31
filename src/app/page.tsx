import Hero from "@/components/landing/hero/Hero";
import "./globals.css";
import Benefits from "@/components/landing/benefits/Benefits";
import Feautres from "@/components/landing/features/Features";
import Footer from "@/components/reuseable/Footer";
export default function LandingPage() {
  return (
    <div className="font-kanit text-white flex flex-col ">
      <Hero />
      <div className="overflow-hidden">
        <Benefits />
        <Feautres />
      </div>
      <Footer />
    </div>
  );
}
