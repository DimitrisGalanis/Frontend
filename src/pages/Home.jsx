import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ImageSlider from "../components/ImageSlider.jsx";
import FrontPosts from "../components/FrontPosts";
import Abc from "../components/Abc";
import Kosmos2 from "../components/Kosmos2";
import Oikonomia2 from "../components/Oikonomia2";
import axios from "axios";
import Sport3 from "../components/Sport3";
import Splitter from "../components/Splitter";

function Home() {
  const [frontPosts, setFrontPosts] = useState([]);
  const [sport3, setSport3] = useState([]);
  const [oikonomia2, setOikonomia2] = useState([]);
  const [kosmos2, setKosmos2] = useState([]);

  const fetchData = () =>
    Promise.all([
      axios.get("http://localhost:8800/api/posts/frontposts"),
      axios.get("http://localhost:8800/api/posts/sport3"),
      axios.get("http://localhost:8800/api/posts/oikonomia2"),
      axios.get("http://localhost:8800/api/posts/kosmos2"),
    ]).then((res) => {
      setFrontPosts(res[0].data);
      setSport3(res[1].data);
      setOikonomia2(res[2].data);
      setKosmos2(res[3].data);
    });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 pt-7 shadow-md font-tasos3 tracking-wide text-bold ">
      {/* <Splitter text="Πρωτοσέλιδα" /> */}
      <FrontPosts posts={frontPosts} />
      <Splitter text="Κόσμος" />
      <Kosmos2 posts={kosmos2} />
      <Splitter text="Οικονομία" />
      <Oikonomia2 posts={oikonomia2} />
      <Splitter text="Αθλητισμός" />
      <Sport3 posts={sport3} />
    </div>
  );
}

export default Home;
