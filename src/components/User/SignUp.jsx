import React, { useState } from "react";
import "./SignUp.css";

const SignUp = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("Sign up successful!");
    onSignup(email, password, displayName);
  };

  return (
    <div className="signup-container">
      <div className="signup-inner-container">
        <h2 className="signup-title">Sign up for an account</h2>
      </div>

      <div className="signup-form-container">
        <div className="signup-form-inner-container">
          <form onSubmit={handleSignup} className="signup-form">
            <input
              type="text"
              placeholder="Display name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="signup-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Retype password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              className="signup-input"
            />
            <button type="submit" className="signup-button">
              Sign up
            </button>
          </form>
        </div>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SignUp;
