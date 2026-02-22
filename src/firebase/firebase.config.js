// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDK0CFoA4nrCmEl_kFNeFe4n2H4xHWyag",
  authDomain: "news-portal-f607b.firebaseapp.com",
  projectId: "news-portal-f607b",
  storageBucket: "news-portal-f607b.firebasestorage.app",
  messagingSenderId: "262307025234",
  appId: "1:262307025234:web:282408586f629de9c42a8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
