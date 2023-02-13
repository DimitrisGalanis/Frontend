import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentPostForm from "./CommentPostForm";

const Comments = ({ post_id }) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_rubiks_api + `api/comments/${post_id}`
        );
        setComments(res.data);
        // console.log(res.data);
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
              <div>
                {comments.length > 1 ? (
                  <h1>{comments.length} ΣΧΟΛΙΑ</h1>
                ) : (
                  <h1>{comments.length} ΣΧΟΛΙΟ</h1>
                )}
              </div>
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
      <CommentPostForm
        postid={post_id}
        comments={comments}
        setComments={setComments}
      />
    </>
  );
};

export default Comments;
