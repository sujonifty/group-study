import { useLoaderData } from "react-router-dom";


const PendingAssignments = () => {
    const pendingItems = useLoaderData();
    // console.log(pendingItems)
    return (
        <div>
            <h1>Pending Assignments</h1>
            <section className="container px-4 mx-auto">
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
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
                                                Actions
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            pendingItems.map(item =>
                                                <tr key={item._id}>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <div className="flex items-center gap-x-2">
                                                            <img className="object-cover w-8 h-8 rounded-full" src={item?.examineePhoto} alt="" />
                                                            <div>
                                                                <h2 className="text-sm font-medium text-gray-800 dark:text-white">{item?.examineeName}</h2>
                                                                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{item?.examineeEmail}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{item?.title}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{item?.mark}</td>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <h2 className="text-sm font-normal">{item?.status}</h2>
                                                        </div>
                                                    </td>

                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">

                                                            <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                                                Give Marks
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>

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