import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">MyLogo</div>

                {/* Hamburger Menu - Mobile */}
                <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                        />
                    </svg>
                </button>

                {/* Menu Items */}
                <ul
                    className={`md:flex md:items-center md:space-x-8 absolute md:static bg-blue-500 w-full md:w-auto left-0 top-16 md:top-auto md:opacity-100 ${
                        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } transition-all duration-300`}
                >
                    <li className="text-white py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent">
                        <a href="#home">Home</a>
                    </li>
                    <li className="text-white py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent">
                        <a href="#about">About</a>
                    </li>
                    <li className="text-white py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent">
                        <a href="#services">Services</a>
                    </li>
                    <li className="text-white py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
