import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import DarkTheme from './DarkTheme/DarkTheme';




const Navbar = () => {
    const { user, createLogOut } = useContext(authContext);
    const handleLogOut = () => {
        createLogOut()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'LogOut successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    // console.log(user)
    
    const links2 = <>
        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/mySubmission">My submission </NavLink>
        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/profile">My Profile </NavLink>
        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} >
            <button onClick={handleLogOut}>Logout</button>
        </NavLink>
    </>
   

    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
                            {
                                user ?
                                    <>
                                        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/">Home</NavLink>
                                        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/assignments">Assignments</NavLink>
                                        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/createAssignments">Create Assignments</NavLink>
                                        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/pendingAssignments">Pending Assignments</NavLink>
                                    </>
                                    :
                                    <>
                                        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/">Home</NavLink>
                                        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/assignments">Assignments</NavLink>
                                        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/register">Register</NavLink>
                                        <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/login">Login</NavLink>
                                    </>
                            }
                            

                        </ul>
                    </div>
                    <Link to="/">
                        <img src="https://i.ibb.co/8xnSHfV/logo.png" className='w-28 rounded-lg' alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal space-x-4 px-1">

                        {
                            user ?
                                <>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/">Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/assignments">Assignments</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/createAssignments">Create Assignments</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/pendingAssignments">Pending Assignments</NavLink>
                                </>
                                :
                                <>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/">Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/assignments">Assignments</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/register">Register</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-orange-400 " : "btn bg-base-300"} to="/login">Login</NavLink>
                                </>
                        }


                    </ul>
                </div>
                
                {
                    user ?
                        <div className="navbar-end">
                            <DarkTheme></DarkTheme>
                            <div className="dropdown dropdown-align ml-3 dropdown-end">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img src={user.photoURL} title={user.displayName} className="object-cover w-full h-full" alt="userImg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content space-y-2 z-20 menu p-2 shadow bg-base-100 rounded-box ">
                                    {links2}
                                </ul>
                            </div>
                        </div>
                        : 
                        <DarkTheme></DarkTheme>
                }
            </div>
        </div>
    );
};

export default Navbar;