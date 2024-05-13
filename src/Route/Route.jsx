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
import Update from "../components/AssignmentComponemts/Update";

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
                // loader: () => fetch('https://online-group-study-assignment-server-theta.vercel.app//assignments')
            },
            {
                path: "/mySubmission",
                element: <PrivateRoute>
                    <MySubmission></MySubmission>
                </PrivateRoute>,
            },
            {
                path: "/cardDetails/:id",
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`https://online-group-study-assignment-server-theta.vercel.app//cardDetails/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://online-group-study-assignment-server-theta.vercel.app//update/${params.id}`)
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
                element: <PrivateRoute>
                    <PendingAssignments></PendingAssignments>
                </PrivateRoute>,
                loader: () => fetch('https://online-group-study-assignment-server-theta.vercel.app//pendingAssignments')
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