import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <nav className="p-4 bg-white fixed w-full top-0 z-1">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-black font-bold text-2xl">Your Logo</div>
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-black text-2xl mr-0">
                            {isMenuOpen ? (
                                <i className="fas fa-times"></i>
                            ) : (
                                <i className="fas fa-bars"></i>
                            )}
                        </button>
                    </div>
                    <div
                        className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'
                            } absolute top-0 right-0 bg-white h-auto w-full `}
                    >

                        <ul className="d-block lg:hidden  space-x-4  p-4 ">
                            <li className='d-flex  justify-end'><button onClick={closeMenu} className="text-black text-2xl  mt-4">
                                <i className="fas fa-times "></i>
                            </button></li>
                            <div className='d-flex justify-center'>
                            
                                <ul className=''>
                                    <li className="text-black"></li>
                                    <li className="text-black"><a href="#home">Home</a></li>
                                    <li className="text-black"><a href="#mission">Mission</a></li>
                                    <li className="text-black"><a href="#features">Perks & Benifites</a></li>
                                    <li className="text-black"><a href="#about">About Us</a></li>
                                    <li className="text-black"><a href="#services">Services</a></li>
                                    <li className="text-black"><a href="#founders">Founders</a></li>
                                    <li className="text-black"><a href="#contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </ul>

                    </div>
                    <div className=" hidden md:hidden lg:flex   space-x-4">
                        <ul  className="lg:flex  space-x-4 ">

                            <li className="text-black"><a href="#home">Home</a></li>
                            <li className="text-black"><a href="#mission">Mission</a></li>
                            <li className="text-black"><a href="#features">Perks & Benifites</a></li>
                            <li className="text-black"><a href="#about">About Us</a></li>
                            <li className="text-black"><a href="#services">Services</a></li>
                            <li className="text-black"><a href="#founders">Founders</a></li>
                            <li className="text-black"><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
