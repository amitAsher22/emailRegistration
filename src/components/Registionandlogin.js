import React, { useState } from "react";
import { database } from "../firebase/FireBaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import img1 from "../images/avatar.png";

function Registionandlogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handeleSubmit = (e, type) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/Home");
          setLogin(true);
        })
        .catch((err) => {
          alert(err.code);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/Home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
    const validationError = {};
    if (!formData.password.trim()) {
      validationError.password = "password is required";
    }
    if (!formData.email.trim()) {
      validationError.email = "email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationError.username = "user name is not valid";
    }

    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      alert("form succesfull");
    }
  };

  return (
    <div className="App">
      <div className="row">
        <div
          className={login === false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>
        <div
          className={login === true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
        >
          SignIn
        </div>
      </div>
      <div>
        <img src={img1} className="avatar" alt="avatar21" />
      </div>
      <h1>{login ? "SignIn" : "Signup"}</h1>
      <form
        onSubmit={(e) => handeleSubmit(e, login ? "signin" : "signup")}
        className="formSignIn"
      >
        <input
          className="inputText"
          name="email"
          placeholder="example@gamil.com"
        />
        {errors.email && <span>{errors.email}</span>}
        <br />
        <input
          className="inputText"
          name="password"
          type="password"
          placeholder="*****"
        />
        {errors.password && <span>{errors.password}</span>}
        <br />
        <br />
        <button className="btn">{login ? "SignIn" : "Signup"}</button>
      </form>
    </div>
  );
}

export default Registionandlogin;
