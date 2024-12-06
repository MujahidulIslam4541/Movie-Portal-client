/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({privet}) => {
    
    const {user}=useContext(AuthContext)
    if(user && user?.email){
        return privet;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;