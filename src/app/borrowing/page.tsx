"use client";
import { Navbar, Footer, RequestLoanModal } from "@/components";
import React, { useState } from "react";
import Image from "next/image";
import bgWaves1 from "../../../public/waves-bottom.svg";
import "./style.css";
import ActiveLoans from "@/components/borrowing/active-loans/ActiveLoans";
import HistoryLoans from "@/components/borrowing/history-loans/HistoryLoans";
import PendingLoans from "@/components/borrowing/pending-loans/PendingLoans";
import { Button } from "@/components/ui/button";

const Borrowing = () => {
  const [activePage, setActivePage] = useState<
    "active" | "pending" | "history"
  >("active");
  const [showRequestLoanModal, setShowRequestLoanModal] = useState(false);

  const handleRequestLoan = () => {
    setShowRequestLoanModal(true);
  };

  return (
    <div className="font-kanit text-white flex flex-col ">
      <Navbar />
      <div className="w-full" style={{ padding: "200px 32px 32px 32px" }}>
        <div className="flex flex-row items-center" style={{ gap: "24px" }}>
          <div
            className="flex flex-col items-start justify-center"
            style={{ gap: 10 }}
          >
            <h2
              className="text-6xl font-bold text-center"
              style={{ fontWeight: 400 }}
            >
              Borrow
            </h2>
            <a href="/how-it-works" className="gray-blue-text">
              How it works?
            </a>
          </div>
          <Button
            className="rounded-xl transition-all"
            onClick={handleRequestLoan}
            variant="primary"
          >
            Request a loan
          </Button>
          {/* <Button variant="primary" className="rounded-xl transition-all">
            Insurance
          </Button> */}
        </div>
        <div
          className="flex flex-col justify-start"
          style={{
            minHeight: "calc(100vh - 600px)",
            padding: "32px",
            gap: "24px",
          }}
        >
          <h3 className="text-4xl">
            <button
              className={activePage !== "active" ? "gray-blue-text" : ""}
              onClick={() => setActivePage("active")}
            >
              Active loans
            </button>
            /
            <button
              className={activePage !== "pending" ? "gray-blue-text" : ""}
              onClick={() => setActivePage("pending")}
            >
              Pending
            </button>
            /
            <button
              className={activePage !== "history" ? "gray-blue-text" : ""}
              onClick={() => setActivePage("history")}
            >
              History
            </button>
          </h3>
          <div className="flex flex-row items-center justify-between bg-[#151527] opacity-80 p-4 rounded-xl w-[100%]">
            {activePage === "active" && <ActiveLoans />}
            {activePage === "pending" && <PendingLoans />}
            {activePage === "history" && <HistoryLoans />}
          </div>
        </div>
      </div>

      <Footer />

      <Image
        src={bgWaves1}
        alt="waves bottom"
        className="absolute w-full"
        style={{
          filter: "brightness(0.4)",
          bottom: "-200px",
          position: "fixed",
          zIndex: -1,
        }}
      />
      <RequestLoanModal
        open={showRequestLoanModal}
        changeVisibility={setShowRequestLoanModal}
      />
    </div>
  );
};

export default Borrowing;
