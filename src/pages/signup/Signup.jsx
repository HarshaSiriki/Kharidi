import React, { useState } from "react";
export const Signup =(props)=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="signupFormContainer">
      <h2>Register</h2>
      <form className="signup_form">
        <label for="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Enter your Full Name"
        />
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email address"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        ></input>
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        ></input>
        Enter Your Address
        <label for="StreetAddress1">StreetAddress1</label>
        <input
          type="text"
          placeholder="StreetAddress1"
          id="addressline1"
        ></input>
        <label for="StreetAddress2">StreetAddress2</label>
        <input
          type="text"
          placeholder="StreetAddress2"
          id="addressline2"
        ></input>
        <label for="City">City</label>
        <input type="text" placeholder="City" id="city"></input>
        <label for="State">State</label>
        <input type="text" placeholder="State" id="state"></input>
        <label for="PostalCode">PostalCode</label>
        <input type="text" placeholder="PostalCode" id="postalcode"></input>
        <label for="Country">Country</label>
        <input type="text" placeholder="Country" id="country"></input>
        <button type="submit">Register</button>
      </form>
      <button
        className="loginbutton"
        onClick={() => props.onFormSwitch("Login")}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
}

