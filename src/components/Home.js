import React from "react";
import { signOut } from "firebase/auth";
import { database } from "../firebase/FireBaseConfig";
import { useNavigate } from "react-router-dom";

function Home() {
  const history = useNavigate();

  const signOutHome = () => {
    signOut(database).then((val) => {
      console.log("val", val);
      history("/");
    });
  };

  return (
    <div>
      <h1>Home</h1>

      <button onClick={signOutHome}>SignOut</button>
    </div>
  );
}

export default Home;
