import React from "react";
import { useState } from "react";

function Barsicon() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
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
  );
}

export default Barsicon;
