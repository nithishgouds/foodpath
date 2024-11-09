import './loginsignup.css';
import Snavbar from '../homepage/snavbar';
import { useState } from 'react';
import BIRDS from ''

export default function Login(){
  

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
              Username
            </text>
            <input class="logininput"></input>
            <text class="logintitle">
              Password
            </text>
            <input class="logininput"></input>
            <button class="loginbutton">Login</button>
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
//             <t class="logintitle"  >Go Back to <a class="logina" href="/login">Login</a></t>
//           </div>
//         </div>
//         <div class="emptyspace">
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }
// import './loginsignup.css';
// import Snavbar from '../homepage/snavbar';
// import { useState } from 'react';

// export default function Login() {
  
//   const [isSignup, setIsSignup] = useState(false);

//   const toggleMode = () => {
//     setIsSignup(!isSignup);
//   };

//   return (
//     <>
//       <Snavbar />
//       <div>
//         <div className="loginelements">
//           <div className="emptyspace1">
//           </div>
//           <div className="loginpage">
//             <div className="loginfield">
//               <div className="loginheadtitle">
//                 {isSignup ? 'Create Account' : 'Log In'}
//               </div>
//               <label className="logintitle">Username</label>
//               <input className="logininput" type="text" />

//               <label className="logintitle">Password</label>
//               <input className="logininput" type="password" />

//               <button className="loginbutton">
//                 {isSignup ? 'Sign Up' : 'Login'}
//               </button>
              
//               <div className="logintitle">
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
