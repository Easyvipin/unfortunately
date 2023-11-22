import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@components/UI/avatar";
import {
  FiCalendar,
  FiCheck,
  FiChevronRight,
  FiChevronsRight,
  FiClock,
  FiCornerUpLeft,
  FiStar,
} from "react-icons/fi";
import { Button } from "./button";

interface IInterviewerCardProps {
  onInfo: () => void;
}

const InterviewerCard: React.FunctionComponent<IInterviewerCardProps> = ({
  onInfo,
}) => {
  return (
    <div className="border w-[100%] md:w-[22rem] lg:[25rem] h-[24rem] p-2 md:p-6 bg-card text-card-foreground relative overflow-hidden rounded-lg ">
      <div className="flex gap-4 items-center justify-center pb-4 border-b-[0.2px] border-primary">
        <Avatar>
          <AvatarImage
            className=""
            width={"40rem"}
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="">
          <h5 className="text-lg font-inter  font-semibold tracking-tighter">
            John Doe
          </h5>
          <p className="text-sm  font-inter text-muted-foreground tracking-wide">
            Frontend Developer
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-center font-semibold tracking-tighter ">
          React | Nextjs | Aws | Nodejs
        </p>
        <p className="mt-2 text-center text-sm font-normal tracking-normal h-[8rem] py-2 text-muted-foreground">
          With years of frontend development experience, I excel at assessing
          coding skills and fostering a collaborative interview atmosphere.
        </p>
      </div>
      <div className="w-[4rem] h-[4rem] border rounded-full text-center flex justify-center items-center absolute -top-[5%] -left-[5%] bg-gray-800">
        <span className="ml-2 mt-3">3+</span>
      </div>
      <div className="flex gap-2 justify-between mt-2 text-sm">
        <div className="flex gap-2">
          <div className="flex justify-center items-center gap-2">
            <FiStar className="text-yellow-300" /> 3.5
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <FiClock /> 1 hour
          </div>
        </div>
        <div className="flex justify-center text-gray-900 items-center gap-2 bg-green-500 px-4 py-1 rounded-md">
          300 <FiCheck />{" "}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex">
          <Button className="p-4 w-[85%] text-md font-bold flex justify-center items-center gap-2 rounded-none ">
            Book Slot <FiChevronsRight className="inline text-2xl" />
          </Button>
          <button
            className="flex justify-center items-center text-xl w-[15%] bg-accent text-accent-foreground"
            onClick={onInfo}
          >
            <FiCornerUpLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewerCard;
