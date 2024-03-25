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

const defaultValues: RequestLoanFormI = {
  endDate: null,
};

export const RequestLoanForm = () => {
  const form = useForm({
    defaultValues,
    resolver: zodResolver(requestLoanSchema),
  });

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
          <FormLabel>End of a loan</FormLabel>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal bg-transparent",
                    !endDateWatchedValue && "text-muted-foreground"
                  )}
                >
                  {endDateWatchedValue ? (
                    format(endDateWatchedValue, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
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
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription className="text-[#949494]">
            Select time when you want to return the loan
          </FormDescription>
        </FormItem>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </Form>
  );
};
