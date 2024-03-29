import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function OikonomiaPage() {
  const [oikonomia, setOikonomia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_rubiks_api + "api/posts/oikonomia"
        );
        setOikonomia(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    oikonomia && (
      <div className=" max-w-8xl mx-auto pt-6 container px-0 xl:px-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-tight text-gray-900 pl-2 xl:pl-4">
          Όλα τα άρθρα της <span className="text-rose-800/80">Οικονομίας</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-x-12 px-0 lg:px-5">
          {oikonomia.map((post, key) => (
            <div key={key}>
              <Link to={`/posts/${post.id}`}>
                <img
                  src={`https://` + post.img.slice(7, post.img.length)}
                  alt="article"
                  className="w-full rounded-sm h-72 lg:h-81 object-cover"
                />
              </Link>
              <div className="shadow-md rounded-md p-1.5 mb-4">
                <div className="flex text-rose-700 font-medium space-x-5 pt-1">
                  <div className="ml-1 md:ml-0">Οικονομία</div>
                  <div className="">{post.date}</div>
                </div>
                <Link to={`/posts/${post.id}`}>
                  <div className="font-bold text-2xl ml-1 mt-1 md:ml-0">
                    {post.title}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default OikonomiaPage;
