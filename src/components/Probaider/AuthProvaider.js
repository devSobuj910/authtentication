import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import app from "../../Firebase_cosnfig/Firevasae.consfig";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();


const auth = getAuth(app);

const AuthProvaider = ({ children }) => {
const [user,setUser]=useState(null)
const [loding,setLodding]=useState(true)

  const createUser = (eamil, password) => {
    return createUserWithEmailAndPassword(auth, eamil, password);
  
  };

const uptgraUser = (name)=>{
  return updateProfile(auth.currentUser,{displayName:name})
}

const veryfy=()=>{
  sendEmailVerification(auth.currentUser)
}

const sinupGoogle=()=>{
  setLodding(true)
return  signInWithPopup(auth,googleProvider)
}



  const login = (email, password) => {
    setLodding(true)
    return signInWithEmailAndPassword(auth, email, password);
  };




const logout=()=>{
  setLodding(true)
return signOut(auth)
}

 
  useEffect(()=>{
   //
    
    const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      setLodding(false); 
    })
    return ()=>{
      unsubscribe()

    }
  },[])




  const authinfo = {
    createUser,
    uptgraUser,
    veryfy,
    sinupGoogle,
    user,
    login,
    loding,
    logout
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;

// asinemnt
// ///

// calender
// admin rout api
// admin rou secure
// use tolken
// dasbord
//  image uplod
// deployment>
