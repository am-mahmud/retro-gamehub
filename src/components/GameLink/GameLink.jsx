import React from 'react';
import { NavLink } from 'react-router';

const GameLink = ({to, className, children}) => {
    return (
<<<<<<< HEAD
        <NavLink to={to} className={({isActive}) => isActive ? "text-[#f35815]" : `${className} font-semibold`}>
=======
        <NavLink to={to} className={({isActive}) => isActive ? "text-[#FFC107]" : `${className} font-semibold`}>
>>>>>>> d7102866814bcdd6f1c1aac96b09406f6250e073
                    {children}
        </NavLink>
    );
};

export default GameLink;