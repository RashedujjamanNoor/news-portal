import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

export const LoginPage = () => {
  const { loginWithGoogle, setUser, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((res) => {
        setUser(res.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
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
    //console.log(email, pass);
    try {
      await login(email, pass);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-base-300 min-h-screen flex justify-center items-center px-2">
      <div className="card-body p-15 bg-white rounded-sm max-w-150">
        <div className="flex justify-center font-bold text-xl text-accent">
          <h2>Login your account</h2>
        </div>
        <form onSubmit={handleLogin} className="fieldset">
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
          <button type="submit" className="btn bg-gray-800 mt-4 text-white">
            Login
          </button>
        </form>
        <button
          className="btn bg-white text-black border-[#e5e5e5]"
          onClick={handleGoogleSignIn}
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
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
