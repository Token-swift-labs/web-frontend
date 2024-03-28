"use client";
import { PercentBar, RoundedButton } from "@/components/ui";
import getTimeDiff from "@/utils/getTimeDiff";
import Image from "next/image";
type Props = {
  nft: {
    nft: {
      name: string;
      image: string;
    };
    duration: string;
    total: number;
    currency: string;
    interestRate: number;
    ballance: {
      payedOff: number;
    };
    startAt: Date;
    endAt: Date;
    buyLoan: boolean;
    notifications?: number;
  };
};
const PendingLoan = ({ nft }: Props) => {
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
      <td>
        {nft.total.toFixed(2)} {nft.currency}
      </td>
      <td>{(nft.interestRate * 100).toFixed(2)}%</td>
      <td>
        {nft.buyLoan ? (
          <span className="text-green-500">yes</span>
        ) : (
          <span className="text-red-500">no</span>
        )}
      </td>
      <td>
        <div className="flex justify-around">
          <RoundedButton
            borderColor="rgb(34, 197, 94)"
            notifications={nft.notifications}
          >
            Lending offers
          </RoundedButton>
          <RoundedButton>Edit terms</RoundedButton>
        </div>
      </td>
    </tr>
  );
};
export default PendingLoan;
