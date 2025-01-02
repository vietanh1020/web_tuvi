import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Tử Vi Huyền Bí. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
