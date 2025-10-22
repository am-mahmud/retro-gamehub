import React from 'react';
import ghLogo from '../../assets/gamehub-logo.png'
import { NavLink } from 'react-router';
import { RxHamburgerMenu } from "react-icons/rx";
import GameLink from '../GameLink/GameLink';


const Header = () => {

    const links = < >
        <div className='flex flex-col md:flex-row gap-4'>
            <GameLink to='/'>Home</GameLink>
            <GameLink to='/about'>About</GameLink>
            <GameLink to='/developer'>Developer</GameLink>
        </div>
    </>

    return (
        <div className="navbar bg-base-100 border-b-4 space-mono">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <RxHamburgerMenu />
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-14 h-14' src={ghLogo} alt="gamehub" />
            </div>


            <div className="navbar-end gap-2">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {links}
                </ul>

                <button className="btn border-4 border-black">Signup</button>
            </div>

            {/* <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
                    <li><a>Profile</a></li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div> */}


        </div>
    );
};

export default Header;