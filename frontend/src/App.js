
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './loginsignup/login';
import Homepage from './homepage/HomePage';
import Model2dpage from './model2dpage';
import Brain from './guides/brain';
import Lungs from './guides/lungs';
import Heart from './guides/heart';
import Intestine from './guides/intestine';
import Stomach from './guides/stomach';
import Liver from './guides/liver';
import Signup from './loginsignup/signup';
function App() {
  return (
      <Router>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/model2dpage' element={<Model2dpage/>}/>
              <Route path="/guides/brain" element={<Brain />} />
              <Route path="/guides/lungs" element={<Lungs />} />
               <Route path="/guides/heart" element={<Heart />} />
              <Route path="/guides/intestines" element={<Intestine />} />
              <Route path="/guides/stomach" element={<Stomach />} />
               <Route path="/guides/liver" element={<Liver />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
            </Routes>
      </Router>
  );
}

export default App;
