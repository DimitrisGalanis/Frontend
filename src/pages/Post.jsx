import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../components/Comments.jsx";
import Roh from "../components/Roh.jsx";
import { useLocation } from "react-router-dom";

function createMarkup(text) {
  return { __html: text };
}

const Post = () => {
  const [post, setPost] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

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
  }, [id]);

  return (
    <div className="flex container mx-auto px-0 lg:px-3 pt-14 pb-7">
      <div className="post 2xl:w-5/6">
        <div className="text-3xl xl:text-4xl font-bold pb-10 text-black/90 px-2 lg:px-0">
          {post?.title}
        </div>

        <img src={post?.img} className="w-full h-82 mb-10" alt="" />
        <div
          className="pb-12 px-2 lg:px-0"
          dangerouslySetInnerHTML={createMarkup(post?.description)}
        />
        <Comment post_id={id} />
      </div>

      <Roh />
    </div>
  );
};

export default Post;
