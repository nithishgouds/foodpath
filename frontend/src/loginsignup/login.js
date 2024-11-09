import './loginsignup.css';
import Snavbar from '../homepage/snavbar';
import { useState } from 'react';
import React from 'react';
import Axios from 'axios';

export default function Login(){
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  // const [isSignup, setIsSignup] = useState(false);

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };

  const handleButton = async () => {
    console.log(username);
    console.log(password);
    console.log(isSignup);
    try{
    const response = await Axios.post('http://localhost:3001/authRoutes', {
        // pagetype:isSignup,
        email:username,
        password:password
      });
      console.log(response.data);
    }catch(e){
      console.log(e)
    }

  }
  

  return(
    <>
      <Snavbar/>
      <div>
      <div class="loginelements">
        <div class="emptyspace1">
        </div>
        <div class="loginpage">
          <div class="loginfield">
            <div class="loginheadtitle">
              Log In
            </div>
            <text class="logintitle">
              Email
            </text>
            <input class="logininput" onChange={(e)=>{setUsername(e.target.value)}}></input>
            <text class="logintitle">
              Password
            </text>
            <input class="logininput" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button class="loginbutton" onClick={handleButton}>Login</button>
            <t class="logint"  >No account?<a class="logina" href="/signup">Sign Up</a></t>
          </div>
        </div>
        <div class="emptyspace">
        </div>
      </div>
      </div>
    </>
  );
}
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
