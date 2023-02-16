import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col pt-0.25 bg-black/90 p-3 sm:flex-row justify-between">
      <div className="container max-w-8xl mx-auto lg:px-3 px-0 pr-3">
        <div className="flex space-x-4 pb-2 sm:pb-0 contrainer max-w-8xl mx-auto border-b">
          <div className="pt-2.5 pl-0 w-9 h-9 rounded-full bg- hover:cursor-pointer">
            <img
              className="w-4 h-4 items-center  hover:scale-150 ease-in-out  duration-300"
              src="https://assets-global.website-files.com/60a295eaddb3e10f7bae5980/60a295eaddb3e13304ae59fb_twitter-white.svg"
              alt="twitter icon link"
            />
          </div>
          <div className="pt-2.5 pl-0 w-9 h-9 rounded-full hover:cursor-pointer">
            <img
              className="w-4 h-4 items-center hover:scale-150 ease-in-out  duration-300"
              src="https://assets-global.website-files.com/60a295eaddb3e10f7bae5980/60a295eaddb3e11b74ae59ef_facebook-white.svg"
              alt="facebook icon link"
            />
          </div>
          <div className="pt-2.5 pl-0 w-9 h-9 rounded-full  hover:cursor-pointer">
            <img
              className="w-4 h-4 items-center hover:scale-150 ease-in-out  duration-300"
              src="https://assets-global.website-files.com/60a295eaddb3e10f7bae5980/60a295eaddb3e1022dae59fc_instagram-white.svg"
              alt="instagram icon link"
            />
          </div>
          <div className="pt-2.5 pl-0 w-9 h-9 rounded-full  hover:cursor-pointer">
            <img
              className="w-4 h-4 items-center hover:scale-150 ease-in-out  duration-300"
              src="https://assets-global.website-files.com/60e5f2de011b86acebc30db7/60e5f2de011b8684a7c30e11_linkedin.svg"
              alt="linked in icon link"
            />
          </div>
          <div className="pt-2.5 pl-0 w-9 h-9 rounded-full  hover:cursor-pointer ">
            <img
              className="w-4 h-4 items-center hover:scale-150 ease-in-out  duration-300"
              src="https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6116b6f6638346eecc2b604f_youtube%201.svg"
              alt="youtube in icon link"
            />
          </div>
        </div>

        <div className="items-center flex justify-between space-x-5 text-white py-2 font-semibold ">
          <h1 className="hover:cursor-pointer hover:underline hover:underline-offset-4 decoration-2">
            Privacy
          </h1>
          <h1 className="hover:cursor-pointer hover:underline hover:underline-offset-4 decoration-2">
            Terms
          </h1>
          <h1 className="hover:cursor-pointer hover:underline hover:underline-offset-4 decoration-2">
            Contact
          </h1>
          <h1 className="hover:cursor-pointer hover:underline hover:underline-offset-4 decoration-2">
            Team
          </h1>
        </div>
        <h1 className="text-gray-100 font-semibold pt-3 border-t">
          @ 2023 Rubiks <span className="pl-2 ">-</span>
          <span className="pl-3 font-normal">All rights reserved</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
