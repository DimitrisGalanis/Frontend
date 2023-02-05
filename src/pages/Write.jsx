import React from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import EditorToolbar, { modules, formats } from "../components/EditorToolbar";

function Write() {
  const { currentUser } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [img, setImg] = useState("empty");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState("");

  // const handleChange = (e) => {
  //   setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (file.type === "image/jpeg" || file.type === "image/png") {
      const base64 = await convertBase64(file);
      setImg(base64);
    } else {
      alert("Επιτρέπονται μόνο αρχεία .jpeg ή .png");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8800/api/posts", {
        title,
        description: value,
        img: img,
        category: cat,
        tag: tag,
        date: date,
        uid: currentUser.id,
        username: currentUser.username,
      })
      .then(
        (response) => {
          console.log(response);
          alert(response.data);
        },
        (error) => {
          console.log(error);
          alert(error.response.data);
        }
      );
    // navigate("/dashboard");
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
        <EditorToolbar toolbarId={"t1"} />
        <ReactQuill
          value={value}
          theme="snow"
          onChange={setValue}
          className="h-92 w-full pt-5"
          modules={modules("t1")}
          formats={formats}
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
            <input
              type="radio"
              name="cat"
              value="oikonomia"
              id="Economy"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Οικονομία" className="pl-3">
              Οικονομία
            </label>
          </div>
          <div className="items-center text-cyan-800 font-medium">
            <input
              type="radio"
              name="cat"
              value="politiki"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Πολιτική" className="pl-3">
              Πολιτική
            </label>
          </div>

          <div className="items-center text-cyan-800 font-medium">
            <input
              type="radio"
              name="cat"
              value="sports"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Sports" className="pl-3">
              Sports
            </label>
          </div>
        </div>

        <div className=" border border-neutral-400 px-2">
          <div>
            <label
              className="block text-2xl font-semibold text-gray-800 pb-2"
              htmlFor="tag"
            >
              Post Tag
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-600 "
              id="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>
        </div>

        <div className=" border border-neutral-400 px-2">
          <div>
            <label
              className="block text-2xl font-semibold text-gray-800 pb-2"
              htmlFor="date"
            >
              Post Date
            </label>
            <input
              placeholder="01 June - 2023"
              type="text"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-600 "
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="publish border border-neutral-400 px-2">
          <div className="text-2xl font-semibold text-gray-800">Publish</div>
          {/* <div className=" font-semibold text-xl  text-cyan-800">
            Status:{" "}
            <span className="text-neutral-400 text-lg font-normal ">Draft</span>
          </div> */}

          <div className="text-xl font-normal pb-2 text-black">
            <input
              id="img"
              className=" py-2 block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-cyan-800
              hover:file:bg-violet-100"
              type="file"
              onChange={uploadImage}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-cyan-800 text-white px-1 py-0.5"
          >
            {" "}
            Create New Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Write;
