import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AssignmentCard from "../../components/Assignment/AssignmentCard";
import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';

const Assignment = () => {
    // const assign = useLoaderData();
    const [assignments, setAssignments] = useState([]);
    const [cardItem, setCardItem] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(30);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetch(`https://online-group-study-assignment-server-theta.vercel.app/assignments?page=${currentPage}&&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [currentPage, itemsPerPage]);

    const pageNumber = Math.ceil(cardItem / itemsPerPage);
    const allPages = [...Array(pageNumber).keys()];

    useEffect(() => {
        fetch('https://online-group-study-assignment-server-theta.vercel.app/assignmentNumber')
            .then(res => res.json())
            .then(data => setCardItem(data.count))
    }, [])
    console.log(cardItem)
    const handleItemPerPage = (e) => {
        const setValue = parseInt(e.target.value);
        setItemsPerPage(setValue);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < allPages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <div>
            <h1>Assignments</h1>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Easy</Tab>
                        <Tab>Medium</Tab>
                        <Tab>Hard</Tab>
                    </TabList>
                    <TabPanel>
                        <div>
                            <div className='bg-base-100 grid grid-cols-1 gap-5 mt-10 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {assignments.filter(item => item.level === 'Easy')
                                    .map(assignment => (
                                        <AssignmentCard key={assignment._id} assignment={assignment} assignments={assignments} setAssignments={setAssignments}></AssignmentCard>
                                    ))}
                            </div>
                            <div className="space-x-5">
                                <button onClick={handlePrevPage} className="btn">Prev</button>
                                {
                                    allPages.map(page => <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={currentPage === page ? 'selected btn bg-orange-500' : undefined}>{page}</button>)
                                }
                                <button onClick={handleNextPage} className="btn">Next</button>
                                <select onChange={handleItemPerPage} name="" id="" value={itemsPerPage}>
                                    <option value="5">5</option>
                                    <option value="12">10</option>
                                    <option value="15">20</option>
                                    <option value="18">30</option>
                                    <option value="21">40</option>
                                </select>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='bg-base-100 grid grid-cols-1 gap-5 mt-10 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {assignments.filter(item => item.level === 'Medium')
                                .map(assignment => (
                                    <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>
                                ))}
                        </div>
                        <div className="space-x-5">
                                <button onClick={handlePrevPage} className="btn">Prev</button>
                                {
                                    allPages.map(page => <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={currentPage === page ? 'selected btn bg-orange-500' : undefined}>{page}</button>)
                                }
                                <button onClick={handleNextPage} className="btn">Next</button>
                                <select onChange={handleItemPerPage} name="" id="" value={itemsPerPage}>
                                    <option value="5">5</option>
                                    <option value="12">10</option>
                                    <option value="15">20</option>
                                    <option value="18">30</option>
                                    <option value="21">40</option>
                                </select>
                            </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='bg-base-100 grid grid-cols-1 gap-5 mt-10 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {assignments.filter(item => item.level === 'Hard')
                                .map(assignment => (
                                    <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>
                                ))}
                        </div>
                        <div className="space-x-5">
                                <button onClick={handlePrevPage} className="btn">Prev</button>
                                {
                                    allPages.map(page => <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={currentPage === page ? 'selected btn bg-orange-500' : undefined}>{page}</button>)
                                }
                                <button onClick={handleNextPage} className="btn">Next</button>
                                <select onChange={handleItemPerPage} name="" id="" value={itemsPerPage}>
                                    <option value="5">5</option>
                                    <option value="12">10</option>
                                    <option value="15">20</option>
                                    <option value="18">30</option>
                                    <option value="21">40</option>
                                </select>
                            </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};
Assignment.propTypes = {
    assignment: PropTypes.object,
    assignments: PropTypes.object,
    AssignmentCard: PropTypes.object
}
export default Assignment;