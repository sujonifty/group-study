import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AssignmentCard from "../../components/Assignment/AssignmentCard";
import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';

const Assignment = () => {
    const assign = useLoaderData();
    const [assignments, setAssignments]=useState(assign);
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
                    <div className='bg-base-100 grid grid-cols-1 gap-5 mt-10 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {assignments.filter(item => item.level === 'Easy')
                            .map(assignment => (
                                <AssignmentCard key={assignment._id} assignment={assignment} assignments={assignments} setAssignments={setAssignments}></AssignmentCard>
                            ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='bg-base-100 grid grid-cols-1 gap-5 mt-10 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {assignments.filter(item => item.level === 'Medium')
                            .map(assignment => (
                                <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>
                            ))}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='bg-base-100 grid grid-cols-1 gap-5 mt-10 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {assignments.filter(item => item.level === 'Hard')
                            .map(assignment => (
                                <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>
                            ))}
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