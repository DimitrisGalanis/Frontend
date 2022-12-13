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
      <div className="container mx-auto max-w-8xl position relative pt-3">
        <img
          src={slides[index].url}
          className=" h-80 w-full sm:h-98 object-cover"
          alt=""
        />

        <button
          onClick={(e) => previousSlide(e, index, setIndex)}
          className=" absolute bottom-1/3 pl-1"
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
          className="absolute bottom-1/3 right-1 pr-1"
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
      </div>

      <div className="pt-1 sm:pl-0 container mx-auto max-w-8xl bg-gray-200/80">
        <div className="text-center text-cyan-700 font-medium text-xl flex justify-center space-x-3 pt-1">
          <div className="">Καιρός</div>
          <div className="">10/12/2022</div>
        </div>
        {/* <div className="">{index}</div>
          <div className="">{slides[index].title}</div> */}
        <div className="text-center font-medium text-2xl px-3 pt-2 sm:text-3xl lg:text-4xl pb-10">
          «Πάμε προς Πασχούγεννα»: Η αισιόδοξη πρόγνωση Μαρουσάκη για τον καιρό
          στις γιορτές
        </div>
      </div>

      <div className="border-b border-neutral-400"></div>
    </>
  );
};

export default ImageSlider;
