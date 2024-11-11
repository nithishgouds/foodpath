import "./loginsignup.css";
import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
import Birds from "vanta/src/vanta.waves";
import Header from "../homepagenew/components/Header";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLength, setEmailLength] = useState(false);
  const [pwLength, setPWLength] = useState(false);
  const [isMsg, setIsMsg] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Birds({
      el: "#vanta",
      color: "#1c2e3b",
      shininess: 67,
      waveHeight: 11.5,
      zoom: 0.7,
    });
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleButton = async () => {
    setIsMsg(false);
    console.log("Email:", email);
    console.log("Password:", password);
    if (email.length < 6 || email.length > 20) {
      console.log("low email");
      setEmailLength(true);
    } else {
      setEmailLength(false);
    }
    if (password.length < 6 || password.length > 20) {
      console.log("low pw");
      setPWLength(true);
    } else {
      setPWLength(false);
    }
    if (!pwLength && !emailLength) {
      try {
        const response = await Axios.post("http://localhost:3001/auth/login", {
          email: email,
          password: password,
        });
        console.log("Response:", response.data);

        if (response.data.token) {
          localStorage.setItem("jwtToken", response.data.token);
          navigate("/");
        } else {
          alert("Login failed: No token received");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        setMsg("Invalid Login Credentials");
        setIsMsg(true);
      }
    }
  };

  return (
    <>
      <div className="main-background bg-gray-500 flex flex-col min-h-screen items-center  px-4">
      <Header />
      <div className="loginelements" style={{marginTop:'25px'}}>
        <div className="vantaelements" id="vanta"></div>
        <div className="loginfields">
          <div className="emptyspacetop"></div>
          <label className="loginfieldtitle">Log In</label>
          <label className="loginfieldlabel">Username</label>
          <input
            className="logininput"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <div>
            {emailLength && (
              <label
                className="asulabel"
                style={{ color: "#fc2828", marginBottom: "6px" }}
              >
                Enter a valid username with 6-20 characters
              </label>
            )}
          </div>
          <label className="loginfieldlabel">Password</label>
          <input
            type="password"
            className="logininput"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <div>
            {pwLength && (
              <label className="asulabel" style={{ color: "red" }}>
                Enter a valid password with 6-20 characters
              </label>
            )}
          </div>
          <button className="loginbutton" onClick={handleButton}>
            Login
          </button>
          <div>
            {isMsg && (
              <label className="asulabel" style={{ color: "red" }}>
                {msg}
              </label>
            )}
          </div>
          <div className="asksignup">
            <label className="asulabel">No Account? </label>
            <a className="asua" href="/signup">
              Register
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
