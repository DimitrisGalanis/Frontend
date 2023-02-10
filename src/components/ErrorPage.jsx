import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <section className="flex items-center h-full px-16 pt-10 pb-24 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-4xl">
            You are not authorized to view this page.
          </p>
          <p className="mt-8 mb-10 dark:text-gray-400">
            But dont worry, you can find follow the directions to log in.
          </p>

          <Link to="/login" className=" font-semibold rounded">
            <span className=" rounded-md bg-black text-white text-xl py-3 px-10 hover:bg-sky-700 ">
              Login
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
