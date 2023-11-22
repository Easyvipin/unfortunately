import { useUser } from "@clerk/nextjs";
import Loader from "@components/UI/Loader";
import ThemeToggler from "@components/UI/ThemeToggler";
import { setUserType } from "@src/store/appSlice";
import { USER_TYPE } from "@src/utils/constants";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IWelcomeContainerProps {}

const WelcomeContainer: React.FunctionComponent<IWelcomeContainerProps> = (
  props
) => {
  const [state, setState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { isSignedIn, isLoaded } = useUser();

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (isSignedIn === true && isLoaded === true) {
      router.push("/candidate");
      setIsLoading(false);
    } else if (isLoaded === true && isSignedIn === false) {
      setIsLoading(false);
    }
  }, [isSignedIn, router, isLoaded]);

  const handleGetStarted = () => {
    dispatch(
      setUserType({
        userType: USER_TYPE.candidate,
      })
    );

    router.push("/sign-in");
  };

  const navigation = [
    { title: "About us", path: "" },
    { title: "Privacy", path: "" },
  ];

  if (isLoading) {
    return (
      <Loader
        size={35}
        color="hsl(20.5 90.2% 48.2%)"
        loading={isLoading}
        fullScreen={true}
        speed={2}
      />
    );
  }

  if (isLoaded && isSignedIn === false) {
    return (
      <>
        <header>
          <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
            <div className="flex">
              <a href="">
                <img
                  src="https://www.floatui.com/logo.svg"
                  width={120}
                  height={50}
                  alt="Float UI logo"
                />
              </a>
            </div>
            <ul
              className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
                state ? "" : "hidden"
              }`}
            >
              <li className="order-2 pb-5 md:pb-0 flex  gap-12">
                <a
                  href=""
                  className="py-3 px-6 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block md:inline"
                >
                  Sign In
                </a>
              </li>
              <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item, idx) => (
                  <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                    <a href={item.path}>{item.title}</a>
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        </header>
        <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
          <div className="text-center space-y-4">
            <h1 className="font-bold text-4xl md:text-5xl">
              Mock it!
              <span className=""> Crack it.</span>
            </h1>
            <p className="text-gray-500 hover:text-gray-300 max-w-xl mx-auto leading-relaxed">
              An online platform connecting job seekers with seasoned
              interviewers, offering realistic and tailored mock interviews to
              sharpen candidates interview skills and boost their chances of
              success.
            </p>
          </div>
          <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <button
              className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
              onClick={handleGetStarted}
            >
              Get started
            </button>
            <a
              href=""
              className="px-10 py-3.5 w-full  text-center border rounded-md duration-300 hover:shadow block sm:w-auto"
            >
              Try it out
            </a>
          </div>
        </section>
      </>
    );
  }
};

export default WelcomeContainer;
