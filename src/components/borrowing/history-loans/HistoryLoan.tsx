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
  };
};
const HistoryLoan = ({ nft }: Props) => {
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
      <td>{getTimeDiff(nft.endAt, nft.startAt)[0]}</td>
      <td>{nft.startAt.toLocaleDateString()}</td>
      <td>
        {nft.total.toFixed(2)} {nft.currency}
      </td>
      <td>{(nft.interestRate * 100).toFixed(2)}%</td>
      <td>
        {nft.total - nft.ballance.payedOff <= 0 ? (
          <span className="text-green-500">Paid off</span>
        ) : (
          <span className="text-red-500">Not paid off</span>
        )}
      </td>
    </tr>
  );
};
export default HistoryLoan;
