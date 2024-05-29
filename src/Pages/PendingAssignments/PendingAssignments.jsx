import { useLoaderData } from "react-router-dom";
import PendingCard from "../../components/PendingAssignComponent/PendingCard";
import { useContext, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";

const PendingAssignments = () => {
    const {user}=useContext(authContext);
    const allSubmitted = useLoaderData();
    // console.log(allSubmitted)
    const [pendingItems, setPendingItems] = useState(allSubmitted || []);
    // const [pendingItems, setPendingItems] = useState([])

    // useEffect(() => {
    //     if(user?.email){
    //      fetch(`https://online-group-study-assignment-server-theta.vercel.app/pendingAssignments?email=${user?.email}`,{credentials: 'include'})
         
    //          .then(res => res.json())
    //          .then(data => {
    //              // console.log("data",data)
    //              setPendingItems(data)
    //          })
    //     }
    //  }, [user])

    return (
        <div className="my-6 md:my-16">
            <h1 className="text-3xl md:text-5xl text-center my-6 md:my-10 font-semibold text-base-content">Pending Assignments Section</h1>
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