import React from 'react';
import { NavLink } from 'react-router';

const GameLink = ({to, className, children}) => {
    return (
        <NavLink to={to} className={({isActive}) => isActive ? "text-[#f35815]" : `${className} font-semibold`}>
                    {children}
        </NavLink>
    );
};

export default GameLink;