import { useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CardDetails = () => {
    const cardInfo = useLoaderData();
    const { user } = useContext(authContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const pdf = e.target.pdf.value;
        const description = e.target.description.value;
        const userName = user?.displayName
        const userEmail = user?.email
        const status = "pending"
        const info = { userName, userEmail, pdf, description,status }
        //sent data to the server site
        console.log(info);
        fetch('http://localhost:5000/submittedAssignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment submitted successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    // console.log(cardInfo)
    const { _id, title, userName, userEmail, photo, mark, time, level, description } = cardInfo;

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Assignment Tasks</h1>

                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={photo} alt="" />

                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <p className="text-sm text-blue-500 uppercase">{title}</p>

                        <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                            {title}
                        </a>

                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            {description}
                        </p>

                        <p className=" mt-2 ">Level: {level}</p>
                        <p className=" mt-2 ">Assignment marks: {mark}</p>
                        <p className=" mt-2 ">Dead line: {time}</p>

                        <div className="flex items-center mt-6">
                            <img className="object-cover object-center w-10 h-10 rounded-full" src={user?.photoURL} alt="" />

                            <div className="mx-4">
                                <h1 className="text-sm text-gray-700 dark:text-gray-200">{userName}</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{userEmail}</p>
                            </div>
                        </div>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Take assignment</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Create Your Assignment</h2>

                                    <form onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">PDF Link</label>
                                                <input id="title" name="pdf" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                            </div>

                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Description</label>
                                                <input id="description" name="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                            </div>
                                        </div>

                                        <div className="flex justify-center mt-6">
                                            <input type="submit" value="Submit" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                                        </div>
                                    </form>
                                </section>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </section>
    );
};
CardDetails.propTypes = {
    cardInfo: PropTypes.object
}
export default CardDetails;