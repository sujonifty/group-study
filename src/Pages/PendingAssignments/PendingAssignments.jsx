import { useLoaderData } from "react-router-dom";
import PendingCard from "../../components/PendingAssignComponent/PendingCard";
import { useState } from "react";

const PendingAssignments = () => {
    const allSubmited = useLoaderData();
    const [pendingItems, setPendingItems]=useState(allSubmited)
    
    return (
        <div>
            <h1>Pending Assignments</h1>
            <section className="container px-4 mx-auto">
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-base-100 dark:bg-gray-800">
                                        <tr>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Examinee
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Title
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                marks
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Status
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Preview
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Actions
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-base-100 divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            pendingItems.filter(pend => pend.status === 'pending')
                                            .map(item =><PendingCard key={item._id} item={item} pendingItems={pendingItems} setPendingItems={setPendingItems}></PendingCard>
                                                // <tr key={item._id}>
                                                //     <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                //         <div className="flex items-center gap-x-2">
                                                //             <img className="object-cover w-8 h-8 rounded-full" src={item?.examineePhoto} alt="" />
                                                //             <div>
                                                //                 <h2 className="text-sm font-medium text-gray-800 dark:text-white">{item?.examineeName}</h2>
                                                //                 <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{item?.examineeEmail}</p>
                                                //             </div>
                                                //         </div>
                                                //     </td>
                                                //     <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{item?.title}</td>
                                                //     <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{item?.mark}</td>
                                                //     <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                //         <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                //             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                //                 <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                //             </svg>
                                                //             <h2 className="text-sm font-normal">{item?.status}</h2>
                                                //         </div>
                                                //     </td>

                                                //     <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                //         <div className="flex items-center gap-x-6">

                                                //             {/* <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                                //                 Give Marks
                                                //             </button> */}
                                                //             {/* Open the modal using document.getElementById('ID').showModal() method */}
                                                //             <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Give Marks</button>
                                                //             <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                //                 <div className="modal-box">
                                                //                     <h3 className="font-bold text-lg">Hello!</h3>

                                                //                     <section className="max-w-4xl p-6 mx-auto bg-base-100 rounded-md shadow-md dark:bg-gray-800">
                                                //                         <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Submit Your Assignment</h2>

                                                //                         <form onSubmit={handleSubmit}>
                                                //                             <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                                //                                 <div>
                                                //                                     <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Title</label>
                                                //                                     <input id="title" name="title" readOnly defaultValue={title} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                //                                 </div>

                                                //                                 <div>
                                                //                                     <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Description</label>
                                                //                                     <input id="description" name="description" readOnly defaultValue={description} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                //                                 </div>

                                                //                                 <div>
                                                //                                     <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Thumbnail Image</label>
                                                //                                     <input id="photo" name="photo" readOnly defaultValue={photo} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                //                                 </div>

                                                //                                 <div>
                                                //                                     <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Marks</label>
                                                //                                     <input id="mark" name="mark" readOnly defaultValue={mark} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                //                                 </div>
                                                //                                 <div className="form-control">
                                                //                                     <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Assignment Type</label>
                                                //                                     <select name="level" className="select select-bordered w-full ">
                                                //                                         <option readOnly defaultValue={level} selected>{level}</option>
                                                //                                         <option>Easy</option>
                                                //                                         <option>Medium</option>
                                                //                                         <option>Hard</option>
                                                //                                     </select>

                                                //                                 </div>

                                                //                                 <div>
                                                //                                     <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Due Time</label>
                                                //                                     <input id="time" name="time" readOnly defaultValue={time} type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                //                                 </div>

                                                //                                 <div>
                                                //                                     <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Author name</label>
                                                //                                     <input id="authorName" name="authorName" defaultValue={userName} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                //                                 </div>

                                                //                                 <div>
                                                //                                     <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Author Email</label>
                                                //                                     <input id="title" name="authorEmail" defaultValue={userEmail} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                //                                 </div>
                                                //                                 <div>
                                                //                                     <label className="text-gray-700 dark:text-gray-200" htmlFor="username">PDF Link</label>
                                                //                                     <input id="title" name="pdf" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                //                                 </div>

                                                //                                 <div>
                                                //                                     <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Examinee Description</label>
                                                //                                     <input id="examineeDescription" name="examineeDescription" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                //                                 </div>

                                                //                             </div>

                                                //                             <div className="flex justify-center mt-6">
                                                //                                 <input type="submit" value="Submit" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                                                //                             </div>
                                                //                         </form>

                                                //                     </section>
                                                //                     <div className="modal-action">
                                                //                         <form method="dialog">
                                                //                             {/* if there is a button in form, it will close the modal */}
                                                //                             <button className="btn">Close</button>
                                                //                         </form>
                                                //                     </div>
                                                //                 </div>
                                                //             </dialog>
                                                //         </div>
                                                //     </td>
                                                // </tr>

                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default PendingAssignments;