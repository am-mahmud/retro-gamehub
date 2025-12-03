import React, { use, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext/AuthContext';

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router';
import ghLogo from '../../assets/gamehub-logo.png';
import GameLink from '../GameLink/GameLink';
import DarkModeToggle from '../DarkMode/DarkModeToggle';

const Header = () => {
    const { user, signOutUser } = use(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {})
            .catch(error => {
                console.log(error);
            })
    }

    const links = (
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
            <GameLink to="/">Home</GameLink>
            <GameLink to="/allgames">Games</GameLink>
            <GameLink to="/about">About</GameLink>
            <GameLink to="/help">Help</GameLink>

            {user && (
                <GameLink to="/developer">Developer</GameLink>
            )}
        </div>
    );

    return (
        <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b-4 border-black dark:border-cyan-400 shadow-md transition-colors">
            <div className="navbar space-mono max-w-7xl mx-auto px-4">
                
               
                <div className="navbar-start">
                    <div className="lg:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="btn btn-ghost text-3xl p-2 dark:text-white"
                        >
                            {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
                        </button>
                    </div>
                    
                    <Link to='/' className="flex items-center gap-2">
                        <img 
                            className='w-12 h-12 md:w-14 md:h-14 ' 
                            src={ghLogo} 
                            alt="gamehub" 
                        />
                        <span className="hidden md:block text-xl font-bold dark:text-white">GAMEHUB</span>
                    </Link>
                </div>

                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base font-semibold">
                        {links}
                    </ul>
                </div>

              
                <div className="navbar-end gap-3">
                  
                    <DarkModeToggle />

               
                    {!user ? (
                        <Link to='/login'>
                            <button className="px-6 py-2 bg-orange-400 text-white font-bold border-2 border-black 
                                             dark:border-cyan-400 hover:translate-x-0.5 hover:translate-y-0.5
                                             hover:shadow-[3px_3px_0px_black] dark:hover:shadow-[3px_3px_0px_#00D9FF] 
                                             transition-all uppercase text-sm">
                                Get In
                            </button>
                        </Link>
                    ) : (
                        <div className="flex items-center gap-3">
                          
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-square avatar border-2 border-black 
                                                              dark:border-cyan-400 hover:border-orange-400 
                                                              dark:hover:border-orange-400 transition-all p-1">
                                    <div className="w-10 h-10">
                                        <img 
                                            src={user?.photoURL || "https://i.ibb.co.com/chgmm5K6/retro-game-9.jpg"} 
                                            alt="Profile"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-lg 
                                                           bg-white dark:bg-gray-800 border-2 border-black 
                                                           dark:border-cyan-400 w-52">
                                    <li className="menu-title px-4 py-2">
                                        <span className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">Player</span>
                                        <span className="text-sm font-bold truncate dark:text-white">{user?.displayName || "Anonymous"}</span>
                                    </li>
                                    <div className="divider my-1 dark:before:bg-gray-600 dark:after:bg-gray-600"></div>
                                    <li>
                                        <Link to="/profile" className="font-semibold hover:bg-orange-400 hover:text-white dark:text-white">
                                            🎮 My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/updateprofile" className="font-semibold hover:bg-orange-400 hover:text-white dark:text-white">
                                            ⚙️ Settings
                                        </Link>
                                    </li>
                                    <div className="divider my-1 dark:before:bg-gray-600 dark:after:bg-gray-600"></div>
                                    <li>
                                        <button 
                                            onClick={handleSignOut}
                                            className="font-semibold hover:bg-red-500 hover:text-white dark:text-white"
                                        >
                                            🚪 Sign Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        
            {isMenuOpen && (
                <div className="lg:hidden border-t-2 border-black dark:border-cyan-400 bg-white dark:bg-gray-800">
                    <div className="p-4 space-y-2">
                        {links}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;