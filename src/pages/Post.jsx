import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  const [post, setPost] = useState([]);
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${id}`);
        setPost(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return <div>{post?.title}</div>;
}

export default Post;
