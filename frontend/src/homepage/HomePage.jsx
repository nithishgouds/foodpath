import React from 'react';
import Snavbar from "./snavbar.jsx";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.jsx";
import {Link} from 'react-router-dom';
import './homepagestyle.css';

const HomePage = () => {
    return (
        <>
        <Snavbar/>
        <HeroSection/>
        <Footer/>
            </>
    );
};

export default HomePage;