import { useContext, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../Firebase/Firebase.config";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser, error, setError, setUser } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError("");

        if (password.length < 6) {
            setError('password must be 6 characters');
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setError('password must be an Uppercase & LowerCase letter');
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset();
                // update profile 
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,

                })
                    .then(() => {
                        setUser((prevUser) => {
                            return { ...prevUser, displayName: name, photoURL: photo, email: email }
                        })
                        console.log("profile updated");
                    })
                    .catch(error => {
                        setError(error.message);
                    })
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
            <div className="text-center lg:text-left w-full p-2  lg:w-3/5 ">
                <img className="rounded-lg" src="https://i.ibb.co/V9ZLRJX/register.jpg" alt="register" />
            </div>
                <div className="card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="rounded-xl border-2 border-gray-400 p-5 card-body bg-[url('../assets/7.jpg')]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name="photo" type="text" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
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
                            <button className="btn bg-orange-500 text-white hover:bg-orange-300 hover:text-gray-800">Register</button>
                        </div>
                        <p>Already have an account? Please <Link to="/login" className="text-orange-700 font-semibold">Login</Link></p>
                    </form>
                </div>
            </div>
    );
};

export default Register;