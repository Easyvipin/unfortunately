import InterviewerCard from "@components/UI/InterviewerCard";
import InterviewerInfo from "@components/view/IntrerviewerInfo";
import React, { useState } from "react";

interface ISearchContainerProps {}

const SearchContainer: React.FunctionComponent<ISearchContainerProps> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mt-10 relative`}>
      <div className="">
        <h1 className="text-xl md:text-4xl font-extrabold text-primary text-center tracking-wide font-inter">
          Your Customized Interviewer Lineup
        </h1>
        <p className="text-sm w-3/4 md:w-1/2 text-md mx-auto text-center mt-2 text-gray-500 tracking-wide font-lighter font-inter">
          Lineup of interviewers who have been handpicked to meet your criteria.
        </p>
      </div>
      <div className="mt-10 min-h-[30rem] flex gap-8 flex-wrap p-4 md:p-0">
        <InterviewerCard onInfo={handleOnInfo} />
        <InterviewerCard onInfo={handleOnInfo} />
        <InterviewerCard onInfo={handleOnInfo} />
        <InterviewerCard onInfo={handleOnInfo} />
        <InterviewerCard onInfo={handleOnInfo} />
        <InterviewerCard onInfo={handleOnInfo} />
        <InterviewerCard onInfo={handleOnInfo} />
      </div>
      <InterviewerInfo
        isOpen={isOpen}
        closeDialog={() => {
          setIsOpen(!isOpen);
        }}
      />
    </div>
  );
};

export default SearchContainer;
