
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { useContext, useEffect } from "react";
import { authContext } from "../../Provider/AuthProvider";

const PendingCard = ({ item, pendingItems, setPendingItems }) => {
    const { user } = useContext(authContext)
    const { _id, title, mark, examineeDescription, pdf, status, examineeName, examineeEmail, examineePhoto } = item

    const handleSubmit = (e) => {

        e.preventDefault();
        const obtainMark = e.target.obtainMark.value;
        const feedback = e.target.feedback.value;
        const status = "completed"
        const info = { obtainMark, feedback, status }

        // console.log(info);
        fetch(`https://online-group-study-assignment-server-theta.vercel.app/giveMark/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assign mark & feedback Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    const remains = pendingItems.filter(singleItem => singleItem._id !== _id);
                    setPendingItems(remains);
                }
            })





    }


    useEffect(() => {
        fetch('https://online-group-study-assignment-server-theta.vercel.app/pendingAssignments')
            .then(res => res.json())
            .then(data => {
                // console.log("data",data)
                setPendingItems(data)
            })
    }, [user])
    // console.log(pdf)
    return (
        <tr>
            <td className="px-4 py-4 text-sm text-base-content dark:text-gray-300 whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <img className="object-cover w-8 h-8 rounded-full" src={examineePhoto} alt="" />
                    <div>
                        <h2 className="text-sm font-medium text-gray-800 dark:text-white">{examineeName}</h2>
                        <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{examineeEmail}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-base-content dark:text-gray-300 whitespace-nowrap">{title}</td>
            <td className="px-4 py-4 text-sm text-base-content dark:text-gray-300 whitespace-nowrap">{mark}</td>
            <td className="px-4 py-4 text-sm font-medium text-base-content whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-gray-800 bg-emerald-100/70 dark:bg-gray-800">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className="text-sm font-normal">{status}</h2>
                </div>
            </td>



            <td className="px-4 py-4 text-sm whitespace-nowrap">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>preview</button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        {/* <iframe src={pdf} width="500" height="450">
                        </iframe> */}
                        <embed
                            className="w-full min-h-[400px]"
                            src={pdf}
                        ></embed>
                        <p>{examineeDescription}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </td>


            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>
                        Give Mark
                    </button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Give feedback for this assignment</h3>

                            <section className="max-w-4xl p-6 mx-auto bg-base-100 rounded-md shadow-md dark:bg-gray-800">
                                <h2 className="text-lg font-semibold text-base-content capitalize dark:text-white">Submit Your Assignment</h2>

                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                        <div>
                                            <label className="text-base-content dark:text-gray-200" htmlFor="username">PDF Link</label>
                                            <input id="title" name="pdf" readOnly defaultValue={pdf} type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div>
                                            <label className="text-base-content dark:text-gray-200" htmlFor="emailAddress">Examinee Description</label>
                                            <input id="examineeDescription" readOnly defaultValue={examineeDescription} name="examineeDescription" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                        <div>
                                            <label className="text-base-content dark:text-gray-200" htmlFor="emailAddress">Give Marks</label>
                                            <input id="obtainMark" name="obtainMark" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div>
                                            <label className="text-base-content dark:text-gray-200" htmlFor="password">Give Feedback</label>
                                            <input id="feedback" name="feedback" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <input type="submit" value="Submit" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                                    </div>
                                </form>

                            </section>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </td>
            {/* {
                (examineeEmail===user.email)?
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-x-6">
                        <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Give Marks</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Give feedback for this assignment</h3>

                                <section className="max-w-4xl p-6 mx-auto bg-base-100 rounded-md shadow-md dark:bg-gray-800">
                                    <h2 className="text-lg font-semibold text-base-content capitalize dark:text-white">Submit Your Assignment</h2>

                                    <form onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                            <div>
                                                <label className="text-base-content dark:text-gray-200" htmlFor="username">PDF Link</label>
                                                <input id="title" name="pdf" readOnly defaultValue={pdf} type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                            </div>

                                            <div>
                                                <label className="text-base-content dark:text-gray-200" htmlFor="emailAddress">Examinee Description</label>
                                                <input id="examineeDescription" readOnly defaultValue={examineeDescription} name="examineeDescription" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="text-base-content dark:text-gray-200" htmlFor="emailAddress">Give Marks</label>
                                                <input id="obtainMark" name="obtainMark" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                            </div>

                                            <div>
                                                <label className="text-base-content dark:text-gray-200" htmlFor="password">Give Feedback</label>
                                                <input id="feedback" name="feedback" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                            </div>

                                        </div>

                                        <div className="flex justify-center mt-6">
                                            <input type="submit" value="Submit" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                                        </div>
                                    </form>

                                </section>
                                <div className="modal-action">
                                    <form method="dialog">
                                        
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </td>
                :
                Swal.fire({
                    title: "You are a Examinee!",
                    text: "You can't give marks!",
                    imageUrl: "https://i.ibb.co/jvhQF0Y/opps.webp",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                })
            } */}

        </tr>
    );
};
PendingCard.propTypes = {
    item: PropTypes.object,
    pendingItems: PropTypes.object,
    setPendingItems: PropTypes.func,
}
export default PendingCard;