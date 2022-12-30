import React from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Write() {
  const { currentUser } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [img, setImg] = useState("");

  // const handleChange = (e) => {
  //   setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8800/api/posts", {
        title,
        desc: value,
        cat,
        img: "empty",
        uid: currentUser.id,
        username: currentUser.username,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    console.log(value);
  };

  const navigate = useNavigate();
  return (
    <div className=" container mx-auto max-w-8xl px-2 mt-10 flex-row justify-between pb-20">
      <div className="content">
        <input
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          type="text"
          placeholder="Τίτλος Άρθρου"
          className="px-3 py-1 text-xl font-bold text-black border border-neutral-500 placeholder:text-gray-400 placeholder:font-normal"
        />
        <ReactQuill
          value={value}
          theme="snow"
          onChange={setValue}
          className="h-92 w-full pt-5"
        />
      </div>
      <div className="menu flex space-x-5 pt-16">
        <div className="cat border px-5 border-neutral-400">
          <h1 className="text-2xl font-semibold text-gray-800">Category</h1>
          <div className="items-center text-cyan-800 font-medium">
            <input
              type="radio"
              name="cat"
              value="world"
              id="world"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Κόσμος" className="pl-3">
              Κόσμος
            </label>
          </div>
          <div className="items-center text-cyan-800 font-medium">
            <input type="radio" name="cat" value="Economy" />
            <label htmlFor="Οικονομία" className="pl-3">
              Οικονομία
            </label>
          </div>
          <div className="items-center text-cyan-800 font-medium">
            <input type="radio" name="cat" value="economy" />
            <label htmlFor="Πολιτική" className="pl-3">
              Πολιτική
            </label>
          </div>

          <div className="items-center text-cyan-800 font-medium">
            <input type="radio" name="cat" value="Sports" />
            <label htmlFor="Sports" className="pl-3">
              Sports
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
          <button
            onClick={handleSubmit}
            className="bg-cyan-800 text-white px-1 py-0.5"
          >
            {" "}
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Write;
