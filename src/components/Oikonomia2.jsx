import React from "react";
import { Link } from "react-router-dom";

const Oikonomia2 = ({ posts }) => {
  return (
    <>
      <div className="container mx-auto max-w-8xl flex-row lg:flex lg:space-x-3 md:px-3 px-0">
        <div className="bg-black relative">
          <div className="relative">
            <Link to={`/posts/${posts[0]?.id}`}>
              <img
                className="h-72 md:h-80 xl:h-81 w-screen object-cover"
                src={posts[0]?.img}
                alt=""
              />
            </Link>

            <span className="bg-white text-red-600 absolute bottom-0 left-0 font-semibold px-2">
              Οικονομία
            </span>
          </div>

          {/* {title} */}
          <div className=" text-start font-medium  pt-2 pl-2 lg:pl-1 text-3xl pb-12 text-white ">
            {posts[0]?.title}
          </div>
          <div className="flex justify-start text-white font-medium absolute bottom-0">
            <div className="pl-2 pr-7"> {posts[0]?.date} </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 -2 27 27"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="pl-1">10:12</div>
          </div>
        </div>

        <div className="mt-4 lg:mt-0 bg-black relative">
          <div className="relative">
            <Link to={`/posts/${posts[1]?.id}`}>
              <img
                className="h-72 md:h-80 xl:h-81 w-screen object-cover"
                src={posts[1]?.img}
                alt="w"
              />
            </Link>
            <span className="bg-white text-red-600 absolute bottom-0 left-0 font-semibold px-2">
              Οικονομία
            </span>
          </div>

          {/* {title} */}
          <div className="font-medium  pt-2 pl-2 lg:pl-1 text-3xl pb-12 text-white">
            {posts[1]?.title}
          </div>

          <div className="flex justify-start text-white font-medium absolute bottom-0">
            <div className="pl-2  pr-7"> {posts[1]?.date} </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 -2 27 27"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div className="pl-1">14:08</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oikonomia2;
