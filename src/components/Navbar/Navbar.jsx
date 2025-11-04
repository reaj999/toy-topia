import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {

    const {user, signOutUser} = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log('User signed out successfully');
        })
        .catch((error) => {
            console.error('Error signing out user:', error);
        });
    }


    const activeLinkClass = "relative bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]";
    const inactiveLinkClass = "font-bold relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:transition-all after:duration-300 hover:after:w-full";

    const links = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>Home</NavLink></li>
        <li><NavLink to="/Toys" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>Toys</NavLink></li>
    </>

    return (
        <div className="navbar bg-black text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-black text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="md:ml-4"><img className='h-10 w-32 object-cover' src="../../../src/assets/Toy.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end md:mr-4">
                {user ? 
                <a onClick={handleSignOut} className="btn bg-[#8c52ff] text-white font-bold border-none">Log out</a> : 
                <Link to="/Login" className="btn bg-[#8c52ff] text-white font-bold border-none">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;