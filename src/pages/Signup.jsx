import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Signup() {
  const [input, setInput] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8800/api/auth/register", input).then(
      (response) => {
        alert(response);
        navigate("/login");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const navigate = useNavigate();

  return (
    <div className="main flex min-h-full overflow-hidden pt-10 sm:py-28 ">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <div className="relative mt-7">
          <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
            Sign up for a new account
          </h1>

          <p className="mt-3 text-center text-lg text-gray-600">
            Already registered ?{" "}
            <Link to="/login" className="text-cyan-800 font-semibold underline">
              Sign in
            </Link>{" "}
            to your account.
          </p>
        </div>

        <div className="-mx-4 mt-10 flex-auto bg-white py-10 px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-3xl sm:p-24">
          <form>
            <div className="grid grid-cols-2 gap-6">
              {/* First name  */}
              <div>
                <label
                  htmlFor="Username"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Username
                </label>
                <input
                  name="username"
                  onChange={handleChange}
                  id="Username"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900
                   placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-gray-900"
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  onChange={handleChange}
                  className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400
                   focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Email Adress
                </label>

                <input
                  name="email"
                  onChange={handleChange}
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400
                 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                ></input>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Password
                </label>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  required
                  className="block w-full appearance-none rounded-lg border border-gray-200
                   bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="newslater"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Get weekly articles on your inbox from{" "}
                  <strong>Newsletter</strong>?
                </label>
                <select
                  id="newslater"
                  name="newslatter"
                  className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm pr-8"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </form>

          <button
            onClick={handleSubmit}
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 
            outline-offset-2 transition-colors relative overflow-hidden bg-cyan-800 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors mt-8 w-full"
          >
            Get Started today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
