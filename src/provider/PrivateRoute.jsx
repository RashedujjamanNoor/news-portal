import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Swal from "sweetalert2";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  {
    if (loading) {
      return <span className="loading loading-ring loading-xl"></span>;
    }
    if (!user) {
      return <Navigate to={"/auth/login"} />;
    }

    return children;
  }
};
