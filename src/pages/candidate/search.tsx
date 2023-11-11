import CandidateLayout from "@components/Layouts/CandidateLayout";
import SearchContainer from "@src/Containers/SearchContainer";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const SearchPage: NextPageWithLayout = () => {
  return (
    <div>
      <SearchContainer />
    </div>
  );
};

SearchPage.getLayout = (page: ReactElement) => {
  return <CandidateLayout>{page}</CandidateLayout>;
};

export default SearchPage;
