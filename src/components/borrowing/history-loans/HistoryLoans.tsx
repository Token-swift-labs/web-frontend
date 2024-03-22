import HistoryLoan from "./HistoryLoan";

const HistoryLoans = () => {
  return (
    <table className=" w-full">
      <tbody>
        <tr>
          <th className="gray-text">NFT</th>
          <th className="gray-text">Duration</th>
          <th className="gray-text">Payed in</th>
          <th className="gray-text">Start date</th>
          <th className="gray-text">Total</th>
          <th className="gray-text">Interest rate</th>
          <th className="gray-text">Status</th>
          <th></th>
        </tr>

        {nfts.map((nft) => (
          <HistoryLoan key={nft.nft.name} nft={nft} />
        ))}
      </tbody>
    </table>
  );
};
export default HistoryLoans;

var nfts = [
  {
    nft: {
      name: "NFT 1",
      image: "/nft.jpg",
    },
    duration: "3 months",
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 0.98,
      insurance: false,
    },
    startAt: new Date("2023-10-02T14:48:00Z"),
    endAt: new Date("2023-10-10T14:48:00Z"),
  },
  {
    nft: {
      name: "NFT 2",
      image: "/nft.jpg",
    },
    duration: "3 months",
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 0.2,
      insurance: true,
    },
    startAt: new Date("2023-02-02T14:48:00Z"),
    endAt: new Date("2023-02-10T14:48:00Z"),
  },
  {
    nft: {
      name: "NFT 3",
      image: "/nft.jpg",
    },
    duration: "3 months",
    interest: "10%",

    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 2.01,
      insurance: true,
    },
    startAt: new Date("2023-12-02T14:48:00Z"),
    endAt: new Date("2023-12-10T14:48:00Z"),
  },
];
