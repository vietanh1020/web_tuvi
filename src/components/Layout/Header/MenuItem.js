import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../common/Icon';

const MenuItem = ({ icon, title, url }) => {
    return (
        <Link
            to={url}
            className="mx-8 text-primary  py-3 text-lg font-medium border-b border-[#913f33] flex items-center gap-3"
        >
            <Icon name={icon} size={24} />
            <span className="font-medium">{title}</span>
        </Link>
    );
};

export default MenuItem;
