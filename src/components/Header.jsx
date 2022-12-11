import React from "react";
import Rubiks from "../images/rubiks2.jpg";
import { Link } from "react-router-dom";
import useMediaQuery from "../helper/useMediaQuery.jsx";
import Barsicon from "../helper/Barsicon.jsx";
import SearchIcon from "../helper/SearchIcon";

// className="w-12 h-26 md:-ml-3 md:w-34 md:h-28 object-cover md:pb-3"

function Header() {
  const isAboveSmallScreens = useMediaQuery("(min-width: 720px)");

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
            <Barsicon />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
