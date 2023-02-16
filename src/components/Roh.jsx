import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Roh = () => {
  const [roh, setRoh] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_rubiks_api + "api/posts/posts3"
        );
        setRoh(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    // w-2/6
    <div className="hidden lg:block container px-0 lg:pl-4 pb-7 w-98">
      <div className="bg-grid mb-8">
        <span className="bg-black px-3 pt-0.5 pb-1 text-white font-medium text-xl">
          "Ροή Ειδήσεων"
        </span>
      </div>

      <div>
        {roh.map((roh, key) => (
          <div className="mb-7 flex flex-row  rounded-lg" key={key}>
            <Link to={`/posts/${roh.id}`}>
              <div className="w-36 ">
                <img
                  className="object-cover w-full rounded-lg h-32 "
                  src={`https://` + roh.img.slice(7, roh.img.length)}
                  alt=""
                />
              </div>
            </Link>
            <div className="relative">
              <div className="pl-4 text-md font-bold font-tasos2 leading-tight tracking-normal hover:underline decoration-2 hover:underline-offset-2 decoration-cyan-700/50 ">
                {roh.title.slice(0, 62)}
              </div>
              <Link
                to={`/posts/${roh.id}`}
                className=" pl-4 absolute bottom-0 text-cyan-700 font-semibold"
              >
                Διαβάστε περισσότερα{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roh;
