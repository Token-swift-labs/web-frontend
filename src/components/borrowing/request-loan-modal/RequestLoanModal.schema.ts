import { z } from "zod";

export const requestLoanSchema = z.object({
  endDate: z.date().nullable(),
});
