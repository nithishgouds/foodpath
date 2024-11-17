import './loginsignup.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Axios from 'axios';
import Birds from 'vanta/src/vanta.waves';
import HeaderStationary from "../homepagenew/components/HeaderStationary";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Birds({
      el: '#vanta',
      color: "#1c2e3b",
      shininess: 67,
      waveHeight: 11.5,
      zoom: 0.7,
      speed: 3
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleButton = async () => {
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const response = await Axios.post('http://localhost:3001/auth/login', {
        email: email,
        password: password,
      });
      console.log("Response:", response.data);

      if (response.data.token) {
        localStorage.setItem('jwtToken', response.data.token);
        navigate('/');
      } else {
        alert("Login failed: No token received");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed: Please check your credentials and try again.");
    }
  };

  return (
      <>
        <HeaderStationary />
        <div className="loginelements">
          <div className="vantaelements" id="vanta"></div>
          <div className="loginfields">
            <div className="emptyspacetop"></div>
            <label className="loginfieldtitle">Log In</label>
            <label className="loginfieldlabel">Username</label>
            <input className="logininput" type="text" onChange={(e) => { setEmail(e.target.value) }} />
            <label className="loginfieldlabel">Password</label>
            <div className="password-container">
              <input
                  type={showPassword ? 'text' : 'password'}
                  className="logininput"
                  onChange={(e) => { setPassword(e.target.value) }}
              />
              <i
                  className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? 'Hide password' : 'Show password'}
              ></i>
            </div>
            <button className="loginbutton" onClick={handleButton}>Login</button>
            <div className="asksignup">
              <label className="asulabel">No Account? </label>
              <a className="asua" href='/signup'>Register</a>
            </div>
          </div>
        </div>
      </>
  );
}
