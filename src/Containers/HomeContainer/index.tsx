import { useAuth, useSession } from "@clerk/nextjs";
import Step1 from "@components/MultiStepForm/Step1";
import UserNavbar from "@components/UserNavbar";
import { useSupabase } from "@src/Contexts/SupabaseContext";
import React, { useEffect, useState } from "react";

interface IHomeContainerProps {}

const HomeContainer: React.FunctionComponent<IHomeContainerProps> = (props) => {
  const { setupClient } = useSupabase();
  const [currentStep, setCurrentStep] = useState(1);
  const { userId } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      const supabaseClient = await setupClient();
      const { data } = await supabaseClient?.from("User").select("*");
      console.log(data);
    };
    getUser();
  }, []);

  const nextStep = async () => {
    const supabaseClient = await setupClient();
    const { data } = await supabaseClient
      ?.from("User")
      .insert({
        user_id: userId,
        bio: "Hello this is Vipin Swe at startup",
      })
      .select();
    console.log(data);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const getCurrentStepForm = () => {
    switch (currentStep) {
      case 1:
        return <Step1 nextStep={nextStep} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <UserNavbar />
      {getCurrentStepForm()}
    </div>
  );
};

export default HomeContainer;
