import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import SiteLogo from "../images/SiteLogo.svg";
import Image from "next/image";
import ThemeToggler from "./UI/ThemeToggler";

interface IUserNavbarProps {}

const UserNavbar: React.FunctionComponent<IUserNavbarProps> = (props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-transparent w-full border-b md:static border-gray-300 px-2">
      <div className="items-center md:w-[80%] mx-auto flex justify-between">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href={""}>
            <Image
              alt="site logo"
              width={"180"}
              height={30}
              src="/assets/SiteLogo.svg"
            />
          </Link>
        </div>
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>
        <div className="hidden md:flex items-center">
          <div className="md:flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0">
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <a href={item.path} onClick={toggleMobileMenu}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:inline-block ml-10">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:hidden items-center`}
      >
        <div className=" flex-col items-center w-full p-2">
          <div className="">
            <UserButton afterSignOutUrl="/" />
          </div>
          <ul className="justify-center items-center space-y-2 md:flex md:space-x-6 md:space-y-0 mt-4">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <a href={item.path} onClick={toggleMobileMenu}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
