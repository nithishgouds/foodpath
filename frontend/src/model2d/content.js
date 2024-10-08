import React from 'react';
import './contentstyle.css';
import Organstructure from './organstructure.js';

function Content(){
  return(
    <div className='mainelements'>
      <div class="organinfo">
        <label style={{display:"block",marginTop:"30%"}}>Organ:</label>
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
       {/* <Organstructure /> */}
      </div>
      <div class="inputinfo">
        <div class="inputinfostuff">
        <p class="inputinfoheading">Food Item:</p>
        <select class="foodtype">
          <option>Potato</option>
          <option>Potato</option>
          <option>Potato</option>
          <option>Hello</option>
          <option>Potato</option>
          <option>Potato</option>
        </select>
        <p class="inputinfoheading">Quantity:</p>
        <input type='number' class="quantity"></input>
        <button class="inputbuttons">Add Food</button>
        <p class="inputinfoheading">Food In Cart:</p>
        <textarea readOnly class="textareas">
          1 Banana
        </textarea>
        <button class="inputbuttons">Simulate</button>
        <button class="inputbuttons" style={{marginTop:"50px"}}>Reset Model</button>
        </div>
        
        
      </div>
    </div>
  )
};

export default Content;