import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ post_id }) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/comments/${post_id}`
        );
        setComments(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [post_id]);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg px-2 pb-12 mb-8 container mx-auto max-w-8xl">
        {comments && comments.length > 0 && (
          <>
            <div className="text-2xl mb-4 font-semibold border-b pb-4">
              <h1>
                {comments.length > 1 ? (
                  <h1>{comments.length} Comments</h1>
                ) : (
                  <h1>{comments.length} Comment</h1>
                )}
              </h1>
            </div>

            <ul className="comments">
              {comments.map((comment, index) => (
                <div className="border-b border-gray-100 mb-4 pb-4" key={index}>
                  <p className="mb-2">
                    <span className="font-semibold text-xl">
                      {comment.name}
                    </span>
                  </p>
                  <p className="whitespace-pre-line text-gray-600 w-full text-lg">
                    {comment.comment}
                  </p>
                </div>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="bg-white shadow-lg rounded-lg px-2 pb-12 mb-8 container mx-auto max-w-8xl ">
        <h3 className="text-2xl mb-8 font-semibold border-b pb-4">
          Leave a Reply
        </h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea
            className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            name="comment"
            placeholder="Comment"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            value="{formData?.name}"
            onChange="{onInputChange}"
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Name"
            name="name"
          />
          <input
            type="email"
            value="{formData.email}"
            onChange="{onInputChange}"
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Email"
            name="email"
          />
        </div>

        <p className="text-xs text-red-500">All fields are mandatory ?</p>

        <div className="mt-8">
          <button
            type="button"
            onClick="{handlePostSubmission}"
            className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-rose-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
          >
            Post Comment
          </button>

          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment submitted for review
          </span>
        </div>
      </div>
    </>
  );
};

export default Comments;
