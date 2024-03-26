import { interestRate } from "@/constants";

const calculateInterest = (amount: number, days: number) => {
  const interest = amount * interestRate * (days / 365);
  return interest.toFixed(6).replace(/\.?0+$/, "");
};

export { calculateInterest };
