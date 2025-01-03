import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ icon, title, url }) => {
    return (
        <Link to={url} className="mx-4 text-primary  py-3 text-lg font-medium border-b border-[#913f33] block">
            <span className="text-xl mr-3">{icon}</span>
            <span className="font-medium">{title}</span>
        </Link>
    );
};

export default MenuItem;
