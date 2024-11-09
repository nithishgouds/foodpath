import './loginsignup.css';
import Snavbar from '../homepage/snavbar';

export default function Login(){
  return(
    <>
      <Snavbar/>
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
            <button class="loginbutton"></button>
            <t >No account?<a href="/">Sign Up</a></t>
          </div>
        </div>
        <div class="emptyspace">
        </div>
      </div>
    </>
  );
}