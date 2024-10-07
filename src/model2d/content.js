import React from 'react';
import './contentstyle.css';

function Content(){
  return(
    <div className='mainelements'>
      <div class="organinfo">
        <p>Organ Information</p>
      </div>
      <div class="model2d">
        <p>2D Model</p>
      </div>
      <div class="inputinfo">
        <p class="inputinfoheading">Food Item:</p>
        {/* <label>Select Food:</label> */}
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
      </div>
    </div>
  )
};

export default Content;