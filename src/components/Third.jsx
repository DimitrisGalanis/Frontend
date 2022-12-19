import React from "react";

function Third() {
  return (
    <div className="container mx-auto max-w-8xl flex-row lg:flex lg:space-x-4 md:px-3 px-0">
      <div className="bg-black relative">
        <div className="relative">
          <img
            className="h-72 md:h-80 xl:h-80 w-screen"
            src="https://images.unsplash.com/photo-1529179307417-ca83d48bd790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />

          <span className="bg-white/95 text-red-600 absolute bottom-0 left-0 font-semibold px-2 ml-0.5">
            Μετρό
          </span>
        </div>

        {/* {title} */}
        <div className="text-start font-medium text-2xl pt-2 pl-2 lg:pl-1 sm:text-2xl 2xl:text-3xl pb-12 text-white">
          Μετρό Θεσσαλονίκη - Πότε θα ξεκινήσει η λειτουργία του;
        </div>
        <div className="flex justify-start text-white font-medium absolute bottom-0">
          <div className="pl-2  pr-5">10.12.2022</div>
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
          <div className="pl-1">15:45</div>
        </div>
      </div>

      <div className="bg-black mt-4 lg:mt-0 relative">
        <div className="relative">
          <img
            className="h-72 md:h-80 xl:h-80 w-screen"
            src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <span className="bg-white/95 text-red-600 absolute bottom-0 left-0 font-semibold px-2 ml-0.5">
            Μεταφορές
          </span>
        </div>

        {/* {title} */}
        <div className="text-start font-medium text-2xl pt-2 pl-2 lg:pl-1 sm:text-2xl 2xl:text-3xl pb-12 text-white">
          Μείωση ρύπων σε όλες τις αεροπορικές εταιρείες.
        </div>
        <div className="flex justify-start text-white font-medium absolute bottom-0">
          <div className="pl-2 pr-5">10.12.2022</div>
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
          <div className="pl-1">15:45</div>
        </div>
      </div>

      <div className=" 2xl:mt-0 bg-black relative ">
        <div className="relative">
          <img
            className="h-72 md:h-80 xl:h-80 w-screen"
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            alt="w"
          />
          <span className="bg-white/95 text-red-600 absolute bottom-0 left-0 font-semibold px-2 ml-0.5">
            Επιδότηση
          </span>
        </div>

        {/* {title} */}
        <div className="text-start font-medium text-2xl pt-2 pl-2 lg:pl-1 sm:text-2xl 2xl:text-3xl pb-12 text-white">
          Επιδότηση για την αγορά ηλεκτρικών αυτοκινήτων.
        </div>

        <div className="flex justify-start text-white font-medium absolute bottom-0 ">
          <div className="pl-2  pr-5">10.12.2022</div>
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
          <div className="pl-1">15:45</div>
        </div>
      </div>
    </div>
  );
}

export default Third;
