import React, { useState } from 'react';
import MenuItem from './MenuItem';

const menu = [
    {
        title: 'Trang chủ',
        url: '/',
        icon: 'Home',
    },

    {
        title: 'Lập lá số',
        url: '/',
        icon: 'FileText',
    },

    {
        title: ' Danh sách lá số đã lưu',
        url: '/',
        icon: 'Scroll',
    },
    {
        title: 'Mua gói VIP',
        url: '/',
        icon: 'Tickets',
    },

    {
        title: 'Điều khoản chính sách',
        url: '/',
        icon: 'Flag',
    },
    {
        title: 'Giới thiệu',
        url: '/',
        icon: 'Info',
    },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-[#760F00] shadow-md fixed w-full z-50 top-0 left-0">
            <div className="px-2 flex justify-between items-center">
                <div className="">
                    <img src="asset/images/logo-mobile.png" height={60}></img>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="">
                        Trang Chủ
                    </a>
                    <a href="#features" className="">
                        Tính Năng
                    </a>
                    <a href="#cta" className="">
                        Đăng Ký
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden  focus:outline-none mr-2" onClick={toggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                } fixed top-0 left-0 w-full h-full bg-[#760F00]  transition-transform duration-500 ease-in-out md:hidden`}
            >
                <div
                    className="flex justify-between
                 border-b border-[#f5d556] items-center pl-2 pr-4"
                >
                    <div className="text-2xl font-bold">
                        <a href="#">
                            <img src="asset/images/logo-mobile.png"></img>
                        </a>
                    </div>
                    <button onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
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
                <nav className="">
                    {menu.map((item) => (
                        <MenuItem {...item} />
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
