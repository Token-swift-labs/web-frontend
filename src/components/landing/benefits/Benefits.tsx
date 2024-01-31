import React from "react";

import Benefit from "./Benefit";
import nft from "../../../../public/nft.png";
const Benefits = () => {
  return (
    <div className="w-full   relative flex flex-col gap-16 py-8">
      <Benefit
        reverse={false}
        image={nft}
        heading="Lending"
        description="Use your NFT as collateral and take loans from other users with
              insurance and option to resell the loan."
        btnName="Lending"
      />
      <Benefit
        reverse
        image={nft}
        heading="Insurance"
        description="Play safe by buying insurance for your debts. Insurance will cover
          not payed amount of debt. You can also try to resell the loan."
        btnName="Insurance"
      />
      <Benefit
        reverse={false}
        image={nft}
        heading="Trust Score"
        description="As a lender you can verify creditworthiness
          of potential borrower by Trust Score, calculated of history of loans."
        btnName="Trust Score"
      />
    </div>
  );
};

export default Benefits;
