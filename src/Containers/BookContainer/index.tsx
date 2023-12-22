import { Button } from "@components/UI/button";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

interface IBookContainerProps {}

const BookContainer: React.FunctionComponent<IBookContainerProps> = (props) => {
  return (
    <div className="w-[100%] md:w-[80%] mx-auto">
      <div className="mt-[2rem]">
        <Button className="rounded-full text-lg w-10 p-0" variant="secondary">
          <FiArrowLeft />
        </Button>
      </div>
      <div className="flex gap-4 mt-[2rem]">
        <div className="border grow-[2] p-2 md:p-6 rounded-md">Book</div>
        <div className="border grow-[1] p-2 md:p-6 rounded-md">Cost</div>
      </div>
    </div>
  );
};

export default BookContainer;
