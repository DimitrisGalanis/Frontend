import React from "react";

const Second = () => {
  return (
    <div className="flex-row lg:flex lg:space-x-5 container mx-auto max-w-8xl md:px-3 px-0">
      <div className=" shadow-md">
        <img
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="travel"
          className="w-full h-72  object-cover"
        />

        <div className="text-gray-800 hover:text-gray-600 px-2 pt-1">
          <span className="text-orange-600 hover:text-orange-800 font-semibold">
            Business
          </span>{" "}
          - Jun 3, 2022
        </div>

        <div className="text-xl font-bold text-gray-800 hover:text-gray-600 py-4 px-2">
          Your most happy customers are your greatest source of learning.
        </div>
        <div className="text-gray-500 py-3  px-2 ">
          Far far away, behind the world mountains, far from the countries
        </div>
      </div>

      <div className="shadow-md">
        <img
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="travel"
          className="w-full h-72 object-cover"
        />
        <div className="text-gray-800 hover:text-gray-600 px-2 pt-1">
          <span className="text-orange-600 hover:text-orange-800 font-semibold">
            Business
          </span>{" "}
          - Jun 3, 2022
        </div>
        <div className="text-xl font-bold text-gray-800 hover:text-gray-600 py-4 px-2">
          Your most happy customers are your greatest source of learning.
        </div>
        <div className="text-gray-500 py-3 px-2">
          Far far away, behind the world mountains, far from the countries
        </div>
      </div>

      <div className="shadow-md">
        <img
          src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
          className="w-full h-72 object-cover"
          alt=""
        />
        <div className="text-gray-800 hover:text-gray-600 px-2 pt-1">
          <span className="text-orange-600 hover:text-orange-800 font-semibold">
            Business
          </span>{" "}
          - Jun 3, 2022
        </div>
        <div className="text-xl font-bold text-gray-800 hover:text-gray-600 py-4 px-2">
          Your most happy customers are your greatest source of learning.
        </div>
        <div className="text-gray-500 py-3 px-2">
          Far far away, behind the world mountains, far from the countries
        </div>
      </div>
    </div>
  );
};

export default Second;
