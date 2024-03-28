import { z } from "zod";

export const requestLoanSchema = z.object({
  amount: z.number().min(0.01, { message: "Amount must be greater than 0.01" }),
  endDate: z.date().refine((value) => value !== undefined, {
    message: "You need to select a date",
    path: ["endDate"],
  }),
});
