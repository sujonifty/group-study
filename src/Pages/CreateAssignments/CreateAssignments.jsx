import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { authContext } from "../../Provider/AuthProvider";

const CreateAssignments = () => {
    const { user, } = useContext(authContext);
    
    const handleAddAssignment = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const photo = e.target.photo.value;
        const mark = e.target.mark.value;
        const level = e.target.level.value;
        const time = e.target.time.value;
        const userName = user?.displayName
        const userEmail = user?.email
        const assignmentInfo = { title, userName, userEmail, photo, mark, time, level, description }
        console.log(level, mark)
        //sent data to the server site
        fetch('http://localhost:5000/addAssignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment added successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Create Your Assignment</h2>

            <form onSubmit={handleAddAssignment}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Title</label>
                        <input id="title" name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Description</label>
                        <input id="description" name="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Thumbnail Image</label>
                        <input id="photo" name="photo" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Marks</label>
                        <input id="mark" name="mark" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div className="form-control">
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Assignment Type</label>
                        <select name="level" className="select select-bordered w-full ">
                            <option disabled selected>Difficulty Level</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>

                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Due Time</label>
                        <input id="time" name="time" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <input type="submit" value="Create Assignment" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                </div>
            </form>
        </section>

    );
};

export default CreateAssignments;