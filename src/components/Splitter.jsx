import React from "react";

function Splitter({ text }) {
  return (
    <div className="container mx-auto px-0 md:px-3 py-7 ">
      <div className="bg-grid">
        <span className="bg-red-700 px-3 py-0.5 text-white font-medium text-xl">
          {text}
        </span>
      </div>
    </div>
  );
}

export default Splitter;
