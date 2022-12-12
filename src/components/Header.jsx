import React from "react";
import Rubiks from "../images/rubiks2.jpg";
import { Link } from "react-router-dom";
import useMediaQuery from "../helper/useMediaQuery.jsx";
import { useState } from "react";
import Menu from "../helper/Menu.jsx";
import SearchText from "../helper/SearchText";

function Header() {
  const isAboveSmallScreens = useMediaQuery("(min-width: 720px)");
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(true);
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
            {isAboveSmallScreens ? (
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                    fillRule="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50"
                  placeholder="Search..."
                />
              </div>
            ) : (
              <>
                <button onClick={() => setIsSearchOpen((prev) => !prev)}>
                  {" "}
                  {/* Search icon button */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                    strokeWidth="1.75"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Navlinks */}
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
      {isSearchOpen ? <></> : <SearchText />}
    </>
  );
}

export default Header;
