import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Brain from "../guides/brain";
import './navbarstyle.css';

const Navbar = () => { 
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbarstyle"> 
      <div className="navtitle">
        FoodPath
      </div>
      <div>
        <button className="navbutton" onClick={toggleDropdown}>Healthy Foods!</button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="../">For Brain</a>
            <a href="#">For Lungs</a>
            <a href="#">For Heart</a>
            <a href="#">For Stomach</a>
            <a href="#">For Liver</a>
            <a href="#">For Intestines</a>
          </div>
        )}
        <a href="https://www.youtube.com" className="navbutton">2D Model</a>
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";

// function NavBar(){
//   return(
//       <div class="navbarstyle">
//         <div class="navtitle">
//           FoodPath
//         </div>
//         <select></select>
//       </div>
//   );
// }

// export default NavBar;