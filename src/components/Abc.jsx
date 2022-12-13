import React from "react";

const posts = [
  {
    id: 1,
    title: " Basic Snow techniques for Alpes 2022",
    description:
      "Παμε για παρακάτω πληροφορίες αντ1, μαζί με τον Παπαπαρα είναι μια σοβαρή επένδυση στον τομέα της τεχνολογίας.",
    img: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Noteworthy technology acquisitions 2021",
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
    <div className="container max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
      {/* left part */}
      <div className="">
        <img
          src={posts[0].img}
          alt=""
          className="h-80 sm:h-99 rounded-none sm:rounded-xl"
        />

        <div className="text-3xl sm:text-4xl pt-5 font-bold text-gray-700 pl-2 sm:pl-0">
          {posts[0].title}
        </div>

        <div className="pt-1 italic text-neutral-500 px-2 sm:px-0 font-normal text-sm sm:text-base sm:pt-4">
          12.10.2022 2.23 PM GMT+3
        </div>
        <div className="px-2 sm:pl-0 pt-3 text-xl font-serif text-gray-700">
          {posts[0].description}
        </div>
      </div>

      {/* Right part */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="">
          <img
            src={posts[1].img}
            alt=""
            className="w-screen h-80 rounded-none sm:rounded-xl object-cover"
          />
          <div className="text-3xl pt-2 font-semibold text-gray-700 pl-2 sm:pl-0 sm:text-2xl">
            {posts[1].title}
          </div>
          <div className="pt-1 italic text-neutral-500 px-2 sm:px-0 font-normal text-sm sm:text-sm">
            12.10.2022 2.23 PM GMT+3
          </div>
        </div>
        <div>
          <img
            src={posts[2].img}
            alt=""
            className="h-80 rounded-none sm:rounded-xl w-screen"
          />
          <div className="text-3xl pt-2 font-semibold text-gray-700 pl-2 sm:pl-0 sm:text-2xl">
            {posts[2].title}
          </div>
          <div className="pt-1 italic text-neutral-500 px-2 sm:px-0 font-normal text-sm sm:text-sm">
            12.10.2022 2.23 PM GMT+3
          </div>
        </div>
        <div>
          <img
            src={posts[0].img}
            alt=""
            className="h-80 rounded-none sm:rounded-2xl w-screen"
          />
          <div className="text-3xl pt-2 font-semibold text-gray-700 pl-2 sm:pl-0 sm:text-2xl">
            {posts[0].title}
          </div>
          <div className="pt-1 italic text-neutral-500 px-2 sm:px-0 font-normal text-sm sm:text-sm">
            12.10.2022 2.23 PM GMT+3
          </div>
        </div>
        <div>
          <img
            src={posts[1].img}
            alt=""
            className="h-80 rounded-none sm:rounded-3xl w-screen object-cover"
          />
          <div className="text-3xl pt-2 font-semibold text-gray-700 pl-2 sm:pl-0 sm:text-2xl">
            {posts[1].title}
          </div>
          <div className="pt-1 italic text-neutral-500 px-2 sm:px-0 font-normal text-sm sm:text-sm">
            12.10.2022 2.23 PM GMT+3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abc;
