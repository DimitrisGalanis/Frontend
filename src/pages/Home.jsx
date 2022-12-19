import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import sea from "../images/sea.jpg";
import mountain from "../images/mountain.jpg";
import football from "../images/football.jpg";
import ImageSlider from "../components/ImageSlider.jsx";
import Abc from "../components/Abc";
import SportPosts from "../components/SportPosts";
import axios from "axios";
import Third from "../components/Third";

const slides = [
  {
    title: "football",
    url: sea,
  },
  {
    title: "sea",
    url: football,
  },
  {
    title: "mountain",
    url: mountain,
  },
];

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/posts/");
        setPosts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 pt-2 shadow-md">
      <div className="container mx-auto pl-3">
        <span className="text-gray-800 text-xl border-l-2 pl-2 border-red-600 md:text-3xl font-medium">
          Latest News {posts[0]?.id}
        </span>
      </div>

      {/* <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} />
            </div>
            <div className="content">
              <div className="link">
                <h1>{post.title}</h1>
              </div>

              <button>Read More</button>
            </div>
          </div>
        ))}
      </div> */}

      <ImageSlider slides={slides} />

      <div className="container mx-auto pl-3 py-7">
        <span className="text-gray-800 text-xl border-l-2 pl-3 border-red-600 md:text-3xl font-medium">
          Most Read
        </span>
      </div>

      <SportPosts />

      <div className="container mx-auto pl-3 py-7">
        <span className="text-gray-800 text-xl border-l-2 pl-3 border-red-600 md:text-3xl font-medium">
          Weather
        </span>
      </div>
      <Abc />

      <div className="container mx-auto pl-3 py-7">
        <span className="text-gray-800 text-xl border-l-2 pl-3 border-red-600 md:text-3xl font-medium">
          World
        </span>
      </div>
      <Third />
    </div>
  );
}

export default Home;
