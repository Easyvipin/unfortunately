import * as React from "react";

interface IStep1Props {
  nextStep: () => void;
}

const Step1: React.FunctionComponent<IStep1Props> = ({ nextStep }) => {
  const handleNext = () => {
    /*  */
    nextStep();
  };

  return (
    <div>
      {/* Form inputs for Step 1 */}
      <input type="text" placeholder="Step 1 Input" />
      {/* Next button */}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
