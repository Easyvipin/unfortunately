import InterviewerCard from "@components/UI/InterviewerCard";
import React from "react";

interface ISearchContainerProps {}

const SearchContainer: React.FunctionComponent<ISearchContainerProps> = (
  props
) => {
  return (
    <div className="mt-10">
      <div className="">
        <h1 className="text-xl md:text-4xl font-extrabold text-center tracking-wide font-inter">
          Your Customized Interviewer Lineup
        </h1>
        <p className="text-sm w-3/4 md:w-1/2 text-md mx-auto text-center mt-2 text-gray-500 tracking-wide font-lighter font-inter">
          Lineup of interviewers who have been handpicked to meet your criteria.
        </p>
      </div>
      <div className="mt-10 min-h-[30rem] flex gap-8 flex-wrap p-4 md:p-0">
        <InterviewerCard />
        <InterviewerCard />
        <InterviewerCard />
        <InterviewerCard />
        <InterviewerCard />
        <InterviewerCard />
        <InterviewerCard />
      </div>
    </div>
  );
};

export default SearchContainer;
