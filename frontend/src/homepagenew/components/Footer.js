
    function Footer() {
        
        return (
            <div> {/* Added a container div */}
                <footer className="footer">
                    <div className="footer-content">
                        <p id="nameisbig">FoodPath</p>

                        <div className="footer-links">
                            <a href="/contact-us">CONTACT US</a>
                            <a href="/frontend/src/homepagenew/components/Faq">FAQ</a>
                            <a href="/privacy-policy">PRIVACY POLICY</a>
                            <a href="/accessibility-statement">ACCESSIBILITY STATEMENT</a>
                        </div>

                        <p id="copyright">
                            &copy; {new Date().getFullYear()} FoodPath. All rights reserved.
                        </p>
                    </div>
                </footer>
                <div style={{ height: '20px', backgroundColor: 'black' }}></div> {/* Added the underline */}
            </div>
        );
    }

    export default Footer;