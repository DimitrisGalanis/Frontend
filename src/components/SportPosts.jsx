import React from "react";

function SportPosts() {
  return (
    <div className="container mx-auto max-w-8xl flex-row lg:flex lg:space-x-3 md:px-3 px-0">
      <div className="bg-black">
        <div className="relative">
          <img
            className="h-72 md:h-80 xl:h-81 w-screen"
            src="https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <span className="bg-white text-red-600 absolute bottom-0 left-0 font-semibold px-2">
            Αθλήματα
          </span>
        </div>

        {/* {title} */}
        <div className=" text-start  md:text-center font-medium text-2xl pt-2 pl-2 lg:pl-1 sm:text-2xl 2xl:text-3xl pb-6 text-white">
          Παννελλήνιο πρωτάθλημα στίβου ανδρών.
        </div>
        <div className="flex justify-start text-white font-medium">
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

      <div className="mt-4 lg:mt-0 bg-black">
        <div className="relative">
          <img
            className="h-72 md:h-80 xl:h-81 w-screen"
            src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="w"
          />
          <span className="bg-white text-red-600 absolute bottom-0 right-0 font-semibold px-2">
            Αθλήματα
          </span>
        </div>

        {/* {title} */}
        <div className="font-medium text-2xl pt-2 pl-2 lg:pl-1 sm:text-2xl 2xl:text-3xl pb-6 text-white">
          Έναρξη κολύμβησης ολυμπιακοί αγώνες.
        </div>

        <div className="flex justify-start text-white font-medium">
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

export default SportPosts;
