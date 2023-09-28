import ThemeToggler from "@components/UI/ThemeToggler";
import { setUserType } from "@src/store/appSlice";
import { USER_TYPE } from "@src/utils/constants";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IWelcomeContainerProps {}

const WelcomeContainer: React.FunctionComponent<IWelcomeContainerProps> = (
  props
) => {
  const [state, setState] = useState(false);
  const { userType } = useSelector((state) => state.app.userType);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleGetStarted = () => {
    dispatch(
      setUserType({
        userType: USER_TYPE.candidate,
      })
    );
    router.push("/sign-in");
  };

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "About us", path: "" },
    { title: "Privacy", path: "" },
  ];

  return (
    <>
      <header>
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
          <div className="flex justify-between">
            <a href="">
              <img
                src="https://www.floatui.com/logo.svg"
                width={120}
                height={50}
                alt="Float UI logo"
              />
            </a>
            <button
              className="text-gray-500 outline-none md:hidden"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
              state ? "" : "hidden"
            }`}
          >
            <li className="order-2 pb-5 md:pb-0 flex  gap-12">
              <ThemeToggler />
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
          <h1 className="text-gray-800 dark:text-gray-300 font-bold text-4xl md:text-5xl">
            Mock it!
            <span className="text-indigo-600"> Crack it.</span>
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
            className="px-10 py-3.5 w-full text-gray-500 dark:text-gray-300 text-center border rounded-md duration-300 dark:border-indigo-600 hover:text-indigo-600 hover:shadow block sm:w-auto"
          >
            Try it out
          </a>
        </div>
      </section>
    </>
  );
};

export default WelcomeContainer;
