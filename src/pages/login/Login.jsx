import React, { useState } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import Signup from "../signup/Signup";

export const Login = (props) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `Signup`;
    navigate(path);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="loginFormContainer">
      <h2>Login</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
        ></input>
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
        ></input>
        <button type="submit">
          <Link to="/" className="loginButton">
            Login
          </Link>
        </button>
      </form>
      <button>
        <Link to="/Signup" className="registerButton">
          Don't have an account? Register here.
        </Link>
      </button>
    </div>
  );
};
