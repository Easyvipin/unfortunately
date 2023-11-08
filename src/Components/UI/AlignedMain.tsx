import React, { ReactNode } from "react";

interface IAlignedMainProps {
  children: ReactNode;
}

const AlignedMain: React.FunctionComponent<IAlignedMainProps> = ({
  children,
}) => {
  return <main className="w-[100%] md:w-[80%] mx-auto">{children}</main>;
};

export default AlignedMain;
