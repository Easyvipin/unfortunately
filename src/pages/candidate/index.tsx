import { useAuth } from "@clerk/nextjs";
import CandidateLayout from "@components/Layouts/CandidateLayout";
import AlignedMain from "@components/UI/AlignedMain";
import Loader from "@components/UI/Loader";
import SetupCandidate from "@src/Containers/SetupCandidate";
import { supabase } from "@src/lib/supabase";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";

const CandidatePage: NextPageWithLayout = () => {
  const { userId } = useAuth();
  const [isUserSetup, setIsUserIsSetup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getFullname = async () => {
      const { data } = await supabase
        .from("users")
        .select("fullname")
        .eq("userid", userId);

      if (data && data.length > 0) {
        setIsUserIsSetup(true);
      }
      setIsLoading(false);
    };

    if (userId) {
      getFullname();
    }
  }, [userId]);

  useEffect(() => {
    if (isUserSetup === true) {
      router.push("/candidate/search");
    }
  }, [isUserSetup, router]);

  return (
    <>
      {isLoading ? (
        <Loader
          size={35}
          loading={isLoading}
          color={"white"}
          fullScreen={true}
          speed={2}
        />
      ) : (
        <SetupCandidate />
      )}
    </>
  );
};

CandidatePage.getLayout = (page: ReactElement) => {
  return <CandidateLayout>{page}</CandidateLayout>;
};

export default CandidatePage;
