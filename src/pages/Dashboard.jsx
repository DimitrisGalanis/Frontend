import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import edit from "../images/edit.png";
import deleteIcon from "../images/delete.png";
import ErrorPage from "../components/ErrorPage";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogout = () => {
    logout();
    navigate("/login");
  };

  function handleEdit(id) {
    navigate(`/edit/${id}`);
  }

  function handleDelete(e, id, username, uid, fullname) {
    e.preventDefault();
    axios
      .delete(`http://localhost:8800/api/posts/${id}`, {
        data: { username, uid, fullname },
      })
      .then((res) => {
        alert(res);
        console.log(res);
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_rubiks_api + "/api/posts/"
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return currentUser ? (
    <div className="container mx-auto max-w-8xl py-5">
      <div className="flex space-x-10">
        <div className="flex flex-col w-44">
          {currentUser && (
            <h1 className="pl-1 font-semibold py-5 text-lg">
              Hello,{" "}
              <span className="text-rose-500"> {currentUser.username}</span>
            </h1>
          )}
          {/* Dashboard */}
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <h1 className="pl-3 font-semibold">Dashboard</h1>
          </div>

          {/* Users */}
          <div className="flex pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <h1 className="pl-3 font-semibold">Users</h1>
          </div>

          {/* Posts */}
          <div className="flex pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-5.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <h1 className="pl-3 font-semibold">Posts</h1>
          </div>

          <div className="pt-4 font-semibold">
            <Link
              to="/write"
              className=" border-2 border-cyan-700 px-2 py-1 rounded-xl hover:bg-cyan-700 hover:text-white"
            >
              Create New <span className="text-rose-500">Post</span>
            </Link>
          </div>
          <div className="font-semibold pt-4">
            <Link
              to="/signup"
              className=" border-2 border-cyan-700 px-2 py-1 rounded-xl hover:bg-cyan-700 hover:text-white"
            >
              Create New<span className="text-rose-500"> User</span>
            </Link>
          </div>

          {currentUser && (
            <button
              className="rounded-full text-md bg-cyan-500 mt-7 w-24 py-0.5"
              onClick={handlelogout}
            >
              Logout
            </button>
          )}
        </div>

        <div className="container py-5 ">
          <div className="flex font-semibold text-lg border-b border-zinc-500 bg-neutral-200 ">
            <div className="w-24">ID</div>
            <div className="w-60">Tittle</div>
            <div className="w-52 pl-10">Created At</div>
            <div className="w-40 ">Author</div>
            <div className="w-40 ml-14">Category</div>
            <div className=" w-40">Edit</div>
            <div className="w-0">Delete</div>
          </div>
          {posts.map((post, key) => (
            <div
              className="flex py-1 border-b  border-zinc-500 mb-1"
              key={key + post.id}
            >
              <div className="w-24">{post.id}</div>
              <div className="w-60">{post.title.slice(0, 25) + ".."}</div>
              <div className="w-52 pl-10">{post.date}</div>
              <div className="w-40 mr-14">{post.fullname}</div>
              <div className="w-40">{post.category}</div>
              {currentUser.username === post.username && (
                <img
                  alt="edit icon"
                  src={edit}
                  className="h-7 object-contain hover:cursor-pointer"
                  onClick={(e) => handleEdit(post.id)}
                />
              )}
              {currentUser.username === post.username && (
                <img
                  alt="delete icon"
                  src={deleteIcon}
                  className="ml-36 h-7 object-contain hover:cursor-pointer"
                  onClick={(e) =>
                    handleDelete(
                      e,
                      post.id,
                      currentUser.username,
                      currentUser.id,
                      post.fullname
                    )
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
}

export default Dashboard;
