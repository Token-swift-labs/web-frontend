import React from "react";
import Image from "next/image";
import bgWaves1 from "../../../../public/waves-top.png";
import bgWaves2 from "../../../../public/waves-mid.png";
import Benefit from "./Benefit";
import logo from "../../../../public/logo.png";
import { Button } from "@/components/ui/button";
const Benefits = () => {
  return (
    <div className="w-full   relative">
      <Image
        src={bgWaves1}
        alt="waves left"
        height={1300}
        className=" absolute top-[-800px] left-[-250px] scale-y-[-1] rotate-[40deg] z-0"
      />
      <Image
        src={bgWaves1}
        alt="waves left"
        height={1300}
        className="  absolute top-[-300px] right-[-250px] scale-x-[-1] rotate-[-30deg] z-0"
      />
      <Image
        src={bgWaves2}
        alt="waves mid"
        height={800}
        className="  absolute top-[700px] left-[-320px] rotate-[10deg]  z-0"
      />
      <div className="flex flex-col flex-1 pt-8">
        <Benefit
          reverse={false}
          image={logo}
          heading="Lending"
          description="Use your NFT as collateral and take loans from other users with
              insurance and option to resell the loan."
          btnName="Lending"
        />
        <Benefit
          reverse
          image={logo}
          heading="Insurance"
          description="Play safe by buying insurance for your debts. Insurance will cover
          not payed amount of debt. You can also try to resell the loan."
          btnName="Insurance"
        />
        <Benefit
          reverse={false}
          image={logo}
          heading="Trust Score"
          description="As a lender you can verify creditworthiness
          of potential borrower by Trust Score, calculated of history of loans."
          btnName="Trust Score"
        />
      </div>
    </div>
  );
};

export default Benefits;
