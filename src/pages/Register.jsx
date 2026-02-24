import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

import Swal from "sweetalert2";

export const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    if (pass.length < 6) {
      return Swal.fire({
        title: "Password Must Be At Least 6 Charecter",
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
        },
      });
    }
    const data = {
      displayName: name,
    };

    try {
      await createUser(email, pass);
      await updateUserProfile(data);
      await Swal.fire({
        title: "Registration Successful!",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-base-300 min-h-screen flex justify-center items-center px-2">
        <div className="card-body p-15 bg-white rounded-sm max-w-150">
          <div className="flex justify-center font-bold text-xl text-accent">
            <h2>Register your account</h2>
          </div>
          <hr className="text-gray-400 mt-4" />
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label font-bold">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full bg-base-200"
              placeholder="Enter your name"
            />
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

            <button type="submit" className="btn bg-gray-800 mt-4 text-white">
              Register
            </button>
          </form>
          <div className="text-center text-accent mt-2">
            <p>
              Don't Have An Account?{" "}
              <Link
                className="text-orange-500 font-semibold hover:underline"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
