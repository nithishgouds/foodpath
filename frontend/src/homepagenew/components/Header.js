
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const [loggedin,setLoggedin]=useState(false);//false for not logged in
    const [login,setLogin]=useState("LOGIN");
    const [path,setPath]=useState("/login");
    const navigate=useNavigate();
    useEffect(() => {
      // Check if token exists and redirect if already logged in
      const token = localStorage.getItem('jwtToken');
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Get the key at index i
        const value = localStorage.getItem(key); // Get the value associated with the key
        console.log(i, `${key}: ${value}`);
      }
      if (token) {
        setLoggedin(true);
        setLogin("LOGOUT");
        setPath("/login");
      }
    }, []);

    const handleAClick = () =>{
        if(loggedin){
            localStorage.removeItem('jwtToken')
        }
    }
    return (
        <header className="bg-custom-blue text-white shadow-md w-[95%] m-auto mt-7 rounded-full">
            <div className="container mx-auto flex items-center py-4 px-6">

                {/* Left-aligned title */}
                <a href="/" className="text-2xl  pl-8 font-marcellus" >FoodPath</a>

                {/* Centered navigation */}
                <nav className="flex-1 font-helvetica">
                    <ul className="flex justify-center gap-10 font-helvetica">
                        <li className="nav-item mr-12">
                            <a href="/faq" className="hover:text-customHoverColor transition duration-300">
                                FAQ
                            </a>
                        </li>
                        <li className="nav-item mr-12">
                            <a href="/model2dpage" className="hover:text-customHoverColor transition duration-300">
                                2D MODEL
                            </a>
                        </li>
                        <li className="nav-item mr-12">
                            <a href="/model3dpage" className="hover:text-customHoverColor transition duration-300">
                                3D MODEL
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Right-aligned login */}
                <div className="flex items-center space-x-2 pr-8 font-helvetica">
                    <a href={path} className="hover:text-customHoverColor transition duration-300" onClick={handleAClick} >
                        {login}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
