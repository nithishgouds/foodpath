// // import './loginsignup.css';
// // import Snavbar from '../homepage/snavbar';
// // import { useState } from 'react';

// // export default function (){

// //   return(
// //     <>
// //       <Snavbar/>
// //       <div>
// //       <div className="loginelements">
// //         <div className="emptyspace1">
// //         </div>
// //         <div className="loginpage">
// //           <div className="loginfield">
// //             <div className="loginheadtitle">
// //               Create Account
// //             </div>
// //             <text className="logintitle">
// //               Username
// //             </text>
// //             <input className="logininput"></input>
// //             <text className="logintitle">
// //               Password
// //             </text>
// //             <input className="logininput"></input>
// //             <button className="loginbutton">Sign Up</button>
// //             <t className="logint"  >Go Back to <a className="logina" href="/login">Login</a></t>
// //           </div>
// //         </div>
// //         <div className="emptyspace">
// //         </div>
// //       </div>
// //       </div>
// //     </>
// //   );
// // }
// import './loginsignup.css';
// import Snavbar from '../homepage/snavbar';
// import { useState } from 'react';
// import React from 'react';
// import Axios from 'axios';

// export default function Login(){
//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");
//   // const [isSignup, setIsSignup] = useState(false);

//   // const toggleMode = () => {
//   //   setIsSignup(!isSignup);
//   // };

//   const handleButton = async () => {
//     console.log(email);
//     console.log(password);
//     // console.log(isSignup);
//     try{
//     const response = await Axios.post('http://localhost:3001/auth/signup', {
//         // pagetype:isSignup,
//         email:email,
//         password:password
//       });
//       console.log(response.data);
//     }catch(e){
//       console.log("Error found")
//     }

//   }

//   return(
//     <>
//       <Snavbar/>
//       <div>
//       <div className="loginelements">
//         <div className="emptyspace1">
//         </div>
//         <div className="loginpage">
//           <div className="loginfield">
//             <div className="loginheadtitle">
//               Create Account
//             </div>
//             <text className="logintitle">
//               Email
//             </text>
//             <input className="logininput" onChange={(e)=>{setEmail(e.target.value)}}></input>
//             <text className="logintitle">
//               Password
//             </text>
//             <input className="logininput" onChange={(e)=>{setPassword(e.target.value)}}></input>
//             <button className="loginbutton" onClick={handleButton}>Login</button>
//             <t className="logint"  >Have an account?<a className="logina" href="/login">Login</a></t>
//           </div>
//         </div>
//         <div className="emptyspace">
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }
import "./loginsignup.css";
import Header from "../homepagenew/components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Axios from "axios";
import Birds from "vanta/src/vanta.birds";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLength, setEmailLength] = useState(false);
  const [pwLength, setPWLength] = useState(false);
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
  const renderEmailLengthDiv = () => {
    if (emailLength) {
      console.log("In el");
      return (
        <label className="asulabel" style={{ color: "red" }}>
          Enter a valid username with 6-20 characters
        </label>
      );
    }
    return null;
  };
  const renderPWLengthDiv = () => {
    if (pwLength) {
      console.log("In pl");
      return (
        <label className="asulabel" style={{ color: "red" }}>
          Enter a valid username with 6-20 characters
        </label>
      );
    }
    return null;
  };

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
    if (pwLength && emailLength) {
      return;
    }
    try {
      const response = await Axios.post("http://localhost:3001/auth/signup", {
        email: email,
        password: password,
      });
      if (response.data.message == "User created successfully") {
        navigate("/login");
      }

      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <div className="loginelements">
        <div className="vantaelements" id="vanta"></div>
        <div className="loginfields">
          {/* <div className="emptyspacetop"></div> */}
          <label className="signupfieldtitle">Create Account</label>
          <label className="loginfieldlabel">Username</label>
          <input
            className="logininput"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          {/* <div>{renderEmailLengthDiv}</div> */}
          <div>
            {emailLength && (
              <label className="asulabel" style={{ color: "red" }}>
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
          {/* <div>{renderPWLengthDiv}</div> */}
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
