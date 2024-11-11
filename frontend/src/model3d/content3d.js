import React, { useState } from "react";
import axios from "axios";
import "../model2d/contentstyle.css";
import { Model3d } from "./model3d";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//import Organstructure from './organstructure.js';

function Content3d() {
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

  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setquantity] = useState("");
  const [consumedFoods, setConsumedFoods] = useState([]);

  const handleAddItem = async () => {
    console.log("button working");
    if (selectedItem || !quantity) {
      console.log("Please select an item and enter a quantity.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/organs/add-food",
        {
          foodItem: selectedItem,
          token: localStorage.getItem("jwtToken"),
        }
      );
      setConsumedFoods(response.data.consumedFoods);
      //setConsumedFoods(prevFoods => [...prevFoods, { foodItem: selectedItem, quantity: quantity }]); // Add new food item to the array
      console.log("Food item added successfully:", response.data);
    } catch (error) {
      console.error("Error adding food item:", error);
    }
  };

  //consumedFoodsText

  const [IOorgan, setIOorgan] = useState("");
  const [IOstatus, setIOstatus] = useState("");
  const [IOglucose, setIOglucose] = useState("");
  const [IOserotonin, setIOserotonin] = useState("");
  const [IOoxygen, setIOoxygen] = useState("");

  const handleOrganClick = async (OrgName) => {
    try {
      setIOorgan(OrgName);
      const response = await fetch(
        `http://localhost:3001/api/organs/ind-organ-status/${OrgName}`,
        { token: localStorage.getItem("jwtToken") }
      );
      const data = await response.json();
      setIOstatus(data.status);
      setIOglucose(data.glucose);
      setIOserotonin(data.serotonin);
      setIOoxygen(data.oxygen);
      // Update with your actual endpoint
      //res
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const ResetModel = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/organs/reset-consumed-foods",
        { token: localStorage.getItem("jwtToken") }
      );
      setConsumedFoods(response.data.consumedFoods);

      setIOstatus(" ");
      setIOglucose(" ");
      setIOserotonin(" ");
      setIOoxygen(" ");
      setIOorgan(" ");
      setbraincolor("");
      setlungscolor("");
      setheartcolor("");
      setlivercolor("");
      setstomachcolor("");
      setintestinecolor("");
      setkidneycolor("");
      //setConsumedFoods(prevFoods => [...prevFoods, { foodItem: selectedItem, quantity: quantity }]); // Add new food item to the array
      console.log("Food item added successfully:", response.data);
    } catch (error) {
      console.error("Error adding food item:", error);
    }
  };

  const consumedFoodsText = consumedFoods
    .map((item) => `${item.foodItem} - Quantity: ${item.quantity}`)
    .join("\n");

  return (
    <div className="mainelements">
      <div class="organinfo">
        <div class="organinfostats" style={{marginTop:'50px'}}>
          {/* <div class="organstats"> */}
            <label class="organinfolabel" >Organ:</label>
            <input readOnly class="organinfoinputs" value={IOorgan}></input>
          {/* </div> */}
          {/* <div class="organstats"> */}
            <label class="organinfolabel">Status:</label>
            <input readOnly class="organinfoinputs" value={IOstatus}></input>
          {/* </div> */}
          {/* <div class="organstats"> */}
            <label class="organinfolabel">Glucose:</label>
            <input readOnly class="organinfoinputs" value={IOglucose}></input>
          {/* </div> */}
          {/* <div class="organstats"> */}
            <label class="organinfolabel">Serotonin:</label>
            <input readOnly class="organinfoinputs" value={IOserotonin}></input>
          {/* </div> */}
          {/* <div class="organstats"> */}
            <label class="organinfolabel">Acetylcholine:</label>
            <input readOnly class="organinfoinputs" value={IOoxygen}></input>
          {/* </div> */}
          <button class='inputbuttons' style={{marginLeft:'20px'}}>Go to Guides</button>

        </div>
      </div>
      <div class="model2d">
        <div style={{ height: "calc(100vh - 64px)" }}>
          <Canvas
            camera={{ position: [0, 1, 5], fov: 50 }} // Camera position and field of view
          >
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />

            {/* Render the 3D Model with increased scale */}
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
      <div class="inputinfo">
      <div class="inputinfoelements">
        <p class="inputinfoheading" style={{marginTop:"50px"}}>Enter Food </p>
        <textarea
          value={selectedItem}
          onChange={(event) => setSelectedItem(event.target.value)}
          class="inputaddfood"
          type="text"
        ></textarea>
        <button class="inputbuttons" onClick={fetchOrganColors}>
          Add Food
        </button>
        <p class="inputinfoheading">Food Eaten</p>
        <textarea
          readOnly
          class="textareas"
          value={consumedFoodsText}
        ></textarea>
        <button
          class="inputbuttons"
          onClick={ResetModel}
          style={{ marginTop: "50px" }}
        >
          Reset Model
        </button>
      </div>
      </div>
    </div>
  );
}

export default Content3d;
