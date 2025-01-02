import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-purple-600">
                    <a href="#">Tử Vi Huyền Bí</a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="text-gray-600 hover:text-purple-500">
                        Trang Chủ
                    </a>
                    <a href="#features" className="text-gray-600 hover:text-purple-500">
                        Tính Năng
                    </a>
                    <a href="#cta" className="text-gray-600 hover:text-purple-500">
                        Đăng Ký
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                } fixed top-0 left-0 w-full h-full bg-purple-700 text-white transition-transform duration-500 ease-in-out md:hidden`}
            >
                <div className="flex justify-between items-center p-4">
                    <div className="text-2xl font-bold">
                        <a href="#">Tử Vi Huyền Bí</a>
                    </div>
                    <button onClick={toggleMenu} className="text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col items-center">
                    <a href="#home" className="py-4 text-2xl hover:text-yellow-400" onClick={toggleMenu}>
                        Trang Chủ
                    </a>
                    <a href="#features" className="py-4 text-2xl hover:text-yellow-400" onClick={toggleMenu}>
                        Tính Năng
                    </a>
                    <a href="#cta" className="py-4 text-2xl hover:text-yellow-400" onClick={toggleMenu}>
                        Đăng Ký
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
