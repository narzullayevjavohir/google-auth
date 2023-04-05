import React from "react";
import { signInWithGoogle } from "../firebase/config";

const GoogleAuth = () => {
  return (
    <>
      <button
        onClick={signInWithGoogle}
        className="bg-blue-400 text-white px-10 py-5"
      >
        Sign In with Google
      </button>
      <h1>{localStorage.getItem("fullName")}</h1>
      <h2>{localStorage.getItem("email")}</h2>
      <img src={localStorage.getItem("profilePic")} alt="pic" />
    </>
  );
};

export default GoogleAuth;
