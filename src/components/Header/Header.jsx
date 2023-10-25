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
                            
                                <ul>
                                    <li className="text-black"></li>
                                    <li className="text-black">Home</li>
                                    <li className="text-black">Mission</li>
                                    <li className="text-black">Perks & Benifites</li>
                                    <li className="text-black">About Us</li>
                                    <li className="text-black">Services</li>
                                    <li className="text-black">Founders</li>
                                    <li className="text-black">Contact Us</li>
                                </ul>
                            </div>
                        </ul>

                    </div>
                    <div className=" hidden md:hidden lg:flex   space-x-4">
                        <ul className="lg:flex  space-x-4">

                            <li className="text-black">Home</li>
                            <li className="text-black">Mission</li>
                            <li className="text-black">Perks & Benifites</li>
                            <li className="text-black">About Us</li>
                            <li className="text-black">Services</li>
                            <li className="text-black">Founders</li>
                            <li className="text-black">Contact Us</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
