import React from "react";
import { useState } from "react";

function nextSlide(e, index, setIndex) {
  if (index < 2) {
    setIndex(index + 1);
  } else {
    setIndex(0);
  }

  e.preventDefault();
}

function previousSlide(e, index, setIndex) {
  if (index > 0) {
    setIndex(index - 1);
  } else {
    setIndex(2);
  }

  e.preventDefault();
}

const ImageSlider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="container mx-auto position relative pt-3 px-0 md:px-3">
        <div className="relative">
          <img
            src={slides[index].url}
            className="h-80 w-full md:h-81 2xl:h-92 object-cover"
            alt=""
          />
        </div>

        <button
          onClick={(e) => previousSlide(e, index, setIndex)}
          className=" absolute bottom-1/2 pl-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="1 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 bg-white/60 rounded-2xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={(e) => nextSlide(e, index, setIndex)}
          className="absolute bottom-1/2 right-1 pr-0 md:pr-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="-1 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 bg-white/60 rounded-2xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div className="container mx-auto bg-gray-200/70 md:px-2 px-0">
          <div className="text-center text-red-700 font-medium text-xl flex justify-center space-x-3 pt-1">
            Καιρός
          </div>
          {/* <div className="">{index}</div>
        <div className="">{slides[index].title}</div> */}
          <div className="text-center font-medium text-2xl px-3 pt-2 md:text-3xl  xl:text-3xl pb-5">
            «Πάμε προς Πασχούγεννα»: Η αισιόδοξη πρόγνωση Μαρουσάκη για τον
            καιρό στις γιορτές.
          </div>
          <div className="flex justify-start text-gray-500/90 font-medium">
            <div className="pl-3 pr-5">10.12.2022</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 -2 27 27"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="pl-1">15:45</div>
          </div>
        </div>
      </div>

      <div className="border-b border-neutral-400"></div>
    </>
  );
};

export default ImageSlider;
