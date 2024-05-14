
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { useContext, useEffect } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { IoMdEye } from "react-icons/io";

const PendingCard = ({ item, pendingItems, setPendingItems }) => {
    const { user } = useContext(authContext)
    const { _id, title, mark, examineeDescription, pdf, status, examineeName, examineeEmail, examineePhoto } = item

    const handleSubmit = (e) => {
        if (user.email !== examineeEmail) {


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
                    // console.log(data);
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

        else {
            Swal.fire({
                // position: "top-end",
                title: 'You can not give mark!',
                text: 'Examinee can not assign mark & feedback ',
                icon: 'warning',
                confirmButtonText: 'Cool',
            })


        }


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
                        <h2 className="text-sm font-medium text-base-content dark:text-white">{examineeName}</h2>
                        <p className="text-xs font-normal text-base-content dark:text-gray-400">{examineeEmail}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-base-content dark:text-gray-300 whitespace-nowrap">{title}</td>
            <td className="px-4 py-4 text-sm text-base-content dark:text-gray-300 whitespace-nowrap">{mark}</td>
            <td className="px-4 py-4 text-sm font-medium text-base-content whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-base-content bg-emerald-100/70 dark:bg-gray-800">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className="text-sm font-normal">{status}</h2>
                </div>
            </td>


            
            <td>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}><IoMdEye /></button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-base-content">
                    <h3 className="font-bold text-lg ">This assignment is submitted by<span className="font-bold text-xl text-[#D2B48C]"> {examineeName}</span>  </h3>
                    <p className="py-4">
                        <iframe src={pdf} width="500" height="450">
                        </iframe>
                    </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">



                {/* The button to open modal */}
                <label htmlFor="my_modal_7" className="btn">Give Mark</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="text-lg "><span className="font-bold text-xl text-[#D2B48C]"> Give feedback for this assignment</span>  </h3>
                        <p className="py-4">
                            <section className="max-w-4xl p-6 mx-auto bg-base-100 rounded-md shadow-md dark:bg-gray-800">
                                <h2 className="text-lg font-semibold text-base-content capitalize dark:text-white">Give Your Feedback</h2>

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
                                            <input id="obtainMark" max={mark} min={0} name="obtainMark" type="number" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
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
                        </p>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
        
            </td>


        </tr>
    );
};
PendingCard.propTypes = {
    item: PropTypes.object,
    pendingItems: PropTypes.object,
    setPendingItems: PropTypes.func,
}
export default PendingCard;