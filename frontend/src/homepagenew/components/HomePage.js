// HomePage.js
import HeroSection from './HeroSection';
import Header from './Header';
import Footer from './Footer';
import Tomodel from './Tomodel';
import './homepagestyles.css';
import About from "./About.js";

const HomePage = () => {
    return (
        <div className="main-background bg-gray-500 flex flex-col min-h-screen items-center  px-4">
            {/* Added w-full to main-background */}
            <Header/>
            <div className="content-overlay flex-grow  w-full max-w-9xl">
                <HeroSection/>
            </div>
            <div className="another-content-layer  w-full max-w-9xl">
                <Tomodel/>
            </div>
            <div className="about-content  w-full max-w-9xl">
                <About/>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;