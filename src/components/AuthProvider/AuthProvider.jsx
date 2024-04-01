import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  signOut
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const longinUser = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const logOut = () =>{
    return signOut(auth)
  }

  const signInWithGoogle = () => {};
  const signInWithFacebook = () => {
    setLoading(true)
    return signInWithPopup(auth, facebookProvider);
  };
  const signInWithGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("auth changed", currentUser);
        setUser(currentUser);
        setLoading(false);
        localStorage.removeItem("path")
        // ...
      }
      else{
        setUser(null)
        setLoading(false)
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    longinUser,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    loading,
    logOut
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
