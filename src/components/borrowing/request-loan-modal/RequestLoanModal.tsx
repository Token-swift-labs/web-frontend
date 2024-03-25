"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { RequestLoanModalProps } from "./RequestLoanModal.types";
import { RequestLoanForm } from "./RequestLoanForm";

export const RequestLoanModal = (props: RequestLoanModalProps) => {
  return (
    <Drawer
      open={props.open}
      onOpenChange={(open) => props.changeVisibility(open)}
    >
      <DrawerContent className="">
        <div className="absolute inset-x-0 h-px w-3/4 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-[#4854ff] to-transparent" />

        <div className="overflow-hidden relative flex justify-center">
          <div className="flex flex-col items-start mb-5">
            <DrawerHeader className="p-0">
              <DrawerTitle style={{ padding: "20px 0" }}>
                Request loan
              </DrawerTitle>
            </DrawerHeader>
            {/** Form content in the modal in other component */}
            <RequestLoanForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
