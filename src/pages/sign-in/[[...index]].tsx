import { SignIn } from "@clerk/nextjs";
import React from "react";

interface ISignInPageProps {}

const SignInPage: React.FunctionComponent<ISignInPageProps> = (props) => {
  return <SignIn />;
};

export default SignInPage;
