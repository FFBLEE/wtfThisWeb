import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Api
  };

  return (
    <div className="login-container">
      <div className="login-inner-container">
        <h2 className="login-title">Login to your account</h2>
        <div className="login-form-container">
          <div className="login-form-inner-container">
          
           <div className="socialbotton">
            <button className="btn_login_fb">
            <span><i class="fa-brands fa-facebook"></i></span>
            <span> เข้าสู่ระบบด้วย Facebook </span>
            </button>
            </div>
            <div className="socialbotton">
            <button className="btn_login_line">
              <span><i class="fa-brands fa-line"></i></span>
              <span> เข้าสู่ระบบด้วย Line </span>
            </button>
            </div>
            <div className="socialbotton">
            <button className="btn_login_apple">
              <span><i class="fa-brands fa-apple"></i></span>
              <span>เข้าสู่ระบบด้วย Apple</span>
            </button>
            </div>
            <div className="socialbotton">
            <button className="btn_login_google">
              <span><i class="fa-brands fa-google"></i></span>
              <span>เข้าสู่ระบบด้วย Google</span>
            </button>
            </div>
            <div className="orlogin">
              <span>หรือ เข้าระบบด้วยบัญชี </span>
            </div>
            
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                className="login-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label>Remember me</label>
              </div>
              <button className="login-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
