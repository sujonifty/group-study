import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';




const Navbar = () => {
    const links = <>
        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-500 text-white font-bold" : "btn hover:bg-orange-300 hover:text-white font-bold"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-500 text-white font-bold" : "btn hover:bg-orange-300 hover:text-white font-bold"} to="/assignments">Assignments</NavLink>
        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-500 text-white font-bold" : "btn hover:bg-orange-300 hover:text-white font-bold"} to="/register">Register</NavLink>
        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-500 text-white font-bold" : "btn hover:bg-orange-300 hover:text-white font-bold"} to="/login">Login</NavLink>
    </>
    const links2 = <>
        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-500 text-white font-bold" : "btn hover:bg-orange-300 hover:text-white font-bold"} to="/myAttempted">MyAttempted </NavLink>
        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-500 text-white font-bold" : "btn hover:bg-orange-300 hover:text-white font-bold"} to="/logout">Logout</NavLink>
    </>
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="space-y-4 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            {links2}
                            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                                </div>
                            </button>

                        </ul>
                    </div>
                    <Link to="/">
                        <img src="https://i.ibb.co/8xnSHfV/logo.png" className='w-32 rounded-lg' alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal space-x-4 px-1">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end">


                    <div className="dropdown dropdown-align dropdown-end">
                        <div tabIndex={0} role="button" className=" m-1">
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                            {links2}
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;