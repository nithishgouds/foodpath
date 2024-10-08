import React, { useState, useEffect } from 'react';
import './homepagestyle.css';
function Snavbar() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div>
            <header className={`header ${showHeader ? '' : 'hidden'}`}>
                <div className="title-container">
                    <span className="title">FoodPath</span>
                </div>
                <div className="links-container">
                    <nav className="links">
                        <a href="/">HOME</a>
                        <a href="/model2dpage">2D MODEL</a>
                        <div className="dropdown">
                            <a href="/guides">HOW TO EAT HEALTHY?</a>
                            <div className="dropdown-content">
                                <a href="/guides/brain">BRAIN FOCUSED</a>
                                <a href="/guides/lungs">LUNG FOCUSED</a>
                                <a href="/guides/heart">HEART FOCUSED</a>
                                <a href="/guides/intestines">INTESTINES FOCUSED</a>
                                <a href="/guides/stomach">STOMACH FOCUSED</a>
                                <a href="/guides/liver">LIVER FOCUSED</a>
                            </div>
                        </div>

                    </nav>
                </div>
            </header>
            <div style={{height: '1.35px', backgroundColor: 'black'}}></div>
        </div>
    );
}

export default Snavbar;