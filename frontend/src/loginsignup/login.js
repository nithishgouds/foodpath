// import './loginsignup.css';
// import Snavbar from '../homepage/snavbar';
// import { useState } from 'react';

// export default function Login(){
  

//   return(
//     <>
//       <Snavbar/>
//       <div>
//       <div class="loginelements">
//         <div class="emptyspace1">
//         </div>
//         <div class="loginpage">
//           <div class="loginfield">
//             <div class="loginheadtitle">
//               Log In
//             </div>
//             <text class="logintitle">
//               Username
//             </text>
//             <input class="logininput"></input>
//             <text class="logintitle">
//               Password
//             </text>
//             <input class="logininput"></input>
//             <button class="loginbutton">Login</button>
//             <t class="logint"  >No account?<a class="logina" href="/signup">Sign Up</a></t>
//           </div>
//         </div>
//         <div class="emptyspace">
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }
//------------------------
import './loginsignup.css';
import Snavbar from '../homepage/snavbar';
import { useState } from 'react';
import React from 'react';
import Axios from 'axios';

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isSignup, setIsSignup] = useState(false);

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };

  const handleButton = async () => {
    console.log(email);
    console.log(password);
    console.log(isSignup);
    try{
      const response = await Axios.post(
        `http://localhost:3001/auth/${isSignup ? 'signup' : 'login'}`, 
        {
          email: email,
          password: password
        }
      );
      
      
      console.log(response.data);
    }catch(e){
      console.log(e)
    }

  }

  return (
    <>
      <Snavbar />
      <div>
        <div className="loginelements">
          <div className="emptyspace1">
          </div>
          <div className="loginpage" >
            <div className="loginfield">
              <div className="loginheadtitle">
                {isSignup ? 'Create Account' : 'Log In'}
              </div>
              <label className="logintitle">Username</label>
              <input className="logininput" type="text" onChange={(e)=>{setEmail(e.target.value)}} />

              <label className="logintitle">Password</label>
              <input className="logininput" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>

              <button className="loginbutton" onClick={handleButton}>
                {isSignup ? 'Sign Up' : 'Login'}
              </button>
              
              <div className="logint">
                {isSignup ? (
                  <>Already have an account? <a className="logina" onClick={toggleMode}>Log In</a></>
                ) : (
                  <>No account? <a className="logina" onClick={toggleMode}>Sign Up</a></>
                )}
              </div>
            </div>
          </div>
          <div className="emptyspace">
          </div>
        </div>
      </div>
    </>
  );
}
