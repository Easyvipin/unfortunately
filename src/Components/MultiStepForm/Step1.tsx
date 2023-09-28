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
    <div className=" flex ">
      {/* Form inputs for Step 1 */}
      <label>Bio</label>
      <textarea
        placeholder="Step 1 Input"
        className="border"
        rows={4}
        cols={50}
      />
      {/* Next button */}
      <br />
      <button onClick={handleNext} className="border">
        Next
      </button>
    </div>
  );
};

export default Step1;
