import InterviewerCard from "@components/UI/InterviewerCard";
import InterviewerInfo from "@components/view/IntrerviewerInfo";
import React, { useState } from "react";

interface ISearchContainerProps {}

const SearchContainer: React.FunctionComponent<ISearchContainerProps> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideScrollbar, setHideScrollbar] = useState(false);

  const handleOnInfo = () => {
    setIsOpen(!isOpen);
    toggleScrollVisibility();
  };

  const toggleScrollVisibility = () => {
    setHideScrollbar((prev) => !prev);
    document.body.classList.toggle("scroll-hidden");
  };

  return (
    <div className={`mt-10 relative`}>
      <div className="">
        <h1 className="text-xl md:text-5xl font-extrabold text-center tracking-tighter font-inter">
          Your Customized Interviewer Lineup
        </h1>
        <p className="text-sm w-3/4  md:text-lg mx-auto text-muted-foreground text-center tracking-tighter mt-2 font-lighter font-inter">
          Lineup of interviewers who have been handpicked to meet your criteria.
        </p>
      </div>
      <div className="mt-10 min-h-[30rem] flex justify-center  gap-8 flex-wrap p-4 md:p-0">
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
          toggleScrollVisibility();
        }}
      />
    </div>
  );
};

export default SearchContainer;
