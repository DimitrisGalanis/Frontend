import React from "react";
import { Link } from "react-router-dom";

const Sport3 = ({ posts }) => {
  return (
    <div className="container mx-auto max-w-8xl flex-row lg:flex lg:space-x-4 md:px-3 px-0">
      <div className="bg-black relative">
        <div className="relative">
          <Link to={`/posts/${posts[0]?.id}`}>
            <img
              className="h-72 xl:h-80 w-screen object-cover"
              src={`https://` + posts[0]?.img.slice(7, posts[0]?.img.length)}
              alt=""
            />
          </Link>

          <span className="bg-white/95 text-red-600 absolute bottom-0 left-0 font-semibold px-2 ml-0.5">
            {posts[0]?.category}
          </span>
        </div>

        {/* {title} */}
        <div className="text-start font-medium text-3xl pt-2 pl-2 lg:pl-1 pb-12 text-white">
          {posts[0]?.title}
        </div>
        <div className="flex justify-start text-white font-medium absolute bottom-0">
          <div className="pl-2  pr-5">{posts[0]?.date}</div>
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
          <div className="pl-1">00:45</div>
        </div>
      </div>

      <div className="bg-black mt-3 lg:mt-0 relative">
        <div className="relative">
          <Link to={`/posts/${posts[1]?.id}`}>
            <img
              className="h-72 md:h-80 xl:h-80 w-screen object-cover"
              src={`https://` + posts[1]?.img.slice(7, posts[1]?.img.length)}
              alt=""
            />
          </Link>

          <span className="bg-white/95 text-red-600 absolute bottom-0 left-0 font-semibold px-2 ml-0.5">
            {posts[1]?.category}
          </span>
        </div>

        {/* {title} */}
        <div className="text-start font-medium text-3xl pt-2 pl-2 lg:pl-1 pb-12 text-white">
          {posts[1]?.title}
        </div>
        <div className="flex justify-start text-white font-medium absolute bottom-0">
          <div className="pl-2 pr-5"> {posts[1]?.date} </div>
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
          <div className="pl-1">14:12</div>
        </div>
      </div>

      <div className=" 2xl:mt-0 bg-black relative mt-3 lg:mt-0">
        <div className="relative">
          <Link to={`/posts/${posts[2]?.id}`}>
            <img
              className="h-72 md:h-80 xl:h-80 w-screen object-cover"
              src={`https://` + posts[2]?.img.slice(7, posts[2]?.img.length)}
              alt="w"
            />
          </Link>
          <span className="bg-white/95 text-red-600 absolute bottom-0 left-0 font-semibold px-2 ml-0.5">
            {posts[2]?.category}
          </span>
        </div>

        {/* {title} */}
        <div className="text-start font-medium text-3xl pt-2 pl-2 lg:pl-1 pb-12 text-white">
          {posts[2]?.title}
        </div>

        <div className="flex justify-start text-white font-medium absolute bottom-0 ">
          <div className="pl-2  pr-5"> {posts[2]?.date} </div>
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
          <div className="pl-1">9:21</div>
        </div>
      </div>
    </div>
  );
};

export default Sport3;
