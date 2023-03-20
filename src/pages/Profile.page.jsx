import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logos from "../assets/Images/it-raj.png";
import group1 from "../assets/Images/Group_1.png";
import group2 from "../assets/Images/Group_2.png";
import { twMerge } from "tailwind-merge";

const ProfilePage = () => {
  const username = useSelector((state) => state.auth.USERNAME);
  const phoneNumber = useSelector((state) => state.auth.PHONE_NUMBER);
  const professionalEmail = useSelector(
    (state) => state.auth.PROFESSIONAL_EMAIL
  );
  const personalEmail = useSelector((state) => state.auth.PERSONAL_EMAIL);
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  // eslint-disable-next-line
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <div className="mt-28 sm:mt-32 mx-auto md:mt-36 bg-[color:var(--main-color)] shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[440px] md:mx-auto shadow-[color:var(--shadow-color)] rounded-xl p-8">
      <div className="header flex flex-col items-center justify-center">
        <h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2 text-center">
          User Profile
        </h1>
        <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <div className="flex items-center justify-center shadow-md m-4 py-4 bg-gray-200 mt-4 rounded-md">
        <img src={logos} className="w-72 bg-black" alt="" />
      </div>
      <div
        className={twMerge(
          "flex flex-col gap-4 text-sm text-center",
          isDarkMode ? "text-gray-300" : "text-gray-400"
        )}
      >
        <div className=" tracking-wider">
          <h4 className="">Name</h4>
          <span className="text-[color:var(--color-primary)] block text-md">
            {username}
          </span>
        </div>
        <div className=" tracking-wider">
          <h4 className="">Professional Email</h4>
          <span className="text-[color:var(--color-primary)] block text-md">
            {professionalEmail}
          </span>
        </div>
        <div className=" tracking-wider">
          <h4 className="">Personal Email</h4>
          <span className="text-[color:var(--color-primary)] block text-md">
            {personalEmail}
          </span>
        </div>
        <div className=" tracking-wider">
          <h4 className="">Phone Number</h4>
          <span className="text-[color:var(--color-primary)] block text-md ">
            {phoneNumber}
          </span>
        </div>
      </div>
      {/* <div className="flex items-center justify-around mt-6 bg-gray-200 py-4 shadow-md rounded-md">
        <img src={group1} className="h-12" alt="" />
        <img src={group2} className="h-12" alt="" />
      </div> */}
    </div>
  );
};

export default ProfilePage;
