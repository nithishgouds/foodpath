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
import { useEffect, useState} from 'react';
import React from 'react';
import Axios from 'axios';
import Birds from 'vanta/src/vanta.waves';
import HeaderStationary from "../homepagenew/components/HeaderStationary";
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  useEffect(() => {
    Birds({
      el:'#vanta',
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

  
  

  return(
    <>
      <HeaderStationary/>
      <div className="loginelements">
      <div className="vantaelements" id="vanta"></div>
      <div className="loginfields">
        <div className="emptyspacetop"></div>
        <label className="loginfieldtitle">Log In</label>
        <label className="loginfieldlabel">Username</label>
        <input className="logininput" onChange={(e) => {setEmail(e.target.value)}}></input>
        <label className="loginfieldlabel">Password</label>
        <input type='password' className="logininput" onChange={(e) => {setPassword(e.target.value)}}></input>
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
