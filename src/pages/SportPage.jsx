import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function SportPage() {
  const [sports_posts, setSports_Posts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_rubiks_api + "api/posts/sport"
        );
        setSports_Posts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" max-w-8xl mx-auto pt-3 lg:pt-6 font-bold container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-tight text-gray-900 pl-2 md:pl-6">
          Όλα τα άρθρα του <span className="text-sky-800/80">Αθλητισμού</span>
        </h1>
      </div>
      <ul className=" flex flex-col items-center appearance-none max-w-8xl container mx-auto space-y-7 py-10 ml-0 md:ml-10">
        {sports_posts.map((post, key) => (
          <div
            key={key}
            className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-50"
          >
            <img
              className="w-full object-cover rounded-t-lg h-72 md:w-96 md:rounded-none md:rounded-l-lg"
              src={`https://` + post.img.slice(7, post.img.length)}
              alt=""
            />

            <div className="flex flex-col p-4 leading-normal relative">
              {/* <div className="pb-4">
              <span className=" bg-sky-800 rounded-sm text-white font-semibold px-1.5 py-1">
                {post.tag}
              </span>
            </div> */}

              <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 hover:underline hover:underline-offset-6 decoration-sky-700/50">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h5>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {parse(post.description.slice(0, 190) + "...")}
              </div>

              <div className="absolute bottom-1 text-md text-sky-800 font-semibold">
                {post.date}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default SportPage;
