import React from "react";
import { Link } from "react-router";

export const LoginPage = () => {
  return (
    <div className="bg-base-300 min-h-screen flex justify-center items-center px-2">
      <div className="card-body p-15 bg-white rounded-sm max-w-150">
        <div className="flex justify-center font-bold text-xl text-accent">
          <h2>Login your account</h2>
        </div>
        <form className="fieldset">
          <label className="label font-bold">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full bg-base-200"
            placeholder="Email"
          />
          <label className="label font-bold">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full bg-base-200"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-gray-800 mt-4 text-white">Login</button>
        </form>
        <div className="text-center text-accent mt-2">
          <p>
            Don't Have An Account?{" "}
            <Link className="text-orange-500 font-semibold" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
