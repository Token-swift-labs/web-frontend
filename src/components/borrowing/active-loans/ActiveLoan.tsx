"use client";
import { PercentBar, RoundedButton } from "@/components/ui";
import timeDiff from "@/utils/getTimeDiff";
import Image from "next/image";
import { useEffect, useState } from "react";
type Props = {
  nft: {
    nft: {
      name: string;
      image: string;
    };
    duration: string;
    expirationTimeStamp: number;
    total: number;
    currency: string;
    interestRate: number;
    ballance: {
      payedOff: number;
    };
  };
};
const ActiveLoan = ({ nft }: Props) => {
  const [remaining, setRemaining] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      const [timeString, rawDifference] = timeDiff(
        new Date(nft.expirationTimeStamp),
        new Date()
      );
      setRemaining(timeString as string);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <tr>
      <td>
        <div className="borrowing-td p-4 ">
          <Image
            src={nft.nft.image}
            alt="nft"
            width={100}
            height={100}
            className="rounded-xl" // Add this line
          />
          <span className="text-sm">{nft.nft.name}</span>
        </div>
      </td>
      <td>{nft.duration}</td>
      <td>{remaining}</td>
      <td>
        {nft.total.toFixed(2)} {nft.currency}
      </td>
      <td>{(nft.interestRate * 100).toFixed(2)}%</td>
      <td>
        <div className="borrowing-balance-td">
          <PercentBar percent={(nft.ballance.payedOff / nft.total) * 100} />
          <div className="flex flex-row items-center" style={{ gap: 10 }}>
            <div className="flex flex-col text-sm gray-text">
              <span>payed off:</span>
              <span>remaining:</span>
              {/* {nft.ballance.insurance && <span>sell a loan: </span>} */}
            </div>
            <div className="flex flex-col items-start text-sm">
              <span>
                {nft.ballance.payedOff.toFixed(2)} {nft.currency}
              </span>
              <span>
                {(nft.total - nft.ballance.payedOff).toFixed(2)} {nft.currency}
              </span>
              {/* <span
                className={
                  nft.ballance.insurance ? "text-green-500" : "text-red-500"
                }
              >
                {nft.ballance.insurance
                  ? "up to " +
                    ((nft.total - nft.ballance.payedOff) * 0.95).toFixed(2)
                  : "no"}
              </span>

              {nft.ballance.insurance && (
                <span className="text-green-500">yes</span>
              )} */}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col" style={{ gap: 10 }}>
          <RoundedButton borderColor="rgb(34, 197, 94)">Pay off</RoundedButton>
          {/* {nft.ballance.insurance && <RoundedButton>Sell a loan</RoundedButton>} */}
        </div>
      </td>
    </tr>
  );
};
export default ActiveLoan;
