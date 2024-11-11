
import './loginsignup.css';
import Header from '../homepagenew/components/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Axios from 'axios';
import Birds from 'vanta/src/vanta.birds';

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    Birds({
      el:'#vanta',
      backgroundColor: "#1c2e3b",
      color1: "#ff0b0b",
      color2: "#ef9d39",
      quantity: 5,
      birdSize: 1.3,
      wingSpan: 21,
      speedLimit: 7,
      separation: 17,
      alignment: 20,
      cohesion: 22
    })
  },[])

  const handleButton = async () => {
    console.log(email);
    console.log(password);
    try{
      const response = await Axios.post('http://localhost:3001/auth/signup', {
          email:email,
          password:password
        });
        if(response.data.message == "User created successfully" ){
          navigate('/login');
        }
      
      console.log(response.data);
    }catch(e){
      console.log(e)
    }

  }
  

  return(
    <>
      <Header/>
      <div className="loginelements">
      <div className="vantaelements" id="vanta"></div>
      <div className="loginfields">
        {/* <div className="emptyspacetop"></div> */}
        <label className="signupfieldtitle">Create Account</label>
        <label className="loginfieldlabel" >Username</label>
        <input className="logininput" onChange={(e) => {setEmail(e.target.value)}}></input>
        <label className="loginfieldlabel" >Password</label>
        <input type='password' className="logininput" onChange={(e) => {setPassword(e.target.value)}}></input>
        <button className="loginbutton" onClick={handleButton}>Sign Up</button>
        <div className="asksignup">
          <label className="asulabel">Have an Account? </label>
          <a className="asua" href='/login'>Log In</a>
        </div>
      </div>
      </div>
    </>
  );
}