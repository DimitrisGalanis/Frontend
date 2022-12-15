import React from "react";

const posts = [
  {
    id: 1,
    title: " Basic Snow techniques for Alpes 2022",
    description:
      "Παμε για παρακάτω πληροφορίες αντ1, μαζί με τον Name είναι μια σοβαρή επένδυση στον τομέα της τεχνολογίας.",
    img: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Noteworthy technology acquisitions 2021 ",
    description:
      " Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem",
    img: "https://images.pexels.com/photos/86993/pexels-photo-86993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Mountain explosion covering dust ",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order ",
    img: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  },
];

function Abc() {
  return (
    <div className="container max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 pb-5 md:px-3 px-0 space-x-0 lg:space-x-5">
      {/* left part */}
      <div className="border-b border-neutral-400">
        <img
          src={posts[0].img}
          alt=""
          className="w-full h-72 md:h-80 xl:h-82 rounded-none lg:rounded-3xl"
        />

        <div className="text-2xl sm:text-3xl 2xl:text-4xl pt-5 font-semibold lg:font-bold text-gray-700 pl-2 lg:pl-0">
          {posts[0].title}
        </div>

        <div className="pt-1 text-neutral-500 px-2 sm:px-0 font-normal text-sm sm:text-base sm:pt-4 flex justify-between">
          <div className="flex sm:hidden text-red-700 font-medium"> Europe</div>
          {/* <div className="italic pl-2">12.10.2022 2.23 PM GMT+3 </div> */}
        </div>
        <div className="pr-2 pt-3 text-lg font-serif text-gray-700 pl-2 lg:pl-0">
          {posts[0].description}
        </div>
      </div>

      {/* Right part */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-5 lg:pt-0">
        <div className="">
          <img
            src={posts[1].img}
            alt=""
            className="w-screen h-72 md:h-80 lg:h-56 rounded-none lg:rounded-3xl object-cover"
          />
          <div className="text-2xl pt-2 font-semibold text-gray-700 pl-2 sm:pl-0 lg:text-xl xl:text-2xl">
            {posts[1].title}
          </div>
          <div className="pt-1 text-neutral-500 px-2 sm:px-0 font-normal text-sm sm:text-base sm:pt-4 flex justify-between">
            <div className="flex sm:hidden text-red-700 font-medium">
              {" "}
              Europe
            </div>
            {/* <div className="italic">12.10.2022 2.23 PM GMT+3 </div> */}
          </div>
          <div className="border-b mt-2 border-neutral-400" />
        </div>
        <div>
          <img
            src={posts[2].img}
            alt=""
            className="w-screen h-72 md:h-80 lg:h-56  rounded-none lg:rounded-3xl object-cover"
          />
          <div className="text-2xl pt-2 font-semibold text-gray-700 pl-2 sm:pl-0 lg:text-xl xl:text-2xl">
            {posts[2].title}
          </div>
          <div className="pt-1 text-neutral-500 px-2 sm:px-0 font-normal text-sm sm:text-base sm:pt-4 flex justify-between">
            <div className="flex sm:hidden text-red-700 font-medium">
              {" "}
              Europe
            </div>
            {/* <div className="italic">12.10.2022 2.23 PM GMT+3 </div> */}
          </div>
          <div className="border-b mt-2 border-neutral-400" />
        </div>
        <div>
          <img
            src={posts[0].img}
            alt=""
            className="w-screen h-72 md:h-80 lg:h-56 rounded-none lg:rounded-3xl object-cover"
          />
          <div className="text-2xl pt-2 font-semibold text-gray-700 pl-2 sm:pl-0 lg:text-xl xl:text-2xl">
            {posts[0].title}
          </div>
          <div className="pt-1 text-neutral-500 px-2 sm:px-0 font-normal text-sm sm:text-base sm:pt-4 flex justify-between">
            <div className="flex sm:hidden text-red-700 font-medium">
              {" "}
              Europe
            </div>
            {/* <div className="italic">12.10.2022 2.23 PM GMT+3 </div> */}
          </div>
          <div className="border-b mt-2 border-neutral-400" />
        </div>

        <div>
          <img
            src={posts[1].img}
            alt=""
            className="w-screen h-72 md:h-80 lg:h-56 rounded-none lg:rounded-3xl object-cover"
          />
          <div className="text-2xl pt-2 font-semibold text-gray-700 pl-2 sm:pl-0 lg:text-xl xl:text-2xl">
            {posts[1].title}
          </div>
          <div className="pt-1 text-neutral-500 px-2 sm:px-0 font-normal text-sm sm:text-base sm:pt-4 flex justify-between">
            <div className="flex sm:hidden text-red-700 font-medium">
              {" "}
              Europe
            </div>
            {/* <div className="italic">12.10.2022 2.23 PM GMT+3 </div> */}
          </div>

          <div className="border-b mt-2 border-neutral-400" />
        </div>
      </div>
    </div>
  );
}

export default Abc;
