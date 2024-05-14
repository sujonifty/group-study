import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigation} from "react-router-dom";

const Update = () => {
    const navigate =useNavigation();
    const { user } = useContext(authContext);
    const item =useLoaderData();
    // const { _id, userEmail,userName, title, photo, mark, time, level, description } = item;
const {_id}=item;
    //update section
    const handleUpdate = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        console.log({title})
        const description = e.target.description.value;
        const photo = e.target.photo.value;
        const mark = e.target.mark.value;
        const level = e.target.level.value;
        const time = e.target.time.value;
        const authorName = e.target.authorName.value;
        const authorEmail = e.target.authorEmail.value;
        const editorName = user?.displayName
        const editorEmail = user?.email
        const editorPhoto = user?.photoURL
        const updateInfo = { authorName, authorEmail, editorName, editorEmail,editorPhoto, title, photo, mark, time, level, description }
        console.log(updateInfo)
        //sent data to the server site
        fetch(`https://online-group-study-assignment-server-theta.vercel.app/updateAssignment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    navigate(-1)
                }
                
            })
            
          
    }
    return (
        <section className="bg-base-100 text-base-content max-w-4xl p-6 mx-auto  rounded-md shadow-md ">
            <h2 className="text-lg font-semibold  capitalize ">Update Assignment</h2>

            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label  htmlFor="username">Title</label>
                        <input id="title" name="title" defaultValue={item.title} type="text" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label  htmlFor="emailAddress">Description</label>
                        <input id="description" name="description" defaultValue={item.description} type="text" className="block w-full px-4 py-2 mt-2  bg-base-100 text-base-content border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label  htmlFor="password">Thumbnail Image</label>
                        <input id="photo" name="photo" defaultValue={item.photo} type="text" className="block w-full px-4 py-2 mt-2  bg-base-100 text-base-content border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label  htmlFor="passwordConfirmation">Marks</label>
                        <input id="mark" name="mark" defaultValue={item.mark} type="text" className="block w-full px-4 py-2 mt-2  bg-base-100 text-base-content border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div className="form-control">
                        <label  htmlFor="passwordConfirmation">Assignment Type</label>
                        <select name="level" className="select select-bordered w-full ">
                            <option defaultValue={item.level} selected>{item.level}</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>

                    </div>

                    <div>
                        <label  htmlFor="passwordConfirmation">Due Time</label>
                        <input id="time" name="time" defaultValue={item.time} type="date" className="block w-full px-4 py-2 mt-2  bg-base-100 text-base-content border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label  htmlFor="emailAddress">Author name</label>
                        <input id="authorName" name="authorName" defaultValue={item.userName} readOnly type="text" className="block w-full px-4 py-2 mt-2  bg-base-100 text-base-content border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label  htmlFor="username">Author Email</label>
                        <input id="" name="authorEmail" defaultValue={item.userEmail} readOnly type="text" className="block w-full px-4 py-2 mt-2  bg-base-100 text-base-content border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                </div>

                <div className="flex justify-center mt-6">
                    <input type="submit" value="Update Assignment" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                </div>
            </form>
        </section>
    );
};

export default Update;