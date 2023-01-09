import React from "react";
import { Link } from "react-router-dom";
const roh = [
  {
    img: "https://images.pexels.com/photos/6496689/pexels-photo-6496689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tilos: "Τιτλος απραραραρα μ ασδδασδσα τι θες ρε φιλε",
    id: 1,
  },
  {
    img: "https://images.pexels.com/photos/6496689/pexels-photo-6496689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tilos: "Κατι διαφορετικό για την μετακίνηση ασδασδ",
    id: 2,
  },
];

const Roh = () => {
  return (
    <div className="hidden lg:block container px-0 lg:pl-4 pb-7 pt-20 w-2/6">
      <div className="bg-grid mb-8">
        <span className="bg-black px-3 pt-0.5 pb-1 text-white font-medium text-xl">
          "Ροή Ειδήσεων"
        </span>
      </div>

      <ul>
        {roh.map((roh, key) => (
          <div className="flex pb-4" key={roh.id}>
            <img src={roh.img} className="h-36 w-60 rounded-xl" alt="" />
            <div className="pl-4">
              <div className=" font-semibold text-lg container">
                {roh.tilos}
              </div>
              <Link to={`/posts/${roh.id}`}>Read more</Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Roh;
