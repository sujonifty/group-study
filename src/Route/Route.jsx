import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Assignment from "../Pages/Assignment/Assignment";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PendingAssignments from "../Pages/PendingAssignments/PendingAssignments";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import PrivateRoute from "./PrivateRoute";
import MySubmission from "../Pages/MySubmission/MySubmission";
import CardDetails from "../components/AssignmentComponemts/CardDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/assignments",
                element: <Assignment></Assignment>,
                loader: ()=>fetch('http://localhost:5000/assignments')
            },
            {
                path: "/mySubmission",
                element: <MySubmission></MySubmission>,
                // loader: ({params})=>fetch(`http://localhost:5000/assignments/${params.email}`)
            },
            {
                path: "/cardDetails/:id",
                element: <CardDetails></CardDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/cardDetails/${params.id}`)
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/pendingAssignments",
                element: <PendingAssignments></PendingAssignments>
            },
            {
                path: "/createAssignments",
                element: <PrivateRoute>
                    <CreateAssignments></CreateAssignments>,
                </PrivateRoute>
            },
        ]
    }
]);
export default router