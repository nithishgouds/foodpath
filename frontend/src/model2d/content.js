import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contentstyle.css';
import Organstructure from './organstructure.js';

function Content(){

  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setquantity] = useState('');

  const handleAddItem = async () => {
    if (!selectedItem) {
        
        return;
    }
    try {
        const response = await axios.post('http://localhost:3000/api/organs/add-food', {
            selectedItem,quantity
        });
        
       
    } catch (error) {
       
    }
  };


  return(
    <div className='mainelements'>
      <div class="organinfo">
        <label style={{display:"block"}}>Organ:</label>
      <input readOnly></input>
        <label style={{display:"block"}}>Status:</label>
      <input readOnly></input>
        <label style={{display:"block"}}>Oxygen:</label>
      <input readOnly></input>
        <label style={{display:"block"}}>Serotonin:</label>
      <input readOnly></input>
        <label style={{display:"block"}}>Glucose:</label>
      <input readOnly></input>
      </div>
      <div class="model2d">
       <Organstructure />
      </div>
      <div class="inputinfo">
        <p class="inputinfoheading">Food Item:</p>
        {/* <label>Food item:</label> */}
        <select class="foodtype" value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
          <option>idli</option>
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
        <input type='number' class="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)}></input>
        <button class="inputbuttons" onClick={handleAddItem}>Add Food</button>
        <p class="inputinfoheading">Food In Cart:</p>
        <textarea readOnly class="textareas">
          1 Banana
        </textarea>
        <button class="inputbuttons">Simulate</button>
        <button class="inputbuttons" style={{marginTop:"50px"}}>Reset Model</button>
        
      </div>
    </div>
  )
};

export default Content;