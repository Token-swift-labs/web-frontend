import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestLoanSchema } from "./RequestLoanModal.schema";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import { RequestLoanFormI } from "./RequestLoanModal.types";
import { Input } from "@/components/ui/input";

const defaultValues: RequestLoanFormI = {
  amount: 0,
  endDate: null,
};

export const RequestLoanForm = () => {
  const form = useForm({
    defaultValues,
    resolver: zodResolver(requestLoanSchema),
  });
  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + 7); // 7 days in the future
  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 60); // 60 days in the future

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const endDateWatchedValue = form.watch("endDate");

  const onSubmit = (data: RequestLoanFormI) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-white"
      >
        <FormItem className="flex flex-col">
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            className="bg-transparent appearance-none"
            {...form.register("amount")}
            min={0}
          />
          <FormDescription className="text-[#949494]">
            Enter the amount you want to borrow
          </FormDescription>
        </FormItem>
        <FormItem className="flex flex-col">
          <FormLabel>End of a loan</FormLabel>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full p-3 font-normal bg-transparent gap-2 flex flex-row justify-start",
                    !endDateWatchedValue && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="h-4 w-4" />
                  {endDateWatchedValue ? (
                    format(endDateWatchedValue, "dd MMM yyyy")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDateWatchedValue || undefined}
                onSelect={(date) => {
                  form.setValue("endDate", date || null);
                  setIsCalendarOpen(false);
                }}
                disabled={(date) => {
                  return date < futureDate || date > maxDate;
                }}
                fromDate={futureDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription className="text-[#949494]">
            Select time when you want to return the loan <br />
            (between 7 to 60 days)
          </FormDescription>
        </FormItem>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </Form>
  );
};
