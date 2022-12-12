import React from "react";
import { Link } from "react-router-dom";

function Login() {
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
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Email Adress
                </label>
                <input
                  id="email"
                  autoComplete="email"
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
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 
            outline-offset-2 transition-colors relative overflow-hidden bg-cyan-800 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors mt-8 w-full"
          >
            Sign in to account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
