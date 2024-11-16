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
import React, { useEffect } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import Header from "../homepagenew/components/Header";
import "./trophies.css";

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
  }, []);

  return (
    <>
      <Header />
      <div id="vanta1" className="trophies-container">
        <div className="trophyheading">Trophies</div>

        <div className="scroll-container">
          <div className="content-container">
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="trophy-box" key={index}>
                <h2>Achievement {index + 1}</h2>
                <textarea
                  rows="4"
                  placeholder="Write a description..."
                ></textarea>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trophies;
