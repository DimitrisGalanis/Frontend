import React from "react";
import { useState } from "react";

function handleSubmit(e, index, setIndex) {
  if (index < 2) {
    setIndex(index + 1);
  } else {
    setIndex(0);
  }

  e.preventDefault();
}

const ImageSlider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="">
        <button
          onClick={(e) => handleSubmit(e, index, setIndex)}
          className="w-42 h-42 bg-black text-white"
        >
          <img src={slides[index].url} className="rounded-2xl" alt="" />
        </button>
      </div>
      <div>{index}</div>
      <div>{slides[index].title}</div>
    </>
  );
};

export default ImageSlider;
