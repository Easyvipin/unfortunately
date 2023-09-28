import { SignUp } from "@clerk/nextjs";
import React from "react";

interface ISignUpPageProps {}

const SignUpPage: React.FunctionComponent<ISignUpPageProps> = (props) => {
  return <SignUp />;
};

export default SignUpPage;
