import React from "react";
import Image from "next/image";

export const NftCard = (props: any) => {
  return (
    <div className="w-[200px] bg-[#6B6FC4] p-2 rounded-xl">
      <div className="flex flex-col items-center w-full bg-gradient-to-br from-[#311FFF] to-[#0D116D] p-1 rounded-lg">
        <Image
          src={props.nft.nft.image}
          alt="nft"
          width={100}
          height={100}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
