import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const Kosmos2 = ({ posts }) => {
  return (
    <div className="flex-row lg:flex lg:space-x-5 container mx-auto max-w-8xl md:px-3 px-0 ">
      <div className=" shadow-md  w-full xl:w-97">
        <Link to={`/posts/${posts[0]?.id}`}>
          <img
            src={posts[0]?.img}
            alt="travel"
            className="w-full h-75  object-cover"
          />
        </Link>

        <div className="text-gray-800 hover:text-gray-600 px-2 pt-1">
          <span className="text-orange-600 hover:text-orange-800 font-semibold">
            Κόσμος
          </span>{" "}
          - {posts[0]?.date}
        </div>

        <div className="text-3xl font-bold text-gray-800 hover:text-gray-600 pt-4 px-2">
          {posts[0]?.title}
        </div>
        <div className="text-gray-500 py-3  px-2 text-lg ">
          {posts && parse(posts[0]?.description.slice(0, 60) + "...")}
        </div>
      </div>

      <div className="shadow-md w-full xl:w-97 pt-5 md:pt-0">
        <Link to={`/posts/${posts[1]?.id}`}>
          <img
            src={posts[1]?.img}
            alt="travel"
            className="w-full h-75 object-cover"
          />
        </Link>

        <div className="text-gray-800 hover:text-gray-600 px-2 pt-1">
          <span className="text-orange-600 hover:text-orange-800 font-semibold">
            Κόσμος
          </span>{" "}
          - {posts[1]?.date}
        </div>
        <div className="text-3xl font-bold text-gray-800 hover:text-gray-600 pt-4 px-2">
          {posts[1]?.title}
        </div>
        <div className="text-gray-500 py-3 px-2 text-lg">
          {posts && parse(posts[1]?.description.slice(0, 60) + "...")}
        </div>
      </div>

      <div className="shadow-md w-full xl:w-97 pt-5 md:pt-0">
        <Link to={`/posts/${posts[2]?.id}`}>
          <img
            src={posts[2]?.img}
            className="w-full h-75 object-cover"
            alt=""
          />
        </Link>
        <div className="text-gray-800 hover:text-gray-600 px-2 pt-1">
          <span className="text-orange-600 hover:text-orange-800 font-semibold">
            Κόσμος
          </span>{" "}
          - {posts[2]?.date}
        </div>
        <div className="text-3xl font-bold text-gray-800 hover:text-gray-600 pt-4 px-2">
          {posts[2]?.title}
        </div>
        <div className="text-gray-500 py-3 px-2 text-lg">
          {posts && parse(posts[2]?.description.slice(0, 70) + "...")}
        </div>
      </div>
    </div>
  );
};

export default Kosmos2;
