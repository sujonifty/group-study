import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { authContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const AssignmentCard = ({ assignment, assignments, setAssignments }) => {
    const { _id, userEmail, userName, title, photo, mark, time, level, description } = assignment;
    const { user } = useContext(authContext);

    //delete section
    const handleDelete = (_id) => {
        if (userEmail === user?.email) {
            Swal.fire({
                title: "Are you sure?",
                text: "Once deleted, this item cannot be recovered",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    fetch(`https://online-group-study-assignment-server-theta.vercel.app/assignments/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    imageUrl: "https://i.ibb.co/9WHSb7Y/delete.jpg",
                                    title: "Deleted!",
                                    text: "Your Assignment has been deleted.",
                                    imageWidth: 400,
                                    imageHeight: 200,
                                    icon: "success",
                                    imageAlt: "Custom image"
                                });
                                const remains = assignments.filter(singleItem => singleItem._id !== _id);
                                setAssignments(remains);
                            }
                        })
                }

            });
        }
        
        else {
            Swal.fire({
                title: "You can't delete!",
                text: "Only author can delete it",
                imageUrl: "https://i.ibb.co/jvhQF0Y/opps.webp",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
        }
    }

    // console.log(assignment)
    return (
        <div className="bg-base-100 w-full max-w-sm overflow-hidden  rounded-lg shadow-2xl ">
            <img className="object-cover object-center w-full h-56" src={photo} alt="avatar" />
            <div className="flex items-center px-6 py-3 bg-gray-900">
                <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
            </div>
            

            <div className="px-6 py-4 space-y-5  bg-base-100">
                <h1 className="text-xl font-semibold text-base-content ">Tasks</h1>

                <p className="py-2  text-base-content">{description}</p>

                <div className="flex justify-between rounded-lg ">
                    <div>
                        <div className="flex items-center mt-4 text-base-content ">
                            <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 11H10V13H14V11Z" /><path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                            </svg>
                            <h1 className="px-2 text-sm">{level}</h1>
                        </div>

                        <div className="flex items-center mt-4 text-base-content">
                            <h1 className="px-2 text-sm">Marks: {mark}</h1>
                        </div>

                        <div className="flex items-center mt-4  text-base-content">
                            <h1 className="px-2 text-sm">Due Time: {time}</h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly space-y-4 items-center">
                        <Link to={`/update/${_id}`}>
                            <button className="btn  bg-base-400 text-base-content">update</button>
                        </Link>

                        <Link>
                            <button onClick={() => handleDelete(_id)} type="button" className=" btn  bg-base-400 text-base-content  ">Delete</button>
                        </Link>

                    </div>
                </div>

            </div>

            <div className="text-center mt-5">
                <Link to={`/cardDetails/${_id}`}>
                    <button className="btn btn-wide  bg-base-400 text-base-content">View Details</button>
                </Link>
            </div>
        </div>

    );
};
AssignmentCard.propTypes = {
    assignment: PropTypes.object,
    assignments: PropTypes.object,
    setAssignments: PropTypes.func,
}

export default AssignmentCard;