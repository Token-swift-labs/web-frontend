import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
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
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import {
  RequestLoanFormI,
  RequestLoanModalProps,
} from "./RequestLoanModal.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestLoanSchema } from "./RequestLoanModal.schema";

const defaultValues: RequestLoanFormI = {
  endDate: null,
};

export const RequestLoanModal = (props: RequestLoanModalProps) => {
  const form = useForm({
    defaultValues,
    resolver: zodResolver(requestLoanSchema),
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const onSubmit = (data: RequestLoanFormI) => {
    console.log(data);
  };

  return (
    <Drawer
      open={props.open}
      onOpenChange={(open) => props.changeVisibility(open)}
    >
      <DrawerContent className="">
        <div className="absolute inset-x-0 h-px w-3/4 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-[#4854ff] to-transparent" />

        <div className="overflow-hidden relative flex justify-center">
          <div className="flex flex-col items-start mb-5">
            <DrawerHeader>
              <DrawerTitle className=" pt-2 ">Request loan</DrawerTitle>
            </DrawerHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 text-white"
              >
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>End of a loan</FormLabel>
                      <Popover
                        open={isCalendarOpen}
                        onOpenChange={setIsCalendarOpen}
                      >
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal bg-transparent",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
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
                            selected={field.value || undefined}
                            onSelect={(date) => {
                              field.onChange(date);
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
                  )}
                />
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
