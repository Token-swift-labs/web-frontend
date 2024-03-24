import PendingLoan from "./PendingLoan";

const PendingLoans = () => {
  return (
    <table className=" w-full">
      <tbody>
        <tr>
          <th className="gray-text">NFT</th>
          <th className="gray-text">Duration</th>
          <th className="gray-text">Requested amount</th>
          <th className="gray-text">Requested interest</th>
          <th className="gray-text">Buy a loan</th>
          <th className="gray-text"></th>
          <th className="gray-text"></th>
          <th></th>
        </tr>

        {nfts.map((nft) => (
          <PendingLoan key={nft.nft.name} nft={nft} />
        ))}
      </tbody>
    </table>
  );
};
export default PendingLoans;

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
    buyLoan: true,
    notifications: 2,
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
    buyLoan: false,
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
    buyLoan: true,
  },
];
