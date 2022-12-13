import React from "react";
import sea from "../images/sea.jpg";
import mountain from "../images/mountain.jpg";
import football from "../images/football.jpg";
import ImageSlider from "../components/ImageSlider.jsx";
import Abc from "../components/Abc";

const slides = [
  {
    title: "football",
    url: sea,
  },
  {
    title: "sea",
    url: football,
  },
  {
    title: "mountain",
    url: mountain,
  },
];

function Home() {
  return (
    <div className="bg-gray-50 pt-0 md:pt-2 shadow-md">
      <div className="container mx-auto pl-2 sm:pl-0 md:pl-2 pt-3">
        <span className="text-gray-800 text-xl border-l-2 pl-2 border-red-600 md:text-2xl font-medium">
          Latest News
        </span>
      </div>

      <ImageSlider slides={slides} />

      <div className="container mx-auto pl-2 lg:pl-0 py-4 md:pl-2">
        <span className="text-gray-800 text-xl border-l-2 pl-2 border-red-600 md:text-2xl font-medium">
          Europe
        </span>
      </div>

      <Abc />

      <div className="container mx-auto pl-2 lg:pl-0 py-4 md:pl-2">
        <span className="text-gray-800 text-xl border-l-2 pl-2 border-red-600 md:text-2xl font-medium">
          Sports
        </span>
      </div>
    </div>
  );
}

export default Home;
