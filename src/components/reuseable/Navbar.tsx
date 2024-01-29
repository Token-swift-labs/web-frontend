import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between py-8 px-14 items-center z-30 relative ">
      <div className="flex items-center gap-20">
        <Image src={logo} alt="logo" />
        <Link href="/how" className="text-xl">
          How it works
        </Link>
        <Link href="/lending" className="text-xl">
          Lending
        </Link>
        <Link href="/insurance" className="text-xl">
          Insurance
        </Link>
        <Link href="/buyaloan" className="text-xl">
          Buy a loan
        </Link>
      </div>
      <div>
        <Button variant="default" size="lg">
          Connect wallet
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
