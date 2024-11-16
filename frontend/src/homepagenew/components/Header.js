
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { jwtDecode } from "jwt-decode";

const Header = () => {
    const [loggedin, setLoggedin] = useState(false);
    const [login, setLogin] = useState("LOGIN");
    const [path, setPath] = useState("/login");
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();
    const controls = useAnimation();
    const token = localStorage.getItem('jwtToken');

    useEffect(() => {
      if (token) {
        const decodedToken = jwtDecode(token);
        const un = decodedToken.email.toUpperCase();
        setLoggedin(true);
        setLogin(un);
        setPath("/login");
      }
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    useEffect(() => {
        // Trigger Framer Motion animation
        controls.start({
            y: visible ? 0 : -100,  // Moves out of view when scrolling down
            opacity: visible ? 1 : 0,
            transition: { duration: 0.4 }
        });
    }, [visible, controls]);

    const handleAClick = () => {
        if (loggedin) {
            localStorage.removeItem('jwtToken');
        }
    };

    return (
        <motion.header
            animate={controls}
            className="bg-custom-blue text-white shadow-md w-[95%] m-auto mt-7 rounded-full fixed top-0 left-0 right-0 z-custom"
        >
            <div className="container mx-auto flex items-center py-4 px-6">
                <a href="/" className="text-2xl pl-8 font-cinzel">FoodPath®</a>
                <nav className="flex-1 font-helvetica">
                    <ul className="flex justify-center gap-10 font-helvetica">
                        <li className="nav-item mr-12">
                            <a href="/faq" className="hover:text-customHoverColor transition duration-300">FAQ</a>
                        </li>
                        <li className="nav-item mr-12">
                            <a href="/model2dpage" className="hover:text-customHoverColor transition duration-300">2D MODEL</a>
                        </li>
                        <li className="nav-item mr-12">
                            <a href="/model3dpage" className="hover:text-customHoverColor transition duration-300">3D MODEL</a>
                        </li>
                        <li className="nav-item mr-12">
                            <a href="/guides" className="hover:text-customHoverColor transition duration-300">
                                GUIDES
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-2 pr-8 font-helvetica">
                    <a href={path} className="hover:text-customHoverColor transition duration-300" onClick={handleAClick}>
                        {login}
                    </a>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;