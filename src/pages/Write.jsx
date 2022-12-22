import React from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");
  return (
    <div className=" container mx-auto max-w-8xl px-2 mt-10 flex-row justify-between pb-20">
      <div className="content">
        <input
          type="text"
          placeholder="Τίτλος Άρθρου"
          className="px-3 py-1 text-xl font-bold text-black border border-neutral-500 placeholder:text-gray-400 placeholder:font-normal"
        />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="h-92 w-full pt-5"
        />
        {console.log(value)}
      </div>
      <div className="menu flex space-x-5 pt-16">
        <div className="category border px-5 border-neutral-400">
          <h1 className="text-2xl font-semibold text-gray-800">Category</h1>

          <div className="items-center text-cyan-800 font-medium">
            <input type="radio" name="category" value="world" />
            <label htmlFor="world" className="pl-3">
              World
            </label>
          </div>
          <div className="items-center text-cyan-800 font-medium">
            <input
              type="radio"
              name="category"
              value="sport"
              className="valid:border-red-500"
            />
            <label htmlFor="sport" className="pl-3">
              Sport
            </label>
          </div>
          <div className="items-center text-cyan-800 font-medium">
            <input type="radio" name="category" value="economy" />
            <label htmlFor="economy" className="pl-3">
              Economy
            </label>
          </div>

          <div className="items-center text-cyan-800 font-medium">
            <input type="radio" name="category" value="politics" />
            <label htmlFor="politics" className="pl-3">
              Politics
            </label>
          </div>
        </div>

        <div className="publish border border-neutral-400 px-2">
          <div className="text-2xl font-semibold text-gray-800">Publish</div>
          <div className=" font-semibold text-xl  text-cyan-800">
            Status:{" "}
            <span className="text-neutral-400 text-lg font-normal ">Draft</span>
          </div>

          <div className="text-xl font-normal pb-2 text-black">
            <span className="font-medium text-cyan-800">Upload </span>an image
          </div>
          <button className="bg-cyan-800 text-white px-1 py-0.5">
            {" "}
            Upload{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Write;
