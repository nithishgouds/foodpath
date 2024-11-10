//------------------------
// import './loginsignup.css';
// import Snavbar from '../homepage/snavbar';
// import { useState } from 'react';
// import React from 'react';
// import Axios from 'axios';

// export default function Login() {
//   const [username,setUsername]=useState("");
//   const [password,setPassword]=useState("");
//   const [isSignup, setIsSignup] = useState(false);

//   const toggleMode = () => {
//     setIsSignup(!isSignup);
//   };

//   const handleButton = async () => {
//     console.log(username);
//     console.log(password);
//     console.log(isSignup);
//     try{
//     const response = await Axios.post('http://localhost:3001/authRoutes', {
//         // pagetype:isSignup,
//         email:username,
//         password:password
//       });
//       console.log(response.data);
//     }catch(e){
//       console.log(e)
//     }

//   }

//   return (
//     <>
//       <Snavbar />
//       <div>
//         <div className="loginelements">
//           <div className="emptyspace1">
//           </div>
//           <div className="loginpage" >
//             <div className="loginfield">
//               <div className="loginheadtitle">
//                 {isSignup ? 'Create Account' : 'Log In'}
//               </div>
//               <label className="logintitle">Username</label>
//               <input className="logininput" type="text" onChange={(e)=>{setUsername(e.target.value)}} />

//               <label className="logintitle">Password</label>
//               <input className="logininput" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>

//               <button className="loginbutton" onClick={handleButton}>
//                 {isSignup ? 'Sign Up' : 'Login'}
//               </button>
              
//               <div className="logint">
//                 {isSignup ? (
//                   <>Already have an account? <a className="logina" onClick={toggleMode}>Log In</a></>
//                 ) : (
//                   <>No account? <a className="logina" onClick={toggleMode}>Sign Up</a></>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="emptyspace">
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import './loginsignup.css';
import Snavbar from '../homepage/snavbar';
import { useEffect, useState, alert, navigate } from 'react';
import React from 'react';
import Axios from 'axios';
import Birds from 'vanta/src/vanta.birds';
import Header from "../homepagenew/components/Header";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isSignup, setIsSignup] = useState(false);

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
  // const toggleMode = () => {
  //   setIsSignup(!isSignup);
  // };

  const handleButton = async () => {
    console.log(email);
    console.log(password);
    // console.log(isSignup);
    try{
      const response = await Axios.post('http://localhost:3001/auth/login', {
          // pagetype:isSignup,
          email:email,
          password:password
        });
      alert(response.message);
      if(response.message == "User created successfully"){
        navigate('/login');
      }
      
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
        <div className="emptyspacetop"></div>
        <label className="loginfieldtitle">Log In</label>
        <label className="loginfieldlabel">Username</label>
        <input className="logininput"></input>
        <label className="loginfieldlabel">Password</label>
        <input className="logininput"></input>
        <button className="loginbutton">Login</button>
        <div className="asksignup">
          <label className="asulabel">No Account? </label>
          <a className="asua" href='/signup'>Register</a>
        </div>
      </div>
      </div>
    </>
  );
}
