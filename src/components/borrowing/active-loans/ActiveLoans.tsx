import ActiveLoan from "./ActiveLoan";

const ActiveLoans = () => {
  return (
    <table className=" w-full">
      <tbody>
        <tr>
          <th className="gray-text">NFT</th>
          <th className="gray-text">Duration</th>
          <th className="gray-text">Remaining time</th>
          <th className="gray-text">Total</th>
          <th className="gray-text">Interest rate</th>
          <th className="gray-text">Ballance</th>
          <th></th>
        </tr>

        {nfts.map((nft) => (
          <ActiveLoan key={nft.nft.name} nft={nft} />
        ))}
      </tbody>
    </table>
  );
};
export default ActiveLoans;

var nfts = [
  {
    nft: {
      name: "NFT 1",
      image: "/nft.jpg",
    },
    duration: "3 months",
    expirationTimeStamp: Date.now() + 100000,
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 0.98,
      insurance: false,
    },
  },
  {
    nft: {
      name: "NFT 2",
      image: "/nft.jpg",
    },
    duration: "3 months",
    expirationTimeStamp: Date.now() + 150000,
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 0.2,
      insurance: true,
    },
  },
  {
    nft: {
      name: "NFT 3",
      image: "/nft.jpg",
    },
    duration: "3 months",
    expirationTimeStamp: Date.now() + 200000,
    interest: "10%",
    total: 2.01,
    currency: "SOL",
    interestRate: 0.13,
    ballance: {
      payedOff: 1.6,
      insurance: true,
    },
  },
];
