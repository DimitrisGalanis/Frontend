import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import sea from "../images/sea.jpg";
import mountain from "../images/mountain.jpg";
import football from "../images/football.jpg";
import ImageSlider from "../components/ImageSlider.jsx";
import FrontPosts from "../components/FrontPosts";
import Abc from "../components/Abc";
import Second from "../components/Second";
import SportPosts from "../components/SportPosts";
import axios from "axios";
import Third from "../components/Third";
import Splitter from "../components/Splitter";

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
        const res = await axios.get("http://localhost:8800/api/posts/");
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
      <Splitter text="Latest News" />
      <FrontPosts posts={posts} />
      <Splitter text="Δημοφιλή" />
      <SportPosts />
      <Splitter text=" Καιρός" />
      <Second />
      <Splitter text="Μετακίνηση" />
      <Third />
    </div>
  );
}

export default Home;
