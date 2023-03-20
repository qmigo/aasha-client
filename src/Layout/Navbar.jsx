import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../assets/logo/logo.png";
import Button from "../components/Button/Button.component";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  removeUserDataFromStorage,
} from "../store/reducers/auth.Reducer";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

import "./navbar.css";

const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const dropMenuHandler = () => {
    setDropMenu((dropMenu) => !dropMenu);
  };

  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  const onLogOutHandler = () => {
    dispatch(logout());
    dispatch(removeUserDataFromStorage());
    toast.success("Logged out successfully!");
  };

  return (
    <React.Fragment>
      <nav
        className={twMerge(
          " p-4 md:p-3 bg-[color:var(--main-color)]  shadow-lg border-b-[0.3rem] border-[color:var(--color-primary)] fixed top-0 left-0 w-full z-50",
          isDarkMode
            ? "shadow-slate-800"
            : "shadow-[color:var(--shadow-color)] "
        )}
      >
        <div className="w-11/12 md:w-[85%]  lg:w-4/5 mx-auto max-w-[1440px] flex justify-between items-center">
          <div className="logo">
            <h1 className="font-bold text-2xl">
              <Link to="/">
                <img src={logo} className="h-12 scale-110" alt="" />
              </Link>
              {/* <span className="text-black">The</span>{" "}
              <span className="text-[color:var(--color-primary)]">Enkrypt</span> */}
            </h1>
          </div>

          {/* Vissble When Screen Is Greater than 768 pixels */}
          <div className="hidden md:flex items-center gap-6 lg:gap-12">
            <div className="text-[color:var(--tertiary-text-color)] ">
              <ul className="flex gap-6 lg:gap-8 font-semibold text-md">
                <NavLink
                  to="/"
                  className="hover:text-[color:var(--color-primary)]"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/aboutus"
                  className="hover:text-[color:var(--color-primary)]"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contactus"
                  className="hover:text-[color:var(--color-primary)]"
                >
                  Contact
                </NavLink>
                {isLoggedIn && (
                  <NavLink
                    to="/profile"
                    className="hover:text-[color:var(--color-primary)]"
                  >
                    Profile
                  </NavLink>
                )}
              </ul>
            </div>
            <div className="flex gap-4">
              {!isLoggedIn && (
                <>
                  <Link to="/login">
                    <Button type="button" className="btn-inverted px-4 py-2">
                      Log In
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button type="button" className="btn-base px-4 py-2">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
              {isLoggedIn && (
                <Button
                  type="button"
                  onClick={onLogOutHandler}
                  className="btn-base px-4 py-2"
                >
                  Log Out
                </Button>
              )}
            </div>
          </div>
          {/* Burger Menu For Smaller Screen Sizes */}
          <div className="flex items-center justify-center md:hidden">
            <button className="" onClick={dropMenuHandler}>
              {!dropMenu && (
                <FaBars className="text-2xl text-[color:var(--tertiary-text-color)]" />
              )}
              {dropMenu && (
                <ImCross className="text-2xl text-[color:var(--tertiary-text-color)]" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {dropMenu && (
        <div
          className={twMerge(
            "flex flex-col items-center justify-center gap-6 md:hidden fixed z-10 top-20 left-0 bg-[color:var(--main-color)] w-full py-8 shadow-lg",
            isDarkMode
              ? "shadow-gray-800"
              : "shadow-[color:var(--shadow-color)]"
          )}
        >
          <div className="text-center text-[color:var(--tertiary-text-color)] ">
            <ul className="flex flex-col font-semibold text-lg gap-4">
              <Link
                to="/"
                className="hover:text-[color:var(--color-primary)]"
                onClick={dropMenuHandler}
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className="hover:text-[color:var(--color-primary)]"
                onClick={dropMenuHandler}
              >
                About
              </Link>
              <Link
                to="/contactus"
                className="hover:text-[color:var(--color-primary)]"
                onClick={dropMenuHandler}
              >
                Contact
              </Link>
              {isLoggedIn && (
                <NavLink
                  to="/profile"
                  className="hover:text-[color:var(--color-primary)]"
                >
                  Profile
                </NavLink>
              )}
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            {!isLoggedIn && (
              <>
                <Link to="/login">
                  <Button
                    type="button"
                    className="btn-inverted w-full py-2"
                    onClick={dropMenuHandler}
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    type="button"
                    className=" btn-base px-16 sm:px-32 py-2"
                    onClick={dropMenuHandler}
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            {isLoggedIn && (
              <Button
                type="button"
                className=" btn-base px-16 sm:px-32 py-2"
                onClick={(event) => {
                  onLogOutHandler();
                  dropMenuHandler();
                }}
              >
                Log Out
              </Button>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
