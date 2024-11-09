// import './loginsignup.css';
// import Snavbar from '../homepage/snavbar';
// import { useState } from 'react';


// export default function (){


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
//               Create Account
//             </div>
//             <text class="logintitle">
//               Username
//             </text>
//             <input class="logininput"></input>
//             <text class="logintitle">
//               Password
//             </text>
//             <input class="logininput"></input>
//             <button class="loginbutton">Sign Up</button>
//             <t class="logint"  >Go Back to <a class="logina" href="/login">Login</a></t>
//           </div>
//         </div>
//         <div class="emptyspace">
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }
import './loginsignup.css';
import Snavbar from '../homepage/snavbar';
import { useState } from 'react';
import React from 'react';
import Axios from 'axios';

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  // const [isSignup, setIsSignup] = useState(false);

  // const toggleMode = () => {
  //   setIsSignup(!isSignup);
  // };

  const handleButton = async () => {
    console.log(email);
    console.log(password);
    // console.log(isSignup);
    try{
    const response = await Axios.post('http://localhost:3001/auth/signup', {
        // pagetype:isSignup,
        email:email,
        password:password
      });
      console.log(response.data);
    }catch(e){
      console.log("Error found")
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
              Create Account
            </div>
            <text class="logintitle">
              Email
            </text>
            <input class="logininput" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <text class="logintitle">
              Password
            </text>
            <input class="logininput" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button class="loginbutton" onClick={handleButton}>Login</button>
            <t class="logint"  >Have an account?<a class="logina" href="/login">Login</a></t>
          </div>
        </div>
        <div class="emptyspace">
        </div>
      </div>
      </div>
    </>
  );
}