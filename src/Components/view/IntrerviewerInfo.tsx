import React, { useState } from "react";
import { FiX, FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";
import { Button } from "@components/UI/button";
import Image from "next/image";
import ProfileImg from "@components/UI/ProfileImg";
import { Avatar, AvatarImage } from "@components/UI/avatar";
import { Badge } from "@components/UI/badge";

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
            className="absolute w-[100%] md:w-[70%] bg-popover text-primary-foreground lg:w-[60%] h-[100vh] right-0  p-4 border"
            variants={DialogVariants}
            animate={isOpen ? "visible" : "hidden"}
          >
            <FiX
              onClick={closeDialog}
              className="absolute top-5 right-10 text-4xl text-muted-foreground hover:text-primary"
            />
            <div className="font-inter h-full overflow-auto">
              <div className="flex-col  md:flex md:flex-row  gap-5 w-[90%] flex-wrap">
                <div className="flex-2 w-[250px] h-[250px] md:shrink ml-auto mr-auto">
                  <ProfileImg />
                </div>
                <div className="flex-1 flex flex-col justify-between mt-10 md:mt-0">
                  <div>
                    <h2 className="text-2xl font-semibold">John Doe</h2>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Minima aspernatur porro consequatur incidunt, itaque
                      inventore?
                    </p>
                    <h3 className=" text-lg font-semibold text-green-500 mt-1 rounded-sm">
                      Available After 12th
                    </h3>
                  </div>
                  {/* Todo :  add hover card for services */}
                  <Button className="w-full  text-xl py-7 ">
                    Book your Slot
                  </Button>
                </div>
              </div>
              <div className="mt-8 w-[90%]">
                <h2 className="text-lg font-semibold text-center">
                  Mock Interview Feedbacks
                </h2>
                <div className="flex flex-col gap-2  mt-7">
                  <div className="border px-4 py-4 rounded">
                    <p className="text-md font-inter text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cum modi quasi placeat illo ex doloribus adipisci ducimus
                      hic id alias ipsam itaque perferendis consequatur pariatur
                      recusandae nobis nihil ea earum distinctio accusantium
                      mollitia, omnis odio odit unde? Cupiditate, consectetur
                      ex.
                    </p>
                    <div className="flex justify-between items-center mt-7 flex-wrap-reverse gap-2">
                      <div className="flex gap-2">
                        <Avatar>
                          <AvatarImage
                            className=""
                            width={"40rem"}
                            src="https://github.com/shadcn.png"
                          />
                        </Avatar>
                        <div className="flex flex-col">
                          <div className="flex justify-center items-center gap-1">
                            <div>Maxwell sane father luis</div>
                            <div className="w-[15px] h-[15px] rounded-full bg-green-400 text-[#fafafa] flex justify-center items-center text-xs">
                              <FiCheck />
                            </div>
                          </div>

                          <span className=" text-xs text-muted-foreground">
                            12th Aug , 2023
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Badge>Free Resource</Badge>
                        <Badge>Good</Badge>
                        <Badge>1+ hr</Badge>
                        <Badge>50% off</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default InterviewerInfo;
