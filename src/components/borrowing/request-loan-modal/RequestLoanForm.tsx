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
  FormMessage,
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
import {
  RequestLoanFormI,
  RequestLoanFormProps,
} from "./RequestLoanModal.types";
import { Input } from "@/components/ui/input";
import { DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { maxDate, minDate } from "@/constants";
import { AdditionalInfo } from "./AdditionalInfo";
import { useToast } from "@/components/ui/use-toast";

const defaultValues: RequestLoanFormI = {
  amount: 0,
  endDate: minDate,
};

export const RequestLoanForm = (props: RequestLoanFormProps) => {
  const { toast, dismiss } = useToast();
  const form = useForm({
    defaultValues,
    resolver: zodResolver(requestLoanSchema),
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const endDateWatchedValue = form.watch("endDate");
  const amountWatchedValue = form.watch("amount");

  const onSubmit = (data: RequestLoanFormI) => {
    console.log(data);
    const { id } = toast({
      title: "Loan request submitted",
      description: `Your loan has appeared in pending requests`,
    });
    props.closeDrawer();
    form.reset();
    setTimeout(() => {
      dismiss(id);
    }, 5000);
  };

  return (
    <div
      className="flex flex-row items-center justify-center mt-5 md:gap-10 flex-wrap-reverse md:flex-nowrap"
      style={{ padding: "0 20px" }}
    >
      <div className="flex flex-col items-start mb-5 min-w-[300px]">
        <DrawerHeader className="p-0">
          <DrawerTitle style={{ padding: "20px 0" }}>Request loan</DrawerTitle>
        </DrawerHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 text-white"
          >
            <FormItem className="flex flex-col">
              <FormLabel>Amount</FormLabel>
              <Input
                type="number"
                className="bg-transparent remove-arrow"
                min={0}
                autoComplete="off"
                {...form.register("amount", { valueAsNumber: true })}
                onInput={(e) =>
                  form.setValue("amount", Number(e.currentTarget.value))
                }
              />
              {form.formState.errors.amount && (
                <FormMessage>
                  {form.formState.errors.amount?.message}
                </FormMessage>
              )}
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
                    required
                    mode="single"
                    selected={endDateWatchedValue || undefined}
                    onSelect={(date) => {
                      form.setValue("endDate", date || null);
                      setIsCalendarOpen(false);
                    }}
                    disabled={(date) => {
                      return date < minDate || date > maxDate;
                    }}
                    fromDate={minDate}
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
              Request loan
            </Button>
          </form>
        </Form>
      </div>
      <AdditionalInfo
        amount={amountWatchedValue}
        endDate={endDateWatchedValue}
      />
    </div>
  );
};
