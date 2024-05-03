import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [UserType, setUserType] = useState("seller");
  const [error, setError] = useState(''); /////pending
  const navigate = useNavigate();

  const handleEmailValue = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  }

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (Email.length > 0 && Password.length > 0) {
      const formData = {
        Email,
        Password,
      };
      console.log(formData);
      try {
        const response = await axios.post(`http://localhost:3000/users/login`, formData); // usertype buyer or seller

        console.log(response.data);

        // redirect
        if (response.data.message === 'Log in Success' && response.status === 200) {
          navigate('/dashboard');
        }
        else {
          console.log('login failed');
        }

      }
      catch (err) {
        console.log('login failed', err);
      }
    } else {
      console.log("Fill all inputs");
    }
  }



  return (
    <div className="login-main">

      <div className="login-center">
        <h2>Welcome </h2>
        <p>Please enter your details</p>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <form onSubmit={handleLoginSubmit}>

          <input
            type="email"
            placeholder="Email"
            name="Email"
            value={Email}
            onChange={handleEmailValue}
            className='search_input'
          />

          <div className="pass-input-div">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="Password"
              value={Password}
              onChange={handlePasswordValue}
              className='search_input'
            />
            {showPassword ? (
              <FaEyeSlash
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            ) : (
              <FaEye
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            )}
          </div>

          <div className="login-center-buttons">
            <button type="submit">Login</button>
          </div>
          <div className="login-center-options">
            <p>Don't have an account? <Link to="/">Sign Up</Link></p>
          </div>
        </form>
      </div>


    </div>
  );
}


export default Login