import React from "react";
import { Link } from "react-router-dom";

const FrontPosts = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto max-w-8xl space-x-0 lg:space-x-2 px-0 md:px-3">
      <Link to={`/posts/${posts[0]?.id}`} className="relative pr-1">
        <img
          src={`https://` + posts[0]?.img.slice(7, posts[0]?.img.length)}
          alt="frontpost"
          className=" h-80 lg:h-96 w-full object-cover"
        />
        <div className="absolute bottom-1/2 xl:bottom-1/2 left-3 xl:left-6 font-bold bg-rose-600 px-2 py-0.5">
          <span className="text-white">{posts[0]?.tag}</span>
        </div>

        <h3 className="absolute bottom-1/4 left-3 xl:left-4 text-white font-semibold text-xl lg:text-4xl px-1">
          {" "}
          {posts[0]?.title}
        </h3>

        <h3 className="absolute bottom-0 left-3 xl:left-6 pb-4 text-white font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-rose-500"
            fill="none"
            viewBox="0 2 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {posts[0]?.date}
        </h3>
      </Link>

      <div className="pt-2 lg:pt-0">
        <Link to={`/posts/${posts[1]?.id}`} className="relative pt-2 lg:pt-0">
          <img
            src={`https://` + posts[1]?.img.slice(7, posts[1]?.img.length)}
            alt="2nd fontpage"
            className="h-75 w-full object-cover pb-2"
          />

          <div className="absolute bottom-1/2 xl:bottom-1/3 left-3 xl:left-6 font-bold bg-rose-600 px-2 py-0.5">
            <span className="text-white"> {posts[1]?.tag} </span>
          </div>

          <h3 className="absolute px-1 bottom-14 left-3 xl:left-6 text-white font-semibold text-xl backdrop-blur-lg bg-white/20">
            {posts[1]?.title}
          </h3>

          <h3 className="absolute bottom-0 left-3 xl:left-6 pb-4 text-white font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-rose-500"
              fill="none"
              viewBox="0 2 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {posts[1]?.date}
          </h3>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-0 lg:space-x-2">
          <Link to={`/posts/${posts[2]?.id}`} className="relative pt-2 lg:pt-0">
            <div className="relative">
              <img
                src={`https://` + posts[2]?.img.slice(7, posts[2]?.img.length)}
                alt="rolex"
                className="h-72 object-cover w-full"
              />
              <div className="absolute bottom-1/2 left-3 xl:left-6 font-bold bg-rose-600 px-2 py-0.5">
                <span className="text-white"> {posts[2]?.tag} </span>
              </div>
              <h3 className="absolute bottom-0 left-3 xl:left-6 pb-14 text-white font-semibold text-xl">
                {" "}
                {posts[2]?.title}
              </h3>

              <h3 className="absolute bottom-0 left-3 xl:left-6 pb-4 text-white font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-rose-500"
                  fill="none"
                  viewBox="0 2 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {posts[2]?.date}
              </h3>
            </div>
          </Link>

          <Link to={`/posts/${posts[3]?.id}`} className="relative pt-2 lg:pt-0">
            <div className="relative pt-2 lg:pt-0">
              <img
                src={`https://` + posts[3]?.img.slice(7, posts[3]?.img.length)}
                alt=""
                className="h-72 object-cover w-full"
              />
              <div className="absolute bottom-1/2 left-3 xl:left-6 font-bold bg-rose-600 px-2 py-0.5">
                <span className="text-white">{posts[3]?.tag}</span>
              </div>
              <h3 className="absolute bottom-0 left-3 xl:left-6 pb-14 text-white font-semibold text-xl">
                {posts[3]?.title}
              </h3>

              <h3 className="absolute bottom-0 left-3 xl:left-6 pb-4 text-white font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-rose-500"
                  fill="none"
                  viewBox="0 2 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {posts[3]?.date}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontPosts;
