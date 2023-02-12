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
        const res = await axios.get(
          process.env.REACT_APP_rubiks_api + `api/posts/${id}`
        );
        setPost(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className=" container mx-auto px-0 lg:px-24  pt-8 pb-7 ">
      <p className="text-red-600 font-semibold pb-4 uppercase px-2 lg:px-0">
        {post.category}
      </p>
      <div className="text-3xl xl:text-4xl font-bold pb-7 text-black/90 px-2 lg:px-0 w-9/12 font-tasos3 tracking-wider ">
        {post?.title}
      </div>
      <div className="flex pl-2 lg:pl-0">
        <p className="pr-2 font-semibold">{post.fullname}&nbsp; </p>
        <p className=" text-gray-500 pb-2 ">
          {"| "}&nbsp; {post?.date}
        </p>
      </div>
      <div className="flex">
        <div className="post w-full">
          <img
            src={post?.img}
            className="w-full h-99 mb-10 object-cover pr-4"
            alt=""
          />
          <article
            className="pb-5 lg:pb-12 lg:px-0 lg:pr-2 font-tasos2 tracking-wide text-lg leading-loose px-3"
            dangerouslySetInnerHTML={createMarkup(post?.description)}
          />
          <Comment post_id={id} />
        </div>

        <Roh />
      </div>
    </div>
  );
};

export default Post;
