import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

interface IInterviewerInfoProps {
  isOpen: boolean;
  closeDialog: () => void;
}

const DialogVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: "0%",
  },
};

const InterviewerInfo: React.FunctionComponent<IInterviewerInfoProps> = ({
  isOpen,
  closeDialog,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 backdrop-filter backdrop-blur-md">
          <motion.div
            className="absolute w-[50%] h-[100vh] right-0 bg-white p-4 border"
            variants={DialogVariants}
            animate={isOpen ? "visible" : "hidden"}
          >
            <FiX
              onClick={closeDialog}
              className="absolute top-5 right-5 text-4xl"
            />
            <div className="font-inter h-full overflow-auto">
              <h1 className="text-4xl font-semibold">John Doe</h1>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default InterviewerInfo;
