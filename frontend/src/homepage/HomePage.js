import React from 'react';
import Snavbar from "./snavbar.js";
import HeroSection from "./HeroSection.js";
import Footer from "./Footer.js";
import {Link} from 'react-router-dom';
import './homepagestyle.css';
import Navbar from '../model2d/navbar.js';

const HomePage = () => {
    return (
        <div>
        {/* <Snavbar/> */}
        <HeroSection/>
        <Footer/>
        </div>
    );
};

export default HomePage;