import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Kosmos() {
  const [oikonomia, setOikonomia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_rubiks_api + "api/posts/kosmos"
        );
        setOikonomia(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className=" max-w-8xl mx-auto pt-6 container px-0 xl:px-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-tight text-gray-900 pl-2 xl:pl-4">
          Όλα τα άρθρα του <span className="text-rose-800/80"> Κόσμου</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-x-12 lg:px-5 px-0 ">
          {oikonomia.map((post, key) => (
            <div key={key}>
              <Link to={`/posts/${post.id}`}>
                <img
                  src={post.img}
                  alt="article"
                  className="w-full rounded-sm h-72 lg:h-81 object-cover"
                />
              </Link>
              <div className="flex text-rose-700 font-medium space-x-5 pt-1">
                <div className="ml-1 md:ml-0">Κόσμος</div>
                <div className="">{post.date}</div>
              </div>
              <div className="font-bold text-2xl mb-12 ml-1 mt-1 md:ml-0">
                {post.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Kosmos;
