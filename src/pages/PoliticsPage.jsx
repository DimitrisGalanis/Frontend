import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function PoliticsPage() {
  const [politics, setPolitics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_rubiks_api + "api/posts/politics"
        );

        console.log(res);
        setPolitics(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" max-w-8xl mx-auto pt-3 lg:pt-6 font-bold container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-tight text-gray-900 pl-2 xl:pl-0">
          Όλα τα άρθρα της <span className="text-rose-800/80">Πολιτικής</span>
        </h1>
      </div>
      <ul className=" flex flex-col items-center appearance-none max-w-8xl container mx-auto space-y-7 py-7 lg:py-10 ml-0 xl:ml-10">
        {politics.map((post, key) => (
          <div
            key={key}
            className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="w-full object-cover rounded-t-lg h-72 md:w-96 md:rounded-none md:rounded-l-lg"
              src={`https://` + post.img.slice(7, post.img.length)}
              alt=""
            />

            <div className="flex flex-col  py-4 pl-2 pr-4 xl:pl-4 leading-normal relative">
              {/* <div className="pb-4">
              <span className=" bg-sky-800 rounded-sm text-white font-semibold px-1.5 py-1">
                {post.tag}
              </span>
            </div> */}

              <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 hover:underline hover:underline-offset-6 decoration-rose-800/50">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h5>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {parse(post.description.slice(0, 250) + "...")}
              </div>

              <div className="absolute bottom-1 text-md text-rose-700/90 font-semibold">
                {post.date}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default PoliticsPage;
