import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const { currentUser, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/posts/");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto max-w-8xl py-10">
      <div className="flex space-x-10">
        <div className="flex flex-col">
          <h1 className="">Dashboard</h1>
          {currentUser && (
            <button onClick={logout}>
              <span className="bg-red-400">{currentUser?.username} Logout</span>
            </button>
          )}
        </div>

        <div className="container ">
          <div className="flex font-semibold text-lg ">
            <div className="w-24">ID</div>
            <div className="w-60">Tittle</div>
            <div className="w-52 pl-10">Created At</div>
            <div className="w-40">Author</div>
            <div className="w-40">Edit</div>
            <div className="w-40">Delete</div>
          </div>

          <div className="mx-auto flex flex-col">
            {posts.map((post, key) => (
              <div className="flex" key={key + post.id}>
                <div className="w-24">{post.id}</div>
                <div className="w-60">{post.title.slice(0, 25) + ".."}</div>
                <div className="w-52 pl-10">{post.date}</div>
                <div className="w-40">{post.username}</div>
                <div className="w-40">Edit</div>
                <div className="w-40">Delete</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
