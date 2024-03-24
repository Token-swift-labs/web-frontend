import React from "react";
import Image from "next/image";
import { MiniChart } from "@/components";
import "./style.css";

export const NftCard = (props: any) => {
  return (
    <div className="card-main w-[200px] bg-[#252543] p-2 rounded-xl transition-all duration-300 hover:scale-105">
      <div
        className="card-main-content flex flex-col items-center w-full bg-gradient-to-bl from-[#311FFF] to-[#0D116D] p-2 rounded-lg overflow-hidden"
        style={{ gap: 5 }}
      >
        <Image
          src={props.nft.nft.image}
          alt="nft"
          width={140}
          height={140}
          className="rounded-xl"
        />
        <h3 className="text-white text-center">{props.nft.nft.name}</h3>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col text-sm">
            <div>
              <span className="gray-text-light ">Floor:</span>{" "}
              {props.nft.pricing.floor}
            </div>
            <div>
              <span className="gray-text-light ">Value:</span>{" "}
              {props.nft.pricing.value}
            </div>
          </div>
          <div className="flex flex-row items-center text-xl">
            {props.nft.changeValue[0] === "0" && (
              <>
                <span className="text-white">-</span>
              </>
            )}
            {props.nft.changeValue[0] !== "0" &&
              (props.nft.changeValue[0] !== "-" ? (
                <>
                  <span className="text-green-500">
                    {props.nft.changeValue}
                  </span>
                  <MiniChart width={25} height={25} />
                </>
              ) : (
                <>
                  <span className="text-[#972626]">
                    {props.nft.changeValue}
                  </span>
                  <span className="translate scale-y-[-1]">
                    <MiniChart color="#972626" width={25} height={25} />
                  </span>
                </>
              ))}
          </div>
        </div>
      </div>
      <div
        className="flex flex-row justify-between"
        style={{ margin: "2px 8px" }}
      >
        <span className="gray-text-light ">Trust score:</span>
        <span>{props.nft.trustScore}</span>
      </div>
      <div
        className="flex flex-row justify-between"
        style={{ margin: "2px 8px" }}
      >
        <span className="gray-text-light ">Balance:</span>
        <span>
          {props.nft.balance.payedOff}/{props.nft.total} {props.nft.currency}
        </span>
      </div>
      <div
        className="flex flex-row justify-between items-center"
        style={{ margin: "2px 8px" }}
      >
        <span className="gray-text-light ">Price:</span>
        <span className="text-xl">
          {(props.nft.total - props.nft.balance.payedOff).toFixed(2)}{" "}
          {props.nft.currency}
        </span>
      </div>
    </div>
  );
};
