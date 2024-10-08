
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import HomePage from "./homepage/HomePage";
function App() {
  return (
    <Router>
    <div >
      <HomePage/>
      <Routes>
          <Route path="/" element={<Home />} />
          
          
        </Routes>
    </div>
    </Router>
  );
}

export default App;
