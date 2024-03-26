import { interestRate } from "@/constants";
import React from "react";
import { AdditionalInfoProps } from "./RequestLoanModal.types";
import { calculateInterest } from "@/utils";

export const AdditionalInfo = (props: AdditionalInfoProps) => {
  return (
    <div className="h-36 w-full rounded-2xl bg-gradient-to-tr from-transparent via-[#4854ff] to-transparent p-[1px] max-w-[302px]">
      <section className="flex flex-col items-start justify-center bg-footer_blue back rounded-2xl p-5 w-[300px] h-full text-white">
        <h2 className="text-2xl font-semibold">Additional info</h2>
        <div className="flex felx-row flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold">Commision:</h3>
          <p className="text-md">0 SOL</p>
        </div>

        <div className="flex felx-row flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold">Additional fee:</h3>
          <p className="text-md">
            {props.endDate
              ? calculateInterest(
                  props.amount,
                  Math.ceil(
                    (props.endDate.getTime() - new Date().getTime()) /
                      (1000 * 60 * 60 * 24)
                  )
                )
              : 0}{" "}
            SOL
          </p>
        </div>
        <div className="flex felx-row flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold">Interest: </h3>
          <p>{interestRate * 100}%</p>
        </div>
      </section>
    </div>
  );
};
