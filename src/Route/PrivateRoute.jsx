import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const location= useLocation();
    const {user, loading} = useContext(authContext);
    if (loading){
        // return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    return <img className="mx-auto" src="https://i.ibb.co/fdBrmKm/loading.gif" alt="loading-gif" />
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to="/login"></Navigate>
        </div>
    );
};
PrivateRoute.propTypes ={
    children: PropTypes.node
}
export default PrivateRoute;