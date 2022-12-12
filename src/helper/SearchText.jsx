import React from "react";

function SearchText() {
  return (
    // TODO Make it a form
    <div className="max-w-8xl mx-auto flex justify-between items-center pr-4 py-2 bg-gray-700">
      <input
        type="text"
        className="flex-1 h-8 rounded-xl placeholder-gray-400 mx-2 border border-gray-700 pl-4 font-medium "
        placeholder="Αναζήτηση ..."
      />
      <button className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="2 5 20 15"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchText;
