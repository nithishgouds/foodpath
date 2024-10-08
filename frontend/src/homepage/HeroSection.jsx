// eslint-disable-next-line no-unused-vars
import React from 'react';
import './homepagestyle.css';

const HeroSection = () => {
    return (
        <div className="home-page">
            <h1 className="main-heading">
                Fueling Your Inner World:<br/> <b>What Does Food Do to Your Organs?</b>
            </h1>

            <h3 className="sub-heading">
                Ever thought of the effects of food on your body's organs? <br/>Now with
                FoodPath, you can see them via our 2D model!
            </h3>

            <div className="model-section">
                <h2 className="section-heading">Visualize with FoodPath!</h2>
                <button className="proceed-button">Proceed to Model</button>
            </div>

            <div className="guides-section">
                <h2 className="section-heading">What's good and bad for your organs?</h2>
                <h3 className="section-sub-heading">
                    View Guides on the various kinds of foods
                </h3>
                <button className="proceed-button">Proceed to Guides</button>
            </div>
        </div>
    );
};

export default HeroSection;