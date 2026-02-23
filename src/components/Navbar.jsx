import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-3 gap-4 w-full my-4">
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
          {user ? (
            <button onClick={() => logout()} className="btn btn-primary">
              <Link>Log Out</Link>
            </button>
          ) : (
            <button className="btn btn-primary">
              <Link to="/auth/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
