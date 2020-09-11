import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { auth, provider } from "./firebase";

import "./Login.css";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //   console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    //fancy firebase stuff
  };

  const signInwithGoogle = (e) => {
    auth
      .signInWithPopup(provider)
      .then((auth) => {
        //   console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    // fancy firebase stuff
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt="Amazon_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon Fake Clone Conditions of Use and
          Privacy Notice.
        </p>

        <button className="login__signInButton" onClick={signInwithGoogle}>
          Sign In with Google
        </button>

        <button className="login__registerButton" onClick={register}>
          Create your Fake Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
