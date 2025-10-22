import React, { use } from 'react';
import ghLogo from '../../assets/gamehub-logo.png'
import { Link, NavLink } from 'react-router';
import { RxHamburgerMenu } from "react-icons/rx";
import GameLink from '../GameLink/GameLink';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';


const Header = () => {

    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {

            })
            .catch(error => {
                console.log(error);

            })
    }

    const links = < >
        <div className='flex flex-col md:flex-row gap-4'>
            <GameLink to='/'>Home</GameLink>
            <GameLink to='/about'>About</GameLink>
        </div>

        {
            user && <>
                <div className='flex ml-4 gap-4'>
                    <GameLink to='/allgames'>All Games</GameLink>                
                    <GameLink to='/developer'>Developer</GameLink>
                    <GameLink to='/profile'>Profile</GameLink>

                </div>

            </>
        }
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


                {!user ? <Link to='/login'> <button className="btn border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none">Get In</button> </Link> : <Link to='/register'><button onClick={handleSignOut} className="btn border-4 border-black rounded hover:bg-[#FFC107] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-none">Get Out</button></Link>}

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