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

    const links = (
        <div className="flex flex-col md:flex-row gap-4">
            <GameLink to="/">Home</GameLink>
            <GameLink to="/about">About</GameLink>
            <GameLink to="/help">Help</GameLink>

            {user && (
                <>
                    <GameLink to="/allgames">Games</GameLink>
                    <GameLink to="/developer">Developer</GameLink>
                </>
            )}
        </div>
    );


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


            <div className="navbar-end">
                <ul className="menu menu-horizontal text-base md:text-xl hidden lg:flex">
                    {links}
                </ul>


                {!user ? <Link to='/login'> <button className="btn bg-[#ff8904] hover:border-2 hover:border-black transition-all duration-300 space-mono md:text-xl ">Get In</button> </Link> : <div className=' flex justify-between items-center gap-1'> <Link to='/register'><button onClick={handleSignOut} className="btn  hover:bg-[#ff8904] transition-all duration-300 text-base md:text-xl">Get Out</button></Link>

                </div>}

            </div>


        </div>
    );
};

export default Header;