import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Kosmos() {
  const [oikonomia, setOikonomia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/posts/kosmos");
        setOikonomia(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className=" max-w-8xl mx-auto pt-6 container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-tight text-gray-900 pl-2 xl:pl-4">
          Όλα τα άρθρα του <span className="text-rose-800/80"> Κόσμου</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-x-12 px-5">
          {oikonomia.map((post, key) => (
            <div key={key}>
              <img
                src={post.img}
                alt="article"
                className="w-full rounded-sm h-72 lg:h-81 object-cover"
              />
              <div className="flex text-rose-700 font-medium space-x-5 pt-1">
                <div className="ml-1 md:ml-0">Οικονομία</div>
                <div className="">{post.date}</div>
              </div>
              <div className="font-bold text-2xl mb-12 ml-1 mt-1 md:ml-0">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Kosmos;
