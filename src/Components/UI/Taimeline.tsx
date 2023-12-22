import React from "react";
import { animate, motion } from "framer-motion";

interface ITimelineProps {}

const connectVariant = {};

const variants = {
  hidden: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  hidden: {
    opacity: 0,
    scale: -2,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    height: "0rem",
  },
  animate: {
    opacity: 1,
    height: "10rem",
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const Timeline: React.FunctionComponent<ITimelineProps> = (props) => {
  return (
    <div className="p-8">
      <motion.div
        className="w-[4rem] flex flex-col justify-center items-center"
        variants={variants}
        animate={"animate"}
        initial={"hidden"}
      >
        <motion.div
          className="relative h-[4rem] w-[4rem] border border-blue-600 rounded-full flex justify-center items-center"
          variants={circleVariants}
        >
          A<div className="absolute -top-10">asdasdsad</div>
        </motion.div>
        <motion.div
          className="h-[10rem] w-[0.4rem] bg-blue-600"
          variants={lineVariants}
        ></motion.div>
        <motion.div
          className="h-[4rem] w-[4rem] border border-blue-600 rounded-full flex justify-center items-center "
          variants={circleVariants}
        >
          B
        </motion.div>
        <motion.div
          className="h-[10rem] w-[0.4rem] bg-blue-600"
          variants={lineVariants}
        ></motion.div>
        <motion.div
          className="h-[4rem] w-[4rem] border border-blue-600 rounded-full flex justify-center items-center "
          variants={circleVariants}
        >
          C
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Timeline;
