import React from "react";
import useMediaQuery from "./useMediaQuery";

function SearchIcon() {
  const isAboveSmallScreens = useMediaQuery("(min-width: 720px)");
  return isAboveSmallScreens ? (
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
    <button>
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
  );
}

export default SearchIcon;
