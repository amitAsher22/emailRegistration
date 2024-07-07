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
        <input className="inputText" name="email" placeholder="email" />
        <br />
        <input
          className="inputText"
          name="password"
          type="password"
          placeholder="password"
        />
        <br />
        <br />
        <button className="btn">{login ? "SignIn" : "Signup"}</button>
      </form>
    </div>
  );
}

export default Registionandlogin;
