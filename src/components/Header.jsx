import React from "react";
import Rubiks from "../images/rubiksbg.png";
import { Link } from "react-router-dom";
import Search from "../helper/search.jsx";
import useMediaQuery from "../helper/useMediaQuery.jsx";

function Header() {
  const isAboveSmallScreens = useMediaQuery("(min-width: 720px)");
  return (
    <>
      <header className="flex  justify-between shadow-md mb-4">
        {/* Logo & Text */}
        <div className="flex justify-items-start items-center -mt-4">
          <img
            className="-ml-3 w-34 h-28 object-contain"
            src={Rubiks}
            alt="logo rubiks for brand"
          />
          <div className="font-serif text-2xl sm:text-3xl lg:text-4xl">
            Rubiks
          </div>
        </div>

        {/* Links */}
        {isAboveSmallScreens ? (
          <>
            <div className="flex items-center mb-3 text-gray-700 rounded ">
              <div className="links md:inline-flex items-center space-x-10 font-serif text-xl sm:space-x-4 md:space-x-7">
                <Link
                  className="links hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/koinonia"
                >
                  Κοινωνία
                </Link>
                <Link
                  className="links hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/oikonomia"
                >
                  Οικονομία
                </Link>
                <Link
                  className="links hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/diethni"
                >
                  Διεθνή
                </Link>
                <Link
                  className="links hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/travel"
                >
                  Travel
                </Link>
              </div>
            </div>
          </>
        ) : (
          <> </>
        )}
        {/* Search */}
        <Search />
      </header>
    </>
  );
}

export default Header;
