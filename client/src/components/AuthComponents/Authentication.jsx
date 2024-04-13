import React, { useState } from "react";
import { registerUser, loginUser } from "../../utils/api";
import "./Authentication.css";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LoginIcon from "@mui/icons-material/Login";

function Authentication({ setIsLoggedIn }) {
  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleRegisterChange = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(registerFormData);
      console.log("Registration successful");
      // Redirect or show success message
    } catch (error) {
      console.error("Registration failed:", error.message);
      // Show error message
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await loginUser(loginFormData);
      // const { message, userId } = response.data;
      localStorage.setItem("userId", response.userId);
      console.log(localStorage);
      console.log("Login successful");
      setIsLoggedIn(true); // Set isLoggedIn to true after successful login
      // Redirect or show success message
    } catch (error) {
      console.error("Login failed:", error.message);
      // Show error message
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="register-section">
          <p className="input-unit-name">Register</p>
          <input
            className="input-unit"
            type="text"
            name="username"
            placeholder="Username"
            value={registerFormData.username}
            onChange={handleRegisterChange}
            required
          />
          <input
            className="input-unit"
            type="email"
            name="email"
            placeholder="Email"
            value={registerFormData.email}
            onChange={handleRegisterChange}
            required
          />
          <input
            className="input-unit"
            type="password"
            name="password"
            placeholder="Password"
            value={registerFormData.password}
            onChange={handleRegisterChange}
            required
          />
          <button onClick={handleRegister} className="auth-button">
            <PersonAddAlt1Icon />
            Sign Up
          </button>
        </div>
        <div className="login-section">
          <p className="input-unit-name">Login</p>
          <input
            className="input-unit"
            type="email"
            name="email"
            placeholder="Email"
            value={loginFormData.email}
            onChange={handleLoginChange}
            required
          />
          <input
            className="input-unit"
            type="password"
            name="password"
            placeholder="Password"
            value={loginFormData.password}
            onChange={handleLoginChange}
            required
          />

          <button onClick={handleLogin} className="auth-button">
            <LoginIcon />
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default Authentication;
