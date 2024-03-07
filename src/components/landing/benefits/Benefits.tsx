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
               and option to resell the loan, or provide liquidity for borrowers."
        btnName="Lending"
      />
      <Benefit
        reverse
        image={nft}
        heading="Trust Score"
        description="As a lender you can verify creditworthiness
          of potential borrower by Trust Score, calculated of history of loans."
        btnName="Trust Score"
      />
      <Benefit
        reverse={false}
        image={nft}
        heading="User friendly"
        description="Designed to be user friendly, with a simple and intuitive interface and AI powered features."
        btnName="Use of AI"
      />
    </div>
  );
};

export default Benefits;
