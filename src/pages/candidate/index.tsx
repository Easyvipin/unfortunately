import { useAuth } from "@clerk/nextjs";
import AlignedMain from "@components/UI/AlignedMain";
import Loader from "@components/UI/Loader";
import UserNavbar from "@components/UserNavbar";
import SearchContainer from "@src/Containers/SearchContainer";
import SetupCandidate from "@src/Containers/SetupCandidate";
import { supabase } from "@src/lib/supabase";
import React, { useEffect, useState } from "react";

interface ICandidatePageProps {}

const CandidatePage: React.FunctionComponent<ICandidatePageProps> = (props) => {
  const { userId } = useAuth();
  const [isUserSetup, setIsUserIsSetup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div>
      <UserNavbar />
      <AlignedMain>
        {isLoading ? (
          <Loader
            size={35}
            loading={isLoading}
            color={"white"}
            fullScreen={true}
          />
        ) : (
          <>{isUserSetup === true ? <SearchContainer /> : <SetupCandidate />}</>
        )}
      </AlignedMain>
    </div>
  );
};

export default CandidatePage;
