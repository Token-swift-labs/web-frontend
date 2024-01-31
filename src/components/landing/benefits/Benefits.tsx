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
