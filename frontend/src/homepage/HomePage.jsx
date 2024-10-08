import React from 'react';
import { Link } from 'react-router-dom';
import Snavbar from "./snavbar.jsx";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.jsx";

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