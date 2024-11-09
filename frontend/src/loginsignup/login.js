import './loginsignup.css';
import Snavbar from '../homepage/snavbar';
import { useState } from 'react';
import React from 'react';
import Axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButton = async () => {
    console.log("Email:", email);
    console.log("Password:", password);
    
    try {
      const response = await Axios.post('http://localhost:3001/auth/login', {
        email: email,
        password: password,
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <Snavbar />
      <div>
        <div className="loginelements">
          <div className="emptyspace1"></div>
          <div className="loginpage">
            <div className="loginfield">
              <div className="loginheadtitle">Log In</div>

              <label className="logintitle">Email</label>
              <input
                type="email"
                className="logininput"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <label className="logintitle">Password</label>
              <input
                type="password"
                className="logininput"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button className="loginbutton" onClick={handleButton}>
                Login
              </button>

              <div className="logint">
                No account? <a className="logina" href="/signup">Sign Up</a>
              </div>
            </div>
          </div>
          <div className="emptyspace"></div>
        </div>
      </div>
    </>
  );
}
