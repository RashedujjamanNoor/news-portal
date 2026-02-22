import React from "react";
import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full mt-4">
      <div className="col-span-1"></div>
      <div className="col-span-1 flex justify-center items-center gap-4 text-accent ">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Career</NavLink>
      </div>
      <div className="col-span-1 flex justify-end items-center gap-4">
        <div>
          <img src="vite.svg" alt="" className="w-10 rounded-full bg-white" />
        </div>
        <div>
          <button className="btn btn-primary">
            <Link>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
