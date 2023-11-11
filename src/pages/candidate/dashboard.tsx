import DashboardContainer from "@src/Containers/DashboardContainer";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import CandidateLayout from "@components/Layouts/CandidateLayout";

const Dashboard: NextPageWithLayout = () => {
  return <DashboardContainer />;
};

Dashboard.getLayout = (page: ReactElement) => {
  return <CandidateLayout>{page}</CandidateLayout>;
};

export default Dashboard;
