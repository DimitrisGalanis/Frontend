import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Login = () => {
  const [err, setError] = useState(null);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="main flex min-h-full overflow-hidden pt-10 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <div className="relative mt-7">
          <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
            Sign in to account
          </h1>

          <p className="mt-3 text-center text-lg text-gray-600">
            Don't have an account ?{" "}
            <Link
              to="/signup"
              className="text-cyan-800 font-semibold underline"
            >
              Sign up
            </Link>{" "}
            for a free trial.
          </p>
        </div>

        <div className="-mx-4 mt-10 flex-auto bg-white py-10 px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-3xl sm:p-24">
          <form>
            <div className="space-y-6">
              {/* Email  */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Username
                </label>
                <input
                  onChange={handleChange}
                  name="username"
                  id="username"
                  autoComplete="username"
                  required
                  className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm "
                ></input>
              </div>

              {/* Password  */}
              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                />
              </div>
            </div>
          </form>

          <button
            onClick={handleSubmit}
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 
            outline-offset-2 transition-colors relative overflow-hidden bg-cyan-800 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors mt-8 w-full"
          >
            Sign in to account
          </button>
          {err && (
            <div className="pt-10">
              <div
                className="flex px-3 py-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Error Info</span>
                <div>
                  <span className="font-medium">{err}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
