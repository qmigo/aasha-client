import React from "react";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import SihLogo from "../assets/Images/it-raj.png";

const Home = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  return (
    <div className="mt-28 mx-auto">
      <div className="header flex flex-col items-center justify-center">
        <h1 className="text-[color:var(--color-primary)] text-4xl font-semibold mb-2 text-center">
          Enkrypt
        </h1>
        <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        <p
          className={twMerge(
            "mt-4 text-lg",
            isDarkMode ? "text-gray-300" : "text-gray-400"
          )}
        >
          Graphical Password Authentication
        </p>
      </div>
      <div
        className={twMerge(
          "mt-2",
          isDarkMode ? "text-gray-300" : "text-gray-500"
        )}
      >
        <div className="w-full my-8 flex justify-center items-center">
          <img src={SihLogo} className="w-96 object-cover bg-black" alt="" />
        </div>
        <div>
          <h1
            className={twMerge(
              "text-2xl text-gray-700",
              isDarkMode ? "text-gray-100" : "text-gray-700"
            )}
          >
            Instructions
          </h1>
        </div>
        <div
          className={twMerge(
            "mt-2",
            isDarkMode ? "text-gray-300" : "text-gray-500"
          )}
        >
          <h2 className={isDarkMode ? "text-gray-200" : "text-gray-600"}>
            Sign Up
          </h2>
          <ul className="flex gap-1 flex-col mt-1">
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span> Click
              on ‘sign-up’ to create an account.
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span> Enter
              your details like username, professional email, personal email and
              phone no.
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span> From
              the drop-down select a category.
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span> Click
              ‘Continue’.
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span> Now
              select an image as your password image. Submit.
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span>
              Congratulations! You are now registered to the database. You will
              receive a confirmation mail.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className={isDarkMode ? "text-gray-200" : "text-gray-600"}>
            Log In
          </h2>
          <ul className="flex gap-1 flex-col mt-1">
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span> Click
              on ‘Login’. Enter your username. Click continue.
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span>A grid
              is shown. Swipe right (or press the right arrow key) if your
              ‘password image’ is present or else swipe left(or press the left
              arrow key ) is it isn’t present.
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span>
              Repeat the swipe process for 7 more grids. And submit.
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span>You
              will be logged in on swipping
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className={isDarkMode ? "text-gray-200" : "text-gray-600"}>
            Forgot password
          </h2>
          <ul className="flex gap-1 flex-col mt-1">
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span> Under
              the login section. Click on ‘forgotten password’.
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span>Enter
              your username in ‘Account Recovery’. Press continue.
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span>
              Format of the 6 digit OTP:“Professional Email’s OTP”+”Personal
              Email’s OTP”+”Mobile Number’s OTP”
            </li>
            <li className="flex gap-1 tracking-wider text-sm ">
              <span className="text-[color:var(--color-primary)]">➤</span>Submit
              and choose your new password image.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
