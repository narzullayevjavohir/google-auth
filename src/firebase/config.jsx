// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_usp8obUqEuN_dG-Y7zakG1vqtGfOAMc",
  authDomain: "auth-e8e1f.firebaseapp.com",
  projectId: "auth-e8e1f",
  storageBucket: "auth-e8e1f.appspot.com",
  messagingSenderId: "251590241020",
  appId: "1:251590241020:web:22d063d40d704e260f0579",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
      const fullName = res.user.displayName;
      const email = res.user.email;
      const profilePic = res.user.photoURL;
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((err) => {
      console.log(err);
    });
};
