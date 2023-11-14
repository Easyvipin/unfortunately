import AlignedMain from "@components/UI/AlignedMain";
import UserNavbar from "@components/UserNavbar";
import * as React from "react";

interface ICandidateLayoutProps {
  children: React.ReactNode;
}

const CandidateLayout: React.FunctionComponent<ICandidateLayoutProps> = ({
  children,
}) => {
  return (
    <div className="bg-background">
      <UserNavbar />
      <AlignedMain>{children}</AlignedMain>
    </div>
  );
};

export default CandidateLayout;
