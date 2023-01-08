import React from "react";

const Splitter = ({ text }) => {
  return (
    <div className="container mx-auto px-0 lg:px-3 pt-14 pb-7 ">
      <div className="bg-grid">
        <span className="bg-red-700 px-3 py-0.5 text-white font-medium text-xl">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Splitter;
