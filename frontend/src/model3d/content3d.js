import React, { useState,useEffect } from "react";
import axios from "axios";
import "../model2d/contentstyle.css";
import { Model3d } from "./model3d";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
//import Organstructure from './organstructure.js';


function Content3d(){

  let email;


  const token = localStorage.getItem('jwtToken');
  console.log(token);

  if (token) {
    try {
      console.log("Entered token check");

      // Decode the JWT token to extract the payload
      const decodedToken = jwtDecode(token);
      console.log(decodedToken); // Log the entire decoded token to check its structure

      console.log(decodedToken.email);

      // Check if the decoded token contains the email property
      if (decodedToken && decodedToken.email) {
        email = decodedToken.email;
        console.log("Decoded email:", email);



      } else {
        console.log('Email not found in token payload.');
      }

    } catch (error) {
      console.error('Failed to decode token:', error);
    }
  } else {
    console.log('No JWT token found in localStorage.');
  }

  const [isSignIn, setSingIn] = useState(false);
  //const token = localStorage.getItem("jwtToken");
  const checkSignIn = () => {
    if (token) {
      setSingIn(true);
    }
  };
  useEffect(() => {
    checkSignIn();
  });

  
  console.log("entered content function");
  const [stomachcolor, setstomachcolor] = useState("#66ff66");
  const [heartcolor, setheartcolor] = useState("#ff0000");
  const [braincolor, setbraincolor] = useState("#ff9999");
  const [lungscolor, setlungscolor] = useState("#cc9900");
  const [kidneycolor, setkidneycolor] = useState("#ff0000");
  const [livercolor, setlivercolor] = useState("#993300");
  const [intestinecolor, setintestinecolor] = useState("#ffff00");

  const fetchOrganColors = async () => {
    handleAddItem();
    try {
      const response = await axios.get(
        "http://localhost:3001/api/organs/organ-status",
        { token: localStorage.getItem("jwtToken") }
      );

      setbraincolor(response.data.brain);
      setlungscolor(response.data.lungs);
      setheartcolor(response.data.heart);
      setlivercolor(response.data.liver);
      setstomachcolor(response.data.stomach);
      setintestinecolor(response.data.intestine);
      setkidneycolor(response.data.kideny);
    } catch (error) {
      console.error("Error fetching color and opacity:", error);
    }
  };

  function colourrating(a) {

    switch (a) {
      case 0:
        return "#610B21";
        break;
      case 1:
        return "#01DF01";
        break;
      case 2:
        return "#86B404";
        break;
      case 3:
        return "#610B0B";
        break;
      case 4:
        return "#DF3A01";
        break;
      default:
        return "#000000";
    }

  }

  function Ostatus(a) {

    switch (a) {
      case 0:
        return "DEAD";
        break;
      case 1:
        return "Healthy";
        break;
      case 2:
        return "Very Healthy";
        break;
      case 3:
        return "UnHealthy";
        break;
      case 4:
        return "Very UnHealthy";
        break;
      default:
        return "Normal";
    }

  }

  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setquantity] = useState("");
  const [consumedFoods, setConsumedFoods] = useState([]);
  const [isEat, setEat] = useState(false);



  const [handleAddRes, setHandleAddRes] = useState(null);

  const handleAddItem = async () => {
    console.log("button working");
    if (!selectedItem) {
      console.log("Please select an item and enter a quantity.");
      return;
    }

    try {
      setConsumedFoods("eating...");
      console.log(selectedItem);
      const response = await axios.post("http://localhost:3001/api/organs/add-food", {
        foodItems: selectedItem,
        email: email,
      });

      const { aiResponse } = response.data;
      console.log("something is happening");
      setConsumedFoods("ate...");
      setHandleAddRes(aiResponse); // Update state with aiResponse

      // Update the state with color changes
      setbraincolor(colourrating(aiResponse.health_status.brain.rating));
      setlungscolor(colourrating(aiResponse.health_status.lungs.rating));
      setheartcolor(colourrating(aiResponse.health_status.heart.rating));
      setlivercolor(colourrating(aiResponse.health_status.liver.rating));
      setstomachcolor(colourrating(aiResponse.health_status.stomach.rating));
      setintestinecolor(colourrating(aiResponse.health_status.intestines.rating));
      setkidneycolor(colourrating(aiResponse.health_status.kidneys.rating))
      

    } catch (error) {
      console.error("Error adding food item:", error);
    }
  };


  const [isActive, setActive] = useState(false);
  const [IOorgan, setIOorgan] = useState("");
  const [IOstatus, setIOstatus] = useState("");
  const [IOglucose, setIOglucose] = useState("");
  const [IOcalories, setIOcalories] = useState("");
  const [IOoxygen, setIOoxygen] = useState("");

  const handleOrganClick = async (OrgName) => {
    try {
      setActive(false);
      isActive()
      setIOorgan(OrgName);
      if (!handleAddRes) {
        console.error("Error: handleAddRes is not set. Please call handleAddItem first.");
        return;
      }

      console.log(`3d clicked ${OrgName}`);
      console.log(handleAddRes.health_status.intestines.rating); // Debug to check if it exists

      // Access properties from handleAddRes directly
      setIOstatus(Ostatus(handleAddRes.health_status[OrgName].rating));
      setIOglucose(handleAddRes.post_consumption_values.blood_glucose_levels[OrgName]);
      setIOcalories(handleAddRes.post_consumption_values.calorie_levels[OrgName]);
      setIOoxygen(handleAddRes.post_consumption_values.oxygen_levels[OrgName]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const ResetModel = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/organs/reset-consumed-foods', {
        email: email

      });
      

      setIOstatus(' ');
      setIOglucose(' ');
      setIOcalories(' ');
      setIOoxygen(' ');
      setIOorgan(' ');
      setbraincolor("");
      setlungscolor("");
      setheartcolor("");
      setlivercolor("");
      setstomachcolor("");
      setintestinecolor("");
      setkidneycolor("");
      setHandleAddRes(null);
      //setConsumedFoods(prevFoods => [...prevFoods, { foodItem: selectedItem, quantity: quantity }]); // Add new food item to the array
      console.log("Food item added successfully:", response.data);
    } catch (error) {
      console.error("Error adding food item:", error);
    }
  };

  const consumedFoodsText = consumedFoods;  

  return (
    <>
    {!isSignIn && 
      <div>
      <div>
        <label className="inputinfoheading" style={{textAlign:'center', fontSize:'50px', minWidth:'100%', minHeight:'100%',marginLeft:'100px'}}> Please Sign In to use model</label>
      </div>
      <a href='/login' className="organinfolabel" style={{textDecoration:'underline', marginLeft:'100px',fontSize:'30px'}}>Proceed to Log In</a>
      </div>
      }
    {isSignIn && (
      <div className="mainelements">
      <div class="inputinfo">
            <div style={{ marginTop: "50px" }}></div>
            <p class="inputinfoheading">Enter Food </p>
            <input
              value={selectedItem}
              onChange={(event) => setSelectedItem(event.target.value)}
              class="textareas"
              type="text"
            ></input>
            <button class="inputbuttons" onClick={handleAddItem}>
              Add Food
            </button>
            <p class="inputinfoheading">Eaten Food:</p>
            <textarea
              readOnly
              class="textareas"
              value={consumedFoodsText}
            ></textarea>
            <button
              class="inputbuttons"
              onClick={ResetModel}
              style={{ marginTop: "20px" }}
            >
              Reset Model
            </button>
          </div>
      
      <div class="model2d">
        <div style={{ height: "calc(100vh - 64px)", backgroundColor:'white' }}>
          <Canvas
            camera={{ position: [0, 1, 5], fov: 50 }} 
          >
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />

            <Model3d
              scale={1}
              handleClick={handleOrganClick}
              stomachcolor={stomachcolor}
              heartcolor={heartcolor}
              braincolor={braincolor}
              lungscolor={lungscolor}
              livercolor={livercolor}
              kidneycolor={kidneycolor}
              intestinecolor={intestinecolor}
            />

            {/* Add OrbitControls for interactivity */}
            <OrbitControls
              enablePan={false} // Enable panning (dragging the model)
              enableZoom={false} // Enable zooming
              enableRotate={true} // Enable rotating
              // minDistance={25}          // Minimum zoom distance
              // maxDistance={25}         // Maximum zoom distance
              maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
              minPolarAngle={Math.PI / 2} // Restrict vertical rotation
            />
          </Canvas>
        </div>
      </div>
      <div class="organinfo">
        <div class="organinfostats" style={{marginTop:'50px'}}>
            <label class="organinfolabel" >Organ:</label>
            <input readOnly class="organinfoinputs" value={IOorgan}></input>
            <label class="organinfolabel">Status:</label>
            <input readOnly class="organinfoinputs" value={IOstatus}></input>
            <label class="organinfolabel">Glucose:</label>
            <input readOnly class="organinfoinputs" value={IOglucose}></input>
            <label class="organinfolabel">Serotonin:</label>
            <input readOnly class="organinfoinputs" value={IOserotonin}></input>
            <label class="organinfolabel">Acetylcholine:</label>
            <input readOnly class="organinfoinputs" value={IOoxygen}></input>
          <button class='inputbuttons' style={{marginLeft:'20px'}}>Go to Guides</button>

        </div>
      </div>
    </div>
    )}
    
    </>
  );
}

export default Content3d;
