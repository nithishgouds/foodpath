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
        {/* <label>Food item:</label> */}
        <select class="foodtype">
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
        <input type='number' class="quantity"></input>
        <button class="inputbuttons">Add Food</button>
        {/* <textarea readOnly class="textareas">
          HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
        </textarea>
        <button class="inputbuttons">Eat</button> */}
        <p class="inputinfoheading">Consumed Food:</p>
        <textarea readOnly class="textareas">
          
        </textarea>
      </div>
    </div>
  )
};

export default Content;