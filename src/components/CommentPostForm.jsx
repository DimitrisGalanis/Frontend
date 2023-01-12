import axios from "axios";
import React, { useState } from "react";

const CommentPostForm = ({ postid, comments, setComments }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8800/api/comments", {
        name,
        email,
        comment,
        postid,
      })
      .then(
        (response) => {
          console.log(response);
          setComments([...comments, { name, email, comment, postid }]);
          setName("");
          setEmail("");
          setComment("");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg px-2 pb-12 mb-8 container mx-auto max-w-8xl ">
      <form onSubmit={handleCommentSubmit}>
        <h3 className="text-2xl mb-6 font-semibold border-b pb-4">
          ΠΡΟΣΘΗΚΗ ΣΧΟΛΙΟΥ
        </h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <label htmlFor="comment" className="">
            {" "}
            ΣΧΟΛΙΟ
            <textarea
              type="text"
              className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
              name="comment"
              placeholder="Comment"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <label htmlFor="name" className="">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
              placeholder="Name"
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="email" className="">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
              placeholder="Email"
              name="email"
              id="email"
            />
          </label>
        </div>

        <p className="text-xs text-red-500">All fields are mandatory</p>

        <div className="mt-8">
          <button
            type="submit"
            className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-rose-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
          >
            ΑΠΟΣΤΟΛΗ
          </button>

          {/* <span className="text-xl float-right font-semibold mt-3 text-green-500">
        Comment submitted for review
      </span> */}
        </div>
      </form>
    </div>
  );
};

export default CommentPostForm;
