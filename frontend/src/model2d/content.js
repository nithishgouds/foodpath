
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

  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setquantity] = useState('');
  const [consumedFoods, setConsumedFoods] = useState([]);

const handleAddItem = async () => {
  console.log("button working");
    if (!selectedItem || !quantity) {
        console.log('Please select an item and enter a quantity.');
        return;
    }

    try {
        const response = await axios.post('http://localhost:3001/api/organs/add-food', {
            foodItem: selectedItem,
            quantity: quantity
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
      <svg
    width="800"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    xmlSpace="preserve"
    overflow="hidden">
     <g className="layer" style={{ display: 'inline' }}>
      <title>Layer 1</title>
      <image height="1436.5" id="svg_3" transform="matrix(1 0 0 1 0 0)" width="845" x="-22.6" href={require('./bodylayoutf.png')} y="1.28"/>
      <path className='path-brain'  fill={braincolor} onClick={() => handleSvgClick('brain')}  d="m400.58,57.88c3.51,0 -0.58,-35.13 2.42,-36.13s11,3.75 15,3.75s12.5,6.75 15,7.5s15.5,17.37 15.5,23.5c0,3.61 3.42,6.08 2.08,11c-1.33,4.92 2.17,4.08 1.09,7.92s1,8 -0.42,10.83c-1.41,2.83 -4.28,3.17 -3.5,5.58c2.58,8 -6.42,8.59 -4.67,11.34c0.83,1.29 -0.75,5 -0.08,6.16c0.67,1.17 0,5.59 -11.25,7.59s-20.08,0.58 -21.16,2.58c-1.09,2 -3.92,6.17 -9.34,6.17c-5.42,0 -9.42,-4.17 -10.42,-5.25c-1,-1.08 -9.41,-1.83 -12.66,-2s-8.34,-2.25 -12.42,-2.42s-9.83,-4.83 -8.42,-7.5s-1.52,-3.41 -0.22,-5.16c1.31,-1.75 0.22,-1.92 -1.78,-4.09s-3.66,-5.58 -2.66,-7.58s-4.34,-4.33 -3,-8.58c1.33,-4.25 -1.75,-7.17 0.41,-10.5c2.17,-3.34 -1.5,-5.09 0.67,-12.17s2.25,-8.58 4.92,-13.33s13.41,-14.84 17.33,-16.67s5.42,-4.25 9.67,-4.75s10.31,-3.98 13.41,-4.06c3,-0.07 2.77,1.58 2.87,3.72c0.47,11.09 -0.78,32.55 1.63,32.55z"  fillOpacity={opacity} id="brain" stroke="#ff8080"/>
      <path className='path-lungs'  fill={lungscolor}  onClick={() => handleSvgClick('lungs')} d="m394.58,316.5c-1.75,2.33 0.72,2.33 0.4,5c-0.31,2.67 -1.91,11.17 -1.03,14.67c0.88,3.5 -0.62,16.66 -2.62,19s-6.08,8.24 -6.16,11.83c-0.08,3.13 -1.39,5.71 -3.6,7.82c-2.85,2.73 -7.21,4.65 -12.34,5.89c-12.21,2.98 -30.48,4.04 -60.06,7.46c-9,0 -18,3 -18.84,-6c-0.69,-7.52 0,-21 -1,-26.5s3.67,-27.67 4,-35.67s3.84,-22.67 11.5,-37.17s19.5,-26 24.34,-30.16c4.83,-4.17 7.83,-11 16.16,-17.5s13.17,-5.67 17,-6.67s14,0.67 15.34,4.17c1.33,3.5 11.5,7.33 12.5,17.16s3.33,13.17 3.33,17.34s1,9 1.08,11.41c0.03,2.45 0.19,6.58 0.36,11.24c0.42,11.03 0.87,25.04 -0.36,26.68zm115.67,17.88c0.25,-6.88 -2,-17.88 -2.25,-24.25s-4.37,-19.63 -14.12,-33.5s-24.25,-28.38 -26.25,-32.25s-11.46,-11.38 -15.75,-13.25s-17.25,-5.38 -23,-1.5s1.75,4.75 -8.38,9.12s-10.92,33.75 -11.25,38.83c0.76,3.89 1.19,7.41 1.42,10.61c1.23,17.46 -3.67,25.32 5.5,29.98c11.16,5.66 27.11,10.27 27.83,18c1.33,14.33 -13.33,19 -15.33,26.33c-1.08,3.94 -5,12.83 16.33,17.67c1.31,0.29 2.57,0.72 3.79,1.24c8.38,3.56 15.03,11.85 24.73,18.52c3.39,2.33 7.17,4.46 11.51,6.12c4.09,1.56 8.68,2.7 13.97,3.2c3.5,-0.75 7.25,1.38 8.88,-1.5s0.25,-24.12 2.39,-37.25c2.14,-13.12 -0.27,-29.25 -0.02,-36.12z"  fillOpacity={opacity} id="lungs" stroke="rgb(255, 128, 128)" transform="matrix(1 0 0 1 0 0)"/>
      <path className='path-heart'  fill={heartcolor} onClick={() => handleSvgClick('heart')}  d="m447,331.83c-2.83,-1.83 2.67,-3 0.17,-8.66c-1.62,-3.68 5.5,-2.5 3.42,-6.17s-3.4,0.16 -5.09,-0.16c-2.25,-0.43 -4.71,-2.81 -3.73,-3.79c3.4,-3.38 -1.85,-6.11 -2.94,-5.38c-1,0.66 -2.13,3.14 -9.5,-3.84c-6.33,-6 -23.1,-4.11 -21.5,-5.33c2.65,-2.02 4.05,-1.18 6.15,-2.67c2.35,-1.66 2.99,-16.76 -0.65,-17.25c-7.5,-1 -12.33,0 -19.66,1.25c-2.97,0.51 -0.17,-3.66 -1.17,-6.5s-10.33,-11.16 -10.83,-8.66s-1,3.66 -1.84,2.33s-7.16,0 -10.5,0s-7.66,40.33 -8.5,43s-24,6 -28,5.5s-1,3.33 1.17,5.67s14.67,-0.5 18.27,-1c3.61,-0.5 5.56,-1.34 3.9,2.83s-11.34,0.67 -13.01,5.17c-1.66,4.5 10.01,0.66 10.17,4.33s-10.33,0.33 -10.16,4.83c0.16,4.5 5.5,3.17 9.83,2.84c-1.5,5.5 5.17,10.33 11.17,19c6,8.66 19.16,0.16 21.45,5.53c2.29,5.37 16.88,11.96 26.05,15.8c6.87,2.87 21.01,8.1 31.62,7.78c3.54,-0.1 6.69,-0.82 9.04,-2.45c26.15,-18.06 -2.5,-52.16 -5.33,-54zm-66.17,-26.66c-5,-1.67 2.84,-22.71 2.84,-20.17c0,6 2.16,21.83 -2.84,20.17z"  fillOpacity={opacity} id="heart" stroke="rgb(255, 128, 128)"/>
      <path className='path-stomach'  fill={stomachcolor} onClick={() => handleSvgClick('stomach')}  d="m485.03,406.05c-0.28,-6.13 -2.81,-10.88 -6.73,-14.5c-7.04,-6.5 -18.53,-9.38 -29.51,-10.14c-3.84,-0.26 -7.62,-0.27 -11.12,-0.08c-20.79,1.16 -22.84,-33.66 -23.5,-40.16c-3,0.16 -8.34,0 -11.5,0c0.39,5.02 2.85,21.37 7.4,35.7c0.39,1.23 0.81,2.44 1.25,3.62c3.14,8.45 7.34,15.73 9.01,18.84c4.67,8.67 11,13.34 1,16s-15,13.34 -29,11c-12.29,-2.05 -51.6,-1.52 -49.67,33.44c0.27,4.83 1.31,10.32 3.34,16.56c3.75,-2.83 5,-2.83 8.5,-3.08c-0.82,-2.89 -2.56,-14.3 3.8,-20.45c1.79,-1.73 4.5,-2.92 7.45,-3.65c4.15,0.3 4.54,1.39 7.42,2.02c2.52,0.55 10.55,6.79 17,9.88c3.71,5.95 8.56,11.75 23.66,13.2c20.57,1.97 49.34,-19.75 54.79,-26.11c1.63,-1.49 2.5,-3.26 4.88,-6.26c1.84,-2.5 4.61,-3.41 7.64,-13.66c1.15,-3.88 2.34,-9.09 3.53,-16.22c0.35,-2.12 0.45,-4.09 0.36,-5.95z"  fillOpacity={opacity} id="stomach" stroke="rgb(255, 128, 128)" transform="matrix(1 0 0 1 0 0)"/>
      <path className='path-liver'  fill={livercolor} onClick={() => handleSvgClick('liver')}  d="m443.3,388.29c-5.21,-3.47 -21.3,-7.79 -31.63,-7.79c-0.12,0 -0.23,-0.01 -0.35,-0.01c-10.23,-0.08 -20.94,-3.9 -29.75,-5.67c-38.99,-7.82 -61.57,-0.49 -72.4,13.35c-4,7.16 -9.67,18.33 -7.84,29.5s9.67,22.96 12.8,31.71s8.37,18.12 9.87,20s11.25,-3.13 15.88,-6.63c0.93,-1.08 1.86,-2.07 2.78,-2.98c5.69,-5.62 11.25,-8.2 17.47,-10.6c8.6,-3.33 18.45,-6.35 31.62,-16.67c38.75,-0.75 54.5,-17.5 58.5,-25.75s-1.75,-15 -6.95,-18.46z"  fillOpacity={opacity} id="liver" stroke="rgb(255, 128, 128)" transform="matrix(1 0 0 1 0 0)"/>
      <g  fillOpacity={opacity} className='path-intestine' onClick={() => handleSvgClick('intestine')}  fill={intestinecolor}  id="intestine" stroke="rgb(255, 128, 128)" transform="matrix(1 0 0 1 0 0)">
       <path d="m499,523.25c0.88,-5.62 -6,-7.87 -6,-13.25c0,-6.33 -6.27,-6.88 -6.37,-11.87c-0.13,-6.3 -5.25,-7.75 -4.5,-11.63s-5.38,-10.5 -4.25,-16.12s-4.5,-14 -4.5,-16.25s-1.38,-4.63 -4.75,-5.99c-3.53,-2.51 -7.3,-1.81 -11.46,-4.14c-4.17,-2.33 -26.5,9 -28.67,13.33s-6.44,3.72 -8.17,5.42c-4.66,4.58 -9.58,1.89 -12,2.63c-6.33,1.95 -6.16,-3.05 -12.16,-2.63c-1.58,0.11 -3.69,-0.59 -6,-1.7c-6.45,-3.09 -14.48,-9.34 -17,-9.88c-2.88,-0.63 -3.27,-1.73 -7.42,-2.02c-1.38,-0.1 -3.18,-0.11 -5.62,0.02c-6.22,2.4 -11.78,4.98 -17.47,10.6c-0.92,0.91 -1.85,1.9 -2.78,2.98c-4.13,4.75 -6.38,10.5 -7.5,13.38s-11.25,15.12 -12,18.12s-4.55,4.08 -5.13,9c-0.4,3.37 -5.87,10.63 -5.87,13.63s-2.88,7.62 -2.5,10.37s-4.55,6.58 -2.13,12.88c1.18,3.08 0.75,4.25 -1.37,11.37s6.75,12.38 5.62,15s0.63,8.88 2.25,11.38s4.5,3.25 4,9.62s10.75,19.75 15.75,25c10.67,18.17 15,10.17 26.33,4.13s2,-12.96 1.92,-20.63s-3.92,-5.33 -7.5,-9.33s-10.75,-15.34 -13.42,-16.79s-8.66,-6.55 -10,-11.6c-1.33,-5.06 0.34,-7.28 -2.66,-11.74c-3,-4.46 5.66,-4.54 4.31,-10.49c-0.86,-3.77 0.74,-5.28 1.59,-7.69c0.01,-0.03 0.02,-0.07 0.03,-0.1c0.47,-1.38 0.69,-3.04 0.07,-5.59c-3.34,-13.67 10.33,-9 9,-19.67s11.08,-6.67 11.08,-19.67c4.36,0.12 9.53,-5.35 12.87,-8.9c0.96,-1.02 1.78,-1.89 2.38,-2.42c1.43,-1.26 3.92,2.58 7.98,6.66c3.51,3.52 8.18,7.22 14.35,7.99c4.5,0.57 8.4,-3.54 13.34,0.44c4.94,3.98 15.97,-1.33 20.33,-0.44c6.57,1.35 10.66,-5 16.64,-4.45c5.97,0.56 11.48,-3.43 15.73,-7.55c0.63,4.67 -1.04,13 3.96,14.19s-1.57,10.07 4,12.81c10.15,5 -3.66,13.34 5.34,20.34c12.7,9.88 2.66,14.04 3,22.41c0.47,11.93 -10,7.25 -11.67,14.59c-0.9,3.96 -3.28,4.52 -5.65,6.14c-1.01,0.7 -2.02,1.59 -2.91,3.02c-0.89,1.42 -1.65,3.37 -2.19,6.21c-1.41,7.46 -7.92,0 -8.58,9.94c-0.79,11.74 -14.28,6.57 -15.34,13.69c-1.33,9 -9.66,8.67 -8.77,18.62c0.88,9.96 -4.41,3.19 -8.19,8.63c-3.77,5.43 -9.04,5.75 -9.37,8.75c-5.25,3 -3.75,6 -7.5,10.87s-3,20.13 -0.88,27.63s-1.5,11.87 1.25,16.12s4.13,2.63 10.38,5.13s7.37,-0.38 9.37,-1.88s0.25,-3 2.13,-6.75s0.12,-18.25 0.37,-21.62s2,-12.25 5.88,-12.25s5.87,-4.63 8.12,-4.88s4.38,-1.87 6.75,-3.37c6.46,-7.33 2.82,-12.19 7.13,-14.75c7.25,-4.31 -0.67,-9.63 8.25,-13.92c6.01,-2.89 -3.58,-6.33 7.12,-12c7.69,-4.06 3.63,-8.67 8.75,-10.71c11.88,-5.37 5.88,-10.62 12.26,-13.49s8.37,-13.38 11.62,-16.88s4.13,-9.37 6.38,-12.62s1.29,-10.46 3.87,-14.13c2.49,-3.53 -2.12,-5.62 -1.25,-11.25z" id="svg_1"/>
       <path d="m476.17,541.17c2.66,-7.67 3.83,-18.67 -9.17,-22.17c5.17,-4 4.5,-10.33 -0.17,-21.17c3.17,-9.66 -1.66,-19 -4.83,-21.5s-13.17,-10.5 -25.33,4.84c-5.5,0.5 -3.5,1.66 -12.67,3s-12.5,2.33 -16.67,0.66c-4.16,-1.66 -13.83,-2.5 -23,-1.16c-3.18,-1.51 -6.18,-3.31 -9.34,-5c-3.16,-1.68 -6.5,-3.23 -10.37,-4.24c-3,-0.78 -6.31,-1.25 -10.12,-1.18c-3.5,0.25 -4.75,0.25 -8.5,3.08c-2.75,4.67 -4.25,8.67 -9,14.42s-21.25,22 -21.25,28.25c0,6.16 6.8,9.64 15.85,9.26c0.13,-0.01 0.26,0 0.4,-0.01c-0.14,0.03 -0.29,0.08 -0.43,0.11c-8.88,2.34 -18.31,8.26 -17.57,15.64c0.75,7.5 7,9.83 9.67,10.33c-6.17,2.67 -7.84,9.5 -2.5,15.84s19.83,12.14 19.83,17c0,12.66 -16.69,13.94 -10,25.33c1.13,4.5 0.25,8.5 6.63,17.75s21.87,11 25.62,9.37c0.25,2.25 0.13,8.13 6.63,8.63s14.62,-6.13 15.87,-10.13c2.5,-1.62 10.13,-4.12 13.25,-4.12c17,2.33 11,13 35.88,9c19,-1.37 19.25,-7.12 20.99,-12.87s2.51,-10 -0.99,-13.63c0.37,-1.37 -0.13,-2 0.99,-6.5c4.88,-5.37 10.88,-11.75 10.26,-18.37c3.14,-1.26 -0.3,-7.46 -5.96,-8.46c6.5,-1.67 11.33,-6.67 14,-15c2.66,-8.34 7.33,-14.34 2,-27zm-121.67,46.71c-1.62,-1.5 -2,-5.63 -2.75,-7.13c3.75,1.5 7.25,4 8.5,4.63c-2.75,1.25 -3.75,0.87 -5.75,2.5zm15.14,-13.5c-2.76,0 -7.76,-5.38 -10.39,-6.88c3.25,-3 4.25,-1.5 6.63,0s5.14,3.25 3.76,6.88zm4.86,-27.88c-1.62,0.5 -2.12,-3.75 -3.5,-5.25c-1.37,-1.5 -6.72,-3.61 -6.5,-4.25c0.6,-1.78 4.13,-0.87 6.38,1.13s4.75,4.25 3.62,8.37zm33.88,70.13c3,3.75 3.87,3.12 5.62,3.5c-1.25,2.37 -5.12,4.12 -5.62,-3.5zm-20.88,8.62c-0.37,-2.75 1,-6.75 0.75,-8.62c2.5,2.25 4,4.12 5.25,4.75c-2.37,1.62 -4,3.12 -6,3.87zm65.63,-55.37c-0.51,-0.51 -1.09,-1.11 -1.69,-1.72c-0.74,-0.74 -1.5,-1.48 -2.19,-2.03c1.51,-0.45 3.25,-0.7 5.1,-0.98c2.28,-0.35 4.73,-0.75 7.15,-1.65c-0.75,2 -5,5 -8.37,6.38z" id="svg_2"/>
      </g>
     </g>
    </svg>
      </div>
      <div class="inputinfo">
        <p class="inputinfoheading">Food Item:</p>
        <select class="foodtype" value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
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
        </select>
        <p class="inputinfoheading">Quantity:</p>
        <input type='number' class="quantity"  min={0} max={10} value={quantity} onChange={(e) => setquantity(e.target.value)}></input>
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