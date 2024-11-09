
import React, { useState } from 'react';
import axios from 'axios';
import './contentstyle.css';
//import Organstructure from './organstructure.js';


function Content(){

  console.log("entered content function");
  const [braincolor, setBrainColor] = useState('');
  const [lungscolor, setlungsColor] = useState('');
  const [heartcolor, setheartColor] = useState('#000000');
  const [livercolor, setliverColor] = useState('#000000');
  const [stomachcolor, setstomachColor] = useState('#000000');
  const [intestinecolor, setintestineColor] = useState('#000000');
  const [opacity, setOpacity] = useState(0); 

  const fetchOrganColors = async () => {
    try {
         const response = await axios.get('http://localhost:3001/api/organs/organ-status');
          setBrainColor(response.data.brain);
         setlungsColor(response.data.lungs);
         setheartColor(response.data.heart);
          setliverColor(response.data.liver);
          setstomachColor(response.data.stomach);
         setintestineColor(response.data.lungs);
        
        setOpacity(0.5);
        
      
        
    } catch (error) {
        console.error('Error fetching color and opacity:', error);
    }
  };

  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setquantity] = useState('');
  const [consumedFoods, setConsumedFoods] = useState([]);

const handleAddItem = async () => {
  console.log("button working");
    if (selectedItem || !quantity) {
        console.log('Please select an item and enter a quantity.');
        return;
    }

    try {
        const response = await axios.post('http://localhost:3001/api/organs/add-food', {
            foodItem: selectedItem,
            // quantity: quantity
        });
        setConsumedFoods(response.data.consumedFoods);
        //setConsumedFoods(prevFoods => [...prevFoods, { foodItem: selectedItem, quantity: quantity }]); // Add new food item to the array
        console.log('Food item added successfully:', response.data);
    } catch (error) {
        console.error('Error adding food item:', error);
    }
};

 
  //consumedFoodsText



  const [IOorgan, setIOorgan] = useState('');
  const [IOstatus, setIOstatus] = useState('');
  const [IOglucose, setIOglucose] = useState('');
  const [IOserotonin, setIOserotonin] = useState('');
  const [IOoxygen, setIOoxygen] = useState('');

  const handleSvgClick = async (svgName) => {

    try {
      setIOorgan(svgName);
      const response = await fetch(`http://localhost:3001/api/organs/ind-organ-status/${svgName}`);
      const data = await response.json();
      setIOstatus(data.status);
      setIOglucose(data.glucose);
      setIOserotonin(data.serotonin);
      setIOoxygen(data.oxygen);
       // Update with your actual endpoint
      //res

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const ResetModel = async () => {

  
    try {
        const response = await axios.post('http://localhost:3001/api/organs/reset-consumed-foods')
        setConsumedFoods(response.data.consumedFoods);
        setOpacity(0);
        setIOstatus(' ');
        setIOglucose(' ');
         setIOserotonin(' ');
         setIOoxygen(' ');
        setIOorgan(' ');
        setBrainColor('');
        setlungsColor('');
        setheartColor('');
         setliverColor('');
         setstomachColor('');
        setintestineColor('');
        //setConsumedFoods(prevFoods => [...prevFoods, { foodItem: selectedItem, quantity: quantity }]); // Add new food item to the array
        console.log('Food item added successfully:', response.data);
    } catch (error) {
        console.error('Error adding food item:', error);
    }
};

const consumedFoodsText = consumedFoods.map(item => `${item.foodItem} - Quantity: ${item.quantity}`).join('\n');

  return(
    <div className='mainelements'>
      <div class="organinfo">
        <div class="organinfostats">
          <div class="organstats">
            <label>Organ:</label>
            <input readOnly class="organinfoinputs" value={IOorgan}></input>
          </div>
          <div class="organstats">
            <label>Status:</label>
            <input readOnly class="organinfoinputs" value={IOstatus}></input>
          </div>
          <div class="organstats">
            <label>Glucose:</label>
            <input readOnly class="organinfoinputs" value={IOglucose}></input>
          </div>
          <div class="organstats">
            <label>Serotonin:</label>
            <input readOnly class="organinfoinputs" value={IOserotonin}></input>
          </div>
          <div class="organstats">
            <label >Acetylcholine:</label>
            <input readOnly class="organinfoinputs" value={IOoxygen}></input>
          </div>
        </div>
      </div>
      <div class="model2d" >
        {/* INSERT 3D MODEL HERE*/}
      </div>
      <div class="inputinfo">
        <p class="inputinfoheading">Enter Food </p>
        {/* <select class="foodtype" value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
          <option>Select Food</option>
          <option>Idli</option>
          <option>Upma</option>
          <option>Bonda</option>
          <option>Puri</option>
          <option>Apple</option>
          <option>Grapes</option>
          <option>Beans</option>
          <option>FriedFoods</option>
          <option>Yogurt</option>
          <option>Salmon</option>
        </select> */}
        <input value={selectedItem} onChange={(event) => setSelectedItem(event.target.value)} class="textareas" type="text"></input>
        {/* <p class="inputinfoheading">Quantity:</p> */}
        {/* <input type='number' class="quantity"  min={0} max={10} value={quantity} onChange={(e) => setquantity(e.target.value)}></input> */}
        <button class="inputbuttons" onClick={handleAddItem}>Add Food</button>
        <p class="inputinfoheading">Food In Cart:</p>
        <textarea readOnly class="textareas" value={consumedFoodsText} >
          
        </textarea>
        <button class="inputbuttons" onClick={fetchOrganColors}>Simulate</button>
        <button class="inputbuttons" onClick={ResetModel} style={{marginTop:"50px"}}>Reset Model</button>
      </div>
    </div>
  )
};

export default Content;