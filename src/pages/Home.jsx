import React from "react";
import sea from "../images/sea.jpg";
import mountain from "../images/mountain.jpg";
import football from "../images/football.jpg";
import ImageSlider from "../components/ImageSlider.jsx";

const slides = [
  {
    title: "football",
    url: football,
  },
  {
    title: "sea",
    url: sea,
  },
  {
    title: "mountain",
    url: mountain,
  },
];

function Home() {
  return (
    <div className="bg-gray-50 pt-0 md:pt-2 shadow-md">
      <div className="container mx-auto pl-2 md:pl-0 pt-2">
        <span className="text-gray-800 text-xl border-l-2 pl-2 border-red-600 md:text-2xl font-medium">
          Latest News
        </span>
      </div>
      <ImageSlider slides={slides} />
    </div>
  );
}

export default Home;
