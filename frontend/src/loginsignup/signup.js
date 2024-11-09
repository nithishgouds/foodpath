import './loginsignup.css';
import Snavbar from '../homepage/snavbar';
import { useState } from 'react';


export default function (){


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
              Username
            </text>
            <input class="logininput"></input>
            <text class="logintitle">
              Password
            </text>
            <input class="logininput"></input>
            <button class="loginbutton">Sign Up</button>
            <t class="logint"  >Go Back to <a class="logina" href="/login">Login</a></t>
          </div>
        </div>
        <div class="emptyspace">
        </div>
      </div>
      </div>
    </>
  );
}
