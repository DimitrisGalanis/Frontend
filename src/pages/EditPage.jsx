import React from "react";
import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import EditorToolbar, { modules, formats } from "../components/EditorToolbar";

function EditPage() {
  const [post, setPost] = useState([]);
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${id}`);
        setPost(res.data);
        setValue(res.data.description);
        setTitle(res.data.title);
        setImg(res.data.img);
        setCat(res.data.category);
        setTag(res.data.tag);
        setDate(res.data.date);
        setFullname(res.data.fullname);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const { currentUser } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [img, setImg] = useState("empty");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState("");
  const [fullname, setFullname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8800/api/posts", {
        title,
        description: value,
        img: img,
        category: cat,
        tag: tag,
        date: date,
        uid: currentUser.id,
        username: currentUser.username,
        fullname: fullname,
        id: id,
      })
      .then(
        (response) => {
          alert(response.data);
          console.log(response);
          navigate("/dashboard");
        },
        (error) => {
          alert(error.data);
          console.log(error);
        }
      );
  };

  const navigate = useNavigate();
  return (
    <div className=" container mx-auto max-w-8xl px-2 mt-10 flex-row justify-between pb-20">
      <div className="content">
        <input
          defaultValue={post.title}
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
              defaultValue={tag}
              type="text"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-600 "
              id="tag"
              onChange={(e) => setTag(e.target.value)}
            />
          </div>
        </div>
        <div className=" border border-neutral-400 px-2">
          <div>
            <label
              className="block text-2xl font-semibold text-gray-800 pb-2"
              htmlFor="tag"
            >
              Post Author
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-600 "
              id="tag"
              defaultValue={fullname}
              onChange={(e) => setFullname(e.target.value)}
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
              defaultValue={date}
              placeholder="01 June - 2023"
              type="text"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-600 "
              id="date"
              onChange={(e) => setDate(e.target.value)}
            />
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
            UPDATE THE POST
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
