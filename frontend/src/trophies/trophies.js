// import React, { useEffect } from "react";
// import * as THREE from "three";
// import WAVES from "vanta/dist/vanta.waves.min";
// import Header from "../homepagenew/components/Header";
// import "./trophies.css";
// const Trophies = () => {
//   useEffect(() => {
//     WAVES({
//       el: "#vanta1",
//       color: "#1C2E3B",
//       shininess: 67,
//       waveHeight: 11.5,
//       zoom: 0.7,
//       waveSpeed: 1.0,
//     });
//   }, []);

//   return (
//     <>
//       <Header />
//       <div id="vanta1" className="trophyapp">
//         <div className="trophyheading">Trophies</div>

//         <div className="scroll-container">
//           <div className="content-container">
//             {Array.from({ length: 12 }).map((_, index) => (
//               <div className="trophy-box" key={index}>
//                 <h2>Achievement {index + 1}</h2>
//                 <textarea
//                   rows="4"
//                   placeholder="Write a description..."
//                 ></textarea>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Trophies;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import Header from "../homepagenew/components/Header";
import "./trophies.css";
import Footer from "../homepagenew/components/Footer";

const Trophies = () => {
  useEffect(() => {
    WAVES({
      el: "#vanta1",
      color: "#1C2E3B",
      shininess: 67,
      waveHeight: 11.5,
      zoom: 0.7,
      waveSpeed: 1.0,
    });
    getTrophyStatus();
  }, []);

  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [a4, setA4] = useState(false);
  const [a5, setA5] = useState(false);
  const [a6, setA6] = useState(false);
  const [a7, setA7] = useState(false);
  const [a8, setA8] = useState(false);
  const [a9, setA9] = useState(false);
  const [none,setNone]=useState(false);

  const setFunctions = [
    setA1,
    setA2,
    setA3,
    setA4,
    setA5,
    setA6,
    setA7,
    setA8,
    setA9,
  ];

  const getTrophyStatus = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        const decodedToken = jwtDecode(token);
        const email = decodedToken.email;

        const response = await axios.post(
          "http://localhost:3001/trophies/updateTrophy",
          {
            email: email,
            index: 12,
            value: true,
          }
        );
        const trophyarray = response.data.trophies;
        for (var i = 1; i <= 10; i++) {
          if(trophyarray[i-1]){
            setNone(true);
          }
          setFunctions[i - 1](trophyarray[i - 1]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <div id="vanta1" className="trophies-container">
        <div className="trophyheading">Badges</div>

        <div className="scroll-container">
          <div className="content-container">
            {none && (
              <div className='trophyheading'>
                Tinker with model to get Badges
              </div>
              
            )}
            {a1 && (
              <div className="trophy-box">
                <h2>Achievement 1</h2>
                <textarea readOnly rows="4" placeholder="Hello Guys"></textarea>
              </div>
            )}
            {a2 && (
              <div className="trophy-box">
                <h2>Achievement 2</h2>
                <textarea readOnly rows="4" placeholder="Hello Guys"></textarea>
              </div>
            )}
            {a3 && (
              <div className="trophy-box">
                <h2>Achievement 3</h2>
                <textarea readOnly rows="4" placeholder="Hello Guys"></textarea>
              </div>
            )}
            {a4 && (
              <div className="trophy-box">
                <h2>Achievement </h2>
                <textarea readOnly rows="4" placeholder="Hello Guys"></textarea>
              </div>
            )}
            {a5 && (
              <div className="trophy-box">
                <h2>Achievement </h2>
                <textarea readOnly rows="4" placeholder="Hello Guys"></textarea>
              </div>
            )}
            {a6 && (
              <div className="trophy-box">
                <h2>Achievement </h2>
                <textarea readOnly rows="4" placeholder="Hello Guys"></textarea>
              </div>
            )}
            {a7 && (
              <div className="trophy-box">
                <h2>Achievement </h2>
                <textarea readOnly rows="4" placeholder="Hello Guys"></textarea>
              </div>
            )}
            {a8 && (
              <div className="trophy-box">
                <h2>Achievement </h2>
                <textarea readOnly rows="4" placeholder="Hello Guys"></textarea>
              </div>
            )}
            {a9 && (
              <div className="trophy-box">
                <h2>Achievement </h2>
                <textarea readOnly rows="4" placeholder="Hello Guys"></textarea>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trophies;
