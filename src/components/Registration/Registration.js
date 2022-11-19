import React from "react";
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from "../../Hook/firebaseConfig";

import toast from 'react-hot-toast';


const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate=useNavigate()

  const auth = getAuth(app);

  const handleName = (e) => {
    if (!/^[a-zA-Z ]+$/.test(e.target.value)) {
      setError("please provide valide name");
      return;
    }
    setName(e.target.value);
    setError("");
  };

  const handleEmail = (e) => {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setError("please enter valid email address");
      return;
    }
    setEmail(e.target.value);
    setError("");

    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    if (!/[0-7]/.test(e.target.value)) {
      setError("password must be 7digit");
      return;
    }
    setError("");
    setPassword(e.target.value);
  
    console.log(e.target.value);
  };

  const registerForm = (event) => {

if(email && password){
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in 
      const user = result.user;
      toast("user singup success")
      Navigate("/login")
      uptgrarUser()
      
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
      
      // ..
    });
}


    event.preventDefault();
  };

const uptgrarUser=()=>{
 
updateProfile(auth.currentUser, {
  displayName:name, 
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
}

  return (
    <div className="mt-5">
      <div className="main-container d-flex container justify-content-between align-items-center">
        <div className="register-image image-fluid w-100  ">
          <img
            className="w-100 img-fluid image-fluid"
            src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
            alt=""
          />
        </div>
        <div className="register-form  w-100">
          <div className="input-box">
            <p className="text-danger">{error}</p>
            <form>
              <input
                onBlur={handleName}
                className="form-control p-3 m-2"
                type="text"
                placeholder="Enter your name"
                required
              />
              <input
                onBlur={handleEmail}
                className="form-control p-3 m-2"
                type="email"
                placeholder="Email"
                required
              />
              <input
                onBlur={handlePassword}
                className="form-control p-3 m-2"
                type="password"
                placeholder="password"
                required
              />
              <p className="link ">
                <Link to="/login" className="text-decoration-none">
                  <small className="text-danger link">
                    already have an account? please login
                  </small>
                </Link>
              </p>
              <input className="p-2" type="checkbox" />{" "}
              <span className="mb-3">accept term & condition</span>
              <br />
              <button
                onClick={registerForm}
                type="submit"
                className="btn btn-info p-3 w-50 mt-3 fw-bold text-white"
              >
                Register
              </button>
            </form>
          </div>
          <button className="btn mt-3 border d-flex align-items-center justify-content-evenly p-2 m-auto">
            <img
              className="w-25 image-fluid btn-image"
              src="https://img.icons8.com/color/344/google-logo.png"
              alt=""
            />
            <p className="fw-bold">Google SignIn</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
