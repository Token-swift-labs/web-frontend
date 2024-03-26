export type RequestLoanModalProps = {
  open: boolean;
  changeVisibility: (show: boolean) => void;
};

export interface RequestLoanFormI {
  amount: number;
  endDate: Date | null;
}

export type AdditionalInfoProps = {
  amount: number;
  endDate: Date | null;
};
