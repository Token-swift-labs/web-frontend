import { Binoculars } from "@/components";
import React from "react";

export const Offers = () => {
  return (
    <>
      <div className="flex flex-row" style={{ gap: 10 }}>
        <Binoculars />
        <input
          type="text"
          placeholder="Collection name..."
          className="bg-transparent w-[150px] text-white placeholder-[#484872] focus:border-none"
        />
      </div>
    </>
  );
};
