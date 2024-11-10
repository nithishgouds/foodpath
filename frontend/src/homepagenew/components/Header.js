// const Header = () => {
//     return (
//         <header className="bg-custom-blue text-white shadow-md w-[95%] m-auto mt-7 rounded-full">
//             <div className="container mx-auto flex items-center py-4 px-6">

//                 {/* Left-aligned title */}
//                 <h1 className="text-2xl  pl-8 font-marcellus" >FoodPath</h1>

//                 {/* Centered navigation */}
//                 <nav className="flex-1 font-helvetica">
//                     <ul className="flex justify-center gap-10 font-helvetica">
//                         <li className="nav-item mr-12">
//                             <a href="#faq" className="hover:text-customHoverColor transition duration-300">
//                                 FAQ
//                             </a>
//                         </li>
//                         <li className="nav-item mr-12">
//                             <a href="/model2dpage" className="hover:text-customHoverColor transition duration-300">
//                                 2D MODEL
//                             </a>
//                         </li>
//                         <li className="nav-item mr-12">
//                             <a href="/model3dpage" className="hover:text-customHoverColor transition duration-300">
//                                 3D MODEL
//                             </a>
//                         </li>
//                         <li className="nav-item mr-12">
//                             <a href="/guides" className="hover:text-customHoverColor transition duration-300">
//                                 GUIDES
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* Right-aligned login */}
//                 <div className="flex items-center space-x-2 pr-8 font-helvetica">
//                     <a href="/login" className="hover:text-customHoverColor transition duration-300">
//                         LOGIN
//                     </a>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;
const Header = () => {
    return (
        <header className="bg-custom-blue text-white shadow-md w-[95%] m-auto mt-7 rounded-full">
            <div className="container mx-auto flex items-center py-4 px-6">

                {/* Left-aligned title */}
                <h1 className="text-2xl  pl-8 font-marcellus" >FoodPath</h1>

                {/* Centered navigation */}
                <nav className="flex-1 font-helvetica">
                    <ul className="flex justify-center gap-10 font-helvetica">
                        <li className="nav-item mr-12">
                            <a href="#faq" className="hover:text-customHoverColor transition duration-300">
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
                        <li className="nav-item mr-12">
                            <a href="/guides" className="hover:text-customHoverColor transition duration-300">
                                GUIDES
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Right-aligned login */}
                <div className="flex items-center space-x-2 pr-8 font-helvetica">
                    <a href="/login" className="hover:text-customHoverColor transition duration-300">
                        LOGIN
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
