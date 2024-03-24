export type RequestLoanModalProps = {
  open: boolean;
  changeVisibility: (show: boolean) => void;
};

export interface RequestLoanFormI {
  endDate: Date | null;
}
