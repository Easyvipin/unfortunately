import Step1 from "@components/MultiStepForm/Step1";
import Step2 from "@components/MultiStepForm/Step2";
import Step3 from "@components/MultiStepForm/Step3";
import { Button } from "@components/UI/button";
import { Form } from "@components/UI/form";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchema } from "@utils/validations";
import { supabase } from "@src/lib/supabase";
import { useAuth } from "@clerk/nextjs";
import { error } from "console";

interface ISetupCandidateProps {}

const SetupCandidate: React.FunctionComponent<ISetupCandidateProps> = (
  props
) => {
  const [step, setStep] = useState(1);
  const [proceedDisable, setProceedDisable] = useState(false);
  const { userId, isLoaded } = useAuth();

  const totalStep = 3;

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleDisableNextStep = () => {
    setProceedDisable(true);
  };

  const handleEnableNextStep = () => {
    setProceedDisable(false);
  };

  const renderFormBasedOnStep = (step: number, form) => {
    switch (step) {
      case 1:
        return <Step1 form={form} />;
      case 2:
        return <Step2 form={form} />;
      case 3:
        return <Step3 form={form} />;
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues: {
      skills: [],
      industry: ["product_based"],
      availability: ["week_days"],
    },
  });

  const [fullname, bio, skills, industry, profession] = form.watch([
    "fullname",
    "bio",
    "skills",
    "industry",
    "profession",
  ]);

  console.log(profession);

  useEffect(() => {
    const currentStep = step;

    const checkForEmptyFields = () => {
      if (currentStep === 1) {
        if (!fullname) {
          setProceedDisable(true);
          return;
        }
      }
      if (currentStep === 2) {
        if (!profession || skills.length < 1) {
          setProceedDisable(true);
          return;
        }
      }
      setProceedDisable(false);
    };

    checkForEmptyFields();
  }, [step, fullname, bio, profession, skills]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (userId) {
        const { error } = await supabase.from("users").insert({
          userid: userId,
          fullname: values.fullname,
          bio: values.bio,
          profession: values.profession,
          skills: values.skills,
          industry: "PRODUCT_BASED",
          availability: "WEEKEND",
        });
        if(!error){
          
        }
      }
    } catch (err) {
      
    }
  }

  const disableNextBasedOnStep = (step: number) => {
    console.log(step);
    if (
      step === 1 &&
      (form.formState.errors.fullname || form.formState.errors.bio)
    ) {
      return true;
    }

    if (
      step === 2 &&
      (form.formState.errors.profession || form.formState.errors.skills)
    ) {
      return true;
    }

    if (
      step === 3 &&
      (form.formState.errors.availability || form.formState.errors.industry)
    ) {
      return true;
    }

    return false;
  };

  return (
    <div className="h-[80vh] w-[95vw]  md:w-[50vw] mt-10 mx-auto flex flex-col justify-center items-center gap-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Tell about Yourself!
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 flex flex-col justify-center w-[100%]"
        >
          {renderFormBasedOnStep(step, form)}

          <div className="flex-2 flex justify-between w-[100%] border-t py-12">
            {step < totalStep && (
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={nextStep}
                disabled={proceedDisable || disableNextBasedOnStep(step)}
              >
                Next
              </Button>
            )}
            {step === totalStep && (
              <Button
                variant="outline"
                size="lg"
                type="submit"
                disabled={proceedDisable || disableNextBasedOnStep(step)}
              >
                Submit
              </Button>
            )}
            {step > 1 && step <= totalStep && (
              <Button
                variant="outline"
                type="button"
                size="lg"
                onClick={prevStep}
              >
                Prev
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SetupCandidate;
