import { useLoaderData } from "react-router-dom";
import PendingCard from "../../components/PendingAssignComponent/PendingCard";
import { useState } from "react";

const PendingAssignments = () => {
    const allSubmitted = useLoaderData();
    const [pendingItems, setPendingItems] = useState(allSubmitted)

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
                                                .map(item => <PendingCard key={item._id} item={item} pendingItems={pendingItems} setPendingItems={setPendingItems}></PendingCard>)
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