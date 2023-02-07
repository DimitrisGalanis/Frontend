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
    <div className="flex container mx-auto px-0 lg:px-3 pt-8 pb-7">
      <div className="post 2xl:w-5/6">
        <p className="text-red-600 font-semibold pb-4">{post.category}</p>
        <div className="text-3xl xl:text-4xl font-bold pb-7 text-black/90 px-2 lg:px-0">
          {post?.title}
        </div>
        <div className="flex">
          <p className="pr-2 font-semibold">{post.fullname}&nbsp; </p>
          <p className=" text-gray-500 pb-2 ">
            {"| "}&nbsp; {post?.date}
          </p>
        </div>
        <img
          src={post?.img}
          className=" w-screen h-97 mb-10 object-fit pr-4"
          alt=""
        />
        <article
          className="pb-12 px-2 lg:px-0 lg:pr-2"
          dangerouslySetInnerHTML={createMarkup(post?.description)}
        />
        <Comment post_id={id} />
      </div>

      <Roh />
    </div>
  );
};

export default Post;
