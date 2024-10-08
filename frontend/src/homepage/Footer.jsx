import React from 'react';
import './homepagestyle.css';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-content">
                    <p id="nameisbig">FoodPath</p>

                    <div className="footer-links">
                        <a href="/contact-us">CONTACT US</a>
                        <a href="/faq">FAQ</a>
                        <a href="/privacy-policy">PRIVACY POLICY</a>
                        <a href="/accessibility-statement">ACCESSIBILITY STATEMENT</a>
                    </div>

                    <p id="copyright">
                        &copy; 2024 FoodPath. All rights reserved.
                    </p>
                </div>
            </footer>
            <div style={{ height: '20px', backgroundColor: 'black' }}></div> {/* Added the underline */}
        </div>
    );
}

export default Footer;