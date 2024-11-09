import React from 'react';
import Snavbar from "./snavbar.js";
import HeroSection from "./HeroSection.js";
import Footer from "./Footer.js";
import {Link} from 'react-router-dom';
import './homepagestyle.css';
import Navbar from '../model2d/navbar.js';
import { useNavigate } from 'react-router-dom';



const HomePage = () => {


    const navigate = useNavigate();
    const handleLoginButtonClick = () => {
        navigate('/login');
    };
    return (
        <div>
        {/* <Snavbar/> */}
        <HeroSection/>
        <Footer/>
        <button onClick={handleLoginButtonClick}>Go to Login</button>
        </div>
    );
};

export default HomePage;