import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './model2d/navbar'
import Content from './model2d/content';
import Model2dpage from './model2page';

function App() {
  return (
    <div >
      <Model2dpage />
    </div>
  );
}

export default App;
