import { Button } from "@components/UI/button";
import Link from "next/link";
import React from "react";

interface ITotalCostProps {}

const TotalCost: React.FunctionComponent<ITotalCostProps> = (props) => {
  return (
    <div>
      <div className="border-b-2 py-2 tracking-tight">
        <h2 className="text-2xl tracking-tight">Payment Summary</h2>
        <h5 className="text-sm tracking-tight text-muted-foreground mt-1">
          Total Amount for Mock Interview Booking
        </h5>
      </div>
      <div className="flex mt-3 border-r border-l border-t rounded flex-col">
        <div className="flex border-b justify-between px-4 py-4">
          <div className="text-sm tracking-tighter">Interview call</div>
          <div className="text-md font-bold">$ 400</div>
        </div>
        <div className="flex border-b justify-between px-4 py-4">
          <div className="text-sm tracking-tighter">Medium Level</div>
          <div className="text-md font-bold">$ 20</div>
        </div>
        <div className="flex border-b justify-between px-4 py-4">
          <div className="text-sm tracking-tighter">Feedback Preferences</div>
          <div className="text-md font-bold">$ 80</div>
        </div>
        <div className="flex border-b justify-between px-4 py-4 bg-accent">
          <div className="text-xl font-semibold tracking-tighter">
            Total Cost
          </div>
          <div className="text-xl font-bold">$ 10</div>
        </div>
      </div>
      <div className="mt-6">
        <Link
          href="/refund"
          className="text-center block text-sm tracking-tighter text-muted-foreground underline mb-4"
        >
          Read our Refund Policy
        </Link>
        <Button
          variant="default"
          size="lg"
          className="w-full text-xl py-8 tracking-tighter"
        >
          Proceed To Payment
        </Button>
      </div>
    </div>
  );
};

export default TotalCost;
