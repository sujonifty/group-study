import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../Provider/AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const Login = () => {
    const { createLogin, error, setError, createGoogleUser } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");

        createLogin(email, password)
            .then(result => {
                console.log(result.user);
                // const user = result.user
                // const userName = result.displayName;
                e.target.reset();
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                if (error.message) {
                    setError('Email or password is wrong')
                }

            })
    }

    const handleGoogleLogin = () => {
        createGoogleUser()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successfully by Google',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center  items-center gap-5 ">
                <div className="text-center w-full p-2  lg:w-3/5 ">
                    <img className="rounded-lg w-full lg:ml-auto lg:w-3/5" src="https://i.ibb.co/X5WJqJr/login.jpg" alt="register" />
                </div>
                <div className="border-2 border-gray-400 card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="p-5 card-body bg-[url('../assets/7.jpg')]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="grow p-2 rounded-lg"
                                placeholder="password" />

                            <span onClick={() => { setShowPassword(!showPassword) }}>
                                {
                                    showPassword ? <IoMdEyeOff /> : <IoMdEye />

                                }
                            </span>

                        </label>
                        {
                            error && <small className="text-red-700">{error}</small>
                        }
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-[#D2B48C] hover:text-white">Login</button>
                        </div>
                        <p>Do not have an account? Please <Link to="/register" className="text-blue-700 font-semibold">Register</Link></p>
                    </form>

                    <div className="divider">OR</div>
                    <div onClick={handleGoogleLogin} className="form-control my-6">
                        <button className="btn bg-orange-500 text-white hover:bg-orange-300 hover:text-gray-800 w-4/5 mx-auto ">Login By Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;