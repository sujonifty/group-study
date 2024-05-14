import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../Provider/AuthProvider";


const MySubmission = () => {
    const {user}= useContext(authContext)
    const [myAssignments, setMyAssignments] = useState([]);

    // console.log(user.email)
    useEffect(() => {
       if(user?.email){
        fetch(`https://online-group-study-assignment-server-theta.vercel.app/mySubmission?email=${user?.email}`,{credentials: 'include'})
        // fetch(`https://online-group-study-assignment-server-theta.vercel.app/mySubmission/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log("data",data)
                setMyAssignments(data)
            })
       }
    }, [user])

    // console.log(myAssignments)
    const handleDelete = (_id) => {
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

                fetch(`https://online-group-study-assignment-server-theta.vercel.app/submission/${_id}`, {
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
                            const remains = myAssignments.filter(singleItem => singleItem._id !== _id);
                            setMyAssignments(remains);
                        }
                    })
            }

        });
    }
    
    // console.log(myAssignments);
    return (
        <div>
            <table className="table text-base-content">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Total Marks</th>
                            <th>Obtain Marks</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAssignments.filter(it => it.examineeEmail === user?.email).map(item => <tr key={item._id}>
                                <td>{item.title}</td>
                                <td>{item.mark}</td>
                                <td>
                                    {
                                        item.obtainMark? item.obtainMark : 'None'
                                    }
                                    </td>
                                <td>{item.status}</td>
                                <td>
                                {
                                    item.feedback? item.feedback:'None'
                                }
                                </td>
                                <td>
                                    <NavLink><button onClick={() => handleDelete(item._id)} type="button" className=" btn  flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Delete</button></NavLink>
                                </td>
                            </tr>
                            )
                        }



                    </tbody>
                </table>
        </div>
    );
};

export default MySubmission;