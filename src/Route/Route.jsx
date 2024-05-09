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
                element: <Assignment></Assignment>
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