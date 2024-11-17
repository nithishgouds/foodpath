import './loginsignup.css';
import { useState, useEffect } from 'react';
import Birds from 'vanta/src/vanta.birds';
import { useNavigate } from 'react-router-dom';
import Header from '../homepagenew/components/HeaderStationary';
import Axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [emailLength, setEmailLength] = useState(false);
  const [pwLength, setPWLength] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Birds({
      el: "#vanta",
      backgroundColor: "#1c2e3b",
      color1: "#ff0b0b",
      color2: "#ef9d39",
      quantity: 5,
      birdSize: 1.3,
      wingSpan: 21,
      speedLimit: 7,
      separation: 17,
      alignment: 20,
      cohesion: 22,
    });
  }, []);

  const handleButton = async () => {
    console.log(email);
    console.log(password);
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
    if (!pwLength || !emailLength){
        return;
    }
    else{
      try {
        const response = await Axios.post("http://localhost:3001/auth/signup", {
          email: email,
          password: password,
        });
        if (response.data.message === "User created successfully") {
          navigate("/login");
        } 

        console.log(response.data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log('Error 400: Bad Request');
          setUserExist(true);
        } else {
          console.error('An error occurred:', error.message);
          // Handle other errors or rethrow
        }
      }
    }
  };

  return (
      <>
        <Header />
        <div className="loginelements">
          <div className="vantaelements" id="vanta"></div>
          <div className="loginfields">
            <label className="signupfieldtitle">Create Account</label>
            <label className="loginfieldlabel">Username</label>
            <input
                className="logininput"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
            />
            <div>
              {emailLength && (
                  <label className="asulabel" style={{ color: "#fc2828", marginBottom: "6px" }}>
                    Enter a valid username with 6-20 characters
                  </label>
              )}
            </div>
            <label className="loginfieldlabel">Password</label>
            <div className="password-container">
              <input
                  type={showPassword ? "text" : "password"}
                  className="logininput password-input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
              />
              <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} eye-icon`}
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? "Hide password" : "Show password"}
              ></i>
            </div>
            <div>
              {pwLength && (
                  <label className="asulabel" style={{ color: "red" }}>
                    Enter a valid password with 6-20 characters
                  </label>
              )}
            </div>
            <button className="loginbutton" onClick={handleButton}>
              Sign Up
            </button>
              {userExist && (
                  <label className="asulabel" style={{ color: "#ca8263", marginTop:'20px' }}>
                    User already exists!
                  </label>
              )}
            <div className="asksignup">
              <label className="asulabel">Have an Account? </label>
              <a className="asua" href="/login">
                Log In
              </a>
            </div>
          </div>
        </div>
      </>
  );
}
