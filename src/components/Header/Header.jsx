import React, { useState } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';




// import logo from '../../logo.svg'
function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div>
            <div className='w-screen'>
                <header id='header' className='text-white flex justify-between items-center  fixed-top p-2'>
                    <div className=' font-serif hover:scale-95'>
                        <h1 className="text-xl ml-4"> <span id='malabar'>Malabar</span><span id='stars'> Stars Food Stuff</span></h1>
                    </div>

                    <div className="lg:hidden">
                        <button id="mobileMenuButton" className="text-black" onClick={toggleMenu}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div className={` lg:block ${menuOpen ? 'block' : 'hidden'} `}>
                        {!menuOpen ?
                            <nav className='text-white font-serif space-x-4 mr-4'>
                                <a href="#" className="hover:underline">Home</a>
                                <a href="#" className="hover:underline">About</a>
                                <a href="#" className="hover:underline">Services</a>
                                <a href="#" className="hover:underline">Contact</a>
                            </nav>
                            :
                            <div className=''>
                                <nav className='text-white font-serif space-x-4'>
                                    <ul>
                                        <li>
                                            <a href="#" className="hover:underline">Home</a></li>
                                        <li> <a href="#" className="hover:underline">About</a></li>
                                        <li>  <a href="#" className="hover:underline">Services</a></li>
                                        <li> <a href="#" className="hover:underline">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>

                        }
                    </div>
                </header>
            </div>

        </div>

        
    )
}

export default Header
