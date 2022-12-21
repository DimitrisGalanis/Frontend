import React from "react";

function FrontPosts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto max-w-8xl space-x-0 lg:space-x-2 px-0 md:px-3">
      <div className="relative pr-1">
        <img
          src="https://images.unsplash.com/photo-1609057339730-79faac0a5e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
          alt="frontpost"
          className=" h-80  lg:h-96 w-full object-cover "
        />
        <div className="absolute bottom-1/2 xl:bottom-1/3 left-3 xl:left-6 font-bold bg-rose-600 px-2 py-0.5">
          <span className="text-white">Social Media</span>
        </div>

        <h3 className="absolute bottom-1/4  xl:top-3/4 left-3 xl:left-6 text-white font-semibold text-xl">
          {" "}
          Twitter, άρση απαγόρευσης αναρτήσεων σε άλλα social media.
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
          05 Dec - 2022
        </h3>
      </div>

      <div>
        <div className="relative pt-2 lg:pt-0">
          <img
            src="https://www.fosonline.gr/media/news/2022/12/20/222719/main/MessiMbappe.jpg"
            alt="2nd fontpage"
            className="h-75 w-full object-cover pb-2"
          />

          <div className="absolute bottom-1/2 xl:bottom-1/3 left-3 xl:left-6 font-bold bg-rose-600 px-2 py-0.5">
            <span className="text-white">Mundial</span>
          </div>

          <h3 className="absolute bottom-14 left-3 xl:left-6 text-white font-semibold text-xl">
            {" "}
            Μουντιάλ 2022, η Αργεντινή και η Γαλλία στον τελικό.
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
            05 Dec - 2022
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-0 lg:space-x-2">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="rolex"
              className="h-72 object-cover w-full"
            />
            <div className="absolute bottom-1/3 left-3 xl:left-6 font-bold bg-rose-600 px-2 py-0.5">
              <span className="text-white">Business</span>
            </div>
            <h3 className="absolute bottom-0 left-3 xl:left-6 pb-14 text-white font-semibold text-xl">
              {" "}
              Τιμή Rolex, καινούργια σειρά.
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
              05 Dec - 2022
            </h3>
          </div>

          <div className="relative pt-2 lg:pt-0">
            <img
              src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-72 object-cover w-full"
            />
            <div className="absolute bottom-1/3 left-3 xl:left-6 font-bold bg-rose-600 px-2 py-0.5">
              <span className="text-white">Business</span>
            </div>
            <h3 className="absolute bottom-0 left-3 xl:left-6 pb-14 text-white font-semibold text-xl">
              {" "}
              Πτώση κρυπτονομισμάτων.
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
              05 Dec - 2022
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPosts;
