import React from "react";
import { signInWithGoogle } from "../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import { getName, getEmail, getImg } from "../slices/auth.slice";

const GoogleAuth = () => {
  const fullName = useSelector((state) => state.fullName);
  const email = useSelector((state) => state.email);
  const imgUrl = useSelector((state) => state.imgUrl);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getName());
    dispatch(getEmail());
    dispatch(getImg());
    signInWithGoogle();
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-blue-400 text-white px-10 py-5"
      >
        Sign In with Google
      </button>
      <h1>{fullName}</h1>
      <h2>{email}</h2>
      <img
        src={imgUrl}
        className={`${imgUrl ? `block` : `hidden`}`}
        alt="pic"
      />
    </>
  );
};

export default GoogleAuth;
