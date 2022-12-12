import React from "react";
import Rubiks from "../images/rubiks2.jpg";
import { Link } from "react-router-dom";
import useMediaQuery from "../helper/useMediaQuery.jsx";
import SearchIcon from "../helper/SearchIcon";
import { useState } from "react";
import Menu from "../helper/Menu.jsx";

function Header() {
  const isAboveSmallScreens = useMediaQuery("(min-width: 720px)");
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <>
      <header className="border-b border-neutral-300">
        <div className="container mx-auto max-w-8xl flex justify-between">
          {/* Logo & Text */}

          <Link to="/">
            <div className="flex justify-items-start items-center -mt-4">
              <img
                className="w-12 h-26 lg:w-full lg:h-24 object-cover"
                src={Rubiks}
                alt="logo rubiks for brand"
              />

              <div className="text-2xl pt-4 text-gray-700 md:text-3xl pl-2 font-semibold ">
                Rubiks
              </div>
            </div>
          </Link>

          <div className="hidden md:inline-flex items-center space-x-6 text-lg font-medium">
            <h3>World</h3>
            <h3>Business</h3>
            <h3>Politics</h3>
            <h3>Sports</h3>
          </div>
          <div className="flex items-center gap-x-3">
            <SearchIcon />
            <button
              className="mr-4 lg:mr-0 block md:hidden"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              {isNavOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="2 2 20 20"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="2 2 20 20"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {isNavOpen ? <></> : <Menu />}
    </>
  );
}

export default Header;
