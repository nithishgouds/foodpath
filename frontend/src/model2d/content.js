import React from 'react';
import './contentstyle.css';
import Organstructure from './organstructure.js';

function Content(){
  return(
    <div className='mainelements'>
      <div class="organinfo">
        <div class="organinfostats">
          <div class="organstats">
            <label>Organ:</label>
            <input readOnly class="organinfoinputs"></input>
          </div>
          <div class="organstats">
            <label>Status:</label>
            <input readOnly class="organinfoinputs"></input>
          </div>
          <div class="organstats">
            <label>Glucose:</label>
            <input readOnly class="organinfoinputs"></input>
          </div>
          <div class="organstats">
            <label>Serotonin:</label>
            <input readOnly class="organinfoinputs"></input>
          </div>
          <div class="organstats">
            <label >Organ:</label>
            <input readOnly class="organinfoinputs"></input>
          </div>
        </div>
      </div>
      <div class="model2d">
       <Organstructure />
      </div>
      <div class="inputinfo">
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
  )
};

export default Content;