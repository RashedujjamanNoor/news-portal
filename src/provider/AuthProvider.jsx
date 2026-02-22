import { createContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authData = {
    loginWithGoogle,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
