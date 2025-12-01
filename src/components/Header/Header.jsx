import React, { use } from 'react';
import ghLogo from '../../assets/gamehub-logo.png'
import { Link } from 'react-router';
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
            <GameLink to='/'>Home</GameLink> |
            <GameLink to='/about'>About</GameLink> | 
            <GameLink to='/review'>Review</GameLink> |
            <GameLink to='/community'>Community</GameLink> 
        </div>

        {
            user && <>
                <div className='flex flex-col md:flex-row md:ml-4 mt-2 md:mt-0 gap-2 md:gap-4'>
                    <GameLink to='/allgames'>All Games</GameLink>
                    <GameLink to='/developer'>Developer</GameLink>
                    {/* <GameLink to='/profile'>Profile</GameLink> */}

                </div>

            </>
        }
    </>

    return (
        <div className="navbar space-mono max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-4xl">
                        <RxHamburgerMenu />
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='w-14 h-14' src={ghLogo} alt="gamehub" />
                </Link>

            </div>


            <div className="navbar-end gap-2">
                <ul className="menu menu-horizontal text-base md:text-xl px-1 hidden lg:flex">
                    {links}
                </ul>


                {!user ? <Link to='/login'> <button className="btn bg-orange-400 hover:border-3 hover:border-black transition-all duration-300 space-mono md:text-xl">Get In</button> </Link> : <div className=' flex items-center gap-1'> <Link to="/profile">
                    <img
                        src={user.photoURL || "https://i.ibb.co.com/chgmm5K6/retro-game-9.jpg"}
                        alt="Profile"
                        className="w-10 h-10 rounded-lg border-2 border-black cursor-pointer"
                    />
                </Link><Link to='/register'><button onClick={handleSignOut} className="btn  rounded hover:bg-[#FFC107] transition-all duration-300 text-base md:text-xl">Get Out</button></Link>

                </div>}

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